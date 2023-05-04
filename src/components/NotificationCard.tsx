import "../styles/NotificationCard.css";

function NotificationCard({ notification }: any) {
  const { heading, important, text, date } = notification;
  return (
    <div className="notification">
      <div className="notification-header">
        <span>{important === true ? "važno" : ""}</span>
        <h2>{heading}</h2>
        <span>{date}</span>
      </div>
      <div className="notification-text">{text}</div>
    </div>
  );
}
export default NotificationCard;
