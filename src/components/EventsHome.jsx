import React, { useEffect, useState } from "react";

function EventsHome() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Danh sách hình ảnh và tiêu đề
  const eventImages = [
    {
      src: "/images/event/e_athd.png",
      title:
        "Triển khai chương trình An toàn học đường trên khắp cả nước - 2024",
    },
    {
      src: "/images/event/e_ntl1.png",
      title: 'Hội nghị "Hành trình trở thành nhà tạo lập - 2021"',
    },
    {
      src: "/images/event/e_ntl2.png",
      title: 'Hội nghị "Hành trình trở thành nhà tạo lập - 2022"',
    },
    {
      src: "/images/event/e_backan.png",
      title:
        "Chương trình tài trợ kết hợp tìm hiểu cơ hội đầu tư tại tỉnh Bắc Kạn - 2022",
    },
    {
      src: "/images/event/e_hagiang.png",
      title:
        "Chương trình tài trợ và tìm hiểu cơ hội đầu tư tại tỉnh Hà Giang - 2022",
    },
    {
      src: "/images/event/e_bds.png",
      title: "Khảo sát và tư vấn dự án bất động sản tại Ninh Bình - 2022",
    },
    {
      src: "/images/event/e_hanam.png",
      title: "Chương trình trao tài trợ cho một số huyện của	tỉnh Hà Nam - 2022",
    },
    {
      src: "/images/event/e_daotao.png",
      title:
        'Hoạt động "Tư vấn và Đào tạo Pháp lý" cuối tuần cho các doanh nghiệp và nhà đầu tư - 2022',
    },
  ];

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
      <h1 className="section-title">SỰ KIỆN</h1>
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
        Justiva Law tổ chức các hội nghị “Hành trình trở thành nhà tạo lập”,
        khảo sát dự án bất động sản và chương trình tài trợ cộng đồng, khẳng
        định vai trò kết nối và kiến tạo giá trị. Khám phá các sự kiện nổi bật
        định hình hành trình pháp lý.
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
        Tìm hiểu thêm
      </a>
    </section>
  );
}

export default EventsHome;
