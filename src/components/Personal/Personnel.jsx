import PersonnelSection from "./PersonnelSection";
import "./PS.css";

function Personnel() {
  const sections = [
    {
      title: "Giám đốc",
      members: [
        {
          image: "/images/personnel/ason.png",
          name: "LS. TS. Đào Xuân Sơn",
          position: "GIÁM ĐỐC",
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
          name: "Mr. Nguyễn Trần Nhuận Phát",
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
            "PGĐ - Viện nhà ở và PT đô thị",
          ],
        },
        {
          image: "/images/personnel/bthung.jpg",
          name: "KS. KTS. Bùi Tuấn Hùng",
          position: "CHUYÊN GIA VỀ KIẾN TRÚC & XÂY DỰNG",
        },
        {
          image: "/images/personnel/dtxtram.jpg",
          name: "Ms. Đặng Thị Xuân Trầm",
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
          name: "Mr. Nguyễn Đức Việt",
          position: [
            "CHUYÊN GIA VỀ LĨNH VỰC MÔI TRƯỜNG",
            <br />,
            "TGĐ - Công ty CP xử lý môi trường Việt Nam",
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
  ];

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
