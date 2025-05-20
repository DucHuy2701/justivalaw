import Hero from "../components/Hero";
import ServiceCard from "../components/ServiceCard";
import React, { useRef, useState, useEffect, useContext } from "react";
import EventsHome from "../components/EventsHome";
import Partners from "../components/Partner";
import Stats from "../components/Stats";
import { LanguageContext } from "../components/LanguageContext";


function GradientButton({ href, children, aos = "fade-up", aosDelay = "200" }) {
  return (
    <>
      <style>
        {`
          .gradient-button {
            background: linear-gradient(90deg, #0068C9 0%, #00aaff 50%, #0068C9 100%);
            background-size: 200% 100%;
            background-position: 0% 0%;
            border: none;
            transition: background-position 0.5s linear;
          }
          .gradient-button:hover {
            background-position: 100% 0%;
          }
        `}
      </style>
      <a
        href={href}
        className="btn btn-primary mt-3 gradient-button"
        data-aos={aos}
        data-aos-delay={aosDelay}
      >
        {children}
      </a>
    </>
  );
}

function Home() {
  const { language } = useContext(LanguageContext);

  // Đối tượng bản dịch
  const translations = {
    vi: {
      about: {
        title: "CÔNG TY LUẬT TNHH JUSTIVA LAW",
        description:
          "  Chúng tôi có nhiều năm kinh nghiệm trong việc hỗ trợ các nhà đầu tư trong và ngoài nước thực hiện các Dự án, thường xuyên tư vấn pháp lý cho các doanh nghiệp. Với đội ngũ Luật sư có nhiều năm kinh nghiệm trong lĩnh vực tranh tụng, tư vấn pháp lý cho các đối tác trong và ngoài nước đã khẳng định được vị thế của Công ty Luật TNHH Justiva Law trong khu vực Hồ Chí Minh – Hà Nội. Chất lượng dịch vụ của chúng tôi được khách hàng trong nước cũng như quốc tế đánh giá cao và vô cùng hài lòng.",
        cta: "Tìm hiểu thêm",
      },
      achievements: {
        title: "HÀNH TRÌNH VÀ THÀNH TỰU",
        description:
          "  Hành trình của Justiva Law từ năm 2019 đến nay ghi dấu với các cột mốc như thành lập, hợp tác giáo dục, chuyển đổi số và tư vấn chiến lược IPO. Chúng tôi tự hào tổ chức hội nghị pháp lý, tài trợ cộng đồng và phát triển dự án bất động sản, khẳng định vị thế trong lĩnh vực pháp lý.",
        cta: "Tìm hiểu thêm",
      },
      vision: {
        title: "TẦM NHÌN VÀ SỨ MỆNH",
        description:
          "  Justiva Law cam kết trở thành lá chắn pháp lý vững chắc, cung cấp giải pháp toàn diện và giá trị bền vững cho xã hội. Với tầm nhìn 2030, chúng tôi tiên phong ứng dụng công nghệ, mở rộng dịch vụ pháp lý đa quốc gia và trở thành cốt lõi trong hệ sinh thái doanh nghiệp vận hành trên nền tảng luật.",
        cta: "Tìm hiểu thêm",
      },
      services: {
        title: "DỊCH VỤ CỦA CHÚNG TÔI",
        items: [
          { title: "Hoạch định chiến lược pháp lý cho doanh nghiệp", topic: "business-strategy" },
          { title: "Tư vấn M&A", topic: "mergers-acquisitions" },
          { title: "Đầu tư nước ngoài tại Việt Nam", topic: "foreign-investment" },
          { title: "Pháp lý bất động sản", topic: "real-estate" },
          { title: "Tái cấu trúc doanh nghiệp", topic: "restructuring" },
          { title: "Tư vấn pháp lý thường xuyên", topic: "legal-consulting" },
          { title: "Tranh tụng", topic: "litigation" },
          { title: "Lưu trữ di chúc và phân chia thừa kế", topic: "will-inheritance" },
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
      about: {
        title: "JUSTIVA LAW LLC",
        description:
          "  With many years of experience, we provide legal support for domestic and foreign investors in implementing various projects. We regularly offer legal consultancy services to businesses. Our team of lawyers has extensive expertise in litigation and legal advisory services for both domestic and international partners, affirming the position of Justiva Law LLC in the Ho Chi Minh City – Hanoi region. The quality of our services has been highly valued and appreciated by both domestic and international clients for their excellence and satisfaction.",
        cta: "Learn More",
      },
      achievements: {
        title: "OUR JOURNEY AND ACHIEVEMENTS",
        description:
          "  Since its establishment in 2019, Justiva Law has marked key milestones such as its founding, educational partnerships, digital transformation, and strategic IPO advisory services. We take pride in organizing legal conferences, sponsoring community initiatives, and contributing to real estate development projects—affirming our strong position in the legal sector.",
        cta: "Learn More",
      },
      vision: {
        title: "VISION & MISSION",
        description:
          "  Justiva Law is committed to becoming a solid legal shield, delivering comprehensive legal solutions and sustainable value for society. With a vision toward 2030, we aim to lead in legal technology adoption, expand cross-border legal services, and become a core pillar in the legal-based business ecosystem.",
        cta: "Learn More",
      },
      services: {
        title: "OUR SERVICES",
        items: [
          { title: "Legal Strategy Planning for Businesses", topic: "business-strategy" },
          { title: "M&A Advisory", topic: "mergers-acquisitions" },
          { title: "Foreign Investment in Vietnam", topic: "foreign-investment" },
          { title: "Real Estate Legal Services", topic: "real-estate" },
          { title: "Corporate Restructuring", topic: "restructuring" },
          { title: "Ongoing Legal Consultancy", topic: "legal-consulting" },
          { title: "Litigation", topic: "litigation" },
          { title: "Will Storage and Inheritance Distribution", topic: "will-inheritance" },
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

      {/* About JLF */}
      <section className="py-5 bg-light" data-aos="fade-up">
        {/* Cty JLF */}
        <div
          className="container"
          style={{
            marginTop: "3%",
            marginBottom: "2%",
            paddingBottom: "3%",
            borderBottom: "1px solid #cce3e8",
          }}
        >
          <div className="about-wrapper d-flex flex-wrap align-items-center gap-4">
            {/* Phần văn bản */}
            <div
              className="about-text"
              style={{ flex: 6 }}
              data-aos="fade-right"
              data-aos-delay="200"
            >
              <h2
                className="section-title mb-3"
                style={{ textAlign: "center" }}
              >
                {t.about.title}
              </h2>
              <p
                style={{
                  textAlign: "justify",
                  fontSize: "1.125rem",
                  lineHeight: "1.7",
                }}
              >
                {t.about.description}
              </p>
              <GradientButton href="/about" aos="fade-up" aosDelay="200">
                {t.about.cta}
              </GradientButton>
            </div>

            {/* Phần hình ảnh */}
            <div
              className="about-image"
              style={{ flex: 4 }}
              data-aos="fade-left"
              data-aos-delay="200"
            >
              <img
                src="/images/about.webp"
                alt="About us"
                style={{ width: "100%", height: "auto", borderRadius: "8px" }}
              />
            </div>
          </div>
        </div>

        {/* Achievements */}
        <div
          className="container"
          style={{
            marginTop: "3%",
            marginBottom: "2%",
            paddingBottom: "3%",
            borderBottom: "1px solid #cce3e8",
          }}
        >
          <div className="about-wrapper d-flex flex-wrap align-items-center gap-4">
            {/* Phần hình ảnh */}
            <div
              className="about-image"
              style={{ flex: 5 }}
              data-aos="fade-right"
              data-aos-delay="200"
            >
              <img
                src="/images/achivement.JPG"
                alt="Achievements"
                style={{ width: "100%", height: "auto", borderRadius: "8px" }}
              />
            </div>
            {/* Phần văn bản */}
            <div
              className="about-text"
              style={{ flex: 5, textAlign: "right" }}
              data-aos="fade-left"
              data-aos-delay="200"
            >
              <h2
                className="section-title mb-3"
                style={{ textAlign: "center" }}
              >
                {t.achievements.title}
              </h2>
              <p
                style={{
                  textAlign: "justify",
                  fontSize: "1.125rem",
                  lineHeight: "1.7",
                }}
              >
                {t.achievements.description}
              </p>
              <GradientButton href="/achievements" aos="fade-up" aosDelay="200">
                {t.achievements.cta}
              </GradientButton>
            </div>
          </div>
        </div>

        {/* Vision */}
        <div
          className="container"
          style={{
            marginTop: "3%",
            marginBottom: "2%",
            paddingBottom: "3%",
            borderBottom: "1px solid #cce3e8",
          }}
        >
          <div className="about-wrapper d-flex flex-wrap align-items-center gap-4">
            {/* Phần văn bản */}
            <div
              className="about-text"
              style={{ flex: 5 }}
              data-aos="fade-right"
              data-aos-delay="200"
            >
              <h2
                className="section-title mb-3"
                style={{ textAlign: "center" }}
              >
                {t.vision.title}
              </h2>
              <p
                style={{
                  textAlign: "justify",
                  fontSize: "1.125rem",
                  lineHeight: "1.7",
                }}
              >
                {t.vision.description}
              </p>
              <GradientButton href="/vision" aos="fade-up" aosDelay="200">
                {t.vision.cta}
              </GradientButton>
            </div>

            {/* Phần hình ảnh */}
            <div
              className="about-image"
              style={{ flex: 5 }}
              data-aos="fade-left"
              data-aos-delay="200"
            >
              <img
                src="/images/vision.JPG"
                alt="Vision"
                style={{ width: "100%", height: "auto", borderRadius: "8px" }}
              />
            </div>
          </div>
        </div>
      </section>

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
              fontSize: "3.5rem",
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