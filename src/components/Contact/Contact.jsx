import { useState } from "react";
import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
  
    try {
      const response = await fetch("/api/sendToSlack", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
  
      const result = await response.json();
  
      if (result.success) {
        setStatus("Message sent to Slack!");
        setFormData({ name: "", email: "", message: "" }); // Clear the form
      } else {
        setStatus("Failed to send message: " + (result.error || "Unknown error"));
      }
    } catch (error) {
      setStatus("Error: " + error.message);
    }
  };

  return (
    <section id="contact" className={styles.container}>
      {/* Text Section (Title and Description) */}
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>

      {/* Flex Container for Left Section & Form */}
      <div className={styles.content}>
        {/* Left Section (Contact Info) */}
        <div className={styles.leftSection}>
          <ul className={styles.links}>
            <li className={styles.link}>
              <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
              <a href="mailto:Neerajbudhiraja1807@gmail.com">Neerajbudhiraja1807@gmail.com</a>
            </li>
            <li className={styles.link}>
              <img src={getImageUrl("contact/linkedinIcon.png")} alt="LinkedIn icon" />
              <a href="https://www.linkedin.com/in/neeraj-budhiraja1807/" target="_blank" rel="noopener noreferrer">
                LinkedIn Profile
              </a>
            </li>
            <li className={styles.link}>
              <img src={getImageUrl("contact/githubIcon.png")} alt="GitHub icon" />
              <a href="https://github.com/NeerajBudhiraja1807" target="_blank" rel="noopener noreferrer">
                GitHub Profile
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Form (Right Side) */}
        <form className={styles.contactForm} onSubmit={handleSubmit}>
          <h3>Send a Message</h3>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
          />
          <button type="submit">Send Message</button>
          <p>{status}</p>
        </form>
      </div>
    </section>
  );
};
