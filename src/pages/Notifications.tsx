import { useState, useEffect} from "react";
import "../styles/Notifications.css";
import NotificationCard from "../components/NotificationCard";
import AddNewNotification from "../components/AddNewNotification";
import axios from "axios";

function Notifications() {
  const [notifications, setNotifications] = useState([]);
  const [newNotification, setNewNotification] = useState({
    heading: "",
    important: false,
    date: "",
    text: "",
  });
  const [showNewNotification, setShowNewNotification] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:3000/notifications")
      .then((response) => {
        setNotifications(response.data);
      })
      .catch((error) => console.log(error));
  }, []);

  function handleNewNotificationClick() {
    setShowNewNotification((prevState) => !prevState);
    setNewNotification({
      heading: "",
      important: false,
      date: "",
      text: "",
    });
  }

  function handleAddNewNotification(newNotificationData) {
    axios
      .post("http://localhost:3000/notifications", newNotificationData)
      .then((response) => {
        setNotifications([...notifications, response.data]);
        setNewNotification({
          heading: "",
          important: false,
          date: "",
          text: "",
        });
      })
      .catch((error) => console.log(error));
    setShowNewNotification(false);
  }

  function handleDeleteNotification(id) {
    setNotifications((prevNotifications) =>
      prevNotifications.filter((notification) => notification.id !== id)
    );
  }

  function handleMarkImportantNotification(updatedNotification) {
    setNotifications((prevNotifications) =>
      prevNotifications.map((notification) => {
        if (notification.id === updatedNotification.id) {
          return updatedNotification;
        }
        return notification;
      })
    );
  }
  

 return (
  <div className="notifications">
    <h1>Obavijesti</h1>
    <div className="new-notification">
      <button
        className="new-notification-btn"
        onClick={handleNewNotificationClick}
      >
        Nova obavijest
      </button>
    </div>
    {showNewNotification && (
      <div className="form-add-new-not">
        <AddNewNotification
          newNotification={newNotification}
          setNewNotification={setNewNotification}
          handleAddNewNotification={handleAddNewNotification}
          setShowNewNotification={setShowNewNotification}
        />
      </div>
    )}

    <div className="notification-list">
      {notifications.map((notification) => (
        <NotificationCard
          key={notification.id}
          notification={notification}
          onDelete={() => handleDeleteNotification(notification.id)}
          onMarkImportant={() => handleMarkImportantNotification(notification.id)}
        />
      ))}
    </div>
  </div>
);

}

export default Notifications;
