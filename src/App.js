import React from "react";
import { useState, useEffect } from "react";

import MovieCard from './MovieCard.js';

import './App.css';
import SearchIcon from './search.svg';

const API_URL = "http://www.omdbapi.com?apikey=43f32e6a";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');  
  const [movie, setMovie] = useState(false);

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search);
  }

  useEffect(() => {
    searchMovies("Spiderman");
  }, []);
const checkmovie = (event) => {console.log(searchTerm); setSearchTerm(event.target.value)}
  return (
    <div className="app">
        <h1>MovieLand</h1>

        <div className="search">
          <input 
          placeholder="Search for movies"
          value={searchTerm}
          onChange={checkmovie}
          />
          <img
          src={SearchIcon}
          alt="search"
          //onClick={() => searchMovies(searchTerm)}
          />
        </div>

        {movie?<p>Movie Available</p>
        :<p>Not Available</p>

        }
        <button onClick={() => {setMovie(true)}}>B</button>

        {movies?.length > 0
          ? (
            <div className="container">
              {movies.map((movie) => (
                <MovieCard movie={movie}/>
              ))}
            </div>
          ) : (
            <div className="empty">
              <h2>No movies found</h2>
            </div>
          )}    
    </div>
  );
}

export default App;
