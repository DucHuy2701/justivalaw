import { useState } from "react";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    countryCode: "'+84 ",
    phone: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false); // Trạng thái cho thông báo xử lý
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true); // Hiển thị thông báo xử lý

    const fullPhone = formData.countryCode + formData.phone;

    const dataToSend = {
      name: formData.name,
      phone: fullPhone,
      email: formData.email,
      message: formData.message,
    };

    try {
      await fetch("https://api.justivalaw.com/submit-form", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataToSend),
      });

      console.log("Data sent to Google Sheets:", dataToSend);
      setFormData({
        name: "",
        phone: "",
        countryCode: "'+84 ",
        email: "",
        message: "",
      });
    } catch (error) {
      console.error("Error sending data to Google Sheets", error);
    } finally {
      setIsSubmitting(false); // Tắt thông báo xử lý dù thành công hay thất bại
    }

    setSubmitSuccess(true);
    setTimeout(() => {
      setSubmitSuccess(false);
      setFormData({
        name: "",
        phone: "",
        countryCode: "+84 ",
        email: "",
        message: "",
      });
    }, 1000);
  };

  // CSS inline cho thông báo xử lý
  const loadingOverlayStyle = {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    displayPursuant: true,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 1000,
  };

  const loadingMessageStyle = {
    backgroundColor: "#ffffff",
    padding: "24px",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
    fontSize: "1.2rem",
    color: "#333",
  };

  return (
    <div style={{ position: "relative" }}>
      <form
        onSubmit={handleSubmit}
        className="p-4 bg-light rounded shadow-sm"
        data-aos="fade-right"
      >
        <div style={{ textAlign: "center" }}>
          <h1 className="section-title">Kết nối ngay hôm nay</h1>
          <p style={{ fontSize: "0.8rem" }}>
            Hãy gửi cho chúng tôi thông tin chính xác của bạn để có thể được hỗ
            trợ nhanh nhất nhé!
          </p>
        </div>

        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Họ và tên
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Họ và tên"
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="phone" className="form-label">
            Số điện thoại
          </label>
          <div className="input-group">
            <select
              className="form-select"
              name="countryCode"
              value={formData.countryCode}
              onChange={handleChange}
              style={{ maxWidth: "100px" }}
              required
            >
              <option value="'+84 ">🇻🇳 +84</option>
              <option value="'+1 ">🇺🇸 +1</option>
              <option value="'+44 ">🇬🇧 +44</option>
              <option value="'+61 ">🇦🇺 +61</option>
              <option value="'+81 ">🇯🇵 +81</option>
            </select>
            <input
              type="tel"
              className="form-control"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              pattern="[0-9]{6,12}"
              placeholder="Số điện thoại"
              required
            />
          </div>
        </div>

        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="E-mail cá nhân hoặc doanh nghiệp"
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="message" className="form-label">
            Tin nhắn
          </label>
          <textarea
            className="form-control"
            id="message"
            name="message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            placeholder="Hãy cho chúng tôi biết bạn cần tư vấn những dịch vụ nào?"
            required
          ></textarea>
        </div>

        <button
          type="submit"
          className="btn btn-primary"
          disabled={isSubmitting} // Vô hiệu hóa nút khi đang gửi
        >
          Gửi
        </button>
      </form>

      {isSubmitting && (
        <div style={loadingOverlayStyle} role="alert" aria-live="polite">
          <div style={loadingMessageStyle}>Đang tiếp nhận...</div>
        </div>
      )}
      {submitSuccess && (
        <div style={loadingOverlayStyle} role="alert" aria-live="polite">
          <div style={loadingMessageStyle}>Gửi thành công!</div>
        </div>
      )}
    </div>
  );
}

export default ContactForm;
