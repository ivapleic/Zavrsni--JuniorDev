import { useState, useEffect, useContext } from "react";
import axios from "axios";
import "../styles/Donations.css";
import UserRoleContext from "../components/UserRole";
import AddNewDonation from "../components/AddNewDonation";

function Donations() {
  const [donations, setDonations] = useState([]);
  const { userRole } = useContext(UserRoleContext);
  const [newDonation, setNewDonation] = useState({
    category: userRole === "admin" ? "trazi" : "nudi",
    type: "",
    value: "",
    description: "",
  });
  const [addingNewDonation, setAddingNewDonation] = useState(false);

  useEffect(() => {
    axios.get("http://localhost:3000/donations").then((res) => {
      setDonations(res.data);
    });
  }, []);

  const handleDelete = (id) => {
    axios.delete(`http://localhost:3000/donations/${id}`).then(() => {
      setDonations((prevDonations) =>
        prevDonations.filter((donation) => donation.id !== id)
      );
    });
  };

  const handleAcceptDonation = (id:any) => {
    const updatedDonations = donations.map((donation) => {
      if (donation.id === id) {
        return { ...donation, category: "donirano" };
      }
      return donation;
    });
    setDonations(updatedDonations);
  };

  const handleDonate = (id) => {
    const updatedDonations = donations.map((donation) => {
      if (donation.id === id) {
        return { ...donation, category: "donirano" };
      }
      return donation;
    });
    setDonations(updatedDonations);
  };

  const handleRepeatRequest = (id) => {
    const updatedDonations = donations.map((donation) => {
      if (donation.id === id) {
        return { ...donation, category: "trazi" };
      }
      return donation;
    });
    setDonations(updatedDonations);
  };

  function handleAddNewDonation(newDonation:any) {
    fetch("http://localhost:3000/donations", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newDonation),
    })
      .then((response) => response.json())
      .then((data) => {
        setDonations([...donations, data]);
        setNewDonation({
          category: userRole === "admin" ? "trazi" : "nudi",
          type: "",
          value: "0",
          description: "",
        });
      })
      .catch((error) => console.log(error));
      setAddingNewDonation(false);
  }

  return (
    <div className="donations">
      <h1>Donacije</h1>
      <div className="add-new-donation">
        <h3>Od srca zahvaljujemo na podršci i na svakoj vrsti donacije ❤</h3>
        <br />
        <button onClick={() => setAddingNewDonation(!addingNewDonation)} className="new-donation-btn">
          Nova donacija
        </button>
        {addingNewDonation ? (
          <AddNewDonation
            setAddingNewDonation={setAddingNewDonation}
            newDonation={newDonation}
            setNewDonation={setNewDonation}
            userRole={userRole}
            setDonations={setDonations}
            donations={donations}
            handleAddNewDonation={handleAddNewDonation}
          />
        ) : null}
      </div>

      <div className="offer-donations">
        <h2>NUDIMO:</h2>
        <table className="donation-table">
          <thead>
            <tr>
              <th>TIP</th>
              <th>OPIS</th>
              <th>VRIJEDNOST</th>
              {userRole === "admin" && <th>AKCIJE</th>}
            </tr>
          </thead>

          <tbody>
            {donations
              .filter((donation) => donation.category === "nudi")
              .map((donation) => (
                <tr key={donation.id}>
                  <td>{donation.type}</td>
                  <td>{donation.description}</td>
                  <td>{donation.value}€</td>
                  {userRole === "admin" && (
                    <td>
                      <button onClick={() => handleAcceptDonation(donation.id)}>
                        Prihvati
                      </button>
                      <button onClick={() => handleDelete(donation.id)}>
                        Izbriši
                      </button>
                    </td>
                  )}
                </tr>
              ))}
          </tbody>
        </table>
      </div>
      <div className="wanted-donations">
        <h2>TRAŽIMO:</h2>
        <table className="donation-table">
          <thead>
            <tr>
              <th>TIP</th>
              <th>OPIS</th>
              <th>VRIJEDNOST</th>
              {userRole === "admin" && <th>AKCIJE</th>}
            </tr>
          </thead>
          <tbody>
            {donations
              .filter((donation) => donation.category === "trazi")
              .map((donation) => (
                <tr key={donation.id}>
                  <td>{donation.type}</td>
                  <td>{donation.description}</td>
                  <td>{donation.value}€ </td>
                  {userRole === "user" && (
                    <button onClick={() => handleDonate(donation.id)}>
                      Doniraj
                    </button>
                  )}
                  {userRole === "admin" && (
                    <td>
                      <button onClick={() => handleAcceptDonation(donation.id)}>
                        Donirano
                      </button>
                      <button onClick={() => handleDelete(donation.id)}>
                        Izbriši
                      </button>
                    </td>
                  )}
                </tr>
              ))}
          </tbody>
        </table>
      </div>
      <div className="already-donated">
        <h2>DONIRANO:</h2>
        <table className="donation-table">
          <thead>
            <tr>
              <th>TIP</th>
              <th>OPIS</th>
              <th>VRIJEDNOST</th>
              {userRole === "admin" && <th>AKCIJE</th>}
            </tr>
          </thead>
          <tbody>
            {donations
              .filter((donation) => donation.category === "donirano")
              .map((donation) => (
                <tr key={donation.id}>
                  <td>{donation.type}</td>
                  <td>{donation.description}</td>
                  <td>{donation.value}€</td>
                  {userRole === "admin" && (
                    <td>
                      <button onClick={() => handleRepeatRequest(donation.id)}>
                        Ponovi zahtjev
                      </button>
                      <button onClick={() => handleDelete(donation.id)}>
                        Izbriši
                      </button>
                    </td>
                  )}
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Donations;
