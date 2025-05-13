import React from "react";

function Partners() {
  const partnerLogos = [
    {
      src: "/images/partner/adamas.png",
      alt: "Partner Adamas",
      link: "https://adamasglobal.org/",
    },
    {
      src: "/images/partner/alfacens.png",
      alt: "Partner Alfacens",
      link: "https://alfacenscapital.com/",
    },
    {
      src: "/images/partner/happywislife.png",
      alt: "Partner Happy Wislife",
      link: "https://happywislife.com/",
    },
    {
      src: "/images/partner/investpush.png",
      alt: "Partner Investpush",
      link: "https://investpush.com/",
    },
    {
      src: "/images/partner/pw5.png",
      alt: "Partner Power 5 Technology",
      link: "https://power5technology.com/",
    },
    {
      src: "/images/partner/vta.png",
      alt: "Partner Vietnam Toilet Association",
      link: "http://www.toilet.vn/",
    },
    {
      src: "/images/partner/wischain.png",
      alt: "Partner Wis Chain",
      link: "https://wischain.org/",
    },
    {
      src: "/images/partner/wisgroup.png",
      alt: "Partner Wis Group",
      link: "https://wisgroup.io/",
    },
    {
      src: "/images/partner/wispay.png",
      alt: "Partner Wis Pay",
      link: "https://wispay.finance/",
    },
  ];

  // Lặp để tạo hiệu ứng chạy liên tục
  const scrollingLogos = [...partnerLogos, ...partnerLogos];

  return (
    <section className="py-5 bg-white" data-aos="fade-up" data-aos-delay="200">
      <div className="container" style={{ textAlign: "center" }}>
        <h2 className="mb-4 section-title fw-bold">ĐỐI TÁC CỦA CHÚNG TÔI</h2>
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
