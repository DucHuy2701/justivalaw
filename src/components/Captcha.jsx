import { useState, useEffect, useContext } from "react";
import { useLocation } from "react-router-dom";
import { LanguageContext } from "./LanguageContext";

function Captcha({ children }) {
  const { language } = useContext(LanguageContext);
  const [isRobotChecked, setIsRobotChecked] = useState(false);
  const [isDisclaimerChecked, setIsDisclaimerChecked] = useState(false);
  const [isCaptchaCompleted, setIsCaptchaCompleted] = useState(
    sessionStorage.getItem("captchaCompleted") === "true"
  );
  const location = useLocation();

  const isAdminLoginRoute = location.pathname === "/admin/login";

  useEffect(() => {
    if (isAdminLoginRoute) {
      setIsCaptchaCompleted(true);
      return;
    }
    if (sessionStorage.getItem("captchaCompleted") === "true") {
      setIsCaptchaCompleted(true);
    } else {
      setIsCaptchaCompleted(false);
    }
  }, [location, isAdminLoginRoute]);

  const handleSubmit = () => {
    if (isRobotChecked && isDisclaimerChecked) {
      sessionStorage.setItem("captchaCompleted", "true");
      setIsCaptchaCompleted(true);
    }
  };

  const translations = {
    vi: {
      title: "Xác minh và Tuyên bố Miễn trừ trách nhiệm",
      robotLabel: "Tôi không phải là robot",
      disclaimerLabel: "Tôi đồng ý với tuyên bố miễn trừ trách nhiệm",
      disclaimerText:
        "Thông tin trên trang web này chỉ mang tính chất tham khảo và không cấu thành lời khuyên pháp lý, tài chính, y tế hoặc chuyên môn. Mặc dù chúng tôi nỗ lực đảm bảo độ chính xác và cập nhật, không có cam kết nào về tính đầy đủ, kịp thời hoặc phù hợp của nội dung đối với mục đích cụ thể. Người dùng tự chịu trách nhiệm với mọi quyết định hoặc hành động dựa trên thông tin tại đây. Chúng tôi không chịu trách nhiệm cho bất kỳ tổn thất hay thiệt hại nào phát sinh, dù trực tiếp hay gián tiếp, từ việc sử dụng thông tin trên trang. Vui lòng tham vấn luật sư hoặc chuyên gia phù hợp trước khi đưa ra các quyết định quan trọng. Việc sử dụng trang đồng nghĩa với việc bạn đồng ý với tuyên bố miễn trừ trách nhiệm này.",
      confirmButton: "Xác nhận",
    },
    en: {
      title: "Verification and Disclaimer",
      robotLabel: "I am not a robot",
      disclaimerLabel: "I agree to the disclaimer",
      disclaimerText:
        "The information on this website is for reference purposes only and does not constitute legal, financial, medical, or professional advice. While we strive to ensure accuracy and timeliness, no guarantees are made regarding the completeness, timeliness, or suitability of the content for any specific purpose. Users are solely responsible for any decisions or actions taken based on the information provided here. We are not liable for any losses or damages, whether direct or indirect, arising from the use of the information on this site. Please consult a lawyer or relevant professional before making significant decisions. Using this site implies your agreement to this disclaimer.",
      confirmButton: "Confirm",
    },
  };

  const t = translations[language];

  const modalStyle = {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    display: isCaptchaCompleted || isAdminLoginRoute ? "none" : "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 1000,
  };

  const modalContentStyle = {
    backgroundColor: "#ffffff",
    padding: "24px",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
    maxWidth: "400px",
    width: "90%", // Đảm bảo không tràn trên mobile
    textAlign: "left",
    boxSizing: "border-box",
  };

  const checkboxContainerStyle = {
    marginBottom: "16px",
    display: "flex",
    alignItems: "center",
  };

  const buttonStyle = {
    backgroundColor:
      isRobotChecked && isDisclaimerChecked ? "#007bff" : "#cccccc",
    color: "#ffffff",
    padding: "8px 16px",
    border: "none",
    borderRadius: "4px",
    cursor: isRobotChecked && isDisclaimerChecked ? "pointer" : "not-allowed",
    width: "100%",
    fontSize: "1rem",
  };

  const checkboxStyle = {
    width: "30px",
    height: "30px",
    marginRight: "15px",
  };

  const contentWrapperStyle = {
    pointerEvents: isCaptchaCompleted || isAdminLoginRoute ? "auto" : "none",
    filter: isCaptchaCompleted || isAdminLoginRoute ? "none" : "blur(2px)",
  };

  const disclaimerContainerStyle = {
    maxHeight: "300px", // Giới hạn chiều cao tối đa là 300px
    overflowY: "auto", // Kích hoạt thanh cuộn dọc khi vượt quá 300px
    paddingRight: "8px", // Tránh text chạm vào thanh cuộn
    boxSizing: "border-box",
    marginBottom: "8px", // Khoảng cách giữa nội dung và checkbox
  };

  // Responsive cho mobile
  const getModalStyle = () => {
    if (window.innerWidth <= 768) {
      return {
        ...modalStyle,
        alignItems: "flex-start",
        paddingTop: "100px",
        //border: "2px solid red",
        maxHeight: "100vh", // Giới hạn chiều cao tối đa bằng chiều cao viewport
        overflowY: "auto", // Kích hoạt cuộn nếu nội dung vượt quá
      };
    }
    return modalStyle;
  };

  return (
    <div>
      <div style={contentWrapperStyle}>{children}</div>
      <div
        style={getModalStyle()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="captcha-title"
      >
        <div style={modalContentStyle}>
          <h2
            id="captcha-title"
            style={{
              fontSize: "1.5rem",
              fontWeight: "bold",
              marginBottom: "16px",
            }}
          >
            {t.title}
          </h2>
          <div style={checkboxContainerStyle}>
            <label style={{ display: "flex", alignItems: "center" }}>
              <input
                type="checkbox"
                checked={isRobotChecked}
                onChange={(e) => setIsRobotChecked(e.target.checked)}
                style={checkboxStyle}
                aria-label={t.robotLabel}
              />
              <span>{t.robotLabel}</span>
            </label>
          </div>
          <div style={checkboxContainerStyle}>
            <div style={disclaimerContainerStyle}>
              <p style={{ fontSize: "0.875rem", marginBottom: "8px" }}>
                <strong>
                  <u>
                    {language === "vi"
                      ? "Tuyên bố miễn trừ trách nhiệm:"
                      : "Disclaimer:"}
                  </u>
                </strong>{" "}
                {t.disclaimerText}
              </p>
              <label style={{ display: "flex", alignItems: "center" }}>
                <input
                  type="checkbox"
                  checked={isDisclaimerChecked}
                  onChange={(e) => setIsDisclaimerChecked(e.target.checked)}
                  style={checkboxStyle}
                  aria-label={t.disclaimerLabel}
                />
                <span>{t.disclaimerLabel}</span>
              </label>
            </div>
          </div>
          <button
            onClick={handleSubmit}
            disabled={!isRobotChecked || !isDisclaimerChecked}
            style={buttonStyle}
            aria-disabled={!isRobotChecked || !isDisclaimerChecked}
          >
            {t.confirmButton}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Captcha;
