import React, { useContext } from "react";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebookF,
  FaTwitter,
  FaEnvelope as FaEnvelopeSocial,
} from "react-icons/fa";
import { LanguageContext } from "./LanguageContext";

function Footer() {
  const { language } = useContext(LanguageContext);

  // Đối tượng bản dịch
  const translations = {
    vi: {
      justivaLaw: {
        title: "Justiva Law",
        description:
          "   Justiva Law Firm (JLF) tự hào là đơn vị đồng hành pháp lý hàng đầu, kết hợp chuyên môn sâu rộng, kinh nghiệm dày dặn của đội ngũ luật sư và công nghệ tiên tiến (AI, Blockchain).\n<br />\n   Chúng tôi cung cấp giải pháp pháp lý toàn diện cho cá nhân và doanh nghiệp trong nước lẫn quốc tế, từ dân sự, kinh doanh, đầu tư đến bất động sản. JLF cam kết bảo vệ quyền lợi khách hàng qua tranh tụng tại tòa án và trọng tài trong nước và quốc tế.",
      },
      workingHours: {
        title: "Thời gian làm việc",
        weekdays: "Thứ Hai đến Thứ Bảy",
        weekdayHours: "Sáng: 7h30' - 11h30'<br />Chiều: 13h00' - 17h00'",
        sunday: "Chủ Nhật",
        sundayHours: "Đóng cửa",
      },
      contact: {
        title: "Liên hệ",
        headquarters: "Trụ sở: 11bis Phan Ngữ, P.Đa Kao, Q.1, TP.HCM, Việt Nam",
        branch: "VP Hoạt động: Số 7A - 9, Đường số 12, KP 37, P.Bình Chiểu, TP.Thủ Đức, TP.HCM, Việt Nam",
        phone: "(+84) 0974 256 568",
        email: "justivalaw@gmail.com",
      },
      copyright: "© 2025 Justiva Law Firm. All rights reserved.",
    },
    en: {
      justivaLaw: {
        title: "Justiva Law",
        description:
          "   Justiva Law Firm (JLF) is proud to be a leading legal partner, combining deep expertise, extensive experience, and a team of seasoned lawyers supported by cutting-edge technologies (AI, Blockchain).\n<br />\n   We provide comprehensive legal solutions for individuals and businesses in both domestic and international matters—from civil and commercial to investment and real estate. JLF is committed to protecting clients' rights in litigation and arbitration, both locally and globally.",
      },
      workingHours: {
        title: "Working Hours",
        weekdays: "Monday to Saturday",
        weekdayHours: "Morning: 7:30 AM - 11:30 AM<br />Afternoon: 1:00 PM - 5:00 PM",
        sunday: "Sunday",
        sundayHours: "Closed",
      },
      contact: {
        title: "Contact",
        headquarters: "Head Office: 11bis Phan Ngu St., Đa Kao Ward, District 1, Ho Chi Minh City, Vietnam",
        branch: "Branch Office: No. 7A – 9, Street 12, Quarter 37, Binh Chieu Ward, Thu Đuc City, Ho Chi Minh City, Vietnam",
        phone: "(+84) 0974 256 568",
        email: "justivalaw@gmail.com",
      },
      copyright: "© 2025 Justiva Law Firm. All rights reserved.",
    },
  };

  const t = translations[language];

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
            <h5 className="section-title text-white mb-3">{t.justivaLaw.title}</h5>
            <p style={{ textAlign: "justify" }} dangerouslySetInnerHTML={{ __html: t.justivaLaw.description }} />
            {/* Biểu tượng mạng xã hội */}
            <div className="social-icons mt-3">
              <a href="/home" className="text-white me-2">
                <FaFacebookF />
              </a>
              <a href="/home" className="text-white me-2">
                <FaTwitter />
              </a>
              <a href="/home" className="text-white">
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
            <h5 className="section-title text-white mb-3">{t.workingHours.title}</h5>
            <div className="d-flex justify-content-between">
              <p style={{ paddingTop: "5%" }}>{t.workingHours.weekdays}</p>
              <p style={{ textAlign: "right", paddingTop: "5%" }} dangerouslySetInnerHTML={{ __html: t.workingHours.weekdayHours }} />
            </div>
            <div className="d-flex justify-content-between">
              <p>{t.workingHours.sunday}</p>
              <p>{t.workingHours.sundayHours}</p>
            </div>
          </div>

          {/* Cột 3: Liên hệ */}
          <div
            className="col-md-4 mb-4"
            data-aos="fade-up"
            data-aos-delay="300"
            style={{ marginTop: "20px" }}
          >
            <h5 className="section-title text-white mb-3">{t.contact.title}</h5>
            <div style={{ textAlign: "left", paddingTop: "5%" }}>
              <p>
                <FaMapMarkerAlt className="me-2" /> {t.contact.headquarters}
              </p>
              <p>
                <FaMapMarkerAlt className="me-2" /> {t.contact.branch}
              </p>
              <p>
                <FaPhone className="me-2" /> {t.contact.phone}
              </p>
              <p>
                <FaEnvelope className="me-2" /> {t.contact.email}
              </p>
            </div>
          </div>
        </div>
        <hr className="bg-light" />
        <p className="text-center mb-0">{t.copyright}</p>
      </div>
    </footer>
  );
}

export default Footer;