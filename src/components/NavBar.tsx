import "../styles/NavBar.css";
import { useContext } from "react";
import UserRoleContext from "./UserRole";

function NavBar() {
  const { userRole, setUserRole } = useContext(UserRoleContext);

  function handleUserRoleChange(event: any) {
    setUserRole(event.target.checked ? "admin" : "user");
  }

  return (
    <div className="header">
      <div className="inner">
        <div className="nav-bar">
        <a href="google.com">Unos</a>
          <a href="google.com">Popis</a>
          <a href="google.com">O nama</a>
          <img src="src\assets\dog-cat.jpg" className="logo" />
          <a href="google.com">Donacije</a>
          <a href="google.com">Obavijesti</a>
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
