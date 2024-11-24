import React, { useState } from "react";
import emailjs from "emailjs-com";
import "./Contact.scss";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [responseMessage, setResponseMessage] = useState({
    message: "",
    status: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_mst268z",
        "template_vtlr4jd",
        formData,
        "J6tUM5OAhUkQ6NzF8"
      )
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        setResponseMessage({
          message: "Message sent successfully!",
          status: "success"
        });
        setFormData({ name: "", email: "", message: "" });
      })
      .catch((err) => {
        console.error("FAILED...", err);
        setResponseMessage({
          message: "Failed to send message. Please try again.",
          status: "error"
        });
      });
  };

  return (
    <section id="contact" className="contact section">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <div className="contact-content">
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            {responseMessage.message && (
              <p className={`response-message ${responseMessage.status}`}>
                {responseMessage.message}
              </p>
            )}
            <button type="submit" className="btn btn-primary">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
