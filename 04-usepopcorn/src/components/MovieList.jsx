import { Ul } from "./MovieListStyles";
import Movie from "./Movie";

function MovieList({ movies }) {
  return (
    <Ul>
      {movies?.map((movie) => (
        <Movie key={movie.imdbID} movie={movie} />
      ))}
    </Ul>
  );
}

export default MovieList;
