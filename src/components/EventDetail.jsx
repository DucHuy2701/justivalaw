import React, { useState, useEffect } from "react";

// Component EventDetail để hiển thị chi tiết sự kiện
function EventDetail({ title, images, content, isOdd }) {
  // State để quản lý chỉ số hình ảnh hiện tại
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Tự động chuyển đổi hình ảnh sau 3 giây
  useEffect(() => {
    if (images.length > 0) {
      const interval = setInterval(() => {
        setCurrentImageIndex((prevIndex) =>
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
      }, 3000);

      return () => clearInterval(interval); // Dọn dẹp interval khi component unmount
    }
  }, [images.length]);

  // Hàm để áp dụng justify cho các đoạn văn trong content
  const renderContentWithJustify = (content) => {
    return React.Children.map(content, (child) => {
      if (child.type === "p") {
        return React.cloneElement(child, {
          style: {
            ...child.props.style,
            textAlign: "justify",
          },
        });
      }
      return child;
    });
  };

  return (
    <div
      className="py-5"
      style={{
        backgroundColor: isOdd ? "#ffffff" : "#e3e3e3",
        textAlign: "center",
      }}
    >
      <div className="container">
        <div className="row align-items-center justify-content-center">
          {/* Hình ảnh */}
          <div
            className={
              isOdd
                ? "col-sm-4 order-sm-2 col-12"
                : "col-sm-4 order-sm-1 col-12"
            }
          >
            <div className="image-wrapper">
              {images.length > 0 ? (
                <img
                  src={images[currentImageIndex]}
                  alt={title}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    borderRadius: "8px",
                  }}
                />
              ) : (
                <div
                  style={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "#f0f0f0",
                    borderRadius: "8px",
                    color: "#666",
                    fontSize: "1rem",
                  }}
                >
                  Không có hình ảnh
                </div>
              )}
            </div>
          </div>
          {/* Nội dung */}
          <div
            className={
              isOdd
                ? "col-sm-8 order-sm-1 col-12"
                : "col-sm-8 order-sm-2 col-12"
            }
          >
            <h2
              className="mb-3 section-title"
              style={{
                textAlign: "center",
              }}
            >
              {title}
            </h2>
            <div className="content-container">
              {renderContentWithJustify(content)}
            </div>
          </div>
        </div>
      </div>
      <style>
        {`
          .image-wrapper {
            position: relative;
            width: 100%; /* Chiếm full chiều rộng của col-sm-4 */
            padding-bottom: 100%; /* Tạo hình vuông (chiều cao bằng chiều rộng) */
            height: 0;
            overflow: hidden;
          }
          .image-wrapper img {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
          }
          .col-sm-4 {
            display: flex;
            justify-content: center; /* Căn giữa hình ảnh trong col-sm-4 */
          }
          .col-sm-8 {
            margin: 0 auto; /* Căn giữa nội dung */
            text-align: center; /* Căn giữa nội dung */
          }
          .content-container {
            text-align: justify; /* Nội dung văn bản căn đều */
            height: auto; /* Chiều cao tự mở rộng theo nội dung */
            width: 100%; /* Lấp đầy chiều rộng của col-sm-8 */
          }
            @media (max-width: 576px) {
            .col-sm-8, .col-sm-4 {
              text-align: center !important; /* Căn giữa toàn bộ nội dung trên mobile */
            }
            .col-sm-4 {
              margin-bottom: 20px; /* Khoảng cách giữa hình và nội dung trên mobile */
            }
            .section-title {
              font-size: 1.5rem; /* Giảm kích thước tiêu đề trên mobile */
            }
            p {
              font-size: 0.9rem; /* Giảm kích thước chữ đoạn văn trên mobile */
            }
            .image-wrapper {
              width: 70%; /* Tăng kích thước trên mobile để dễ nhìn */
              padding-bottom: 70%; /* Giữ hình vuông */
            }
            .col-sm-8 {
              width: 100%; /* Full chiều rộng trên mobile */
            }
          }
        `}
      </style>
    </div>
  );
}

export default EventDetail;
