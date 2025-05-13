import EventDetail from "../components/EventDetail";

function Events() {
  // Dữ liệu sự kiện
  const events = [
    {
      title: "Hội nghị “Hành trình trở thành nhà tạo lập”",
      images: [
        "/images/event/e_ntl1.png",
        "/images/event/e_ntl2.png",
        "/images/event/e_ntl3.jpg",
      ],
      content: (
        <>
          <p>
            Justiva Law phối hợp với các đối tác như Investpush Legal và SD
            Partners tổ chức chuỗi hội nghị “Hành trình trở thành nhà tạo lập”,
            nơi hội tụ các nhà đầu tư và chuyên gia pháp lý để thảo luận về tài
            chính, bất động sản và đầu tư trên nền tảng pháp lý:
          </p>
          <ul>
            <li>
              <strong>Tháng 12/2021, Lâm Đồng</strong>: Sự kiện đầu tiên đánh
              dấu sự hợp tác với SD Partners, tạo nền tảng cho các hội nghị tiếp
              theo.
            </li>
            <li>
              <strong>Tháng 03/2022, TP.HCM</strong>: Hội tụ các nhà đầu tư toàn
              quốc, phối hợp với Investpush Legal và SD Partners, tập trung vào
              chiến lược đầu tư pháp lý.
            </li>
            <li>
              <strong>Tháng 08/2022, TP.HCM</strong>: Chủ đề “Tài chính - Bất
              động sản - Đầu tư trên nền tảng pháp lý”, thu hút sự quan tâm lớn
              từ cộng đồng doanh nghiệp.
            </li>
          </ul>
        </>
      ),
    },
    {
      title: "Khảo sát và tư vấn dự án bất động sản",
      images: [
        "/images/event/e_bds.png",
        "/images/event/e_bds2.JPG",
        "/images/event/e_bds3.jpg",
        "/images/event/e_bds4.jpg",
      ],
      content: (
        <p>
          Từ năm 2021 - 2022, Justiva Law thực hiện khảo sát và tư vấn phát
          triển dự án bất động sản tại Nghệ An, Đà Lạt, Cà Mau, Ninh Bình, cung
          cấp giải pháp pháp lý toàn diện để đảm bảo tính khả thi và tuân thủ
          quy định pháp luật.
        </p>
      ),
    },
    {
      title: "Chương trình tài trợ cộng đồng",
      images: [
        "/images/event/e_taitro1.png",
        "/images/event/e_taitro2.jpg",
        "/images/event/e_taitro3.jpg",
      ],
      content: (
        <p>
          Trong năm 2022, Justiva Law phối hợp với Hiệp hội Nhà vệ sinh Việt Nam
          và các doanh nghiệp tổ chức chương trình trao tài trợ cho một số huyện
          tại Bắc Cạn, Hà Giang, Hà Nam, góp phần cải thiện cơ sở hạ tầng và
          nâng cao chất lượng sống cho cộng đồng địa phương.
        </p>
      ),
    },
    {
      title: "Cam kết tổ chức sự kiện",
      images: [
        "/images/event/e_tochuc1.webp",
        "/images/event/e_tochuc2.png",
        "/images/event/e_tochuc3.png",
        "/images/event/e_tochuc4.jpg",
        "/images/event/e_tochuc5.png",
      ],
      content: (
        <p>
          Các sự kiện của Justiva Law không chỉ là nơi chia sẻ kiến thức pháp lý
          mà còn là cầu nối giữa doanh nghiệp, nhà đầu tư và cộng đồng. Chúng
          tôi cam kết tiếp tục tổ chức các sự kiện ý nghĩa, thúc đẩy sự phát
          triển bền vững và tăng cường hợp tác đa lĩnh vực.
        </p>
      ),
    },
  ];

  return (
    <>
      <div
        className="py-5"
        data-aos="fade-up"
        data-aos-delay="100"
        style={{
          backgroundImage: "url(/images/law.webp)",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          color: "#fff",
          marginBottom: "1%",
        }}
      >
        <h1 className="text-center mb-4" style={{ fontSize: "3.5rem" }}>
          Sự kiện nổi bật của Justiva Law
        </h1>
        <div>
          <div className="col-lg-8 mx-auto">
            <p
              className="lead mb-4"
              style={{
                textAlign: "center",
              }}
            >
              Justiva Law tự hào tổ chức và tham gia các sự kiện pháp lý, cộng
              đồng và đầu tư, góp phần kết nối doanh nghiệp, nhà đầu tư và cộng
              đồng để kiến tạo giá trị bền vững.
            </p>
          </div>
        </div>
      </div>

      {/* Danh sách chi tiết sự kiện */}
      <div data-aos="fade-up" data-aos-delay="200">
        {events.map((event, index) => (
          <EventDetail
            key={index}
            title={event.title}
            images={event.images}
            content={event.content}
            isOdd={index % 2 === 0} // Hàng lẻ: index 0, 2, ...; Hàng chẵn: index 1, 3, ...
          />
        ))}
      </div>
    </>
  );
}

export default Events;
