import { useState, useContext } from "react";
import { LanguageContext } from "./LanguageContext";

function ContactForm() {
  const { language } = useContext(LanguageContext);
  const [formData, setFormData] = useState({
    name: "",
    countryCode: "+84 ",
    phone: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  // Đối tượng bản dịch
  const translations = {
    vi: {
      title: "Kết nối ngay hôm nay",
      description:
        "Hãy gửi cho chúng tôi thông tin chính xác của bạn để có thể được hỗ trợ nhanh nhất nhé!",
      labels: {
        name: "Họ và tên",
        phone: "Số điện thoại",
        email: "Email",
        message: "Tin nhắn",
      },
      placeholders: {
        name: "Họ và tên",
        phone: "Số điện thoại",
        email: "E-mail cá nhân hoặc doanh nghiệp",
        message: "Hãy cho chúng tôi biết bạn cần tư vấn những dịch vụ nào?",
      },
      button: "Gửi",
      loading: "Đang tiếp nhận...",
      success: "Gửi thành công!",
      countryCodes: [
        { value: "+84 ", label: "🇻🇳 Việt Nam +84" },
        { value: "+1 ", label: "🇺🇸 Hoa Kỳ +1" },
        { value: "+44 ", label: "🇬🇧 Vương quốc Anh +44" },
        { value: "+61 ", label: "🇦🇺 Úc +61" },
        { value: "+81 ", label: "🇯🇵 Nhật Bản +81" },
      ],
    },
    en: {
      title: "Connect with Us Today",
      description:
        "Send us your accurate contact information so we can support you as quickly as possible!",
      labels: {
        name: "Full Name",
        phone: "Phone Number",
        email: "Email",
        message: "Message",
      },
      placeholders: {
        name: "Full Name",
        phone: "Phone Number",
        email: "Personal or Business Email",
        message: "Let us know what services you need consultation on.",
      },
      button: "Submit",
      loading: "Processing...",
      success: "Submitted Successfully!",
      countryCodes: [
        { value: "+84 ", label: "🇻🇳 Vietnam +84" },
        { value: "+1 ", label: "🇺🇸 United States +1" },
        { value: "+44 ", label: "🇬🇧 United Kingdom +44" },
        { value: "+61 ", label: "🇦🇺 Australia +61" },
        { value: "+81 ", label: "🇯🇵 Japan +81" },
      ],
    },
  };

  const t = translations[language];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

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
        countryCode: "+84 ",
        email: "",
        message: "",
      });
    } catch (error) {
      console.error("Error sending data to Google Sheets", error);
    } finally {
      setIsSubmitting(false);
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
    display: isSubmitting || submitSuccess ? "flex" : "none",
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
          <h1 className="section-title">{t.title}</h1>
          <p style={{ fontSize: "0.8rem" }}>{t.description}</p>
        </div>

        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            {t.labels.name}
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder={t.placeholders.name}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="phone" className="form-label">
            {t.labels.phone}
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
              {t.countryCodes.map((code, index) => (
                <option key={index} value={code.value}>
                  {code.label}
                </option>
              ))}
            </select>
            <input
              type="tel"
              className="form-control"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              pattern="[0-9]{6,12}"
              placeholder={t.placeholders.phone}
              required
            />
          </div>
        </div>

        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            {t.labels.email}
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder={t.placeholders.email}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="message" className="form-label">
            {t.labels.message}
          </label>
          <textarea
            className="form-control"
            id="message"
            name="message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            placeholder={t.placeholders.message}
            required
          ></textarea>
        </div>

        <button
          type="submit"
          className="btn btn-primary"
          disabled={isSubmitting}
        >
          {t.button}
        </button>
      </form>

      {isSubmitting && (
        <div style={loadingOverlayStyle} role="alert" aria-live="polite">
          <div style={loadingMessageStyle}>{t.loading}</div>
        </div>
      )}
      {submitSuccess && (
        <div style={loadingOverlayStyle} role="alert" aria-live="polite">
          <div style={loadingMessageStyle}>{t.success}</div>
        </div>
      )}
    </div>
  );
}

export default ContactForm;