function Hero() {
  return (
    <section className="hero" data-aos="zoom-in">
      <div className="container">
        <h1
          className="display-4 fw-bold"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Justiva Law - Đồng hành Pháp lý
        </h1>
        <p className="lead" data-aos="fade-up" data-aos-delay="200">
          Cung cấp giải pháp pháp lý chuyên nghiệp cho cá nhân và doanh nghiệp.
        </p>
        <a
          href="/contact"
          className="btn btn-primary btn-lg mt-3"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          Liên hệ ngay
        </a>
      </div>
    </section>
  );
}

export default Hero;
