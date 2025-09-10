import './App.css';
import Navbar from './Components/Navbar';
import Login from './Components/Login';
import Signup from './Components/Signup';
import Dashboard from './Components/Dashboard';
import AddNews from './Components/AddNews';
import ProtectedRoute from './Components/ProtectedRoute';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";



function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
    
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />}
          />
  
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/addnews"
          element={
            <ProtectedRoute>
              <AddNews />
            </ProtectedRoute>
          }
        />

   
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
