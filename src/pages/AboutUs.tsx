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
          We aim to provide all animals under our care with complete and
          high-quality veterinary care, socialization and a suitable, permanent
          home. We are very happy that we are joined by an increasing number of
          great, enthusiastic animal lovers and volunteers who help us achieve
          our goals and promote animal rights. We work with schools,
          kindergartens, associations, sports organizations, institutions and
          companies that visit us and provide education about responsible pet
          ownership. From day one, we’ve worked to help all the animals that
          came under our care.The foundation deals with all types of animals and
          we work to help all sorts of animals - the unwanted, the discarded,
          the neglected, the abused. In addition to pets, we also often meet
          "wild" animals that find themselves in trouble in the urban
          environment, so we help hedgehogs, seagulls, turtles, rabbits and
          birds. The protection of aquatic and marine animals in our area is
          also important to us. From our founding until today, we have protected
          and adopted <b>over 2,000 animals</b>, mostly dogs and cats, and in
          2019 and 2020 alone, we found over 900 happy homes.
        </div>
      </div>
      <div className="contact-location">
        <div className="contact">
          <h2>KONTAKT</h2>
          <p>
            <b><u>Azil za životinje</u></b>
          </p>
          <p>
            <b>Adresa</b> : Vukovarska 1, 21312 Split
          </p>
          <p>
            <b>Telefon </b>: 021 333 555
          </p>
          <p>
            <b>Email </b>: azilzazivotinje@gmail.com
          </p>
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
