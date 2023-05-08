import { useState } from "react";
import "../styles/AnimalCard.css";

function AnimalCard({
  animal,
  handleDeleteAnimal,
  handleEditAnimal,
  userRole,
}: any) {
  const {
    name,
    type,
    years,
    description,
    adopted,
    image,
    gender,
    chip,
    examination,
  } = animal;

  const [showMoreInfo, setShowMoreInfo] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [formData, setFormData] = useState(animal);

  console.log(formData);

  const toggleMoreInfo = () => {
    setShowMoreInfo(!showMoreInfo);
  };

  const handleEditClick = () => {
    setEditMode(true);
  };

  const handleCancel = () => {
    setEditMode(false);
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    handleEditAnimal(animal.id, formData);
    setEditMode(false);
  };

  const handleAdoption=(event:any)=> {
    handleEditAnimal(animal.id, { ...animal, adopted: true });
    };
  

  function handleInputChange(event: any) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
  
    const updatedFormData = {
      ...formData,
      [name]: name === 'adopted' ? target.checked : value
    };
  
    setFormData(updatedFormData);
  }
  
  

  function BasicInfo() {
    return (
      <>
        <h2>{name}</h2>
        <div className="animal-img">
          <img src={image} alt={`${name}`} />
        </div>
        <div className="animal-type">
          <p>Vrsta:</p>
          <p>{type}</p>
        </div>
        <div className="animal-adopted">
          <p>Udomljen:</p>
          <p>{adopted ? "Da" : "Ne"}</p>
        </div>
        <div className="animal-buttons">
          {userRole === "admin" && (
            <div>
              <button className="animal-edit-btn" onClick={handleEditClick}>
                Uredi
              </button>
              <button
                className="animal-delete-btn"
                onClick={() => handleDeleteAnimal(animal.id)}
              >
                Obriši
              </button>
            </div>
          )}
          <button className="animal-more-info-btn" onClick={toggleMoreInfo}>
            Više informacija
          </button>
          {!adopted && (
          <button
            className="animal-adopt-btn"
            onClick={() => handleAdoption}>
            Udomi me
          </button>
          )}
        </div>
      </>
    );
  }

  function AdditionalInfo() {
    return (
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
            <p>Udomljen:</p>
            <p>{adopted ? "Da" : "Ne"}</p>
          </div>
          <div className="animal-examination">
            <p>Zadnji pregled:</p>
            <p>{examination}</p>
          </div>
          <div className="animal-chip">
            <p>Čip:</p>
            <p>{chip ? "Da" : "Ne"}</p>
          </div>
          <div className="animal-examination">
            <p>Zadnji pregled:</p>
            <p>{examination}</p>
          </div>
          <button className="animal-more-info-btn" onClick={toggleMoreInfo}>
            Nazad
          </button>
        </div>
      </div>
    );
  }

  function EditingForm() {
    return (
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Type:
          <input
            type="text"
            name="type"
            value={formData.type}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Years:
          <input
            type="number"
            name="years"
            value={formData.years}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Description:
          <textarea
            name="description"
            value={formData.description}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Gender:
          <select name="gender" value={formData.gender} onChange={handleInputChange}>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </label>
        <label>
          Adopted:
          <input
            type="checkbox"
            name="adopted"
            checked={formData.adopted}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Image URL:
          <input
            type="text"
            name="image"
            value={formData.image}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Chip:
          <input
            type="checkbox"
            name="chip"
            checked={formData.chip}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Examination:
          <input
            type="date"
            name="examination"
            value={formData.examination}
            onChange={handleInputChange}
          />
        </label>
        <button type="submit">Save</button>
        <button type="button" onClick={handleCancel}>
          Cancel
        </button>
      </form>
    );
  }
  

  return (
    <div className="animal-card">
      {editMode ? (
        <EditingForm />
      ) : (
        <>{showMoreInfo ? <AdditionalInfo /> : <BasicInfo />}</>
      )}
    </div>
  );
}

export default AnimalCard;