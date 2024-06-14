import React from "react";
import "./MovieCard.css";
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";

function MovieCard({
  movieImage,
  movieTitle,
  movieRating,
  openModal,
  toggleLiked,
  likedMovies,
  toggleWatched,
  watchedMovies,
}) {
  const handleChange = (event) => {
    toggleWatched(movieTitle);
  };

  const isFavorite = !!likedMovies[movieTitle];

  return (
    <div className="movieCard" onClick={openModal}>
      <img className="movieImage" src={movieImage} alt={movieTitle}></img>
      <p className="movieTitle">{movieTitle}</p>
      <p className="movieRating">Rating: {movieRating}</p>
      <div className="toggleContainer">
        <input
          className="checkBox"
          type="checkbox"
          checked={watchedMovies.includes(movieTitle)}
          onChange={handleChange}
          onClick={(event) => event.stopPropagation()}
        />
        {isFavorite ? (
          <FaHeart
            className="favorite"
            size="2em"
            onClick={(event) => {
              event.stopPropagation();
              toggleLiked(movieTitle);
            }}
          />
        ) : (
          <CiHeart
            className="favorite"
            size="2em"
            onClick={(event) => {
              event.stopPropagation();
              toggleLiked(movieTitle);
            }}
          />
        )}
      </div>
    </div>
  );
}

export default MovieCard;
