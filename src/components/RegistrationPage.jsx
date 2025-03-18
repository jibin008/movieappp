import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './RegistrationPage.css';

const RegistrationPage = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username && email && password) {
      const user = {
        username,
        email,
        password,
      };
      localStorage.setItem('user', JSON.stringify(user));
      alert('Registered successfully!');
      setUsername('');
      setEmail('');
      setPassword('');
    } else {
      alert('Please fill in all fields');
    }
  };

  return (
    <div className="registration-container">
      <h1 className="title">MOVIE APP</h1>
      <h2>Register Here</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Register</button>
      </form>
      <p>
        Already have an account? <Link to="/login">Login here</Link>
      </p>
    </div>
  );
};

export default RegistrationPage;
