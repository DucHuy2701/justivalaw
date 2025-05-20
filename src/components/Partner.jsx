import React, { useContext } from "react";
import { LanguageContext } from "./LanguageContext";

function Partners() {
  const { language } = useContext(LanguageContext);

  // Đối tượng bản dịch
  const translations = {
    vi: {
      title: "ĐỐI TÁC CỦA CHÚNG TÔI",
      partners: [
        { alt: "Đối tác Adamas", src: "/images/partner/adamas.png", link: "https://adamasglobal.org/" },
        { alt: "Đối tác Alfacens", src: "/images/partner/alfacens.png", link: "https://alfacenscapital.com/" },
        { alt: "Đối tác Happy Wislife", src: "/images/partner/happywislife.png", link: "https://happywislife.com/" },
        { alt: "Đối tác Investpush", src: "/images/partner/investpush.png", link: "https://investpush.com/" },
        { alt: "Đối tác Power 5 Technology", src: "/images/partner/pw5.png", link: "https://power5technology.com/" },
        { alt: "Đối tác Hiệp hội Toilet Việt Nam", src: "/images/partner/vta.png", link: "http://www.toilet.vn/" },
        { alt: "Đối tác Wis Chain", src: "/images/partner/wischain.png", link: "https://wischain.org/" },
        { alt: "Đối tác Wis Group", src: "/images/partner/wisgroup.png", link: "https://wisgroup.io/" },
        { alt: "Đối tác Wis Pay", src: "/images/partner/wispay.png", link: "https://wispay.finance/" },
      ],
    },
    en: {
      title: "OUR PARTNERS",
      partners: [
        { alt: "Partner Adamas", src: "/images/partner/adamas.png", link: "https://adamasglobal.org/" },
        { alt: "Partner Alfacens", src: "/images/partner/alfacens.png", link: "https://alfacenscapital.com/" },
        { alt: "Partner Happy Wislife", src: "/images/partner/happywislife.png", link: "https://happywislife.com/" },
        { alt: "Partner Investpush", src: "/images/partner/investpush.png", link: "https://investpush.com/" },
        { alt: "Partner Power 5 Technology", src: "/images/partner/pw5.png", link: "https://power5technology.com/" },
        { alt: "Partner Vietnam Toilet Association", src: "/images/partner/vta.png", link: "http://www.toilet.vn/" },
        { alt: "Partner Wis Chain", src: "/images/partner/wischain.png", link: "https://wischain.org/" },
        { alt: "Partner Wis Group", src: "/images/partner/wisgroup.png", link: "https://wisgroup.io/" },
        { alt: "Partner Wis Pay", src: "/images/partner/wispay.png", link: "https://wispay.finance/" },
      ],
    },
  };

  const t = translations[language];
  const partnerLogos = t.partners;

  // Lặp để tạo hiệu ứng chạy liên tục
  const scrollingLogos = [...partnerLogos, ...partnerLogos];

  return (
    <section className="py-5 bg-white" data-aos="fade-up" data-aos-delay="200">
      <div className="container" style={{ textAlign: "center" }}>
        <h2 className="mb-4 section-title fw-bold">{t.title}</h2>
        <div
          style={{
            borderTop: "3px solid #0068C9",
            marginLeft: "45%",
            marginRight: "45%",
            marginBottom: "2%",
          }}
        ></div>
        <div
          className="tunnel-bg"
          style={{
            background:
              "linear-gradient(90deg, rgba(0,0,0,0.1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,0.1) 100%)",
            padding: "20px 0",
            borderRadius: "15px",
            boxShadow: "inset 0 0 20px rgba(0,0,0,0.2)",
            marginTop: "2%",
          }}
        >
          <div className="partners-container">
            <div className="partners-track">
              {scrollingLogos.map((logo, index) => (
                <div key={`${logo.alt}-${index}`} className="partner-logo">
                  <a
                    href={logo.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ display: "inline-block" }}
                  >
                    <img
                      src={logo.src}
                      alt={logo.alt}
                      style={{ cursor: "pointer" }}
                    />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Partners;