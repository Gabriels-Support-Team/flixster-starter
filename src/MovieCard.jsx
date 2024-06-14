import React, { useState } from "react";
import "./MovieCard.css";
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
import { CiBookmarkCheck } from "react-icons/ci";

function MovieCard({ movieImage, movieTitle, movieRating, openModal }) {
  const [favorite, setFavorite] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const handleChange = (event) => {
    setIsChecked(event.target.checked);
  };
  return (
    <div className="movieCard" onClick={openModal}>
      <img className="movieImage" src={movieImage}></img>
      <p className="movieTitle">{movieTitle}</p>
      <p className="movieRating">Rating: {movieRating}</p>
      <div className="toggleContainer">
        <input
          className="checkBox"
          type="checkbox"
          checked={isChecked}
          onChange={handleChange}
          onClick={(event) => event.stopPropagation()}
        />
        {favorite ? (
          <FaHeart
            className="favorite"
            size="2em"
            onClick={(event) => {
              setFavorite(!favorite);
              event.stopPropagation();
            }}
          />
        ) : (
          <CiHeart
            className="favorite"
            size="2em"
            onClick={(event) => {
              setFavorite(!favorite);
              event.stopPropagation();
            }}
          />
        )}
      </div>
    </div>
  );
}
export default MovieCard;
