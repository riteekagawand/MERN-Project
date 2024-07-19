import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Login from './Components/Login';
import Register from './Components/Register';
import Dashboard from './Components/Dashboard';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = (status) => {
    setIsAuthenticated(status);
  };

  return (
    <>
      {isAuthenticated ? (
        <>
          <Navbar />
          <Dashboard />
          <Routes>
            <Route path="/*" element={<div></div>}>
              <Route path="dashboard" element={<Dashboard />} />
              
            </Route>
          </Routes>
        </>
      ) : (
        <Routes>
          <Route path="/" element={<Login onLogin={handleLogin} />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login onLogin={handleLogin}/>} />
        </Routes>
      )}
    </>
  );
};

export default App;
