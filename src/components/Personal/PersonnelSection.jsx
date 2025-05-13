import PersonCard from "./PersonCard";
import "./PS.css";

function PersonnelSection({ title, members }) {
  return (
    <div
      className="personnel-section"
      style={{
        borderBottom: "1px solid #0068C9",
      }}
    >
      <h2 className="section-title">{title}</h2>
      <div className="members-container">
        {members.map((member, index) => (
          <PersonCard
            key={index}
            image={member.image}
            name={member.name}
            position={member.position}
          />
        ))}
      </div>
    </div>
  );
}

export default PersonnelSection;
