import PersonnelSection from "./Personal/PersonnelSection";
import "./Personal/PS.css";

function PersonnelTech() {
  const sections = [
    {
      title: "Giám đốc Công Nghệ",
      members: [
        {
          image: "/images/personnel/athach.png",
          name: "Mr. Phạm Ngọc Thạch",
          position: ["GIÁM ĐỐC CÔNG NGHỆ"],
        },
      ],
    },
    {
      title: "Trưởng phòng Công Nghệ",
      members: [
        {
          image: "/images/personnel/hnlong.png",
          name: "Huỳnh Nhất Long",
          position: [
            "TRƯỞNG PHÒNG CÔNG NGHỆ",
            <br />,
            "TEAM LEADER",
            <br />,
            "FULLSTACK DEVELOPER",
            <br />,
            "BLOCKCHAIN RESEARCHER",
          ],
        },
      ],
    },
    {
      title: "Nhân sự Team Công nghệ",
      members: [
        {
          image: "/images/personnel/nvthua.png",
          name: "Nguyễn Văn Thừa",
          position: "PLATFORM ENGINEER",
        },
        {
          image: "/images/personnel/pxnhat.png",
          name: "Phạm Xuân Nhất",
          position: "DATA ANALYST",
        },
        {
          image: "/images/personnel/lttam.png",
          name: "Lê Thị Tâm",
          position: "BUSINESS ANALYST",
        },
        {
          image: "/images/personnel/txnam.png",
          name: "Trần Xuân Nam",
          position: [
            "WEB/APP DESIGNER",
            <br />,
            "SYSTEM OPERATOR",
            <br />,
            "TESTER",
          ],
        },
        {
          image: "/images/personnel/nvduc.png",
          name: "Nguyễn Văn Đức",
          position: ["AI RESEARCHER", <br />, "PLATFORM ADMIN"],
        },
        {
          image: "/images/profile.jpg",
          name: "Lê Đức Huy",
          position: ["WEB/APP DEVELOPER", <br />, "TECHNOLOGY RESEARCHER"],
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

export default PersonnelTech;
