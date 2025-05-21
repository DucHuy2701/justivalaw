import { Link } from "react-router-dom";
import { Container, Button } from "react-bootstrap";
import { useContext } from "react";
import { LanguageContext } from "./LanguageContext";

function NotFound() {
  const { language } = useContext(LanguageContext);

  // Đối tượng bản dịch
  const translations = {
    vi: {
      title: "Trang không tìm thấy",
      description:
        "Rất tiếc, trang bạn đang tìm kiếm không tồn tại hoặc đã bị di chuyển.",
      button: "Về trang chủ",
    },
    en: {
      title: "Page Not Found",
      description:
        "Sorry, the page you are looking for does not exist or has been moved.",
      button: "Back to Home",
    },
  };

  const t = translations[language];

  return (
    <Container className="text-center mt-5">
      <h1 className="display-1">404</h1>
      <h2>{t.title}</h2>
      <p className="lead">{t.description}</p>
      <Button as={Link} to="/home" variant="primary" className="mt-3" style={{marginBottom: "5%"}}>
        {t.button}
      </Button>
    </Container>
  );
}

export default NotFound;