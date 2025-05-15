import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Form, Button, Alert } from "react-bootstrap";
import axios from "./axios";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    try {
      const response = await axios.post("/login", {
        username: email,
        password,
      });
      localStorage.setItem("token", response.data.token);
      setMessage("Đăng nhập thành công!");
      setTimeout(() => navigate("/admin/dashboard"), 1000); // Chuyển hướng đến /admin/dashboard
    } catch (error) {
      setMessage(error.response?.data?.error || "Có lỗi xảy ra");
    }
  };

  return (
    <Container className="mt-5" style={{ maxWidth: "400px" }}>
      <h2 className="mb-4">Đăng nhập</h2>
      {message && (
        <Alert variant={message.includes("thành công") ? "success" : "danger"}>
          {message}
        </Alert>
      )}
      <Form onSubmit={handleSubmit}>
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
        <Button
          type="submit"
          className="w-100"
          style={{ backgroundColor: "#FF5733", borderColor: "#FF5733" }}
        >
          Đăng nhập
        </Button>
      </Form>
      <div className="d-flex justify-content-between mt-3">
        <Link to="#" className="text-decoration-none">
          Quên mật khẩu
        </Link>
        <Link to="/register" className="text-decoration-none">
          Tạo tài khoản
        </Link>
      </div>
    </Container>
  );
}

export default Login;
