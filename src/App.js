import './App.css';
import Navbar from './Components/Navbar';
import Login from './Components/Login';
import Signup from './Components/Signup';
import Dashboard from './Components/Dashboard';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import AddNews from './Components/AddNews';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
   
        <Route path="/" element={<Login />} />

        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/addnews" element={<AddNews />} />
        <Route path="/signup" element={<Signup />} />

    
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
