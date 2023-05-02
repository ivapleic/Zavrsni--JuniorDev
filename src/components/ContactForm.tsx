import { useState } from "react";
import "../styles/ContactForm.css";

function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    mail: "",
    message: "",
  });

  const handleInputChange = (e: any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(
      `Full Name: ${formData.fullName}\nEmail: ${formData.mail}\nMessage: ${formData.message}`
    );
  };

  function formatData(object:any) {
    return {
        
            fullName: object.fullName,
            mail: object.mail,
            message: object.message
        
    };
}


const sendData = async (event:any) => {
    event.preventDefault();
    const messageInput = document.getElementById('message-input');
    formData.message = formData.message.value;
    messageInput.value='';

    const toSend = formatData(formData);
    await axios.post("/poruke", zaSlanje);

    const rezultat = await axios.get("/poruke");
    postaviPoruke(rezultat.data);
    postaviPodatke(
        {
        ime: "",
        prezime: "",
        mail: "",
        poruke: ""
    })
};

const promjenaUlaza = (event) => {
    const { name, value } = event.target;

    postaviPodatke({ ...formaPodaci, [name]: value });
};

// const [poruka, saljiPoruku] = useState(false); 
// const  [ime, postaviIme] = useState("");
// const [imee, promjenaImena] = useState(false);
// const promjenaUlaza = (event) => {
//     const { ime } = event.target;

//     postaviPodatke({ ...formaPodaci, [ime]: value });
// };






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
