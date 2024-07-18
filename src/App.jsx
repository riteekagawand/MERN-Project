import  { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Login from './Components/Login';
import Register from './Components/Register'; // Ensure Register component is imported

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = (status) => {
    setIsAuthenticated(status);
  };

  return (
    <Router>
      {isAuthenticated ? (
        <>
          <Navbar />
          <Routes>
            <Route path="/" element={<div className="p-4">Welcome to Job Tracker!</div>} />
            <Route path="/about" element={<div className="p-4">About Page</div>} />
            <Route path="/services" element={<div className="p-4">Services Page</div>} />
            <Route path="/contact" element={<div className="p-4">Contact Page</div>} />
            <Route path="/register" element={<Register />} /> {/* Ensure Register component is rendered */}
          </Routes>
        </>
      ) : (
        <Login onLogin={handleLogin} />
      )}
    </Router>
  );
};

export default App;
