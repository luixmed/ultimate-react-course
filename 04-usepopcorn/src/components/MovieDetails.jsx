import { useEffect, useRef, useState } from "react";
import {
  AddBtn,
  Details,
  Header,
  OpenCloseBtn,
  Rating,
  Text,
} from "./MovieDetailsStyles";
import Loader from "./Loader";
import StarRating from "./StarRating";
import { useKey } from "../hooks/useKey";

const OMDb_KEY = "ec52bb49";

function MovieDetails({
  selectedMovieId,
  onCloseMovieDetails,
  onAddWatchedMovieList,
  watched,
}) {
  const [movie, setMovie] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [userRating, setUserRating] = useState("");

  const countRating = useRef(0);

  const isWatched = watched
    .map((movie) => movie.imdbID)
    .includes(selectedMovieId);

  const watchedMovieRating = watched.find(
    (movie) => movie.imdbID === selectedMovieId
  )?.userRating;

  const {
    Title: title,
    Year: year,
    Poster: poster,
    Runtime: runtime,
    imdbRating,
    Plot: plot,
    Released: released,
    Actors: actors,
    Director: director,
    Genre: genre,
  } = movie;

  useEffect(
    function () {
      async function fetchMovieDetails() {
        setIsLoading(true);
        const res = await fetch(
          `http://www.omdbapi.com/?apikey=${OMDb_KEY}&i=${selectedMovieId}`
        );
        const data = await res.json();
        setMovie(data);
        setIsLoading(false);
      }
      fetchMovieDetails();
    },
    [selectedMovieId]
  );

  useEffect(
    function () {
      if (!title) return;

      document.title = `Movie | ${title}`;

      return function () {
        document.title = "usePopcorn";
      };
    },
    [title]
  );

  useEffect(
    function () {
      userRating && countRating.current++;
    },
    [userRating]
  );

  useKey("Escape", onCloseMovieDetails);

  function handleAddMovie() {
    const newWatchedMovie = {
      imdbID: selectedMovieId,
      title,
      year,
      poster,
      imdbRating: Number(imdbRating),
      runtime: Number(runtime.split().at(0)),
      userRating,
      countUserRatingDecisions: countRating.current,
    };
    onAddWatchedMovieList(newWatchedMovie);
    onCloseMovieDetails();
  }

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <Details>
          <OpenCloseBtn onClick={onCloseMovieDetails} className="back-btn">
            &larr;
          </OpenCloseBtn>
          <Header>
            <img src={poster} alt={`Poster of {title} movie`} />
            <div className="text">
              <h2>{title}</h2>
              <p>
                {released} &bull; {runtime}
              </p>
              <p>{genre}</p>
              <p>
                <span>⭐</span> {imdbRating} IMDb Rating
              </p>
            </div>
          </Header>

          {!isWatched ? (
            <Rating className="rating">
              <StarRating
                size={24}
                maxRating={10}
                onSetRating={setUserRating}
              />
              {userRating > 0 && (
                <AddBtn onClick={handleAddMovie} className="add">
                  + Add to list
                </AddBtn>
              )}
            </Rating>
          ) : (
            <p className="watched-rating">
              You rated this movie {watchedMovieRating} <span>⭐</span>
            </p>
          )}

          <Text>
            <p>
              <em>{plot}</em>
            </p>
            <p>Starring: {actors}</p>
            <p>Directed by {director}</p>
          </Text>
        </Details>
      )}
    </>
  );
}

export default MovieDetails;
