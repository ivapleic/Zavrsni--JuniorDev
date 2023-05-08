import NavBar from "./NavBar";
import AboutUs from "../pages/AboutUs";
import Donations from "../pages/Donations";
import Notifications from "../pages/Notifications";
import Animals from "../pages/Animals";
import AddNew from "../pages/AddNew";
import { Routes, Route } from 'react-router-dom';
import '../styles/UserPage.css';
import Footer from "./Footer";

function AdminPage() {
  return (
    <div className="admin-user">
      <NavBar />
      {/* <h1>Welcome, user!</h1> */}
      <div className="main-content">
      <Routes>
      <Route path="/" element={<AboutUs />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/donations" element={<Donations />} />
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/animals" element={<Animals />} />
        <Route path="/add-new" element={<AddNew />} />
      </Routes>
    </div>
    <Footer />
    </div>
  );
}

export default AdminPage;