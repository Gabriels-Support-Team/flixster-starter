import React, { useState, useEffect } from 'react';
import './Modal.css'; // Importing the CSS for styling
import { CSSTransition } from 'react-transition-group';


function CreateModal({ isOpen, close, movie }) {
    const [movieDetails, setMovieDetails] = useState();

    // Move useEffect to the top level and use condition inside the effect
    useEffect(() => {
        if (!isOpen) return;

        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4M2Y0ZGE0MjI0M2IxNDljZmRjM2E2YmM4MWI1OGVkNSIsInN1YiI6IjY2Njc2NGRlMDdmNzg5ZGYzMTk5ZmI2MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.TpNQ6V0IuyirQEQTh3f7XMeE7SOItQeymtCD1oCUy8Y'
            }
        };

        fetch(`https://api.themoviedb.org/3/movie/${movie.id}?language=en-US`, options)
            .then(response => response.json())
            .then(response => setMovieDetails(response));
    }, [ movie]); 

    if (!isOpen) return null;
    if (movieDetails) return (
     
        <div className="modal-overlay">
            <div className="modal-content">
                <h1>{movie.original_title}</h1>
                <img src={`https://image.tmdb.org/t/p/w342${movie.backdrop_path}`} alt={movie.original_title}></img>
                <p>Release Date: {movie.release_date}</p>
                <p>Overview: {movie.overview}</p>
                    <p>Genres: {movieDetails.genres.map(genre => genre.name).join(', ')}</p>
                    <p>Runtime: {movieDetails.runtime} minutes </p>

                
                <button onClick={close}>X</button>
            </div>
        </div>
    );
}

export default CreateModal;