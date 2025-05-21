import { useContext } from "react";
import { LanguageContext } from "../components/LanguageContext";
import PersonnelTech from "../components/PersonnelTech";

function Technology() {
  const { language } = useContext(LanguageContext);

  // Đối tượng bản dịch
  const translations = {
    vi: {
      hero: {
        title: "Công nghệ và chuyển đổi số",
        description:
          "Justiva Law tiên phong trong việc tích hợp công nghệ hiện đại như AI và Blockchain vào các hoạt động pháp lý, mang đến giải pháp thông minh, bảo mật và hiệu quả cho khách hàng.",
      },
      principles: {
        title: "ỨNG DỤNG VÀ PHÁT TRIỂN CÔNG NGHỆ",
        items: [
          {
            title: "ỨNG DỤNG AI",
            icon: "🤖",
            description:
              "Chúng tôi sử dụng trí tuệ nhân tạo (AI) để phân tích dữ liệu pháp lý, tự động hóa quy trình tư vấn và nâng cao độ chính xác trong việc dự đoán rủi ro pháp lý. AI giúp tối ưu hóa thời gian xử lý, từ việc soạn thảo hợp đồng đến phân tích tranh tụng, mang lại trải nghiệm dịch vụ nhanh chóng và chính xác.",
          },
          {
            title: "BLOCKCHAIN",
            icon: "🔒",
            description:
              "Công nghệ Blockchain được tích hợp để đảm bảo bảo mật dữ liệu khách hàng và tăng cường tính minh bạch trong các giao dịch pháp lý. Các hợp đồng thông minh (smart contracts) được triển khai để tự động hóa và bảo vệ quyền lợi khách hàng trong các lĩnh vực như bất động sản, đầu tư và tài chính.",
          },
          {
            title: "DI CHÚC ĐIỆN TỬ",
            icon: "📜",
            description:
              "Justiva Law đang phát triển giải pháp lưu trữ di chúc điện tử, cho phép khách hàng soạn thảo, lưu giữ và công bố di chúc một cách an toàn và tiện lợi. Dịch vụ này tích hợp công nghệ mã hóa để bảo vệ thông tin cá nhân và đảm bảo tính hợp pháp của di chúc.",
          },
        ],
      },
      vision: {
        title: "TẦM NHÌN CÔNG NGHỆ",
        image: "/images/tech_1.png",
        alt: "Tầm nhìn công nghệ",
        description:
          "Trong bối cảnh công nghệ thay đổi nhanh chóng, Justiva Law không ngừng tìm kiếm các giải pháp pháp lý sáng tạo. Chúng tôi định hình hình thái doanh nghiệp pháp lý tích hợp công nghệ, ưu tiên AI và Blockchain, để cung cấp dịch vụ tiện lợi, bảo mật và phù hợp với nhu cầu toàn cầu. Mục tiêu là trở thành doanh nghiệp pháp lý tiên phong tại Việt Nam và mở rộng phạm vi đa quốc gia.",
      },
      commitment: {
        title: "CAM KẾT VỚI KHÁCH HÀNG",
        image: "/images/tech_2.png",
        alt: "Cam kết với khách hàng",
        description:
          "Bằng cách tận dụng công nghệ, Justiva Law cam kết mang đến dịch vụ pháp lý thông minh, giúp khách hàng tiết kiệm thời gian, chi phí và đảm bảo an toàn pháp lý trong mọi giao dịch. Chúng tôi đồng hành cùng doanh nghiệp và cá nhân để kiến tạo giá trị bền vững thông qua công nghệ và chuyên môn pháp lý.",
      },
      team: {
        title: "ĐỘI NGŨ TEAM CÔNG NGHỆ",
      },
    },
    en: {
      hero: {
        title: "Technology and Digital Transformation",
        description:
          "Justiva Law is a pioneer in integrating modern technologies such as AI and Blockchain into legal activities, delivering smart, secure, and efficient solutions to clients.",
      },
      principles: {
        title: "APPLICATION AND DEVELOPMENT OF TECHNOLOGY",
        items: [
          {
            title: "AI APPLICATION",
            icon: "🤖",
            description:
              "We use Artificial Intelligence (AI) to analyze legal data, automate consulting processes, and enhance the accuracy of legal risk prediction. AI optimizes processing time-from drafting contracts to analyzing disputes—delivering fast and accurate legal services.",
          },
          {
            title: "BLOCKCHAIN",
            icon: "🔒",
            description:
              "Blockchain technology is integrated to ensure the security of client data and enhance transparency in legal transactions. Smart contracts are deployed to automate operations and protect client rights in areas such as real estate, investment, and finance.",
          },
          {
            title: "E-WILL",
            icon: "📜",
            description:
              "Justiva Law is developing an electronic will storage solution, enabling clients to draft, store, and publish wills safely and conveniently. This service integrates technology and encryption to protect personal data and ensure the legal validity of the will.",
          },
        ],
      },
      vision: {
        title: "TECHNOLOGY VISION",
        image: "/images/tech_1.png",
        alt: "Technology Vision",
        description:
          "In the context of rapidly changing technology, Justiva Law continuously seeks innovative legal solutions. We are shaping the model of a tech-integrated legal enterprise, leveraging AI and Blockchain to provide convenient, secure services tailored to global demands. Our goal is to become a pioneering legal technology enterprise in Vietnam and expand internationally.",
      },
      commitment: {
        title: "COMMITMENT TO CLIENTS",
        image: "/images/tech_2.png",
        alt: "Commitment to Clients",
        description:
          "By leveraging technology, Justiva Law is committed to delivering smart legal services that help clients save time and costs while ensuring legal safety in all transactions. We work alongside businesses and individuals to create sustainable value through legal expertise and technology.",
      },
      team: {
        title: "TECHNOLOGY TEAM",
      },
    },
  };

  const t = translations[language];

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
          {t.hero.title}
        </h1>
        <div>
          <div className="col-lg-8 mx-auto">
            <p
              className="lead mb-4"
              style={{
                color: "#fff",
              }}
            >
              {t.hero.description}
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
          {t.principles.title}
        </h2>
        <div className="row justify-content-center">
          {t.principles.items.map((item, index) => (
            <div className="col-md-3 col-sm-6 mb-4" key={index}>
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
                  <span style={{ fontSize: "1.5rem", color: "#d81b60" }}>
                    {item.icon}
                  </span>
                </div>
                <h3
                  className="mb-3"
                  style={{ fontSize: "1.35rem", fontWeight: "bold" }}
                >
                  {item.title}
                </h3>
                <p style={{ fontSize: "1.1rem" }}>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div
        className="container py-5"
        data-aos="fade-up"
        data-aos-delay="400"
        style={{ textAlign: "center" }}
      >
        <div className="row">
          <div className="col-md-6 mb-4">
            <img
              src={t.vision.image}
              alt={t.vision.alt}
              style={{
                width: "90%",
                height: "auto",
                marginBottom: "1rem",
              }}
            />
            <h1 className="section-title">{t.vision.title}</h1>
            <p
              style={{
                fontSize: "1.15rem",
                textAlign: "justify",
                marginLeft: "5%",
                marginRight: "5%",
              }}
            >
              {t.vision.description}
            </p>
          </div>

          <div className="col-md-6 mb-4">
            <img
              src={t.commitment.image}
              alt={t.commitment.alt}
              style={{
                width: "90%",
                height: "auto",
                marginBottom: "1rem",
              }}
            />
            <h1 className="section-title">{t.commitment.title}</h1>
            <p
              style={{
                fontSize: "1.15rem",
                textAlign: "justify",
                marginLeft: "5%",
                marginRight: "5%",
              }}
            >
              {t.commitment.description}
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
          {t.team.title}
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