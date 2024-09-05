import React from 'react';
import { useNavigate } from 'react-router-dom';
import { logout } from '../services/auth';

function Home() {
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/auth');
  };

  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      <p>You are authenticated!</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Home;