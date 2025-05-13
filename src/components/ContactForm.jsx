import { useState } from "react";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await fetch(
        "https://script.google.com/macros/s/AKfycbxbVbHO8HUwVCoZ19yZuuzKbdOwSzVqyVqYGoB_LrNpA6vkDPH7xhiqk-opurjUkox32w/exec",
        {
          method: "POST",
          body: JSON.stringify(formData),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log("Data sent to Google Sheets:", formData);
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Error sending data to Google Sheets", error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="p-4 bg-light rounded shadow-sm"
      data-aos="fade-right"
    >
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Họ tên
        </label>
        <input
          type="text"
          className="form-control"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">
          Email
        </label>
        <input
          type="email"
          className="form-control"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="message" className="form-label">
          Tin nhắn
        </label>
        <textarea
          className="form-control"
          id="message"
          name="message"
          rows="5"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>
      </div>
      <button type="submit" className="btn btn-primary">
        Gửi
      </button>
    </form>
  );
}

export default ContactForm;
