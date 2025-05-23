import PersonnelSection from "./PersonnelSection";
import "./PS.css";
import { useContext } from "react";
import { LanguageContext } from "../LanguageContext";

function Personnel() {
  const { language } = useContext(LanguageContext);

  // Đối tượng bản dịch
  const translations = {
    vi: {
      sections: [
        {
          title: "Giám đốc",
          members: [
            {
              image: "/images/personnel/ason.png",
              name: "LS. Đào Xuân Sơn",
              position: "LUẬT SƯ SÁNG LẬP - GIÁM ĐỐC",
            },
          ],
        },
        {
          title: "Phó giám đốc",
          members: [
            {
              image: "/images/personnel/cnhung.png",
              name: "Bà Bùi Thị Nhung",
              position: "PHÓ GIÁM ĐỐC",
            },
            {
              image: "/images/personnel/athach.png",
              name: "LS. ThS. Phạm Ngọc Thạch",
              position: "PHÓ GIÁM ĐỐC",
            },
          ],
        },
        {
          title: "Hội Đồng Chuyên Gia",
          members: [
            {
              image: "/images/personnel/hsnang.png",
              name: "TS. Hàng Sấm Nang",
              position: "CHUYÊN GIA VỀ CNTT & CHUYỂN ĐỔI SỐ",
            },
            {
              image: "/images/personnel/ntnphat.jpg",
              name: "Ông Nguyễn Trần Nhuận Phát",
              position: "CHUYÊN GIA VỀ BLOCKCHAIN & FINTECH",
            },
            {
              image: "/images/personnel/ltbnhan.jpg",
              name: "MBA. Lâm Thanh Bảo Nhân",
              position: "CHUYÊN GIA VỀ HẠ TẦNG CÔNG NGHỆ VÀ KẾT NỐI ĐẦU TƯ",
            },
            {
              image: "/images/personnel/nhson.png",
              name: "TS. Ngô Hoài Sơn",
              position: "CHUYÊN GIA VỀ CHÍNH SÁCH CÔNG",
            },
            {
              image: "/images/personnel/ptan.jpg",
              name: "ThS. Phan Thị An",
              position: [
                "CHUYÊN GIA VỀ QUY HOẠCH",
                <br />,
                "PHÓ GIÁM ĐỐC - Viện Nhà ở và Phát triển Đô thị",
              ],
            },
            {
              image: "/images/personnel/bthung.jpg",
              name: "KS. KTS. Bùi Tuấn Hùng",
              position: "CHUYÊN GIA VỀ KIẾN TRÚC & XÂY DỰNG",
            },
            {
              image: "/images/personnel/dtxtram.jpg",
              name: "Bà Đặng Thị Xuân Trầm",
              position: "CHUYÊN GIA VỀ SỰ KIỆN & BÁO CHÍ",
            },
            {
              image: "/images/personnel/ttphong.png",
              name: "TS. Trần Trọng Phòng",
              position: "CHUYÊN GIA VỀ QUẢN TRỊ HỌC",
            },
            {
              image: "/images/personnel/hvlong.png",
              name: "MBA. Hồ Vân Long",
              position: "CHUYÊN GIA VỀ ĐẦU TƯ ĐA QUỐC GIA & QUẢN LÝ VỐN ĐẦU TƯ",
            },
            {
              image: "/images/personnel/ndviet.jpg",
              name: "Ông Nguyễn Đức Việt",
              position: [
                "CHUYÊN GIA VỀ LĨNH VỰC MÔI TRƯỜNG",
                <br />,
                "TỔNG GIÁM ĐỐC - Công ty CP Xử lý Môi trường Việt Nam",
              ],
            },
            {
              image: "/images/personnel/nvhai.jpg",
              name: "BS CK II. Nguyễn Văn Hải",
              position: "CHUYÊN GIA VỀ Y TẾ",
            },
            {
              image: "/images/personnel/ttminh.png",
              name: "TS. Trương Thế Minh",
              position: "CHUYÊN GIA VỀ QUẢN TRỊ HỌC",
            },
          ],
        },
        {
          title: "Đội Ngũ Luật Sư",
          members: [
            {
              image: "/images/personnel/ason.png",
              name: "LS. Đào Xuân Sơn",
              position: "LUẬT SƯ CAO CẤP",
            },
            {
              image: "/images/personnel/dtphong.png",
              name: "LS. Đào Tiến Phong",
              position: "LUẬT SƯ CAO CẤP",
            },
            {
              image: "/images/personnel/ptmthao.png",
              name: "LS. Phạm Thị Mai Thảo",
              position: "LUẬT SƯ CAO CẤP",
            },
            {
              image: "/images/personnel/tnhai.png",
              name: "LS. Trần Nam Hải",
              position: "LUẬT SƯ CAO CẤP",
            },
            {
              image: "/images/personnel/ntquynh.png",
              name: "LS. Nguyễn Trọng Quỳnh",
              position: "LUẬT SƯ THÀNH VIÊN",
            },
            {
              image: "/images/personnel/athach.png",
              name: "LS. Phạm Ngọc Thạch",
              position: "LUẬT SƯ THÀNH VIÊN",
            },
            {
              image: "/images/personnel/ntson.png",
              name: "LS. Nguyễn Thanh Sơn",
              position: "LUẬT SƯ THÀNH VIÊN",
            },
          ],
        },
        {
          title: "Trưởng Các Bộ Phận",
          members: [
            {
              image: "/images/personnel/lthuong.png",
              name: "Lê Thị Hương",
              position: ["TRƯỞNG PHÒNG HC-NS", <br />, "TRƯỞNG PHÒNG DỰ ÁN 1"],
            },
            {
              image: "/images/personnel/dqttu.png",
              name: "ThS. Dương Quốc Tuấn Tú",
              position: [
                "TRƯỞNG PHÒNG DỰ ÁN 2",
                <br />,
                "PHỤ TRÁCH TRUYỀN THÔNG - MARKETING",
              ],
            },
            {
              image: "/images/personnel/ptnhi.png",
              name: "Phạm Thị Nhi",
              position: ["GIÁM SÁT DỰ ÁN", <br />, "PHỤ TRÁCH TC-KT"],
            },
            {
              image: "/images/personnel/hnlong.png",
              name: "Huỳnh Nhất Long",
              position: "TRƯỞNG PHÒNG CÔNG NGHỆ",
            },
          ],
        },
      ],
    },
    en: {
      sections: [
        {
          title: "Director",
          members: [
            {
              image: "/images/personnel/ason.png",
              name: "Lawyer Dao Xuan Son",
              position: "FOUDNING LAWYER - DIRECTOR",
            },
          ],
        },
        {
          title: "Deputy Directors",
          members: [
            {
              image: "/images/personnel/cnhung.png",
              name: "Mrs. Bui Thi Nhung",
              position: "DEPUTY DIRECTOR",
            },
            {
              image: "/images/personnel/athach.png",
              name: "Lawyer, Master Pham Ngoc Thach",
              position: "DEPUTY DIRECTOR",
            },
          ],
        },
        {
          title: "Advisory Board",
          members: [
            {
              image: "/images/personnel/hsnang.png",
              name: "Dr. Hang Sam Nang",
              position:
                "EXPERT IN INFORMATION TECHNOLOGY & DIGITAL TRANSFORMATION",
            },
            {
              image: "/images/personnel/ntnphat.jpg",
              name: "Mr. Nguyen Tran Nhuan Phat",
              position: "EXPERT IN BLOCKCHAIN & FINTECH",
            },
            {
              image: "/images/personnel/ltbnhan.jpg",
              name: "MBA. Lam Thanh Bao Nhan",
              position:
                "EXPERT IN TECHNOLOGY INFRASTRUCTURE AND INVESTMENT NETWORKING",
            },
            {
              image: "/images/personnel/nhson.png",
              name: "Dr. Ngo Hoai Son",
              position: "EXPERT IN PUBLIC POLICY",
            },
            {
              image: "/images/personnel/ptan.jpg",
              name: "M.A. Phan Thi An",
              position: [
                "EXPERT IN URBAN PLANNING",
                <br />,
                "Dep. Dir. – Institute of Housing and Urban Development",
              ],
            },
            {
              image: "/images/personnel/bthung.jpg",
              name: "Eng., Arch. Bui Tuan Hung",
              position: "EXPERT IN ARCHITECTURE & CONSTRUCTION",
            },
            {
              image: "/images/personnel/dtxtram.jpg",
              name: "Ms. Dang Thi Xuan Tram",
              position: "EXPERT IN EVENTS & MEDIA",
            },
            {
              image: "/images/personnel/ttphong.png",
              name: "Dr. Tran Trong Phong",
              position: "EXPERT IN MANAGEMENT SCIENCE",
            },
            {
              image: "/images/personnel/hvlong.png",
              name: "MBA. Ho Van Long",
              position:
                "EXPERT IN MULTINATIONAL INVESTMENT & INVESTMENT FUND MANAGEMENT",
            },
            {
              image: "/images/personnel/ndviet.jpg",
              name: "Mr. Nguyen Duc Viet",
              position: [
                "EXPERT IN ENVIRONMENTAL SECTOR",
                <br />,
                "CEO - Vietnam Waste Treatment JSC",
              ],
            },
            {
              image: "/images/personnel/nvhai.jpg",
              name: "Specialist Level II Doctor Nguyen Van Hai",
              position: "EXPERT IN HEALTHCARE",
            },
            {
              image: "/images/personnel/ttminh.png",
              name: "Dr. Truong The Minh",
              position: "EXPERT IN MANAGEMENT SCIENCE",
            },
          ],
        },
        {
          title: "Legal Team",
          members: [
            {
              image: "/images/personnel/ason.png",
              name: "Lawyer Dao Xuan Son",
              position: "SENIOR LAWYER",
            },
            {
              image: "/images/personnel/dtphong.png",
              name: "Lawyer Dao Tien Phong",
              position: "SENIOR LAWYER",
            },
            {
              image: "/images/personnel/ptmthao.png",
              name: "Lawyer Pham Thi Mai Thao",
              position: "SENIOR LAWYER",
            },
            {
              image: "/images/personnel/tnhai.png",
              name: "Lawyer Tran Nam Hai",
              position: "SENIOR LAWYER",
            },
            {
              image: "/images/personnel/ntquynh.png",
              name: "Lawyer Nguyen Trong Quynh",
              position: "MEMBER LAWYER",
            },
            {
              image: "/images/personnel/athach.png",
              name: "Lawyer Pham Ngoc Thach",
              position: "MEMBER LAWYER",
            },
            {
              image: "/images/personnel/ntson.png",
              name: "Lawyer Nguyen Thanh Son",
              position: "MEMBER LAWYER",
            },
          ],
        },
        {
          title: "Department Heads",
          members: [
            {
              image: "/images/personnel/lthuong.png",
              name: "Le Thi Huong",
              position: [
                "HEAD OF ADMINISTRATION & HUMAN RESOURCES",
                <br />,
                "PROJECT MANAGER – PROJECT 1",
              ],
            },
            {
              image: "/images/personnel/dqttu.png",
              name: "M.A. Duong Quoc Tuan Tu",
              position: [
                "PROJECT MANAGER – PROJECT 2",
                <br />,
                "HEAD OF COMMUNICATIONS & MARKETING",
              ],
            },
            {
              image: "/images/personnel/ptnhi.png",
              name: "Pham Thi Nhi",
              position: [
                "PROJECT SUPERVISOR",
                <br />,
                "IN CHARGE OF FINANCE & ACCOUNTING",
              ],
            },
            {
              image: "/images/personnel/hnlong.png",
              name: "Huynh Nhat Long",
              position: "HEAD OF TECHNOLOGY DEPARTMENT",
            },
          ],
        },
      ],
    },
  };

  const sections = translations[language].sections;

  return (
    <div className="personnel-container">
      {sections.map((section, index) => (
        <PersonnelSection
          key={index}
          title={section.title}
          members={section.members}
        />
      ))}
    </div>
  );
}

export default Personnel;
