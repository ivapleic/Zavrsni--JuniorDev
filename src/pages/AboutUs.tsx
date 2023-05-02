import "../styles/AboutUs.css";
import MapLocation from "../components/MapLocation";
import ContactForm from "../components/ContactForm";

function AboutUs() {
  return (
    <div className="about-us">
      <h1>O nama</h1>
      <img src="https://bestiesplit.hr/wp-content/themes/bestie/assets/img/about-header.png" />
      <div className="info">
        <div className="image">
          <img src="src\assets\azil-slika.jpeg" />
        </div>
        <div className="text">
          {" "}
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Reprehenderit consectetur deleniti aspernatur. Numquam ullam iure
          molestias iste, vitae consectetur esse suscipit, harum id, quam sit.
          Velit voluptatibus a deleniti nihil! Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Pariatur et ducimus maxime sunt neque
          eaque aliquam rem placeat nihil optio. Sit labore inventore molestias
          quia minus laborum itaque! Eos, non. Lorem, ipsum dolor sit amet
          consectetur adipisicing elit. Maiores temporibus voluptatem amet
          praesentium corporis numquam,Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Enim nobis consequuntur alias natus, voluptatum
          cupiditate quam accusamus sunt facere accusantium amet, eaque magnam?
          Fuga perferendis repellendus voluptatum, maxime accusantium natus!
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Reprehenderit consectetur deleniti aspernatur. Numquam ullam iure
          molestias iste, vitae consectetur esse suscipit, harum id, quam sit.
          Velit voluptatibus a deleniti nihil! Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Pariatur et ducimus maxime sunt neque
          eaque aliquam rem placeat nihil optio. Sit labore inventore molestias
          quia minus laborum itaque! Eos, non. Lorem, ipsum dolor sit amet
        </div>
      </div>
      <div className="contact-location">
        <div className="contact">
          <h2>KONTAKT</h2>
          <p><b>Azil za zivotinje Beštie</b></p>
          <p><b>Adresa</b> : Vukovarska 1, 21312 Split</p>
          <p><b>Telefon </b>: 021 333 555</p>
          <p><b>Email </b>: azilzazivotinje@gmail.com</p>
        </div>
        <div className="location">
          <MapLocation />
        </div>
      </div>
      <div className="form">
          <ContactForm />
        </div>
    </div>
  );
}

export default AboutUs;
