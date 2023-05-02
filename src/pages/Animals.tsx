import "../styles/Animals.css";
import AnimalFilters from "../components/AnimalFilters";
import AnimalCard from "../components/AnimalCard";
import { useState, useEffect } from "react";

function Animals() {
  const [animals, setAnimals] = useState([]);
  const [selectedType, setSelectedType] = useState("");
  const [selectedGender, setSelectedGender] = useState("");
  const [selectedAdoptionStatus, setSelectedAdoptionStatus] = useState(false);

  useEffect(() => {
    fetch("http://localhost:3003/zivotinje")
      .then((response) => response.json())
      .then((data) => setAnimals(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="animals">
      <h1>Naše životinje</h1>
      <AnimalFilters
        type={selectedType}
        setSelectedType={setSelectedType}
        gender={selectedGender}
        setSelectedGender={setSelectedGender}
        adopted={selectedAdoptionStatus}
        setSelectedAdoptionStatus={setSelectedAdoptionStatus}
      />
      <div className="animals-cards">
        {animals.map((animal) => (
          <AnimalCard key={animal.id} animal={animal} />
        ))}
      </div>
    </div>
  );
}

export default Animals;
