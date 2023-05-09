import { useState } from "react";
import "../styles/AddNewNotification.css";

function AddNewNotification({ newNotification, setNewNotification, handleAddNewNotification,setShowNewNotification }:any) {
  const [isLoading, setIsLoading] = useState(false);

  function handleNotificationSubmit(event:any) {
    event.preventDefault();
    setIsLoading(true);
    handleAddNewNotification(newNotification);
  }

  function handleExitAddNew() {
    setNewNotification({
      heading: "",
      important: false,
      date: "",
      text: "",
    });
    setShowNewNotification(false); 
  }
  

  function handleChange(event:any) {
    const { name, value } = event.target;
    setNewNotification((prevNotification:any) => ({
      ...prevNotification,
      [name]: value,
      date: new Date().toLocaleDateString(),
    }));
  }

  return (
      <form onSubmit={handleNotificationSubmit} className="add-new-notification">
        <label>
          Naslov:
          <input
            type="text"
            name="heading"
            value={newNotification.heading}
            onChange={handleChange}
            required
          />
        </label>
        {/* <br />
        <label>
          Važno:
          <input
            type="checkbox"
            name="important"
            checked={newNotification.important}
            onChange={handleChange}
          />
        </label> */}
        <br />
        <label>
          Tekst:
          <input
            type="text"
            name="text"
            value={newNotification.text}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <div className="add-new-notification-buttons">
          <button type="submit" disabled={isLoading}>
            {isLoading ? "Spremanje..." : "Spremi"}
          </button>
          <button type="button" onClick={handleExitAddNew}>
            Odustani
          </button>
        </div>
      </form>
  );
}

export default AddNewNotification;
