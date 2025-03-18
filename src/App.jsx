import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import RegistrationPage from './components/RegistrationPage';
import LoginPage from './components/LoginPage';
import UserHomePage from './components/UserHomePage';
import AddMovies from './components/AddMovies';
import ViewMovies from './components/ViewMovies';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<RegistrationPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/user-home" element={<UserHomePage />} />
        <Route path="/add-movies" element={<AddMovies />} />
        <Route path="/view-movies" element={<ViewMovies />} />
      </Routes>
    </Router>
  );
};

export default App;
