import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Form, Button, Alert } from "react-bootstrap";
import axios from "axios";

function Register() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    try {
      await axios.post("/api/register", { username: email, password });
      setMessage("Đăng ký thành công! Bạn sẽ được chuyển đến trang đăng nhập.");
      setTimeout(() => navigate("/login"), 2000); // Chuyển hướng sau 2 giây
    } catch (error) {
      setMessage(error.response?.data?.error || "Có lỗi xảy ra");
    }
  };

  return (
    <Container className="mt-5" style={{ maxWidth: "400px" }}>
      <h2 className="mb-2">Tạo tài khoản</h2>
      {message && (
        <Alert variant={message.includes("thành công") ? "success" : "danger"}>
          {message}
        </Alert>
      )}
      <Form onSubmit={handleSubmit}>
        <div className="d-flex gap-3">
          <Form.Group className="mb-3 flex-fill">
            <Form.Label>Họ và Tên</Form.Label>
            <Form.Control
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
              placeholder="Họ và Tên"
            />
          </Form.Group>
        </div>
        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="email@address.com"
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Mật khẩu</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder="Nhập mật khẩu"
          />
        </Form.Group>
        <p className="text-muted mb-3">
          Bằng cách chọn "Tạo tài khoản", tôi đồng ý với{" "}
          <Link to="#" className="text-decoration-none">
            Chính sách bảo mật
          </Link>{" "}
          và{" "}
          <Link to="#" className="text-decoration-none">
            Điều khoản sử dụng
          </Link>
          .
        </p>
        <Button
          type="submit"
          className="w-100"
          style={{ backgroundColor: "#FF5733", borderColor: "#FF5733" }}
        >
          Tạo tài khoản
        </Button>
      </Form>
      <div className="text-center mt-3">
        <Link to="/login" className="text-decoration-none">
          Đăng nhập
        </Link>
      </div>
    </Container>
  );
}

export default Register;
