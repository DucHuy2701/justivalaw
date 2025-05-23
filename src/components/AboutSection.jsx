import React, { useContext } from "react";
import { LanguageContext } from "../components/LanguageContext";
import GradientButton from "./GradientButton";

function AboutSection() {
  const { language } = useContext(LanguageContext);
  const translations = {
    vi: {
      about: {
        title: "CÔNG TY LUẬT TNHH JUSTIVA LAW",
        description:
          "  Chúng tôi có nhiều năm kinh nghiệm trong việc hỗ trợ các nhà đầu tư trong và ngoài nước thực hiện các Dự án, thường xuyên tư vấn pháp lý cho các doanh nghiệp. Với đội ngũ Luật sư có nhiều năm kinh nghiệm trong lĩnh vực tranh tụng, tư vấn pháp lý cho các đối tác trong và ngoài nước đã khẳng định được vị thế của Công ty Luật TNHH Justiva Law trong khu vực Hồ Chí Minh – Hà Nội. Chất lượng dịch vụ của chúng tôi được khách hàng trong nước cũng như quốc tế đánh giá cao và vô cùng hài lòng.",
        cta: "Tìm hiểu thêm",
      },
      achievements: {
        title: "HÀNH TRÌNH VÀ THÀNH TỰU",
        description:
          "  Hành trình của Justiva Law từ năm 2019 đến nay ghi dấu với các cột mốc như thành lập, hợp tác giáo dục, chuyển đổi số và tư vấn chiến lược IPO. Chúng tôi tự hào tổ chức hội nghị pháp lý, tài trợ cộng đồng và phát triển dự án bất động sản, khẳng định vị thế trong lĩnh vực pháp lý.",
        cta: "Tìm hiểu thêm",
      },
      vision: {
        title: "TẦM NHÌN VÀ SỨ MỆNH",
        description:
          "  Justiva Law cam kết trở thành lá chắn pháp lý vững chắc, cung cấp giải pháp toàn diện và giá trị bền vững cho xã hội. Với tầm nhìn 2030, chúng tôi tiên phong ứng dụng công nghệ, mở rộng dịch vụ pháp lý đa quốc gia và trở thành cốt lõi trong hệ sinh thái doanh nghiệp vận hành trên nền tảng luật.",
        cta: "Tìm hiểu thêm",
      },
    },
    en: {
      about: {
        title: "JUSTIVA LAW LLC",
        description:
          "  With many years of experience, we provide legal support for domestic and foreign investors in implementing various projects. We regularly offer legal consultancy services to businesses. Our team of lawyers has extensive expertise in litigation and legal advisory services for both domestic and international partners, affirming the position of Justiva Law LLC in the Ho Chi Minh City – Hanoi region. The quality of our services has been highly valued and appreciated by both domestic and international clients for their excellence and satisfaction.",
        cta: "Learn More",
      },
      achievements: {
        title: "OUR JOURNEY AND ACHIEVEMENTS",
        description:
          "  Since its establishment in 2019, Justiva Law has marked key milestones such as its founding, educational partnerships, digital transformation, and strategic IPO advisory services. We take pride in organizing legal conferences, sponsoring community initiatives, and contributing to real estate development projects—affirming our strong position in the legal sector.",
        cta: "Learn More",
      },
      vision: {
        title: "VISION & MISSION",
        description:
          "  Justiva Law is committed to becoming a solid legal shield, delivering comprehensive legal solutions and sustainable value for society. With a vision toward 2030, we aim to lead in legal technology adoption, expand cross-border legal services, and become a core pillar in the legal-based business ecosystem.",
        cta: "Learn More",
      },
    },
  };

  const t = translations[language];

  return (
    <section
      className="py-5 bg-light"
      data-aos="fade-up"
      style={{ overflow: "hidden" }}
    >
      <div className="container-father">
        {/* Cty JLF */}
        <div
          className="container"
          style={{
            marginTop: "3%",
            marginBottom: "2%",
            paddingBottom: "3%",
            borderBottom: "1px solid #cce3e8",
            overflow: "hidden",
          }}
        >
          <div className="about-wrapper">
            {/* Phần hình ảnh */}
            <div
              className="about-image"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <img
                src="/images/about.webp"
                alt="About us"
                style={{ width: "100%", height: "auto", borderRadius: "8px" }}
              />
            </div>
            {/* Phần văn bản */}
            <div className="about-text" data-aos="fade-up" data-aos-delay="200">
              <h2
                className="section-title mb-3"
                style={{ textAlign: "center" }}
              >
                {t.about.title}
              </h2>
              <p
                style={{
                  textAlign: "justify",
                  fontSize: "1.125rem",
                  lineHeight: "1.7",
                }}
              >
                {t.about.description}
              </p>
              <GradientButton href="/about" aos="fade-up" aosDelay="200">
                {t.about.cta}
              </GradientButton>
            </div>
          </div>
        </div>

        {/* Achievements */}
        <div
          className="container"
          style={{
            marginTop: "3%",
            marginBottom: "2%",
            paddingBottom: "3%",
            borderBottom: "1px solid #cce3e8",
            overflow: "hidden",
          }}
        >
          <div className="about-wrapper">
            {/* Phần hình ảnh */}
            <div
              className="about-image"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <img
                src="/images/achivement.JPG"
                alt="Achievements"
                style={{ width: "100%", height: "auto", borderRadius: "8px" }}
              />
            </div>
            {/* Phần văn bản */}
            <div className="about-text" data-aos="fade-up" data-aos-delay="200">
              <h2
                className="section-title mb-3"
                style={{ textAlign: "center" }}
              >
                {t.achievements.title}
              </h2>
              <p
                style={{
                  textAlign: "justify",
                  fontSize: "1.125rem",
                  lineHeight: "1.7",
                }}
              >
                {t.achievements.description}
              </p>
              <GradientButton href="/achievements" aos="fade-up" aosDelay="200">
                {t.achievements.cta}
              </GradientButton>
            </div>
          </div>
        </div>

        {/* Vision */}
        <div
          className="container"
          style={{
            marginTop: "3%",
            marginBottom: "2%",
            paddingBottom: "3%",
            borderBottom: "1px solid #cce3e8",
            overflow: "hidden",
          }}
        >
          <div className="about-wrapper">
            {/* Phần hình ảnh */}
            <div
              className="about-image"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <img
                src="/images/vision.JPG"
                alt="Vision"
                style={{ width: "100%", height: "auto", borderRadius: "8px" }}
              />
            </div>
            {/* Phần văn bản */}
            <div className="about-text" data-aos="fade-up" data-aos-delay="200">
              <h2
                className="section-title mb-3"
                style={{ textAlign: "center" }}
              >
                {t.vision.title}
              </h2>
              <p
                style={{
                  textAlign: "justify",
                  fontSize: "1.125rem",
                  lineHeight: "1.7",
                }}
              >
                {t.vision.description}
              </p>
              <GradientButton href="/vision" aos="fade-up" aosDelay="200">
                {t.vision.cta}
              </GradientButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
