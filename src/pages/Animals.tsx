import "../styles/Animals.css";
import AnimalFilters from "../components/AnimalFilters";
import AnimalCard from "../components/AnimalCard";
import { useState, useEffect, useContext } from "react";
import UserRoleContext from "../components/UserRole";
import axios from "axios";

function Animals() {
  const { userRole } = useContext(UserRoleContext);
  const [animals, setAnimals] = useState([]);
  const [selectedType, setSelectedType] = useState("");
  const [selectedGender, setSelectedGender] = useState("");
  const [selectedAdoptionStatus, setSelectedAdoptionStatus] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3000/animals")
      .then((response) => response.json())
      .then((data) => {
        setAnimals(data);
      })
      .catch((error) => console.log(error));
  }, []);

  const filteredAnimals = animals.filter((animal) => {
    if (
      (selectedType && animal.type !== selectedType) ||
      (selectedGender && animal.gender !== selectedGender) ||
      (selectedAdoptionStatus === true && animal.adopted !== true) ||
      (selectedAdoptionStatus === false && animal.adopted !== false)
    ) {
      return false;
    }
    return true;
  });
  

  const handleDeleteAnimal = (id:any) => {
    fetch(`http://localhost:3000/animals/${id}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((data) => {
        setAnimals((prevAnimals) =>
          prevAnimals.filter((animal) => animal.id !== id)
        );
      })
      .catch((error) => console.log(error));
  };

  const handleEditAnimal = (id:any, updatedAnimalData:any) => {
    axios
      .put(`http://localhost:3000/animals/${id}`, updatedAnimalData)
      .then((response) => {
        setAnimals((prevAnimals:any) => {
          const updatedAnimals = prevAnimals.map((animal:any) => {
            if (animal.id === id) {
              return {
                ...animal,
                ...updatedAnimalData,
              };
            }
            return animal;
          });
          return updatedAnimals;
        });
      })
      .catch((error:any) => console.log(error));
    }

    const handleAdoption = (id:any, updatedAnimalData:any) => {
      axios
        .put(`http://localhost:3000/animals/${id}`, updatedAnimalData)
        .then((response) => {
          setAnimals((prevAnimals:any) => {
            const updatedAnimals = prevAnimals.map((animal:any) => {
              if (animal.id === id) {
                return {
                  ...animal,
                  ...updatedAnimalData,
                };
              }
              return animal;
            });
            return updatedAnimals;
          });
        })
        .catch((error:any) => console.log(error));
      }


  return (
    <div className="animals">
      <h1>Naše životinje</h1>
      <AnimalFilters
        selectedType={selectedType}
        setSelectedType={setSelectedType}
        selectedGender={selectedGender}
        setSelectedGender={setSelectedGender}
        selectedAdoptionStatus={selectedAdoptionStatus}
        setSelectedAdoptionStatus={setSelectedAdoptionStatus}
      />
      <div className="animals-cards">
        {filteredAnimals.map((animal) => (
          <AnimalCard
            key={animal.id}
            animal={animal}
            userRole={userRole}
            handleDeleteAnimal={userRole === "admin" ? handleDeleteAnimal : null}
            handleEditAnimal={userRole === "admin" ? handleEditAnimal : null}
            handleAdoption={handleAdoption}
          />
        ))}
      </div>
    </div>
  );
}

export default Animals;
