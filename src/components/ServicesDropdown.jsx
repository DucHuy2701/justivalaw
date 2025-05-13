/* Nhập NavLink từ react-router-dom để tạo liên kết điều hướng */
import { NavLink } from "react-router-dom";

/* Component dropdown cho menu Dịch vụ, sử dụng JSX */
function ServicesDropdown() {
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
        Dịch vụ
      </a>
      {/* Danh sách các mục dịch vụ trong dropdown, dùng JSX */}
      <ul className="dropdown-menu" aria-labelledby="servicesDropdown">
        <li>
          <NavLink className="dropdown-item" to="/services/business-strategy">
            Hoạch định chiến lược pháp lý cho doanh nghiệp
          </NavLink>
        </li>
        <li>
          <NavLink
            className="dropdown-item"
            to="/services/mergers-acquisitions"
          >
            Tư vấn M&A
          </NavLink>
        </li>
        <li>
          <NavLink className="dropdown-item" to="/services/foreign-investment">
            Đầu tư nước ngoài tại Việt Nam
          </NavLink>
        </li>
        <li>
          <NavLink className="dropdown-item" to="/services/real-estate">
            Pháp lý bất động sản
          </NavLink>
        </li>
        <li>
          <NavLink className="dropdown-item" to="/services/restructuring">
            Tái cấu trúc doanh nghiệp
          </NavLink>
        </li>
        <li>
          <NavLink className="dropdown-item" to="/services/legal-consulting">
            Tư vấn pháp lý thường xuyên
          </NavLink>
        </li>
        <li>
          <NavLink className="dropdown-item" to="/services/litigation">
            Tranh tụng
          </NavLink>
        </li>
        <li>
          <NavLink className="dropdown-item" to="/services/will-inheritance">
            Lưu trữ di chúc và phân chia thừa kế
          </NavLink>
        </li>
        <li>
          <NavLink className="dropdown-item" to="/services/other">
            Dịch vụ khác
          </NavLink>
        </li>
      </ul>
    </li>
  );
}

/* Xuất component để sử dụng trong menu */
export default ServicesDropdown;
