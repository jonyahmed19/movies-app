import Movie from "./components/Movie.component";
import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header.component";

const FEATURED_API =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";

const SEARCH_API =
  "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    apiCall(FEATURED_API);
  }, []);

  const apiCall = (API) => {
    return fetch(API)
      .then((res) => res.json())
      .then((data) => setMovies(data.results));
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (searchTerm) {
      apiCall(SEARCH_API + searchTerm);
    }
  };

  const handleOnChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="App">
      <Header search={handleOnSubmit} searchChange={handleOnChange} />
      <div className="movie-area">
        {movies.map((movie) => (
          <Movie key={movie.id} {...movie} />
        ))}
      </div>
    </div>
  );
};

export default App;
