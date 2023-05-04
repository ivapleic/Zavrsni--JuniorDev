import { useState } from "react";
import "../styles/ContactForm.css";
import axios from "axios";

function ContactForm() {
  const initialFormData = {
    fullName: "",
    mail: "",
    message: "",
  };

  const [formData, setFormData] = useState(initialFormData);

  const handleInputChange = (e: any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3002/messages",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log(response.data);
      alert("Poruka azilu za životinje je uspješno poslana!")
      setFormData(initialFormData); // Reset the form data
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="contact-form">
      <h2>Kontaktirajte nas putem poruke</h2>
      <div className="name-email">
        <label htmlFor="fullName">Full Name:</label>
        <input
          type="text"
          id="fullName"
          name="fullName"
          value={formData.fullName}
          onChange={handleInputChange}
          required
        />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="mail"
          value={formData.mail}
          onChange={handleInputChange}
          required
        />
      </div>
      <div className="msg">
        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleInputChange}
          required
        ></textarea>
      </div>
      <div className="submit-btn">
        {" "}
        <button type="submit">Pošalji</button>
      </div>
    </form>
  );
}

export default ContactForm;
