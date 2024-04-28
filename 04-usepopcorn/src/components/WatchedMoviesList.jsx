import WatchedMovie from "./WatchedMovie";
import { Ul } from "./WatchedMoviesListStyles";

function WatchedMoviesList({ watched, onDeleteWatchedMovie }) {
  return (
    <Ul>
      {watched.map((movie) => (
        <WatchedMovie
          key={movie.imdbID}
          movie={movie}
          onDeleteWatchedMovie={onDeleteWatchedMovie}
        />
      ))}
    </Ul>
  );
}

export default WatchedMoviesList;
