import "../styles/NotificationCard.css";
import UserRoleContext from "../components/UserRole";
import { useContext } from "react";
import axios from "axios";

function NotificationCard({ notification, onDelete, onMarkImportant }: any) {
  const { heading, important, text, date, id } = notification;
  const { userRole } = useContext(UserRoleContext);

  function handleDeleteClick() {
    axios
      .delete(`http://localhost:3000/notifications/${id}`)
      .then((response) => {
        onDelete(id);
      })
      .catch((error) => console.log(error));
  }

  function handleMarkImportantClick() {
    const updatedNotification = {
      ...notification,
      important: !notification.important,
    };
    axios
      .put(`http://localhost:3000/notifications/${id}`, updatedNotification)
      .then((response) => {
        onMarkImportant(updatedNotification);
      })
      .catch((error) => console.log(error));
  }
  

  const notificationClass = important
    ? "notification important"
    : "notification not-important";

  return (
    <div className={notificationClass}>
      <div className="notification-header">
        <div className="inner-header">
          {important === true ? (
            <span className="important-span">
              <img src="src/assets/alert.png" alt="Alert" className="alert" />
              <p>
                <b>VAŽNO</b>
              </p>
            </span>
          ) : (
            ""
          )}

          <h2>{heading}</h2>
          <span className="date"><b>{date}</b></span>
        </div>
      </div>
      <div className="notification-text">{text}</div>
      <div className="buttons-notification">
        {userRole === "admin" && (
          <>
            <button onClick={handleMarkImportantClick}>
              {important ? "Unmark as Important" : "Mark as Important"}
            </button>
            <button onClick={handleDeleteClick}>Delete</button>
          </>
        )}
      </div>
    </div>
  );
}

export default NotificationCard;
