import React from "react";
import WatchedMovie from "./WatchedMovie";

const WatchedMoviesList = ({ watched, omDeleteWatched }) => {
  return (
    <ul className="list">
      {watched.map((movie) => (
        <WatchedMovie
          movie={movie}
          key={movie.imdbID}
          omDeleteWatched={omDeleteWatched}
        />
      ))}
    </ul>
  );
};

export default WatchedMoviesList;
