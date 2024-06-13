import React from 'react'
import './MovieCard.css'

function MovieCard({movieImage, movieTitle,movieRating,openModal}){
    return(

        <div className='movieCard' onClick={openModal}>
            <img className='movieImage' src={movieImage}></img>
            <p className='movieTitle'>{movieTitle}</p>
            
            <p className='movieRating'>Rating: {movieRating}</p>
        </div>
    )
}
export default MovieCard