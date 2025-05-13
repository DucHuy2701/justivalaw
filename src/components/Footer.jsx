import React from "react";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebookF,
  FaTwitter,
  FaEnvelope as FaEnvelopeSocial,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-dark text-white py-5" data-aos="fade-up">
      <div className="container" style={{ textAlign: "center" }}>
        <div className="row">
          {/* Cột 1: Justiva Law */}
          <div
            className="col-md-4 mb-4"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <img
              src="/images/LOGO.png"
              alt=""
              width={"15%"}
              height={"20%"}
              style={{ marginRight: "5%", marginBottom: "5%" }}
            />
            <h5 className="section-title text-white mb-3">Justiva Law</h5>
            <p style={{ textAlign: "justify" }}>
              &emsp;&emsp; Justiva Law Firm (JLF) tự hào là đơn vị đồng hành
              pháp lý hàng đầu, kết hợp chuyên môn sâu rộng, kinh nghiệm dày dặn
              của đội ngũ luật sư và công nghệ tiên tiến (AI, Blockchain).
              <br />
              &emsp;&emsp; Chúng tôi cung cấp giải pháp pháp lý toàn diện cho cá
              nhân và doanh nghiệp trong nước lẫn quốc tế, từ dân sự, kinh
              doanh, đầu tư đến bất động sản. JLF cam kết bảo vệ quyền lợi khách
              hàng qua tranh tụng tại tòa án và trọng tài trong nước và quốc tế.
            </p>
            {/* Biểu tượng mạng xã hội */}
            <div className="social-icons mt-3">
              <a href="#" className="text-white me-2">
                <FaFacebookF />
              </a>
              <a href="#" className="text-white me-2">
                <FaTwitter />
              </a>
              <a href="#" className="text-white">
                <FaEnvelopeSocial />
              </a>
            </div>
          </div>

          {/* Cột 2: Working Hours */}
          <div
            className="col-md-4 mb-4"
            data-aos="fade-up"
            data-aos-delay="200"
            style={{ marginTop: "20px" }}
          >
            <h5 className="section-title text-white mb-3">
              Thời gian làm việc
            </h5>
            <div className="d-flex justify-content-between">
              <p style={{ paddingTop: "5%" }}>Thứ Hai đến Thứ Bảy</p>
              <p style={{ textAlign: "right", paddingTop: "5%" }}>
                Sáng: 7h30' - 11h30'
                <br />
                Chiều: 13h00' - 17h00'
              </p>
            </div>
            <div className="d-flex justify-content-between">
              <p>Chủ Nhật</p>
              <p>Đóng cửa</p>
            </div>
          </div>

          {/* Cột 3: Liên hệ */}
          <div
            className="col-md-4 mb-4"
            data-aos="fade-up"
            data-aos-delay="300"
            style={{ marginTop: "20px" }}
          >
            <h5 className="section-title text-white mb-3">Liên hệ</h5>
            <div style={{ textAlign: "left", paddingTop: "5%" }}>
              <p>
                <FaMapMarkerAlt className="me-2" /> Trụ sở: 11bis Phan Ngữ, P.Đa
                Kao, Q.1, TP.HCM, Việt Nam
              </p>
              <p>
                <FaMapMarkerAlt className="me-2" /> VP Hoạt động: Số 7A - 9,
                Đường số 12, KP 37, P.Bình Chiểu, TP.Thủ Đức, TP.HCM, Việt Nam
              </p>
              <p>
                <FaPhone className="me-2" /> (+84) 0974 256 568
              </p>
              <p>
                <FaEnvelope className="me-2" /> justivalaw@gmail.com
              </p>
            </div>
          </div>
        </div>
        <hr className="bg-light" />
        <p className="text-center mb-0">
          © 2025 Justiva Law Firm. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
