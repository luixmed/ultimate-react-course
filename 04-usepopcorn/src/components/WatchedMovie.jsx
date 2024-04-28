import { Li } from "./WatchedMovieStyles";

// eslint-disable-next-line no-unused-vars
function WatchedMovie({ movie, onDeleteWatchedMovie }) {
  return (
    <Li>
      <img src={movie.poster} alt={`${movie.title} poster`} />
      <h3>{movie.title}</h3>
      <div>
        <p>
          <span>⭐</span>
          <span>{movie.imdbRating}</span>
        </p>
        <p>
          <span>🌟</span>
          <span>{movie.userRating}</span>
        </p>
        <p>
          <span>⏳</span>
          <span>{movie.runtime} min</span>
        </p>

        <button onClick={() => onDeleteWatchedMovie(movie.imdbID)}>x</button>
      </div>
    </Li>
  );
}

export default WatchedMovie;
