import React, { useContext } from "react";
import { LanguageContext } from "../components/LanguageContext";
import GradientButton from "./GradientButton";

// Component con để hiển thị mỗi mục
const SectionItem = ({
  title,
  description,
  cta,
  href,
  imageSrc,
  imageAlt,
  isReversed,
}) => {
  return (
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
      <div
        className={`row ${isReversed ? "flex-row-reverse" : ""} about-wrapper`}
      >
        {/* Phần hình ảnh */}
        <div
          className="col-md-6 about-image"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <img
            src={imageSrc}
            alt={imageAlt}
            style={{ width: "100%", height: "auto", borderRadius: "8px" }}
          />
        </div>
        {/* Phần văn bản */}
        <div
          className="col-md-6 about-text"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <h2
            className="section-title mb-3"
            style={{ textAlign: "center", marginTop: "5%" }}
          >
            {title}
          </h2>
          <p
            style={{
              textAlign: "justify",
              fontSize: "1.125rem",
              lineHeight: "1.7",
            }}
          >
            {description}
          </p>
          <GradientButton href={href} aos="fade-up" aosDelay="200">
            {cta}
          </GradientButton>
        </div>
      </div>
    </div>
  );
};

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
        <SectionItem
          title={t.about.title}
          description={t.about.description}
          cta={t.about.cta}
          href="/about"
          imageSrc="/images/about.webp"
          imageAlt="About us"
          isReversed={false}
        />
        <SectionItem
          title={t.achievements.title}
          description={t.achievements.description}
          cta={t.achievements.cta}
          href="/achievements"
          imageSrc="/images/achivement.JPG"
          imageAlt="Achievements"
          isReversed={true}
        />
        <SectionItem
          title={t.vision.title}
          description={t.vision.description}
          cta={t.vision.cta}
          href="/vision"
          imageSrc="/images/vision.JPG"
          imageAlt="Vision"
          isReversed={false}
        />
      </div>
    </section>
  );
}

export default AboutSection;
