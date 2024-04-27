import { Li } from "./MovieStyles";

function Movie({ movie }) {
  return (
    <Li>
      <img src={movie.Poster} alt={`${movie.Title} poster`} />
      <h3>{movie.Title}</h3>
      <div>
        <p>
          <span>📆</span>
          <span>{movie.Year}</span>
        </p>
      </div>
    </Li>
  );
}

export default Movie;
