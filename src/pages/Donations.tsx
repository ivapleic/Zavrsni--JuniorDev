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
    axios.get("http://localhost:3009/donations").then((res) => {
      setDonations(res.data);
    });
  }, []);

  const handleDelete = (id) => {
    axios.delete(`http://localhost:3009/donations/${id}`).then((res) => {
      setDonations((prevDonations) =>
        prevDonations.filter((donation) => donation.id !== id)
      );
    });
  };

  const handleAcceptDonation = (id) => {
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

  function handleAddNewDonation(newDonation) {
    fetch("http://localhost:3009/donations", {
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
        <button onClick={() => setAddingNewDonation(true)}>
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
        <h2>Nudimo:</h2>
        <table>
          <thead>
            <tr>
              <th>Tip</th>
              <th>Opis</th>
              <th>Vrijednost</th>
              {userRole === "admin" && <th>Akcija</th>}
            </tr>
          </thead>

          <tbody>
            {donations
              .filter((donation) => donation.category === "nudi")
              .map((donation) => (
                <tr key={donation.id}>
                  <td>{donation.type}</td>
                  <td>{donation.description}</td>
                  <td>{donation.value}</td>
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
        <h2>Tražimo:</h2>
        <table>
          <thead>
            <tr>
              <th>Tip</th>
              <th>Opis</th>
              <th>Vrijednost</th>
              {userRole === "admin" && <th>Akcije</th>}
            </tr>
          </thead>
          <tbody>
            {donations
              .filter((donation) => donation.category === "trazi")
              .map((donation) => (
                <tr key={donation.id}>
                  <td>{donation.type}</td>
                  <td>{donation.description}</td>
                  <td>{donation.value}</td>
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
        <h2>Donirano:</h2>
        <table>
          <thead>
            <tr>
              <th>Tip</th>
              <th>Opis</th>
              <th>Vrijednost</th>
              {userRole === "admin" && <th>Akcije</th>}
            </tr>
          </thead>
          <tbody>
            {donations
              .filter((donation) => donation.category === "donirano")
              .map((donation) => (
                <tr key={donation.id}>
                  <td>{donation.type}</td>
                  <td>{donation.description}</td>
                  <td>{donation.value}</td>
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
