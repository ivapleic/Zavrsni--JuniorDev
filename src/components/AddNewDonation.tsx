import "../styles/AddNewDonation.css";

function AddNewDonation({
  setAddingNewDonation,
  newDonation,
  setNewDonation,
  handleAddNewDonation,
}: any) {

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    handleAddNewDonation(newDonation);
  };

  const handleCancel = () => {
    setAddingNewDonation(!setNewDonation);
  };

  return (
    <div className="add-new-donation">
      <form onSubmit={handleSubmit} className="form-add-new-don">
        <div className="category">
          <label>Kategorija:</label>
          <p>{newDonation.category}</p>
        </div>
        <div className="type-value">
          <div className="type">
            <label htmlFor="type">Tip:</label>
            <select
              id="type"
              name="type"
              onChange={(event) =>
                setNewDonation({ ...newDonation, type: event.target.value })
              }
            >
              <option value=""></option>
              <option value="hrana">Hrana</option>
              <option value="lijekovi">Lijekovi</option>
              <option value="igračke">Igračke</option>
              <option value="vet-troškovi">Vet. troškovi</option>
            </select>
          </div>
          <div className="value">
            <label htmlFor="value">Vrijednost donacije (€):</label>
            <input
              type="number"
              id="value"
              name="value"
              value={newDonation.value}
              onChange={(event) =>
                setNewDonation({ ...newDonation, value: event.target.value })
              }
            />
          </div>
        </div>
        <div className="description">
          <label htmlFor="description">Opis:</label>
          <textarea
            id="description"
            name="description"
            value={newDonation.description}
            onChange={(event) =>
              setNewDonation({
                ...newDonation,
                description: event.target.value,
              })
            }
          ></textarea>
        </div>
        <div className="button-container">
          <button type="submit">Dodaj donaciju</button>
          <button type="button" onClick={handleCancel}>Odustani</button>
        </div>
      </form>
    </div>
  );
}

export default AddNewDonation;
