import React, { useContext } from "react";
import { LanguageContext } from "../components/LanguageContext";

function Vision() {
  const { language } = useContext(LanguageContext);

  // Đối tượng bản dịch
  const translations = {
    vi: {
      header: {
        title: "Tầm nhìn & Sứ mệnh",
        slogan:
          "Lá chắn pháp lý vững chắc, dẫn đầu chuyển đổi số, kiến tạo giá trị bền vững",
      },
      mission: {
        title: "Sứ Mệnh",
        description:
          "Justiva Law mang sứ mệnh trở thành 'lá chắn pháp lý' vững chắc cho khách hàng, đối tác và các doanh nghiệp có liên quan. Chúng tôi cung cấp giải pháp pháp lý toàn diện và kiến tạo giá trị bền vững cho xã hội thông qua chuyên môn và các dự án cộng đồng.",
      },
      vision2030: {
        title: "Tầm Nhìn 2030",
        items: [
          "Tiên phong ứng dụng công nghệ trong hoạt động và dịch vụ pháp lý tại Việt Nam.",
          "Cung cấp dịch vụ pháp lý tích hợp công nghệ trên phạm vi đa quốc gia.",
        ],
      },
      strategicVision: {
        title: "Tầm Nhìn Chiến Lược",
        description:
          "Justiva Law là doanh nghiệp 'cốt lõi' trong hệ sinh thái vận hành trên nền tảng luật, đa lĩnh vực: Pháp lý, Đầu tư, Thương mại, Công nghệ, Doanh nghiệp xã hội,...",
      },
    },
    en: {
      header: {
        title: "Vision & Mission",
        slogan:
          "A solid legal shield, leading digital transformation, creating sustainable value.",
      },
      mission: {
        title: "Mission",
        description:
          'Justiva Law’s mission is to become a strong "legal shield" for clients, partners, and related enterprises. We provide comprehensive legal solutions and create sustainable social value through professional services and community projects.',
      },
      vision2030: {
        title: "Vision 2030",
        items: [
          "Pioneering the application of technology in legal services and operations in Vietnam.",
          "Delivering integrated legal services with technology on a global scale.",
        ],
      },
      strategicVision: {
        title: "Strategic Vision",
        description:
          "Justiva Law is a 'core' enterprise in the legal operations ecosystem across various fields: Legal, Investment, Commerce, Technology, and Social Enterprises.",
      },
    },
  };

  const t = translations[language];

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
          <h1 className="display-4 fw-bold">{t.header.title}</h1>
          <p className="lead">{t.header.slogan}</p>
        </div>

        {/* Ô 3: Sứ mệnh */}
        <div className="grid-item overlay-box text-white p-4 d-flex flex-column justify-content-center">
          <h2 className="fw-bold mb-3 text-center">{t.mission.title}</h2>
          <p>{t.mission.description}</p>
        </div>

        {/* Ô 4: Tầm nhìn 2030 */}
        <div className="grid-item overlay-box text-white p-4 d-flex flex-column justify-content-center">
          <h2 className="fw-bold mb-3 text-center">{t.vision2030.title}</h2>
          <ul>
            {t.vision2030.items.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        {/* Ô 5: Tầm nhìn chiến lược */}
        <div className="grid-item overlay-box text-white p-4 d-flex flex-column justify-content-center">
          <h2 className="fw-bold mb-3 text-center">{t.strategicVision.title}</h2>
          <p>{t.strategicVision.description}</p>
        </div>

        {/* Ô 6: Trống nhưng overlay giữ định dạng */}
        <div className="grid-item overlay-box"></div>
      </div>
    </div>
  );
}

export default Vision;