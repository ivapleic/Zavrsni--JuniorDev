import UserRoleContext from "./components/UserRole";
import AdminPage from "./components/AdminPage";
import UserPage from "./components/UserPage";
import { useState } from "react";
import './App.css';

function App() {
  const [userRole, setUserRole] = useState("user");

  return (
    <UserRoleContext.Provider value={{ userRole, setUserRole }}>
      <div className="app">
        {userRole === "admin" ? <AdminPage /> : <UserPage />}
      </div>
    </UserRoleContext.Provider>
  );
}

export default App;
