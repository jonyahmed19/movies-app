import React from "react";

const IMG_API = "https://image.tmdb.org/t/p/w1280";

const Movie = ({
  id,
  poster_path,
  backdrop_path,
  title,
  vote_average,
  overview,
}) => {
  return (
    <div className="movie" data-id={id}>
      <img src={IMG_API + poster_path} alt={title} />
      <div className="movie-info">
        <h3>{title}</h3>
        <span className="vote-agerage">{vote_average}</span>
      </div>
      <div className="movie-over">
        <h4>Overview:</h4>
        <p>{overview}</p>
      </div>
    </div>
  );
};

export default Movie;
