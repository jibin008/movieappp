import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './UserHomePage.css';

const UserHomePage = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    const confirmed = window.confirm('Are you sure you want to logout?');
    if (confirmed) {
      navigate('/login');
    }
  };

  return (
    <div className="user-home-container">
      <button className="logout-button" onClick={handleLogout}>
        Logout
      </button>
      <h1>Welcome to the User Home Page</h1>
      <p>This is the user home page after a successful login.</p>
      <Link to="/add-movies">Add Movies</Link>
      <br />
      <Link to="/view-movies">View Movie List</Link>
    </div>
  );
};

export default UserHomePage;
