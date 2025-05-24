import "./About.css";
import Personnel from "../components/Personal/Personnel";
import { useContext } from "react";
import { LanguageContext } from "../components/LanguageContext";

function About() {
  const { language } = useContext(LanguageContext);

  // Đối tượng bản dịch
  const translations = {
    vi: {
      hero: {
        title: "Chúng tôi là Justiva Law",
        description:
          "Justiva Law tự hào là người bạn đồng hành đáng tin cậy, cung cấp giải pháp pháp lý toàn diện, kết nối doanh nghiệp, nhà đầu tư và cộng đồng để kiến tạo một tương lai bền vững và thịnh vượng.",
      },
      history: {
        title: "HÀNH TRÌNH PHÁT TRIỂN JUSTIVA LAW",
        description:
          "  Hãng luật Justiva Law (2019) được thành lập trên cơ sở tách ra từ Investpush Legal. Công ty xây dựng trên nền tảng chuyên môn pháp lý, kinh nghiệm dày dặn và ứng dụng công nghệ (AI, Blockchain) để tư vấn và xây dựng chiến lược pháp lý cho doanh nghiệp Việt Nam và quốc tế.",
      },
      values: {
        title: "GIÁ TRỊ CỐT LÕI",
        items: [
          {
            title: "Tuân thủ và Đạo đức",
            description:
              "Chúng tôi đặt nền tảng hoạt động dựa trên sự tuân thủ pháp luật và các chuẩn mực đạo đức nghề nghiệp.",
          },
          {
            title: "Sáng tạo và Đổi mới",
            description:
              "Trong bối cảnh công nghệ, tình hình vĩ mô thay đổi nhanh chóng, chúng tôi không ngừng tìm kiếm và ứng dụng các giải pháp pháp lý sáng tạo, linh hoạt.",
          },
          {
            title: "Hiệu quả và Thực tiễn",
            description:
              "Mỗi tư vấn pháp lý không chỉ đúng luật mà còn phù hợp với mỗi khách hàng hoặc mô hình kinh doanh, chiến lược phát triển của khách hàng. Chúng tôi cam kết mang đến giải pháp khả thi, tối ưu chi phí và thời gian.",
          },
          {
            title: "Công nghệ và Chuyển đổi số",
            description:
              "Chúng tôi tận dụng công nghệ hiện đại để nâng cao hiệu suất làm việc, bảo mật dữ liệu và cung cấp dịch vụ pháp lý tiện lợi, thông minh cho khách hàng.",
          },
          {
            title: "Đồng hành và Hợp tác bền vững",
            description:
              "Chúng tôi không chỉ là một đơn vị cung cấp dịch vụ pháp lý, mà còn là đối tác chiến lược, đồng hành cùng khách hàng trên hành trình phát triển.",
          },
        ],
      },
      personnel: {
        title: "NHÂN SỰ",
      },
    },
    en: {
      hero: {
        title: "We are Justiva Law",
        description:
          "Justiva Law is proud to be your trusted legal partner, providing comprehensive legal solutions while connecting businesses, investors, and communities to build a sustainable and prosperous future.",
      },
      history: {
        title: "JUSTIVA LAW'S DEVELOPMENT JOURNEY",
        description:
          "  Justiva Law Firm (established in 2019) was founded as a spin-off from Investpush Legal. The firm is built upon a foundation of legal expertise, extensive experience, and the application of advanced technologies (AI, Blockchain) to provide strategic legal consulting services for Vietnamese and international businesses.",
      },
      values: {
        title: "CORE VALUES",
        items: [
          {
            title: "Compliance and Ethics",
            description:
              "We base our operations on strict compliance with the law and professional ethical standards.",
          },
          {
            title: "Innovation and Creativity",
            description:
              "In the fast-changing technological and macroeconomic landscape, we continuously seek and apply innovative and flexible legal solutions.",
          },
          {
            title: "Efficiency and Practicality",
            description:
              "Every legal consultation must not only be legally sound but also aligned with the client’s business model and development strategy. We are committed to delivering feasible legal solutions that optimize costs and time.",
          },
          {
            title: "Technology and Digital Transformation",
            description:
              "We leverage modern technology to enhance work efficiency, ensure data security, and provide smart, convenient legal services for our clients.",
          },
          {
            title: "Partnership and Sustainable Collaboration",
            description:
              "We are more than just a legal service provider—we are strategic partners, accompanying our clients throughout their growth journey.",
          },
        ],
      },
      personnel: {
        title: "OUR TEAM",
      },
    },
  };

  const t = translations[language];

  return (
    <>
      <div
        className="py-5"
        style={{
          position: "relative",
          backgroundImage: "url(/images/about-bg.jpg)",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          color: "#fff",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundImage: "url(/images/about-bg.jpg)",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            //filter: "blur(2px)",
            zIndex: 1,
          }}
        />
        <div
          className="overlay"
          style={{
            position: "relative",
            zIndex: 2,
          }}
        >
          <h1
            className="text-center mb-4"
            style={{
              fontSize: "3.5rem",
            }}
          >
            {t.hero.title}
          </h1>
          <div>
            <div className="col-lg-8 mx-auto">
              <p
                className="lead mb-4"
                style={{
                  textAlign: "center",
                }}
              >
                {t.hero.description}
              </p>
            </div>
          </div>
        </div>
      </div>

      <section className="py-5">
        {/* Historical */}
        <div
          className="container"
          data-aos="fade-up"
          data-aos-delay="200"
          style={{
            textAlign: "center",
          }}
        >
          <h2 className="section-title">{t.history.title}</h2>
          <div
            style={{
              borderTop: "3px solid #0068C9",
              marginLeft: "40%",
              marginRight: "40%",
              marginBottom: "2%",
            }}
          ></div>
          <div className="row">
            <div className="col-md-6">
              <img
                src="/images/hero-banner.webp"
                className="img-fluid rounded"
                alt="About Justiva Law"
              />
            </div>
            <div
              className="col-md-6"
              style={{ textAlign: "justify", fontSize: "1.5rem" }}
            >
              <p>{t.history.description}</p>
            </div>
          </div>
        </div>

        {/* OUR VALUE */}
        <div
          className="container custom-container"
          data-aos="fade-up"
          data-aos-delay="300"
          style={{
            textAlign: "center",
            paddingBottom: "2%",
            marginTop: "2%",
          }}
        >
          <h1 className="section-title">{t.values.title}</h1>
          <div
            style={{
              borderTop: "3px solid #0068C9",
              marginLeft: "40%",
              marginRight: "40%",
              marginBottom: "2%",
            }}
          ></div>
          <div className="row">
            <div className="col-md-3 custom-col">
              <p>
                <br />
                <strong>{t.values.items[0].title}</strong> -{" "}
                {t.values.items[0].description}
              </p>
              <p>
                <strong>{t.values.items[1].title}</strong> -{" "}
                {t.values.items[1].description}
              </p>
            </div>
            <div
              className="col-md-6 custom-col"
              style={{ textAlign: "center" }}
            >
              <p>
                <strong>{t.values.items[2].title}</strong> -{" "}
                {t.values.items[2].description}
              </p>
              <img
                src="/images/value.jpg"
                className="custom-img"
                alt="About Justiva Law"
              />
            </div>
            <div className="col-md-3 custom-col">
              <p>
                <br />
                <strong>{t.values.items[3].title}</strong> -{" "}
                {t.values.items[3].description}
              </p>
              <p>
                <strong>{t.values.items[4].title}</strong> -{" "}
                {t.values.items[4].description}
              </p>
            </div>
          </div>
        </div>

        {/* Personnel */}
        <div
          className="container"
          data-aos="fade-up"
          data-aos-delay="400"
          style={{ marginTop: "2%", textAlign: "center" }}
        >
          <h1 className="section-title">{t.personnel.title}</h1>
          <div
            style={{
              borderTop: "3px solid #0068C9",
              marginLeft: "40%",
              marginRight: "40%",
              marginBottom: "2%",
            }}
          ></div>
          <Personnel />
        </div>
      </section>
    </>
  );
}

export default About;
