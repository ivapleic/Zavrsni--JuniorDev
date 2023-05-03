import "../styles/Animals.css";
import AnimalFilters from "../components/AnimalFilters";
import AnimalCard from "../components/AnimalCard";
import { useState, useEffect } from "react";

function Animals() {
  const [animals, setAnimals] = useState([]);
  const [selectedType, setSelectedType] = useState("");
  const [selectedGender, setSelectedGender] = useState("");
  const [selectedAdoptionStatus, setSelectedAdoptionStatus] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3003/zivotinje")
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
      (selectedAdoptionStatus &&
        animal.adopted.toString() !== selectedAdoptionStatus)
    ) {
      return false;
    }
    return true;
  });

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
            <AnimalCard key={animal.id} animal={animal} />
          ))}
        </div>
      </div>
  );
}

export default Animals;
