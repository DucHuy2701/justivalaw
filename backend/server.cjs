const express = require("express");
const sqlite3 = require("sqlite3").verbose();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const cors = require("cors");
const multer = require("multer");
const path = require("path");
const fs = require("fs");
const axios = require("axios");
const PORT = process.env.PORT || 5001;


const app = express();
app.use(cors());
app.use(express.json());

// Cấu hình multer để upload ảnh
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const uploadDir = "backend/uploads/";
    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir);
    }
    cb(null, uploadDir);
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, uniqueSuffix + path.extname(file.originalname));
  },
});
const upload = multer({ storage });

// Phục vụ file tĩnh từ thư mục uploads
app.use("/uploads", express.static("uploads"));

// Đảm bảo thư mục Database tồn tại trước khi kết nối SQLite
const dbDir = path.join(__dirname, "Database");
if (!fs.existsSync(dbDir)) {
  fs.mkdirSync(dbDir, { recursive: true });
}

// Kết nối tới file SQLite
const db = new sqlite3.Database(path.join(dbDir, "users.db"), (err) => {
  if (err) {
    console.error("Lỗi khi kết nối cơ sở dữ liệu:", err.message);
  } else {
    console.log("Kết nối thành công tới users.db");
  }
});

// Tạo bảng users và events (loại bỏ AUTOINCREMENT)
db.serialize(() => {
  db.run(
    `CREATE TABLE IF NOT EXISTS users (
      username TEXT PRIMARY KEY,
      password TEXT
    )`,
    (err) => {
      if (err) {
        console.error("Lỗi khi tạo bảng users:", err.message);
      } else {
        console.log("Bảng users đã sẵn sàng");
      }
    }
  );

  db.run(
    `CREATE TABLE IF NOT EXISTS events (
      id INTEGER PRIMARY KEY,
      title TEXT NOT NULL,
      content TEXT NOT NULL,
      images TEXT NOT NULL,
      username TEXT NOT NULL,
      FOREIGN KEY (username) REFERENCES users(username)
    )`,
    (err) => {
      if (err) {
        console.error("Lỗi khi tạo bảng events:", err.message);
      } else {
        console.log("Bảng events đã sẵn sàng");
      }
    }
  );
});

const SECRET_KEY = "your-secret-key";

// Middleware xác thực JWT
const authenticateJWT = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    return res.status(401).json({ error: "Thiếu token xác thực" });
  }

  const token = authHeader.split(" ")[1];
  jwt.verify(token, SECRET_KEY, (err, user) => {
    if (err) {
      return res.status(403).json({ error: "Token không hợp lệ" });
    }
    req.user = user;
    next();
  });
};

// API đăng nhập
app.post("/login", (req, res) => {
  const { username, password } = req.body;
  db.get(
    "SELECT * FROM users WHERE username = ?",
    [username],
    async (err, row) => {
      if (err) {
        return res.status(500).json({ error: "Lỗi cơ sở dữ liệu" });
      }
      if (!row) {
        return res.status(404).json({ error: "Không tìm thấy người dùng" });
      }
      const match = await bcrypt.compare(password, row.password);
      if (!match) {
        return res.status(401).json({ error: "Mật khẩu không đúng" });
      }
      const token = jwt.sign({ username }, SECRET_KEY, { expiresIn: "1h" });
      res.json({ token });
    }
  );
});

// Hàm chuyển text thành HTML đơn giản
const textToHtml = (text) => {
  if (!text) return "";
  return `<p>${text.replace(/\n/g, "<br>")}</p>`;
};

// API lấy danh sách sự kiện
app.get("/api/dashboard", (req, res) => {
  db.all("SELECT * FROM events", [], (err, rows) => {
    if (err) {
      return res.status(500).json({ error: "Lỗi cơ sở dữ liệu" });
    }
    const events = rows.map((row) => {
      console.log(row['images'])
      return {
        id: row.id,
        title: row.title,
        content: row.content,
        images: JSON.parse(row.images),
        username: row.username,
      }
    });
    console.log(events);
    res.json(events);
  });
});

// API tạo sự kiện mới với id tự tính toán
app.post(
  "/api/dashboard",
  authenticateJWT,
  upload.array("images", 10),
  (req, res) => {
    const { title, content } = req.body;
    const username = req.user.username;

    if (!title || !content) {
      return res.status(400).json({ error: "Chủ đề và nội dung là bắt buộc" });
    }

    const images = req.files
      ? req.files.map((file) => `/uploads/${file.filename}`)
      : [];
    console.log("Hình", images)
    const imagesJson = JSON.stringify(images);
    const htmlContent = textToHtml(content);

    // Tính toán id mới
    db.get("SELECT MAX(id) as maxId FROM events", [], (err, row) => {
      if (err) {
        console.error("Lỗi khi lấy max id:", err.message);
        return res.status(500).json({ error: "Lỗi khi lấy max id" });
      }
      const newId = row && row.maxId ? row.maxId + 1 : 1; // Nếu không có dữ liệu, id = 1

      db.run(
        "INSERT INTO events (id, title, content, images, username) VALUES (?, ?, ?, ?, ?)",
        [newId, title, htmlContent, imagesJson, username],
        function (err) {
          if (err) {
            console.error("Lỗi khi chèn dữ liệu:", err.message);
            return res
              .status(500)
              .json(`{ error: Lỗi khi tạo sự kiện: ${err.message} }`);
          }
          console.log("ID mới được tạo:", newId);
          res
            .status(201)
            .json({ id: newId, title, content: htmlContent, images, username });
        }
      );
    });
  }
);

// API cập nhật sự kiện
app.put(
  "/api/dashboard/:id",
  authenticateJWT,
  upload.array("images", 10),
  (req, res) => {
    const { id } = req.params;
    const { title, content } = req.body;
    const username = req.user.username;

    if (!title || !content) {
      return res.status(400).json({ error: "Chủ đề và nội dung là bắt buộc" });
    }

    db.get(
      "SELECT images FROM events WHERE id = ? AND username = ?",
      [id, username],
      (err, row) => {
        if (err) {
          return res.status(500).json({ error: "Lỗi cơ sở dữ liệu" });
        }
        if (!row) {
          return res
            .status(404)
            .json({ error: "Không tìm thấy sự kiện hoặc bạn không có quyền" });
        }

        const oldImages = JSON.parse(row.images);
        const newImages = req.files
          ? req.files.map((file) => `/uploads/${file.filename}`)
          : [];
        const images = [...oldImages, ...newImages];
        const imagesJson = JSON.stringify(images);
        const htmlContent = textToHtml(content);

        db.run(
          "UPDATE events SET title = ?, content = ?, images = ? WHERE id = ? AND username = ?",
          [title, htmlContent, imagesJson, id, username],
          function (err) {
            if (err) {
              return res
                .status(500)
                .json({ error: "Lỗi khi cập nhật sự kiện" });
            }
            if (this.changes === 0) {
              return res.status(404).json({
                error: "Không tìm thấy sự kiện hoặc bạn không có quyền",
              });
            }
            res.json({ id, title, content: htmlContent, images, username });
          }
        );
      }
    );
  }
);

// API xóa sự kiện
app.delete("/api/dashboard/:id", authenticateJWT, (req, res) => {
  const { id } = req.params;
  const username = req.user.username;

  db.get(
    "SELECT images FROM events WHERE id = ? AND username = ?",
    [id, username],
    (err, row) => {
      if (err) {
        return res.status(500).json({ error: "Lỗi cơ sở dữ liệu" });
      }
      if (!row) {
        return res
          .status(404)
          .json({ error: "Không tìm thấy sự kiện hoặc bạn không có quyền" });
      }

      const images = JSON.parse(row.images);
      images.forEach((image) => {
        const filePath = path.join(
          __dirname,
          image.replace("/uploads/", "uploads/")
        );
        if (fs.existsSync(filePath)) {
          fs.unlinkSync(filePath);
        }
      });

      db.run(
        "DELETE FROM events WHERE id = ? AND username = ?",
        [id, username],
        function (err) {
          if (err) {
            return res.status(500).json({ error: "Lỗi khi xóa sự kiện" });
          }
          if (this.changes === 0) {
            return res.status(404).json({
              error: "Không tìm thấy sự kiện hoặc bạn không có quyền",
            });
          }
          res.json({ message: "Xóa sự kiện thành công" });
        }
      );
    }
  );
});

//Form nhận thông tin
app.post("/submit-form", async (req, res) => {
  const formData = req.body;
  console.log("Dữ liệu nhận được từ frontend:", formData);

  try {
    const response = await axios.post(
      "https://script.google.com/macros/s/AKfycbxVxS-MSDiNFPw1sMgk5mcOcgEfoUu534afT1qIdgNgb9ROgJrySifYYZyBbynNTUHJ/exec",
      formData,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    console.log("Phản hồi từ Google Script:", response.data);
    res.status(200).json({ message: "Gửi thành công", data: response.data });
  } catch (error) {
    console.error("Lỗi khi gửi tới Google Script:", error.message);
    if (error.response) {
      console.error("Phản hồi lỗi từ Google Script:", error.response.data);
    }
    res.status(500).json({ error: "Gửi thất bại" });
  }
});

app.listen(PORT, () => console.log(`Máy chủ chạy trên cổng ${PORT}`));
