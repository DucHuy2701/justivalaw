import "./PS.css";

function PersonCard({ image, name, position }) {
  return (
    <div className="person-card" style={{ alignItems: "center" }}>
      <img src={image} alt={name} />
      <h3 className="text-lg font-semibold" style={{}}>
        {name}
      </h3>
      <p className="text-gray-600">{position}</p>
    </div>
  );
}

export default PersonCard;
