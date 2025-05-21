import React, { useState, useEffect, useRef, useContext } from "react";
import CountUp from "react-countup";
import AOS from "aos";
import "aos/dist/aos.css";
import { LanguageContext } from "./LanguageContext";

function Stats() {
  const { language } = useContext(LanguageContext);
  const [isCounting, setIsCounting] = useState(false);
  const statsRef = useRef(null);

  // Đối tượng bản dịch
  const translations = {
    vi: {
      title: "Công ty Luật Hàng Đầu Việt Nam",
      cta: "Đọc Thêm Về Chúng Tôi →",
      stats: [
        { value: 5, label: "Số năm kinh nghiệm", suffix: "+" },
        { value: 40, label: "Thành viên và Đối tác", prefix: "Với " },
        { value: 500, label: "Khách hàng", prefix: "Hơn " },
        { value: 70, label: "Dự án đã tham gia", prefix: "Trên " },
      ],
    },
    en: {
      title: "Vietnam’s Leading Law Firm",
      cta: "Learn More About Us →",
      stats: [
        { value: 5, label: "Years of Experience", suffix: "+" },
        { value: 40, label: "Members and Partners", prefix: "With " },
        { value: 500, label: "Clients", prefix: "Over " },
        { value: 70, label: "Projects Involved", prefix: "More than " },
      ],
    },
  };

  const t = translations[language];
  const stats = t.stats;

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsCounting(true);
            observer.unobserve(entry.target); // Ngừng quan sát sau khi kích hoạt
          }
        });
      },
      { threshold: 0.5 } // Kích hoạt khi 50% phần tử xuất hiện
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    // Dọn dẹp observer khi component unmount
    return () => {
      if (statsRef.current) {
        observer.unobserve(statsRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={statsRef} // Gắn ref để theo dõi phần tử
      className="position-relative w-100 d-flex align-items-center overflow-hidden"
      data-aos="fade-up"
      data-aos-once="true"
      style={{
        backgroundImage: "url(/images/stats2.webp)",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        minHeight: "900px",
        width:"100%"
      }}
    >
      <div className="container py-5">
        <div
          className="row align-items-center"
          style={{
            backgroundPosition: "right center", // Ảnh chỉ hiển thị ở 50% bên phải
            backgroundSize: "50% 100%", // Kích thước ảnh: 50% chiều rộng, 100% chiều cao
            backgroundRepeat: "no-repeat",
            minHeight: "400px", // Đảm bảo chiều cao tối thiểu
          }}
        >
          {/* Nội dung chữ bên trái */}
          <div className="col-12 col-sm-6 text-white px-4">
            <h1 className="display-4 fw-bold mb-3">{t.title}</h1>
            <a href="/about" className="text-decoration-none text-danger">
              <strong>{t.cta}</strong>
            </a>
            <div className="mt-4">
              {/* Bảng Thống Kê Số Liệu */}
              {stats.map((stat, index) => (
                <div key={index} className="mb-3">
                  <h2 className="display-6 mb-0">
                    {isCounting ? (
                      <CountUp
                        prefix={stat.prefix || ""}
                        start={0}
                        end={stat.value}
                        duration={3}
                        suffix={stat.suffix || ""}
                        className="d-inline"
                      />
                    ) : (
                      "0"
                    )}
                  </h2>
                  <p className="mb-0" style={{ fontSize: "1.25rem" }}>
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
          {/* Cột trống bên phải để giữ bố cục */}
          <div className="col-12 col-sm-6 p-0" />
        </div>
      </div>
    </div>
  );
}

export default Stats;