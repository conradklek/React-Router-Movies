import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

export default function MovieList(props) {
  return (
    <div className="movie-list">
      {props.movies.map((movie) => (
        <MovieDetails key={movie.id} movie={movie} />
      ))}
    </div>
  );
}

function MovieDetails(props) {
  const { title, director, metascore } = props.movie;
  //When a user clicks on the movie card inside MovieList they should be taken to /movies/{id of clicked movie here} to see the details of the selected movie.
  return (
    <div className="movie-card">
      <h2>
        <Link to={`/movies/${props.movie.id}`}>{title}</Link>
      </h2>
      <div className="movie-director">
        Director: <em>{director}</em>
      </div>
      <div className="movie-metascore">
        Metascore: <strong>{metascore}</strong>
      </div>
    </div>
  );
}
