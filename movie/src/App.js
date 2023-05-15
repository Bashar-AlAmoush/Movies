import './App.css';

import React, { useEffect, useState } from 'react';

function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    // Fetch the list of movies from the Express API endpoint
    fetch('http://localhost:4000/movies')
      .then((response) => response.json())
      .then((data) => setMovies(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      <h1>Movie Database App</h1>
      {movies.map((movie) => (
        <div key={movie.id}>
          <h2>{movie.title}</h2>
        
          <img  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} ></img>
          <p>{movie.overview}</p>
          <p>{movie.release_date}</p>
        </div>
      ))}

    </div>
  );
}
export default App;