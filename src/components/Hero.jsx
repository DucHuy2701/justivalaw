import { useContext } from "react";
import { LanguageContext } from "./LanguageContext";

function Hero() {
  const { language } = useContext(LanguageContext);

  // Đối tượng bản dịch
  const translations = {
    vi: {
      title: "Justiva Law - Đồng hành Pháp lý",
      description:
        "Cung cấp giải pháp pháp lý chuyên nghiệp cho cá nhân và doanh nghiệp.",
      cta: "Liên hệ ngay",
    },
    en: {
      title: "Justiva Law - Your Legal Partner",
      description:
        "Providing professional legal solutions for individuals and businesses.",
      cta: "Contact us now",
    },
  };

  const t = translations[language];

  return (
    <section className="hero" data-aos="zoom-in">
      <div className="container">
        <h1
          className="display-4 fw-bold"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          {t.title}
        </h1>
        <p className="lead" data-aos="fade-up" data-aos-delay="200">
          {t.description}
        </p>
        <a
          href="/contact"
          className="btn btn-primary btn-lg mt-3"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          {t.cta}
        </a>
      </div>
    </section>
  );
}

export default Hero;