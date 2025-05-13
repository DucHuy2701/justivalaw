import { CiTextAlignJustify } from "react-icons/ci";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-dark text-white py-5" data-aos="fade-up">
      <div className="container">
        <div className="row">
          <div className="col-md-6" data-aos="fade-up" data-aos-delay="100">
            <h5 className="section-title text-white">Justiva Law</h5>
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
          </div>
          <div className="col-md-6" data-aos="fade-up" data-aos-delay="200">
            <h5 className="section-title text-white">Liên hệ</h5>
            <p>
              <FaMapMarkerAlt /> Trụ sở: 11bis Phan Ngữ, P.Đa Kao, Q.1, TP.HCM,
              Việt Nam
            </p>
            <p>
              <FaMapMarkerAlt /> VP Hoạt động: Số 7A - 9, Đường số 12, KP 37,
              P.Bình Chiểu, TP.Thủ Đức, TP.HCM, Việt Nam
            </p>
            <p>
              <FaPhone /> &#40;+84&#41; 0974 256 568
            </p>
            <p>
              <FaEnvelope /> justivalaw@gmail.com
            </p>
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
