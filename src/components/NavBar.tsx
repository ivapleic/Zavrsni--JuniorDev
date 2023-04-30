import { useContext } from "react";
import { Link } from "react-router-dom";
import UserRoleContext from "./UserRole";
import "../styles/NavBar.css";

function NavBar() {
  const { userRole, setUserRole } = useContext(UserRoleContext);

  function handleUserRoleChange(event) {
    setUserRole(event.target.checked ? "admin" : "user");
  }

  return (
    <div className="header">
      <div className="inner">
        <div className="nav-bar">
          <Link to="/animals">Popis</Link>
          <Link to="/about-us">O nama</Link>
          <img src="src\assets\dog-cat.jpg" className="logo" alt="logo" />
          <Link to="/donations">Donacije</Link>
          <Link to="/notifications">Obavijesti</Link>
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
