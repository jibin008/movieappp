import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './ViewMovies.css';

const ViewMovies = () => {
  const [moviesList, setMoviesList] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get('https://my-json-server.typicode.com/horizon-code-academy/fake-movies-api/movies');
        setMoviesList(response.data);
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    };

    fetchMovies();
  }, []);

  return (
    <div className="view-movies-container">
      <h1>Movie List</h1>
      <div className="movies-grid">
        {moviesList.map((movie, index) => (
          <div key={index} className="movie-card">
            <img src={movie.Poster} alt={movie.Title} />
            <h2>{movie.Title}</h2>
            <p><strong>Year:</strong> {movie.Year}</p>
            <p><strong>Runtime:</strong> {movie.Runtime}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ViewMovies;
