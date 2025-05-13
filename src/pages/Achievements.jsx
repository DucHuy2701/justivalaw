import "./About.css";
import { useState, useEffect } from "react";
import AOS from "aos";

function Achievements() {
  const timelineData = [
    {
      year: "2019",
      title: "Thành Lập Justiva Law",
      description:
        "Hãng luật Justiva Law được thành lập, tách ra từ Investpush Legal, đánh dấu bước khởi đầu trong hành trình cung cấp dịch vụ pháp lý chuyên nghiệp.",
      image: ["/images/hero-banner.webp"],
    },
    {
      year: "2020-2021",
      title: "Phát Triển Dịch Vụ và Đào Tạo",
      description:
        "Thực hiện các dịch vụ pháp lý như tư vấn, tố tụng đồng thời phát triển các chương trình đào tạo về pháp lý đầu tư, bất động sản và tài chính (offline và online).",
      image: ["/images/timeline_2021.jpg"],
    },
    {
      year: "2022-2023",
      title: "Mở Rộng Chiến Lược",
      description: [
        "- Mở rộng hoạt động xây dựng chiến lược pháp lý cho doanh nghiệp, đặc biệt là doanh nghiệp công nghệ và các doanh nghiệp có nhu cầu IPO.",
        <br />,
        "- Tư vấn phát triển các dự án khu công nghiệp và khu dân cư.",
      ],
      image: ["/images/timeline_2023.jpg"],
    },
    {
      year: "2024",
      title: "Chuyển Đổi Số và Cộng Đồng",
      description: [
        "- Trở thành thành viên của Wisgroup.",
        <br />,
        "- Hợp tác phát triển chương trình 'An Toàn Học Đường', tài trợ miễn phí 100% cho học sinh trên cả nước.",
        <br />,
        "- Đẩy mạnh chuyển đổi số, triển khai và tích hợp công nghệ vào hoạt động công ty.",
      ],
      image: ["/images/timeline_2024.jpg"],
    },
    {
      year: "2025",
      title: "Công Nghệ và Xã Hội",
      description: [
        "- Định hình hình thái doanh nghiệp trong bối cảnh công nghệ, ưu tiên ứng dụng AI và Blockchain vào các hoạt động pháp lý và hoạt động khác.",
        <br />,
        "- Mở rộng các dự án xã hội, tiếp tục đóng góp tích cực cho cộng đồng.",
      ],
      image: [
        "/images/timeline_2025.jpg",
        "/images/timeline_2025_2.jpg",
        "/images/timeline_2025_3.jpg",
      ],
    },
  ];

  const highlightsData = [
    {
      title: "Tư Vấn Pháp Lý Doanh Nghiệp",
      description:
        "Hỗ trợ hàng trăm doanh nghiệp xây dựng chiến lược pháp lý, đặc biệt trong lĩnh vực công nghệ và IPO.",
      image: "/images/event/e_tochuc2.png",
    },
    {
      title: "Chương Trình An Toàn Học Đường",
      description:
        "Tài trợ 100% cho học sinh trên cả nước, góp phần xây dựng môi trường học đường an toàn.",
      image: "/images/event/e_athd.png",
    },
    {
      title: "Chuyển Đổi Số",
      description:
        "Ứng dụng AI và Blockchain vào hoạt động pháp lý, nâng cao hiệu quả và minh bạch.",
      image: "/images /legal-bg.jpg",
    },
  ];

  // State để theo dõi topic được chọn, mặc định là topic đầu tiên (index 0)
  const [selectedHighlight, setSelectedHighlight] = useState(0);

  // Khởi tạo AOS
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  // Component để xử lý slideshow ảnh
  const Slideshow = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
      if (images.length > 1) {
        const interval = setInterval(() => {
          setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000); // Chuyển ảnh mỗi 3 giây
        return () => clearInterval(interval); // Dọn dẹp khi component unmount
      }
    }, [images]);

    return (
      <img
        src={images[currentIndex]}
        alt="Timeline Slide"
        style={{
          width: "100%",
          height: "200px",
          objectFit: "cover",
          borderRadius: "6px",
        }}
      />
    );
  };

  return (
    <>
      <div
        className="py-5 position-relative"
        data-aos="fade-up"
        data-aos-delay="100"
        style={{
          backgroundImage: "url(/images/timeline-bg.webp)",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          color: "#fff",
          marginBottom: "1%",
        }}
      >
        {/* Overlay */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            zIndex: 1,
          }}
        ></div>

        {/* Nội dung chính */}
        <div style={{ position: "relative", zIndex: 2 }}>
          <h1 className="text-center mb-4" style={{ fontSize: "3.5rem" }}>
            Hành trình & Thành tựu
          </h1>
          <div>
            <div className="col-lg-8 mx-auto">
              <p
                className="lead mb-4"
                style={{
                  textAlign: "center",
                }}
              >
                Hành trình Justiva Law là câu chuyện của sự tận tâm, ghi dấu
                những thành công vượt bậc, kết nối cộng đồng và doanh nghiệp,
                cùng nhau kiến tạo giá trị bền vững cho một tương lai tươi sáng.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        className="container"
        data-aos="fade-up"
        data-aos-delay="100"
        style={{
          textAlign: "center",
          marginTop: "2%",
        }}
      >
        <h2 className="section-title">QUÁ TRÌNH HÌNH THÀNH VÀ PHÁT TRIỂN</h2>
        <div
          style={{
            borderTop: "3px solid #0068C9",
            marginLeft: "40%",
            marginRight: "40%",
            marginBottom: "2%",
          }}
        ></div>
      </div>

      {/* Timeline */}
      <div
        className="container"
        data-aos="fade-up"
        data-aos-delay="300"
        style={{ marginTop: "2%" }}
      >
        <ul className="timeline">
          {timelineData.map((item, index) => (
            <li key={index}>
              <div className="year">{item.year}</div>
              <div className="image">
                {item.image ? (
                  item.image.length > 1 ? (
                    <Slideshow images={item.image} />
                  ) : (
                    <img
                      src={item.image[0]}
                      alt={item.title}
                      style={{
                        width: "100%",
                        height: "200px",
                        objectFit: "cover",
                        borderRadius: "6px",
                      }}
                    />
                  )
                ) : (
                  <div
                    style={{
                      height: "200px",
                      background: "#f0f0f0",
                      borderRadius: "6px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <span>Không Có Ảnh</span>
                  </div>
                )}
              </div>
              <div className="content">
                <h2>{item.title}</h2>
                <p>{item.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Hoạt động nổi bật */}
      <div
        className="container"
        data-aos="fade-up"
        data-aos-delay="200"
        style={{
          marginTop: "2%",
          marginBottom: "3%",
          textAlign: "center",
          alignItems: "center",
        }}
      >
        <h2 className="text-center mb-4 section-title">HOẠT ĐỘNG NỔI BẬT</h2>

        <div
          style={{
            borderTop: "3px solid #0068C9",
            marginLeft: "45%",
            marginRight: "45%",
            marginBottom: "2%",
          }}
        ></div>

        {/* Div hiển thị ảnh nền của topic được chọn */}
        <div
          className="mb-5"
          style={{
            backgroundImage: `url(${highlightsData[selectedHighlight].image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            height: "400px",
            width: "70%",
            margin: "0 15% 0 15%",
            borderRadius: "10px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
          }}
        />

        {/* Danh sách các topic */}
        <div className="row">
          {highlightsData.map((highlight, index) => (
            <div
              key={index}
              className="col-md-4 mb-4"
              onClick={() => setSelectedHighlight(index)}
              style={{ cursor: "pointer" }}
            >
              <div
                className="card h-100 border-0 shadow-sm"
                style={{
                  backgroundImage: `url(${highlight.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  minHeight: "200px",
                  position: "relative",
                  transition: "all 0.3s ease",
                  border:
                    selectedHighlight === index ? "3px solid #0068C9" : "none",
                  boxShadow:
                    selectedHighlight === index
                      ? "0 6px 12px rgba(0, 0, 0, 0.3)"
                      : "0 2px 4px rgba(0, 0, 0, 0.1)",
                }}
              >
                <div
                  className="card-body text-center"
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    backgroundColor: "rgba(0, 0, 0, 0.5)",
                    color: "#fff",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    transition: "background-color 0.3s ease",
                  }}
                >
                  <h5 className="card-title">{highlight.title}</h5>
                  <p className="card-text">{highlight.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Achievements;
