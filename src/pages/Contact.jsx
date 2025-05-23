import { useContext } from "react";
import { LanguageContext } from "../components/LanguageContext";
import ContactForm from "../components/ContactForm";

function Contact() {
  const { language } = useContext(LanguageContext);

  // Đối tượng bản dịch
  const translations = {
    vi: {
      title: "Liên hệ",
      contactInfo: {
        title: "Thông tin liên hệ",
        headquarters: "Trụ sở: 11bis Phan Ngữ, P.Đa Kao, Q.1, TP.HCM, Việt Nam",
        branch:
          "VP Hoạt động: Số 7A - 9, Đường số 12, KP 37, P.Bình Chiểu, TP.Thủ Đức, TP.HCM, Việt Nam",
        phone: "(+84) 0974 256 568",
        email: "justivalaw@gmail.com",
      },
      map: {
        src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.127956577674!2d106.7435225758695!3d10.877871157312692!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3174d9d01bd422c7%3A0xd502edbfb08f2fc2!2zQ2hpIG5ow6FuaCBjw7RuZyB0eSBMdeG6rXQgSnVzdGl2YSBMYXc!5e0!3m2!1svi!2s!4v1746583146008!5m2!1svi!2s&hl=vi",
        alt: "Bản đồ vị trí Justiva Law",
      },
    },
    en: {
      title: "Contact",
      contactInfo: {
        title: "Contact Information",
        headquarters:
          "Head Office: Ibis Hotel, Phan Ngu Street, Đa Kao Ward, District 1, Ho Chi Minh City, Vietnam",
        branch:
          "Operating Office: No. 7A – 9, Street No. 12, Quarter 37, Binh Chieu Ward, Thu Đuc City, Ho Chi Minh City, Vietnam",
        phone: "(+84) 0974 256 568",
        email: "justivalaw@gmail.com",
      },
      map: {
        src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.127956577674!2d106.7435225758695!3d10.877871157312692!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3174d9d01bd422c7%3A0xd502edbfb08f2fc2!2zQ2hpIG5ow6FuaCBjw7RuZyB0eSBMdeG6rXQgSnVzdGl2YSBMYXc!5e0!3m2!1sen!2s!4v1746583146008!5m2!1sen!2s&hl=en",
        alt: "Map location of Justiva Law",
      },
    },
  };

  const t = translations[language];

  return (
    <section className="py-5" data-aos="fade-up">
      <div className="container">
        <h2 className="section-title" data-aos="fade-up" data-aos-delay="100">
          {t.title}
        </h2>
        <div className="row">
          <div className="col-md-6" data-aos="fade-left" data-aos-delay="200">
            <h4>{t.contactInfo.title}</h4>
            <p>
              <i className="bi bi-geo-alt"></i> {t.contactInfo.headquarters}
            </p>
            <p>
              <i className="bi bi-geo-alt"></i> {t.contactInfo.branch}
            </p>
            <p>
              <i className="bi bi-telephone"></i> {t.contactInfo.phone}
            </p>
            <p>
              <i className="bi bi-envelope"></i> {t.contactInfo.email}
            </p>
            {/* Google Map */}
            <div className="map-container">
              <iframe
                src={t.map.src}
                width="600"
                height="450"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={t.map.alt}
              ></iframe>
            </div>
          </div>

          <div className="col-md-6" data-aos="fade-right" data-aos-delay="300">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
