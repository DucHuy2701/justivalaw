import React, { useEffect, useState, useContext } from "react";
import { LanguageContext } from "./LanguageContext";

function EventsHome() {
  const { language } = useContext(LanguageContext);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Đối tượng bản dịch
  const translations = {
    vi: {
      title: "SỰ KIỆN",
      description:
        "Justiva Law tổ chức các hội nghị “Hành trình trở thành nhà tạo lập”, khảo sát dự án bất động sản và chương trình tài trợ cộng đồng, khẳng định vai trò kết nối và kiến tạo giá trị. Khám phá các sự kiện nổi bật định hình hành trình pháp lý.",
      cta: "Tìm hiểu thêm",
      events: [
        {
          title: "Triển khai chương trình An toàn học đường trên khắp cả nước - 2024",
          src: "/images/event/e_athd.png",
        },
        {
          title: 'Hội nghị "Hành trình trở thành nhà tạo lập - 2021"',
          src: "/images/event/e_ntl1.png",
        },
        {
          title: 'Hội nghị "Hành trình trở thành nhà tạo lập - 2022"',
          src: "/images/event/e_ntl2.png",
        },
        {
          title: "Chương trình tài trợ kết hợp tìm hiểu cơ hội đầu tư tại tỉnh Bắc Kạn - 2022",
          src: "/images/event/e_backan.png",
        },
        {
          title: "Chương trình tài trợ và tìm hiểu cơ hội đầu tư tại tỉnh Hà Giang - 2022",
          src: "/images/event/e_hagiang.png",
        },
        {
          title: "Khảo sát và tư vấn dự án bất động sản tại Ninh Bình - 2022",
          src: "/images/event/e_bds.png",
        },
        {
          title: "Chương trình trao tài trợ cho một số huyện của tỉnh Hà Nam - 2022",
          src: "/images/event/e_hanam.png",
        },
        {
          title: 'Hoạt động "Tư vấn và Đào tạo Pháp lý" cuối tuần cho các doanh nghiệp và nhà đầu tư - 2022',
          src: "/images/event/e_daotao.png",
        },
      ],
    },
    en: {
      title: "EVENTS",
      description:
        "Justiva Law organizes conferences under the theme “The Journey to Becoming a Legal Enabler,” including real estate project surveys and community sponsorship programs—affirming our role in building connections and creating value. Discover our featured events that shape the legal journey.",
      cta: "Learn More",
      events: [
        {
          title: "Nationwide Implementation of the School Safety Program – 2024",
          src: "/images/event/e_athd.png",
        },
        {
          title: 'Conference "The Journey to Becoming a Creator" – 2021',
          src: "/images/event/e_ntl1.png",
        },
        {
          title: 'Conference "The Journey to Becoming a Creator" – 2022',
          src: "/images/event/e_ntl2.png",
        },
        {
          title: "Sponsorship Program Combined with Investment Opportunity Exploration in Bac Kan Province – 2022",
          src: "/images/event/e_backan.png",
        },
        {
          title: "Sponsorship and Investment Opportunity Exploration Program in Ha Giang Province – 2022",
          src: "/images/event/e_hagiang.png",
        },
        {
          title: "Real Estate Project Survey and Consultancy in Ninh Binh – 2022",
          src: "/images/event/e_bds.png",
        },
        {
          title: "Sponsorship Grant Program for Selected Districts in Ha Nam Province – 2022",
          src: "/images/event/e_hanam.png",
        },
        {
          title: 'Weekend "Legal Consultancy and Training" Program for Enterprises and Investors – 2022',
          src: "/images/event/e_daotao.png",
        },
      ],
    },
  };

  const t = translations[language];
  const eventImages = t.events;

  // Tự động dịch từng hình sang trái mỗi 3 giây
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === eventImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [eventImages.length]);

  // Hàm điều hướng trái/phải
  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? eventImages.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === eventImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Tính toán các chỉ số hình ảnh hiển thị (hiển thị 3 hình cùng lúc)
  const getVisibleImages = () => {
    const visibleImages = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % eventImages.length;
      visibleImages.push(eventImages[index]);
    }
    return visibleImages;
  };

  const visibleImages = getVisibleImages();

  return (
    <section
      className="container py-5"
      data-aos="fade-up"
      data-aos-delay="200"
      style={{ textAlign: "center" }}
    >
      <h1 className="section-title">{t.title}</h1>
      <div
        style={{
          borderTop: "3px solid #0068C9",
          marginLeft: "45%",
          marginRight: "45%",
          marginBottom: "2%",
        }}
      ></div>
      <p
        style={{
          fontSize: "1.15rem",
          marginLeft: "10%",
          marginRight: "10%",
          textAlign: "justify",
        }}
      >
        {t.description}
      </p>
      <div className="slider-container" style={{ marginTop: "2rem" }}>
        <button className="slider-button prev" onClick={goToPrevious}>
          «
        </button>
        <div className="slider">
          <div className="slider-track">
            {visibleImages.map((image, index) => (
              <div key={index} className="slide">
                <div className="image-wrapper">
                  <img
                    src={image.src}
                    alt={`Event ${index + 1}`}
                    className="custom-image"
                  />
                  <div className="image-caption">
                    <h5>{image.title}</h5>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <button className="slider-button next" onClick={goToNext}>
          »
        </button>
      </div>
      <a
        href="/events"
        className="btn btn-primary mt-3"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        {t.cta}
      </a>
    </section>
  );
}

export default EventsHome;