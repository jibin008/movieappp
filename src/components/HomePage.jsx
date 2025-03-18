import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

const HomePage = () => {
    return (

        <div className="container">
            <h1 className="title">MOVIE APP</h1>

            <div>
                <Link to="/register">Registration</Link>&nbsp&nbsp&nbsp&nbsp&nbsp
                <Link to="/login">Login</Link>
            </div>

        </div>

    );
};

export default HomePage;
