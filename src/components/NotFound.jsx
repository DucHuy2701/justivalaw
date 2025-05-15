import { Link } from "react-router-dom";
import { Container, Button } from "react-bootstrap";

function NotFound() {
  return (
    <Container className="text-center mt-5">
      <h1 className="display-1">404</h1>
      <h2>Trang không tìm thấy</h2>
      <p className="lead">
        Rất tiếc, trang bạn đang tìm kiếm không tồn tại hoặc đã bị di chuyển.
      </p>
      <Button as={Link} to="/home" variant="primary" className="mt-3">
        Về trang chủ
      </Button>
    </Container>
  );
}

export default NotFound;
