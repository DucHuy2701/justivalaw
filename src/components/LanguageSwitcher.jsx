import React, { useContext } from 'react';
import { LanguageContext } from './LanguageContext';

const LanguageSwitcher = () => {
  const { toggleLanguage } = useContext(LanguageContext);

  return (
    <>
      <div
        className="language-switcher"
        style={{
          position: 'fixed',
          top: '40px',
          right: '20px',
          display: 'flex',
          gap: '10px',
          zIndex: 1030, // Cao hơn Navbar (1020) và CAPTCHA (1000)
        }}
      >
        <button
          onClick={() => toggleLanguage('vi')}
          style={{ border: 'none', background: 'transparent', cursor: 'pointer' }}
          aria-label="Chuyển sang tiếng Việt"
        >
          <img
            src="/images/vi.png"
            alt="Tiếng Việt"
            style={{ width: '30px', height: '20px' }}
          />
        </button>
        <button
          onClick={() => toggleLanguage('en')}
          style={{ border: 'none', background: 'transparent', cursor: 'pointer' }}
          aria-label="Switch to English"
        >
          <img
            src="/images/en.png"
            alt="English"
            style={{ width: '30px', height: '20px' }}
          />
        </button>
      </div>
      <style jsx>{`
        @media (max-width: 756px) {
          .language-switcher {
            right: auto !important;
            left: 20px !important;
          }
        }
      `}</style>
    </>
  );
};

export default LanguageSwitcher;