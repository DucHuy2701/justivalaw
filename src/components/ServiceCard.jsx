import { NavLink } from "react-router-dom";

function ServiceCard({ title, image, topic }) {
  return (
    <NavLink to={`/services/${topic}`} className="text-decoration-none">
      <div
        className="card h-100 shadow-sm service-card"
        style={{ backgroundImage: `url(${image})` }}
        data-aos="fade-up"
      >
        <div className="card-overlay">
          <h5 className="card-title">{title}</h5>
        </div>
      </div>
    </NavLink>
  );
}

export default ServiceCard;
