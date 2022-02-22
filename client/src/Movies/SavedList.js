import React from "react";
import ReactDOM from "react-dom";

export default function SavedList(props) {
  return (
    <Router>
      <div className="saved-list">
        <h3>Saved Movies:</h3>
        {props.list.map((movie) => (
          <span className="saved-movie">{movie.title}</span>
        ))}
        <div className="home-button" onClick={() => history.goBack()}>
          Home
        </div>
      </div>
    </Router>
  );
}
