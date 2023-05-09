import "../styles/AnimalFilters.css";

function AnimalFilters({
  selectedType,
  setSelectedType,
  selectedGender,
  setSelectedGender,
  selectedAdoptionStatus,
  setSelectedAdoptionStatus,
}: any) {
  
  const handleFilterType = (event: any) => {
    setSelectedType(event.target.value);
  };

  const handleFilterGender = (event: any) => {
    setSelectedGender(event.target.value);
  };

  const handleFilterAdoption = (event: any) => {
    const value = event.target.value;
    if (value === "Udomljen") {
      setSelectedAdoptionStatus(true);
    } else if (value === "Neudomljen") {
      setSelectedAdoptionStatus(false);
    }
  };

  const handleResetType = () => {
    setSelectedType("");
  };

  const handleResetGender = () => {
    setSelectedGender("");
  };

  const handleResetAdoption = () => {
    setSelectedAdoptionStatus(null);
  };


  return (
    <div className="animals-selection">
      <div className="filter">
        <h3>Vrsta:</h3>
        <div className="radio-label">
          <label>
            <input
              type="radio"
              value="pas"
              checked={selectedType === "pas"}
              onChange={handleFilterType}
            />
            Pas
          </label>
          <label>
            <input
              type="radio"
              value="mačka"
              checked={selectedType === "mačka"}
              onChange={handleFilterType}
            />
            Mačka
          </label>
          <label>
            <input
              type="radio"
              value="zec"
              checked={selectedType === "zec"}
              onChange={handleFilterType}
            />
            Zec
          </label>
        </div>
        <button onClick={handleResetType}>Resetiraj</button>
      </div>
      <div className="filter">
        <h3>Spol:</h3>
        <div className="radio-label">
          <label>
            <input
              type="radio"
              value="mužjak"
              checked={selectedGender === "mužjak"}
              onChange={handleFilterGender}
            />
            Mužjak
          </label>
          <label>
            <input
              type="radio"
              value="ženka"
              checked={selectedGender === "ženka"}
              onChange={handleFilterGender}
            />
            Ženka
          </label>
        </div>
        <button onClick={handleResetGender}>Resetiraj</button>
      </div>
      <div className="filter">
        <h3>Status udomljenja:</h3>
        <div className="radio-label">
          <label>
            <input
              type="radio"
              value="Neudomljen"
              checked={selectedAdoptionStatus == false}
              onChange={handleFilterAdoption}
            />
            Neudomljen
          </label>
          <label>
            <input
              type="radio"
              value="Udomljen"
              checked={selectedAdoptionStatus==true}
              onChange={handleFilterAdoption}
            />
            Udomljen
          </label>
        </div>
        <button onClick={handleResetAdoption}>Resetiraj</button>
      </div>
    </div>
  );
}

export default AnimalFilters;