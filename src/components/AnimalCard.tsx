import { useState } from 'react';
import '../styles/AnimalCard.css';

function AnimalCard({ animal }: any) {
  const { name, type, years, description, adopted, image, gender, chip, examination } = animal;

  const [showMoreInfo, setShowMoreInfo] = useState(false);

  const toggleMoreInfo = () => {
    setShowMoreInfo(!showMoreInfo);
  };

  return (
    <div className="animal-card">
      {showMoreInfo ? (
        <div className="additional-information">
          <h2>{name}</h2>
          <div className="animal-more-info-popup-content">
          <div className="animal-type">
            <p>Vrsta:</p>
            <p>{type}</p>
          </div>
          <div className="animal-gender">
            <p>Spol:</p>
            <p>{gender}</p>
          </div>
          <div className="animal-years">
            <p>Godine:</p>
            <p>{years}</p>
          </div>
          <div className="animal-description">
            <p>Opis:</p>
            <p>{description}</p>
          </div>
          <div className="animal-adopted">
            <p>Udomljena:</p>
            <p>{adopted ? 'Da' : 'Ne'}</p>
          </div>
          <div className="animal-examination">
            <p>Zadnji pregled:</p>
            <p>{examination}</p>
          </div>
          <div className="animal-chip">
            <p>Čip:</p>
            <p>{chip===true?"da":"ne"}</p>
          </div>
          <div className="animal-examination">
            <p>Zadnji pregled:</p>
            <p>{examination}</p>
          </div>
          <button className="animal-more-info-btn" onClick={toggleMoreInfo}>Nazad</button>
          </div>
        </div>
      ) : (
        <>
          <h2>{name}</h2>
          <div className="animal-img">
            <img src={image} alt={`${name}`} />
          </div>
          <div className="animal-type">
            <p>Vrsta:</p>
            <p>{type}</p>
          </div>
          {/* <div className="animal-gender">
            <p>Spol:</p>
            <p>{gender}</p>
          </div> */}
          {/* <div className="animal-years">
            <p>Godine:</p>
            <p>{years}</p>
          </div>
          <div className="animal-description">
            <p>Opis:</p>
            <p>{description}</p>
          </div> */}
          <div className="animal-adopted">
            <p>Udomljena:</p>
            <p>{adopted ? 'Da' : 'Ne'}</p>
          </div>
          <button className="animal-more-info-btn" onClick={toggleMoreInfo}>
            Više informacija
          </button>
        </>
      )}
    </div>
  );
}

export default AnimalCard;
