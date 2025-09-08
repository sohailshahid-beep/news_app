import './App.css';
import Navbar from './Components/Navbar';
import Dashboard from './Components/Dashboard';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddNews from './Components/AddNews';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/addnews" element={<AddNews />} />
      </Routes>
    </Router>
  );
}

export default App;
