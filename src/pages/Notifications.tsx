import { useState,useEffect } from "react";
import "../styles/Notifications.css";
import NotificationCard from "../components/NotificationCard";

function Notifications() {

  const [notifications,setNotifications]=useState([])
  const [newNotification,setNewNotification]=useState({
    heading:"",
    date:"",
    important:false,
    text:""
  })

  useEffect(() => {
    fetch("http://localhost:3003/notifications")
      .then((response) => response.json())
      .then((data) => {
        setNotifications(data);
        console.log(data);
      })
      .catch((error) => console.log(error));
  }, []);

  function handleNewNotificationClick() {
    <div className="add-new-not">
      <form onSubmit={handleNotificationSubmit}>
        {/* unesi naslov,datum danasnji,tekst obavijesti i admin moze oznacit je li vazno ili ne */}
        </form> </div>
  }

  function handleNotificationSubmit() {
    //dodat u notification json 
  }

  return (
    <div className="notifications">
      <h1>Obavijesti</h1>
      <div className="new-notification">
        <button className="new-notification-btn" onClick={handleNewNotificationClick}>Nova obavijest</button>
      </div>
      <div className="notification-list">
      {notifications.map((notification) => (
            <NotificationCard key={notifications.id} notification={notification} />
          ))}
       
      </div>
    </div>
  );
}

export default Notifications;
