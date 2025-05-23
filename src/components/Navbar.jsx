import { NavLink, useLocation } from "react-router-dom";
import ServicesDropdown from "./ServicesDropdown";
import { useEffect, useRef, useContext } from "react";
import { LanguageContext } from "./LanguageContext";

function Navbar() {
  const collapseRef = useRef(null);
  const location = useLocation();
  const { language } = useContext(LanguageContext);

  const translations = {
    vi: {
      home: "Trang chủ",
      about: "Về chúng tôi",
      events: "Tin tức & Sự kiện",
      achievements: "Hành trình và thành tựu",
      vision: "Tầm nhìn và sứ mệnh",
      technology: "Công nghệ",
      contact: "Liên hệ",
    },
    en: {
      home: "Home",
      about: "About Us",
      events: "News & Events",
      achievements: "Journey & Achievements",
      vision: "Vision & Mission",
      technology: "Technology",
      contact: "Contact",
    },
  };

  const t = translations[language];

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    if (collapseRef.current && window.innerWidth < 992) {
      const bsCollapse = bootstrap.Collapse.getInstance(collapseRef.current);
      if (bsCollapse) {
        bsCollapse.hide();
      }
    }
  }, [location]);

  return (
    <nav
      className="navbar navbar-expand-lg sticky-top"
      data-aos="fade-down"
      style={{ zIndex: 1020 }}
    >
      <div className="container position-relative">
        <NavLink className="navbar-brand" to="/home">
          <img
            src="/images/jlf_logo.png"
            alt="Justivalaw"
            height="80"
            width="100"
          />
        </NavLink>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          style={{
            backgroundColor: "#cce3e8",
            outline: "none",
            boxShadow: "none",
          }}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse"
          id="navbarNav"
          ref={collapseRef}
        >
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/home"
                onClick={() => {
                  if (window.innerWidth < 992) {
                    const bsCollapse = bootstrap.Collapse.getInstance(
                      collapseRef.current
                    );
                    if (bsCollapse) bsCollapse.hide();
                  }
                }}
              >
                {t.home}
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/about"
                onClick={() => {
                  if (window.innerWidth < 992) {
                    const bsCollapse = bootstrap.Collapse.getInstance(
                      collapseRef.current
                    );
                    if (bsCollapse) bsCollapse.hide();
                  }
                }}
              >
                {t.about}
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/events"
                onClick={() => {
                  if (window.innerWidth < 992) {
                    const bsCollapse = bootstrap.Collapse.getInstance(
                      collapseRef.current
                    );
                    if (bsCollapse) bsCollapse.hide();
                  }
                }}
              >
                {t.events}
              </NavLink>
            </li>
            <ServicesDropdown />
            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/achievements"
                onClick={() => {
                  if (window.innerWidth < 992) {
                    const bsCollapse = bootstrap.Collapse.getInstance(
                      collapseRef.current
                    );
                    if (bsCollapse) bsCollapse.hide();
                  }
                }}
              >
                {t.achievements}
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/vision"
                onClick={() => {
                  if (window.innerWidth < 992) {
                    const bsCollapse = bootstrap.Collapse.getInstance(
                      collapseRef.current
                    );
                    if (bsCollapse) bsCollapse.hide();
                  }
                }}
              >
                {t.vision}
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/technology"
                onClick={() => {
                  if (window.innerWidth < 992) {
                    const bsCollapse = bootstrap.Collapse.getInstance(
                      collapseRef.current
                    );
                    if (bsCollapse) bsCollapse.hide();
                  }
                }}
              >
                {t.technology}
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/contact"
                onClick={() => {
                  if (window.innerWidth < 992) {
                    const bsCollapse = bootstrap.Collapse.getInstance(
                      collapseRef.current
                    );
                    if (bsCollapse) bsCollapse.hide();
                  }
                }}
              >
                {t.contact}
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
