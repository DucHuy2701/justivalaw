import { useContext } from "react";
import { LanguageContext } from "./LanguageContext";
import PersonnelSection from "./Personal/PersonnelSection";
import "./Personal/PS.css";

function PersonnelTech() {
  const { language } = useContext(LanguageContext);

  // Đối tượng bản dịch
  const translations = {
    vi: {
      sections: [
        {
          title: "Phó Giám đốc phụ trách Công Nghệ",
          members: [
            {
              image: "/images/personnel/athach.png",
              name: "Mr. Phạm Ngọc Thạch",
              position: ["PHÓ GIÁM ĐỐC PHỤ TRÁCH CÔNG NGHỆ"],
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
              position: ["PLATFORM ENGINEER"],
            },
            {
              image: "/images/personnel/pxnhat.png",
              name: "Phạm Xuân Nhất",
              position: ["DATA ANALYST"],
            },
            {
              image: "/images/personnel/lttam.png",
              name: "Lê Thị Tâm",
              position: ["BUSINESS ANALYST"],
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
      ],
    },
    en: {
      sections: [
        {
          title: "Deputy Director in charge of Technology",
          members: [
            {
              image: "/images/personnel/athach.png",
              name: "Mr. Pham Ngoc Thach",
              position: ["DEPUTY DIRECTOR IN CHARGE OF TECHNOLOGY"],
            },
          ],
        },
        {
          title: "Head of Technology Department",
          members: [
            {
              image: "/images/personnel/hnlong.png",
              name: "Huynh Nhat Long",
              position: [
                "HEAD OF TECHNOLOGY DEPARTMENT",
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
          title: "Technology Team Personnel",
          members: [
            {
              image: "images/personnel/nvthua.png",
              name: "Nguyen Van Thua",
              position: ["PLATFORM ENGINEER"],
            },
            {
              image: "/images/personnel/pxnhat.png",
              name: "Pham Xuan Nhat",
              position: ["DATA ANALYST"],
            },
            {
              image: "/images/personnel/lttam.png",
              name: "Le Thi Tam",
              position: ["BUSINESS ANALYST"],
            },
            {
              image: "/images/personnel/txnam.png",
              name: "Tran Xuan Nam",
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
              name: "Nguyen Van Đuc",
              position: ["AI RESEARCHER", <br />, "PLATFORM ADMIN"],
            },
            {
              image: "/images/profile.jpg",
              name: "Le Đuc Huy",
              position: ["WEB/APP DEVELOPER", <br />, "TECHNOLOGY RESEARCHER"],
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

export default PersonnelTech;