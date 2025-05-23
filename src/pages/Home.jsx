import Hero from "../components/Hero";
import ServiceCard from "../components/ServiceCard";
import React, { useRef, useState, useEffect, useContext } from "react";
import EventsHome from "../components/EventsHome";
import Partners from "../components/Partner";
import Stats from "../components/Stats";
import { LanguageContext } from "../components/LanguageContext";
import GradientButton from "../components/GradientButton";
import AboutSection from "../components/AboutSection";

function Home() {
  const { language } = useContext(LanguageContext);

  // Đối tượng bản dịch
  const translations = {
    vi: {
      services: {
        title: "DỊCH VỤ CỦA CHÚNG TÔI",
        items: [
          {
            title: "Hoạch định chiến lược pháp lý cho doanh nghiệp",
            topic: "business-strategy",
          },
          { title: "Tư vấn M&A", topic: "mergers-acquisitions" },
          {
            title: "Đầu tư nước ngoài tại Việt Nam",
            topic: "foreign-investment",
          },
          { title: "Pháp lý bất động sản", topic: "real-estate" },
          { title: "Tái cấu trúc doanh nghiệp", topic: "restructuring" },
          { title: "Tư vấn pháp lý thường xuyên", topic: "legal-consulting" },
          { title: "Tranh tụng", topic: "litigation" },
          {
            title: "Lưu trữ di chúc và phân chia thừa kế",
            topic: "will-inheritance",
          },
          { title: "Dịch vụ khác", topic: "other" },
        ],
      },
      technology: {
        title: "CÔNG NGHỆ & CHUYỂN ĐỔI SỐ",
        description:
          "Justiva Law tiên phong ứng dụng AI và Blockchain, nâng cao hiệu suất pháp lý, bảo mật dữ liệu và cung cấp dịch vụ thông minh như lưu trữ di chúc điện tử. Khám phá các giải pháp công nghệ sáng tạo định hình tương lai pháp lý.",
        cta: "Tìm hiểu thêm",
      },
    },
    en: {
      services: {
        title: "OUR SERVICES",
        items: [
          {
            title: "Legal Strategy Planning for Businesses",
            topic: "business-strategy",
          },
          { title: "M&A Advisory", topic: "mergers-acquisitions" },
          {
            title: "Foreign Investment in Vietnam",
            topic: "foreign-investment",
          },
          { title: "Real Estate Legal Services", topic: "real-estate" },
          { title: "Corporate Restructuring", topic: "restructuring" },
          { title: "Ongoing Legal Consultancy", topic: "legal-consulting" },
          { title: "Litigation", topic: "litigation" },
          {
            title: "Will Storage and Inheritance Distribution",
            topic: "will-inheritance",
          },
          { title: "Other Services", topic: "other" },
        ],
      },
      technology: {
        title: "TECHNOLOGY & DIGITAL TRANSFORMATION",
        description:
          "Justiva Law is at the forefront of applying AI and Blockchain to enhance legal efficiency, ensure data security, and offer smart services such as digital will storage. Discover innovative legal tech solutions that shape the future of law.",
        cta: "Learn More",
      },
    },
  };

  const t = translations[language];

  const services = t.services.items.map((item, index) => ({
    title: item.title,
    image: [
      "/images/service/hdcl1.jpg",
      "/images/service/ma3.avif",
      "/images/service/dtnn.avif",
      "/images/service/plbds.jpg",
      "/images/service/tct.jpg",
      "/images/service/tvpl.jpg",
      "/images/service/tt.jpg",
      "/images/service/ltdc1.png",
      "/images/service/dvk.jpg",
    ][index],
    topic: item.topic,
  }));

  const sectionRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    if (sectionRef.current) {
      const rect = sectionRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      setMousePos({ x, y });
    }
  };

  return (
    <>
      <Hero />
      <AboutSection />
      <Stats />

      {/* Dịch vụ */}
      <section
        className="py-5"
        data-aos="fade-up"
        style={{
          backgroundImage: "url(/images/service-bg.jpg)",
        }}
      >
        <div className="container" style={{ textAlign: "center" }}>
          <h2 className="section-title" data-aos="fade-up" data-aos-delay="500">
            {t.services.title}
          </h2>
          <div className="row g-4">
            {services.map((service, index) => (
              <div
                key={index}
                className="col-md-4"
                data-aos="fade-up"
                data-aos-delay={100 * (index + 1)}
              >
                <ServiceCard
                  title={service.title}
                  image={service.image}
                  topic={service.topic}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology */}
      <section
        data-aos="fade-up"
        data-aos-delay="200"
        ref={sectionRef}
        onMouseMove={handleMouseMove}
        className="py-5"
        style={{
          backgroundImage: `radial-gradient(circle 500px at ${mousePos.x}px ${mousePos.y}px, rgba(255, 255, 255, 0.2), transparent 30%), url(/images/tech-bg.jpg)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          marginBottom: "2%",
          marginTop: "2%",
          textAlign: "center",
          color: "#fff",
          position: "relative",
          transition: "background 0.1s ease",
          minHeight: "800px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div>
          <div
            className="section-title"
            data-aos="fade-up"
            data-aos-delay="200"
            style={{
              color: "#fff",
              textShadow: "1px 1px 5px rgba(0,0,0,1)",
              fontSize: "2.5rem",
            }}
          >
            {t.technology.title}
          </div>
          <div
            style={{
              borderTop: "3px solid #fff",
              marginLeft: "auto",
              marginRight: "auto",
              width: "10%",
              marginBottom: "2%",
            }}
          ></div>
          <p
            data-aos="fade-up"
            data-aos-delay="200"
            style={{
              marginLeft: "20%",
              marginRight: "20%",
              color: "#fff",
              textShadow: "1px 1px 5px rgba(0,0,0,1)",
              fontSize: "1.5rem",
            }}
          >
            {t.technology.description}
          </p>
          <GradientButton href="/technology" aos="fade-up" aosDelay="200">
            {t.technology.cta}
          </GradientButton>
        </div>
      </section>

      {/* Events */}
      <EventsHome />

      {/* Partners */}
      <Partners />
    </>
  );
}

export default Home;
