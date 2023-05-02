import { useState } from "react";
import "../styles/AnimalFilters.css";
import axios from "axios";

function AnimalFilters({
  selectedType,
  setSelectedType,
  selectedGender,
  setSelectedGender,
  selectedAdoption,
  setSelectedAdoptionStatus,
}: any) {
  return (
    <div className="animals-selection">
      <div className="filter">
        <h3>Vrsta:</h3>
        <div className="radio-label">
          <label>
            <input
              type="radio"
              value="Pas"
              checked={selectedType === "Pas"}
              // onChange={handleFilterType}
            />
            Pas
          </label>
          <label>
            <input
              type="radio"
              value="Mačka"
              checked={selectedType === "Mačka"}
              // onChange={handleFilterType}
            />
            Mačka
          </label>
          <label>
            <input
              type="radio"
              value="Zec"
              checked={selectedType === "Zec"}
              // onChange={handleFilterType}
            />
            Zec
          </label>
        </div>
      </div>
      <div className="filter">
        <h3>Spol:</h3>
        <div className="radio-label">
          <label>
            <input
              type="radio"
              value="Mužjak"
              checked={selectedType === "Mužjak"}
              // onChange={handleFilterType}
            />
            Mužjak
          </label>
          <label>
            <input
              type="radio"
              value="Ženka"
              checked={selectedType === "Ženka"}
              // onChange={handleFilterType}
            />
            Ženka
          </label>
        </div>
      </div>
      <div className="filter">
        <h3>Status udomljenja:</h3>
        <div className="radio-label">
          <label>
            <input
              type="radio"
              value="Udomljen"
              checked={selectedType === "Udomljen"}
              // onChange={handleFilterType}
            />
            Udomljen
          </label>
          <label>
            <input
              type="radio"
              value=" Neudomljen"
              checked={selectedType === " Neudomljen"}
              // onChange={handleFilterType}
            />
            Neudomljen
          </label>
        </div>
      </div>
    </div>
  );
}

export default AnimalFilters;
