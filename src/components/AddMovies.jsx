import React, { useState } from 'react';
import './AddMovies.css';

const AddMovies = () => {
  const [movie, setMovie] = useState({
    name: '',
    releaseDate: '',
    runtime: '',
    genre: '',
  });
  const [moviesList, setMoviesList] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMovie((prevMovie) => ({
      ...prevMovie,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (movie.name && movie.releaseDate && movie.runtime && movie.genre) {
      setMoviesList([...moviesList, movie]);
      setMovie({
        name: '',
        releaseDate: '',
        runtime: '',
        genre: '',
      });
      alert('Movie added successfully!');
    } else {
      alert('Please fill in all fields');
    }
  };

  return (
    <div className="add-movies-container">
      <h1>Add Movie</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Movie Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={movie.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="releaseDate">Release Date:</label>
          <input
            type="date"
            id="releaseDate"
            name="releaseDate"
            value={movie.releaseDate}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="runtime">Runtime (minutes):</label>
          <input
            type="number"
            id="runtime"
            name="runtime"
            value={movie.runtime}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="genre">Genre:</label>
          <input
            type="text"
            id="genre"
            name="genre"
            value={movie.genre}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Add Movie</button>
      </form>
    </div>
  );
};

export default AddMovies;
