import ContactForm from "../components/ContactForm";

function Contact() {
  return (
    <section className="py-5" data-aos="fade-up">
      <div className="container">
        <h2 className="section-title" data-aos="fade-up" data-aos-delay="100">
          Liên hệ
        </h2>
        <div className="row">
          <div className="col-md-6" data-aos="fade-left" data-aos-delay="200">
            <h4>Thông tin liên hệ</h4>
            <p>
              <i className="bi bi-geo-alt"></i> Trụ sở: 11bis Phan Ngữ, P.Đa
              Kao, Q.1, TP.HCM, Việt Nam
            </p>
            <p>
              <i className="bi bi-geo-alt"></i> VP Hoạt động: Số 7A - 9, Đường
              số 12, KP 37, P.Bình Chiểu, TP.Thủ Đức, TP.HCM, Việt Nam
            </p>
            <p>
              <i className="bi bi-telephone"></i> &#40;+84&#41; 0974 256 568
            </p>
            <p>
              <i className="bi bi-envelope"></i> justivalaw@gmail.com
            </p>
            {/* googlemap */}
            <div className="map-container">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.127956577674!2d106.7435225758695!3d10.877871157312692!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3174d9d01bd422c7%3A0xd502edbfb08f2fc2!2zQ2hpIG5ow6FuaCBjw7RuZyB0eSBMdeG6rXQgSnVzdGl2YSBMYXc!5e0!3m2!1svi!2s!4v1746583146008!5m2!1svi!2s"
                width="600"
                height="450"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
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
