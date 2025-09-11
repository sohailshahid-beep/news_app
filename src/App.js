import "./App.css";
import Navbar from "./Components/Navbar";

import Login from "./Components/Login";
import Signup from "./Components/Signup";
import Dashboard from "./Components/Dashboard";
import AddNews from "./Components/AddNews";
import ProtectedRoute from "./route/ProtectedRoute";
import PublicRoute from "./route/PublicRoute";
import Footer from "./Components/Footer"
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
       
        <Route element={<PublicRoute />}>

          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          
        </Route>

        <Route element={<ProtectedRoute />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/addnews" element={<AddNews />} />
        </Route>

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
