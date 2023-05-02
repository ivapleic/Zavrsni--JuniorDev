import NavBar from "./NavBar";
import Footer from "./Footer";
import AboutUs from "../pages/AboutUs";
import Donations from "../pages/Donations";
import Notifications from "../pages/Notifications";
import Animals from "../pages/Animals";
import { Routes, Route } from 'react-router-dom';
import '../styles/UserPage.css';

function UserPage() {
  return (
    <div className="admin-user">
      <NavBar />
      {/* <h1>Welcome, user!</h1> */}
      <div className="main-content">
      <Routes>
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/donations" element={<Donations />} />
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/animals" element={<Animals />} />
      </Routes>
    </div>
    <Footer />
    </div>
  );
}

export default UserPage;