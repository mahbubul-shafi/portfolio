import "./Contact.css";
import { FaPhoneAlt, FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { useState } from "react";

export const Contact = () => {
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

    const response = await fetch(
      "https://portfolio-tvya.onrender.com/api/v1/portfolio/sendEmail",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      }
    );

    const result = await response.json();
    alert(result.message); // Show success/error message
    if (result.success) {
      setFormData({
        name: "",
        email: "",
        message: "",
      });
    }
  };

  return (
    <div id="contact" className="contact">
      <h2>Contact</h2>
      <div className="contact-connect">
        <p>Connect with me</p>
        <a
          href="https://www.linkedin.com/in/m-mahbubul-alam-81640a24a/"
          target="_blank"
          rel="noopener noreferrer"
          className="linkedin"
        >
          <FaLinkedin />
        </a>

        <div className="contact-phone">
          <FaPhoneAlt />
          <span>+8801737099025</span>
        </div>

        <p>or send me an email</p>

        <form onSubmit={handleSubmit} className="contact-form">
          <input
            type="text"
            name="name"
            placeholder="Enter Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="contact-input1"
          />
          <input
            type="email"
            name="email"
            placeholder="Enter Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="contact-input2"
          />
          <textarea
            name="message"
            placeholder="Enter Message"
            value={formData.message}
            onChange={handleChange}
            required
            className="contact-input3"
          ></textarea>
          <button type="submit" className="contact-button">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};
