import React, { useState, useEffect } from "react";

// Component EventDetail để hiển thị chi tiết sự kiện
function EventDetail({ title, images, content, isOdd }) {
  // State để quản lý chỉ số hình ảnh hiện tại
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  // Thêm tiền tố API URL vào các đường dẫn ảnh
  const API_BASE_URL = "https://api.justivalaw.com";
  const formattedImages = images.map((image) =>
    image.startsWith("/uploads/") ? `${API_BASE_URL}${image}` : image
  );
  // Tự động chuyển đổi hình ảnh sau 3 giây
  useEffect(() => {
    if (formattedImages.length > 0) {
      const interval = setInterval(() => {
        setCurrentImageIndex((prevIndex) =>
          prevIndex === formattedImages.length - 1 ? 0 : prevIndex + 1
        );
      }, 3000);

      return () => clearInterval(interval); // Dọn dẹp interval khi component unmount
    }
  }, [formattedImages.length]);

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
              {formattedImages.length > 0 ? (
                <img
                  src={formattedImages[currentImageIndex]}
                  alt={`${title} image ${currentImageIndex + 1}`}
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
                  No images available
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
            <div
              className="content-container"
              dangerouslySetInnerHTML={{ __html: content }}
              role="article"
            />
          </div>
        </div>
      </div>
      <style>
        {`
          .image-wrapper {
            position: relative;
            width: 100%;
            padding-bottom: 100%;
            height: 0;
            overflow: hidden;
            object-fit: cover;
          }
          .image-wrapper img {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
          .col-sm-4 {
            display: flex;
            justify-content: center;
            object-fit: cover;
          }
          .col-sm-8 {
            margin: 0 auto;
            text-align: center;
          }
          .content-container {
            text-align: justify;
            height: auto;
            width: 100%;
          }
          @media (max-width: 576px) {
            .col-sm-8, .col-sm-4 {
              text-align: center !important;
            }
            .col-sm-4 {
              margin-bottom: 20px;
            }
            .section-title {
              font-size: 1.5rem;
            }
            .content-container {
              font-size: 0.9rem;
            }
            .image-wrapper {
              width: 70%;
              padding-bottom: 70%;
            }
            .col-sm-8 {
              width: 100%;
            }
          }
        `}
      </style>
    </div>
  );
}

export default EventDetail;