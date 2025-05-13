import Hero from "../components/Hero";
import ServiceCard from "../components/ServiceCard";
import React, { useRef, useState, useEffect } from "react";
import EventsHome from "../components/EventsHome";
import Partners from "../components/Partner";
import Stats from "../components/Stats";

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
  const services = [
    {
      title: "Hoạch định chiến lược pháp lý cho doanh nghiệp",
      image: "/images/s-1.JPG",
      topic: "business-strategy",
    },
    {
      title: "Tư vấn M&A",
      image: "/images/s-2.JPG",
      topic: "mergers-acquisitions",
    },
    {
      title: "Đầu tư nước ngoài tại Việt Nam",
      image: "/images/s-3.JPG",
      topic: "foreign-investment",
    },
    {
      title: "Pháp lý bất động sản",
      image: "/images/s-4.JPG",
      topic: "real-estate",
    },
    {
      title: "Tái cấu trúc doanh nghiệp",
      image: "/images/s-5.jpg",
      topic: "restructuring",
    },
    {
      title: "Tư vấn pháp lý thường xuyên",
      image: "/images/s-6.JPG",
      topic: "legal-consulting",
    },
    {
      title: "Tranh tụng",
      image: "/images/s-7.jpg",
      topic: "litigation",
    },
    {
      title: "Lưu trữ di chúc và phân chia thừa kế",
      image: "/images/s-8.jpg",
      topic: "will-inheritance",
    },
    {
      title: "Dịch vụ khác",
      image: "/images/s-9.JPG",
      topic: "other",
    },
  ];

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
                CÔNG TY LUẬT TNHH JUSTIVA LAW
              </h2>
              <p
                style={{
                  textAlign: "justify",
                  fontSize: "1.125rem",
                  lineHeight: "1.7",
                }}
              >
                &emsp;&emsp;Chúng tôi có nhiều năm kinh nghiệm trong việc hỗ trợ
                các nhà đầu tư trong và ngoài nước thực hiện các Dự án, thường
                xuyên tư vấn pháp lý cho các doanh nghiệp. Với đội ngũ Luật sư
                có nhiều năm kinh nghiệm trong lĩnh vực tranh tụng, tư vấn pháp
                lý cho các đối tác trong và ngoài nước đã khẳng định được vị thế
                của Công ty Luật TNHH Justiva Law trong khu vực Hồ Chí Minh – Hà
                Nội. Chất lượng dịch vụ của chúng tôi được khách hàng trong nước
                cũng như quốc tế đánh giá cao và vô cùng hài lòng.
              </p>
              <GradientButton href="/about" aos="fade-up" aosDelay="200">
                Tìm hiểu thêm
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

        {/* Achivements */}
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
                alt="achivements"
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
                HÀNH TRÌNH VÀ THÀNH TỰU
              </h2>
              <p
                style={{
                  textAlign: "justify",
                  fontSize: "1.125rem",
                  lineHeight: "1.7",
                }}
              >
                &emsp;&emsp;Hành trình của Justiva Law từ năm 2019 đến nay ghi
                dấu với các cột mốc như thành lập, hợp tác giáo dục, chuyển đổi
                số và tư vấn chiến lược IPO. Chúng tôi tự hào tổ chức hội nghị
                pháp lý, tài trợ cộng đồng và phát triển dự án bất động sản,
                khẳng định vị thế trong lĩnh vực pháp lý.
              </p>
              <GradientButton href="/achievements" aos="fade-up" aosDelay="200">
                Tìm hiểu thêm
              </GradientButton>
            </div>
          </div>
        </div>

        {/* Visions */}
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
                TẦM NHÌN VÀ SỨ MỆNH
              </h2>
              <p
                style={{
                  textAlign: "justify",
                  fontSize: "1.125rem",
                  lineHeight: "1.7",
                }}
              >
                &emsp;&emsp;Justiva Law cam kết trở thành lá chắn pháp lý vững
                chắc, cung cấp giải pháp toàn diện và giá trị bền vững cho xã
                hội. Với tầm nhìn 2030, chúng tôi tiên phong ứng dụng công nghệ,
                mở rộng dịch vụ pháp lý đa quốc gia và trở thành cốt lõi trong
                hệ sinh thái doanh nghiệp vận hành trên nền tảng luật.
              </p>
              <GradientButton href="/vision" aos="fade-up" aosDelay="200">
                Tìm hiểu thêm
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

      {/* DỊCH VỤ */}
      <section
        className="py-5"
        data-aos="fade-up"
        style={{
          backgroundImage: "url(/images/service-bg.jpg)",
        }}
      >
        <div className="container" style={{ textAlign: "center" }}>
          <h2 className="section-title" data-aos="fade-up" data-aos-delay="500">
            DỊCH VỤ CỦA CHÚNG TÔI
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
            CÔNG NGHỆ & CHUYỂN ĐỔI SỐ
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
            Justiva Law tiên phong ứng dụng AI và Blockchain, nâng cao hiệu suất
            pháp lý, bảo mật dữ liệu và cung cấp dịch vụ thông minh như lưu trữ
            di chúc điện tử. Khám phá các giải pháp công nghệ sáng tạo định hình
            tương lai pháp lý.
          </p>
          <GradientButton href="/technology" aos="fade-up" aosDelay="200">
            Tìm hiểu thêm
          </GradientButton>
        </div>
      </section>

      {/* events */}
      <EventsHome />

      {/* partner */}
      <Partners />
    </>
  );
}

export default Home;
