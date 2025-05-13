import PersonnelTech from "../components/PersonnelTech";

function Technology() {
  return (
    <>
      <div
        className="py-5"
        data-aos="fade-up"
        data-aos-delay="200"
        style={{
          textAlign: "center",
          backgroundImage: "url(/images/tech_bg_2.jpg)",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <h1
          className="mb-4"
          style={{
            fontSize: "3.5rem",
            color: "#fff",
          }}
        >
          Công nghệ và chuyển đổi số
        </h1>
        <div>
          <div className="col-lg-8 mx-auto">
            <p
              className="lead mb-4"
              style={{
                color: "#fff",
              }}
            >
              Justiva Law tiên phong trong việc tích hợp công nghệ hiện đại như
              AI và Blockchain vào các hoạt động pháp lý, mang đến giải pháp
              thông minh, bảo mật và hiệu quả cho khách hàng.
            </p>
          </div>
        </div>
      </div>

      <div
        className="container-fluid py-5"
        data-aos="fade-up"
        data-aos-delay="300"
        style={{
          backgroundImage: "url(/images/service-bg.jpg)",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          color: "#222",
          marginTop: "3%",
          marginBottom: "3%",
          textAlign: "center",
        }}
      >
        <h2
          className="mb-5 section-title"
          style={{ fontSize: "2rem", fontWeight: "bold" }}
        >
          ỨNG DỤNG VÀ PHÁT TRIỂN CÔNG NGHỆ
        </h2>
        <div className="row justify-content-center">
          {/* Principle 1: Ứng dụng AI trong pháp lý */}
          <div className="col-md-3 col-sm-6 mb-4">
            <div className="d-flex flex-column align-items-center">
              <div
                style={{
                  width: "60px",
                  height: "60px",
                  backgroundColor: "#fff",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "1rem",
                }}
              >
                <span style={{ fontSize: "1.5rem", color: "#d81b60" }}>🤖</span>{" "}
                {/* Placeholder icon */}
              </div>
              <h3
                className="mb-3"
                style={{ fontSize: "1.35rem", fontWeight: "bold" }}
              >
                ỨNG DỤNG AI
              </h3>
              <p style={{ fontSize: "1.1rem" }}>
                Chúng tôi sử dụng trí tuệ nhân tạo (AI) để phân tích dữ liệu
                pháp lý, tự động hóa quy trình tư vấn và nâng cao độ chính xác
                trong việc dự đoán rủi ro pháp lý. AI giúp tối ưu hóa thời gian
                xử lý, từ việc soạn thảo hợp đồng đến phân tích tranh tụng, mang
                lại trải nghiệm dịch vụ nhanh chóng và chính xác.
              </p>
            </div>
          </div>

          {/* Principle 2: Blockchain cho bảo mật và minh bạch */}
          <div className="col-md-3 col-sm-6 mb-4">
            <div className="d-flex flex-column align-items-center">
              <div
                style={{
                  width: "60px",
                  height: "60px",
                  backgroundColor: "#fff",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "1rem",
                }}
              >
                <span style={{ fontSize: "1.5rem", color: "#d81b60" }}>🔒</span>{" "}
                {/* Placeholder icon */}
              </div>
              <h3
                className="mb-3"
                style={{ fontSize: "1.35rem", fontWeight: "bold" }}
              >
                BLOCKCHAIN
              </h3>
              <p style={{ fontSize: "1.1rem" }}>
                Công nghệ Blockchain được tích hợp để đảm bảo bảo mật dữ liệu
                khách hàng và tăng cường tính minh bạch trong các giao dịch pháp
                lý. Các hợp đồng thông minh (smart contracts) được triển khai để
                tự động hóa và bảo vệ quyền lợi khách hàng trong các lĩnh vực
                như bất động sản, đầu tư và tài chính.
              </p>
            </div>
          </div>

          {/* Principle 3: Lưu trữ di chúc điện tử */}
          <div className="col-md-3 col-sm-6 mb-4">
            <div className="d-flex flex-column align-items-center">
              <div
                style={{
                  width: "60px",
                  height: "60px",
                  backgroundColor: "#fff",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "1rem",
                }}
              >
                <span style={{ fontSize: "1.5rem", color: "#d81b60" }}>📜</span>{" "}
                {/* Placeholder icon */}
              </div>
              <h3
                className="mb-3"
                style={{ fontSize: "1.35rem", fontWeight: "bold" }}
              >
                DI CHÚC ĐIỆN TỬ
              </h3>
              <p style={{ fontSize: "1.1rem" }}>
                Justiva Law đang phát triển giải pháp lưu trữ di chúc điện tử,
                cho phép khách hàng soạn thảo, lưu giữ và công bố di chúc một
                cách an toàn và tiện lợi. Dịch vụ này tích hợp công nghệ mã hóa
                để bảo vệ thông tin cá nhân và đảm bảo tính hợp pháp của di
                chúc.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* tầm nhìn và cam kết */}
      <div
        className="container py-5"
        data-aos="fade-up"
        data-aos-delay="400"
        style={{ textAlign: "center" }}
      >
        <div className="row">
          {/* Column 1: TẦM NHÌN CÔNG NGHỆ */}
          <div className="col-md-6 mb-4">
            <img
              src="/images/tech_1.png"
              alt="Vision Technology"
              style={{
                width: "90%",
                height: "auto",
                marginBottom: "1rem",
              }}
            />
            <h1 className="section-title">TẦM NHÌN CÔNG NGHỆ</h1>
            <p
              style={{
                fontSize: "1.15rem",
                textAlign: "justify",
                marginLeft: "5%",
                marginRight: "5%",
              }}
            >
              Trong bối cảnh công nghệ thay đổi nhanh chóng, Justiva Law không
              ngừng tìm kiếm các giải pháp pháp lý sáng tạo. Chúng tôi định hình
              hình thái doanh nghiệp pháp lý tích hợp công nghệ, ưu tiên AI và
              Blockchain, để cung cấp dịch vụ tiện lợi, bảo mật và phù hợp với
              nhu cầu toàn cầu. Mục tiêu là trở thành doanh nghiệp pháp lý tiên
              phong tại Việt Nam và mở rộng phạm vi đa quốc gia.
            </p>
          </div>

          {/* Column 2: CAM KẾT VỚI KHÁCH HÀNG */}
          <div className="col-md-6 mb-4">
            <img
              src="/images/tech_2.png"
              alt="Commitment to Clients"
              style={{
                width: "90%",
                height: "auto",
                marginBottom: "1rem",
              }}
            />
            <h1 className="section-title">CAM KẾT VỚI KHÁCH HÀNG</h1>
            <p
              style={{
                fontSize: "1.15rem",
                textAlign: "justify",
                marginLeft: "5%",
                marginRight: "5%",
              }}
            >
              Bằng cách tận dụng công nghệ, Justiva Law cam kết mang đến dịch vụ
              pháp lý thông minh, giúp khách hàng tiết kiệm thời gian, chi phí
              và đảm bảo an toàn pháp lý trong mọi giao dịch. Chúng tôi đồng
              hành cùng doanh nghiệp và cá nhân để kiến tạo giá trị bền vững
              thông qua công nghệ và chuyên môn pháp lý.
            </p>
          </div>
        </div>
      </div>

      <div
        className="container py-5"
        style={{ textAlign: "center" }}
        data-aos="fade-up"
        data-aos-delay="400"
      >
        <h2
          className="section-title"
          style={{
            fontSize: "2rem",
            fontWeight: "bold",
            paddingBottom: "1%",
            marginBottom: "0",
          }}
        >
          ĐỘI NGŨ TEAM CÔNG NGHỆ
        </h2>
        <div
          style={{
            borderTop: "3px solid #0068C9",
            marginLeft: "45%",
            marginRight: "45%",
            marginTop: 0,
          }}
        ></div>
        <PersonnelTech />
      </div>
    </>
  );
}

export default Technology;
