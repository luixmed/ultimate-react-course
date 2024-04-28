import { Ul } from "./MovieListStyles";
import Movie from "./Movie";

function MovieList({ movies, onSelectedMovieId }) {
  return (
    <Ul>
      {movies?.map((movie) => (
        <Movie
          key={movie.imdbID}
          movie={movie}
          onSelectedMovieId={onSelectedMovieId}
        />
      ))}
    </Ul>
  );
}

export default MovieList;
