function Vision() {
  return (
    <div className="container-fluid p-0">
      <div
        className="vision-grid"
        style={{
          backgroundImage: "url('/images/vision-bg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "100vh",
        }}
      >
        {/* Ô 1+2: Tiêu đề + Slogan */}
        <div className="grid-item span-2 overlay-box text-white text-center p-4 d-flex flex-column justify-content-center align-items-center">
          <h1 className="display-4 fw-bold">Tầm nhìn & Sứ mệnh</h1>
          <p className="lead">
            Lá chắn pháp lý vững chắc, dẫn đầu chuyển đổi số, kiến tạo giá trị
            bền vững
          </p>
        </div>

        {/* Ô 3: Sứ mệnh */}
        <div className="grid-item overlay-box text-white p-4 d-flex flex-column justify-content-center">
          <h2 className="fw-bold mb-3 text-center">Sứ Mệnh</h2>
          <p>
            Justiva Law mang sứ mệnh trở thành "lá chắn pháp lý" vững chắc cho
            khách hàng, đối tác và các doanh nghiệp có liên quan. Chúng tôi cung
            cấp giải pháp pháp lý toàn diện và kiến tạo giá trị bền vững cho xã
            hội thông qua chuyên môn và các dự án cộng đồng.
          </p>
        </div>

        {/* Ô 4: Tầm nhìn 2030 */}
        <div className="grid-item overlay-box text-white p-4 d-flex flex-column justify-content-center">
          <h2 className="fw-bold mb-3 text-center">Tầm Nhìn 2030</h2>
          <ul>
            <li>
              Tiên phong ứng dụng công nghệ trong hoạt động và dịch vụ pháp lý
              tại Việt Nam.
            </li>
            <li>
              Cung cấp dịch vụ pháp lý tích hợp công nghệ trên phạm vi đa quốc
              gia.
            </li>
          </ul>
        </div>

        {/* Ô 5: Tầm nhìn chiến lược */}
        <div className="grid-item overlay-box text-white p-4 d-flex flex-column justify-content-center">
          <h2 className="fw-bold mb-3 text-center">Tầm Nhìn Chiến Lược</h2>
          <p>
            Justiva Law là doanh nghiệp “cốt lõi” trong hệ sinh thái vận hành
            trên nền tảng luật, đa lĩnh vực: Pháp lý, Đầu tư, Thương mại, Công
            nghệ, Doanh nghiệp xã hội,..
          </p>
        </div>

        {/* Ô 6: Trống nhưng overlay giữ định dạng */}
        <div
          className="grid-item overlay-box "
          style={{
            backgroundImage: "url(/images/.jpg)",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        ></div>
      </div>
    </div>
  );
}

export default Vision;
