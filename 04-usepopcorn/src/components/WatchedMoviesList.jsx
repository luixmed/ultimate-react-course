import WatchedMovie from "./WatchedMovie";
import { Ul } from "./WatchedMoviesListStyles";

function WatchedMoviesList({ watched }) {
  return (
    <Ul>
      {watched.map((movie) => (
        <WatchedMovie key={movie.imdbID} movie={movie} />
      ))}
    </Ul>
  );
}

export default WatchedMoviesList;
