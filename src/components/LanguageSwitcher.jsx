import React, { useContext } from "react";
import { LanguageContext } from "./LanguageContext";
import "./LanguageSwitcher.css"; // Import CSS thông thường

const LanguageSwitcher = () => {
  const { toggleLanguage } = useContext(LanguageContext);

  return (
    <div className="language-switcher">
      <button
        onClick={() => toggleLanguage("vi")}
        style={{
          border: "none",
          background: "transparent",
          cursor: "pointer",
        }}
        aria-label="Chuyển sang tiếng Việt"
      >
        <img
          src="/images/vi.png"
          alt="Tiếng Việt"
          style={{ width: "30px", height: "20px" }}
        />
      </button>
      <button
        onClick={() => toggleLanguage("en")}
        style={{
          border: "none",
          background: "transparent",
          cursor: "pointer",
        }}
        aria-label="Switch to English"
      >
        <img
          src="/images/en.png"
          alt="English"
          style={{ width: "30px", height: "20px" }}
        />
      </button>
    </div>
  );
};

export default LanguageSwitcher;
