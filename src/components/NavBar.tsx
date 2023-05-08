import { useContext } from "react";
import { Link } from "react-router-dom";
import UserRoleContext from "./UserRole";
import "../styles/NavBar.css";

function NavBar() {
  const { userRole, setUserRole } = useContext(UserRoleContext);

  function handleUserRoleChange(event:any) {
    setUserRole(event.target.checked ? "admin" : "user");
  }

  return (
    <div className="header">
      <img src="src\assets\dog-cat.jpg" className="logo" alt="logo" />
      <div className="inner">
        <div className="nav-bar">
          <Link to="/about-us">O nama</Link>
          <Link to="/animals">Popis</Link>
          <Link to="/donations">Donacije</Link>
          <Link to="/notifications">Obavijesti</Link>
          {userRole === "admin" && <Link to="/add-new">Dodaj novog</Link>}
        </div>
        <div className="user-role">
          <label className="switch">
            <input
              type="checkbox"
              checked={userRole === "admin"}
              onChange={handleUserRoleChange}
            />
            <span className="slider round">Admin</span>
          </label>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
