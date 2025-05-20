/* Nhập NavLink từ react-router-dom để tạo liên kết điều hướng */
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { LanguageContext } from "./LanguageContext";

/* Component dropdown cho menu Dịch vụ, sử dụng JSX */
function ServicesDropdown() {
  const { language } = useContext(LanguageContext);

  // Đối tượng bản dịch
  const translations = {
    vi: {
      services: "Dịch vụ",
      businessStrategy: "Hoạch định chiến lược pháp lý cho doanh nghiệp",
      mergersAcquisitions: "Tư vấn M&A",
      foreignInvestment: "Đầu tư nước ngoài tại Việt Nam",
      realEstate: "Pháp lý bất động sản",
      restructuring: "Tái cấu trúc doanh nghiệp",
      legalConsulting: "Tư vấn pháp lý thường xuyên",
      litigation: "Tranh tụng",
      willInheritance: "Lưu trữ di chúc và phân chia thừa kế",
      other: "Dịch vụ khác",
    },
    en: {
      services: "Services",
      businessStrategy: "Legal Strategy Planning for Businesses",
      mergersAcquisitions: "M&A Advisory",
      foreignInvestment: "Foreign Investment in Vietnam",
      realEstate: "Real Estate Legal Services",
      restructuring: "Corporate Restructuring",
      legalConsulting: "Ongoing Legal Consultancy",
      litigation: "Litigation",
      willInheritance: "Will Storage and Inheritance Distribution",
      other: "Other Services",
    },
  };

  const t = translations[language];

  return (
    <li className="nav-item dropdown">
      {/* Nút Dịch vụ với dropdown toggle */}
      <a
        className="nav-link dropdown-toggle"
        href="#"
        id="servicesDropdown"
        role="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        {t.services}
      </a>
      {/* Danh sách các mục dịch vụ trong dropdown, dùng JSX */}
      <ul className="dropdown-menu" aria-labelledby="servicesDropdown">
        <li>
          <NavLink className="dropdown-item" to="/services/business-strategy">
            {t.businessStrategy}
          </NavLink>
        </li>
        <li>
          <NavLink
            className="dropdown-item"
            to="/services/mergers-acquisitions"
          >
            {t.mergersAcquisitions}
          </NavLink>
        </li>
        <li>
          <NavLink className="dropdown-item" to="/services/foreign-investment">
            {t.foreignInvestment}
          </NavLink>
        </li>
        <li>
          <NavLink className="dropdown-item" to="/services/real-estate">
            {t.realEstate}
          </NavLink>
        </li>
        <li>
          <NavLink className="dropdown-item" to="/services/restructuring">
            {t.restructuring}
          </NavLink>
        </li>
        <li>
          <NavLink className="dropdown-item" to="/services/legal-consulting">
            {t.legalConsulting}
          </NavLink>
        </li>
        <li>
          <NavLink className="dropdown-item" to="/services/litigation">
            {t.litigation}
          </NavLink>
        </li>
        <li>
          <NavLink className="dropdown-item" to="/services/will-inheritance">
            {t.willInheritance}
          </NavLink>
        </li>
        <li>
          <NavLink className="dropdown-item" to="/services/other">
            {t.other}
          </NavLink>
        </li>
      </ul>
    </li>
  );
}

/* Xuất component để sử dụng trong menu */
export default ServicesDropdown;