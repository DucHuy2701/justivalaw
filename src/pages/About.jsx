import "./About.css";
import Personnel from "../components/Personal/Personnel";

function About() {
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
            Chúng tôi là Justiva Law
          </h1>
          <div>
            <div className="col-lg-8 mx-auto">
              <p
                className="lead mb-4"
                style={{
                  textAlign: "center",
                }}
              >
                Justiva Law tự hào là người bạn đồng hành đáng tin cậy, cung cấp
                giải pháp pháp lý toàn diện, kết nối doanh nghiệp, nhà đầu tư và
                cộng đồng để kiến tạo một tương lai bền vững và thịnh vượng.
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
          <h2 className="section-title">HÀNH TRÌNH PHÁT TRIỂN JUSTIVA LAW</h2>
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
                alt="About Justivalaw"
              />
            </div>
            <div
              className="col-md-6"
              style={{ textAlign: "justify", fontSize: "1.5rem" }}
            >
              <p>
                <br />
                &emsp;&emsp;Hãng luật Justiva Law (2019) được thành lập trên cơ
                sở tách ra từ Investpush Legal. Công ty xây dựng trên nền tảng
                chuyên môn pháp lý, kinh nghiệm dày dặn và ứng dụng công nghệ
                (AI, Blockchain) để tư vấn và xây dựng chiến lược pháp lý cho
                doanh nghiệp Việt Nam và quốc tế.
              </p>
            </div>
          </div>
        </div>

        {/* OURVALUE */}
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
          <h1 className="section-title">GIÁ TRỊ CỐT LÕI</h1>
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
                <strong>Tuân thủ và Đạo đức</strong> - Chúng tôi đặt nền tảng
                hoạt động dựa trên sự tuân thủ pháp luật và các chuẩn mực đạo
                đức nghề nghiệp
              </p>
              <p>
                <strong>Sáng tạo và Đổi mới</strong> - Trong bối cảnh công nghệ,
                tình hình vĩ mô thay đổi nhanh chóng, chúng tôi không ngừng tìm
                kiếm và ứng dụng các giải pháp pháp lý sáng tạo, linh hoạt.
              </p>
            </div>
            <div
              className="col-md-6 custom-col"
              style={{ textAlign: "center" }}
            >
              <p>
                <strong>Hiệu quả và Thực tiễn</strong> - Mỗi tư vấn pháp lý
                không chỉ đúng luật mà còn phù hợp với mỗi khách hàng hoặc mô
                hình kinh doanh, chiến lược phát triển của khách hàng. Chúng tôi
                cam kết mang đến giải pháp khả thi, tối ưu chi phí và thời gian.
              </p>
              <img
                src="/images/value.jpg"
                className="custom-img"
                alt="About Justivalaw"
              />
            </div>
            <div className="col-md-3 custom-col">
              <p>
                <br />
                <strong>Công nghệ và Chuyển đổi số</strong> - Chúng tôi tận dụng
                công nghệ hiện đại để nâng cao hiệu suất làm việc, bảo mật dữ
                liệu và cung cấp dịch vụ pháp lý tiện lợi, thông minh cho khách
                hàng.
              </p>
              <p>
                <strong>Đồng hành và Hợp tác bền vững</strong> - Chúng tôi không
                chỉ là một đơn vị cung cấp dịch vụ pháp lý, mà còn là đối tác
                chiến lược, đồng hành cùng khách hàng trên hành trình phát
                triển.
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
          <h1 className="section-title">NHÂN SỰ</h1>
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
