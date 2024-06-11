import React from 'react'
import './MovieCard.css'

function MovieCard({movieImage, movieTitle,movieRating}){
    return(

        <div className='movieCard'>
            <img className='movieImage' src={movieImage}></img>
            <p className='movieTitle'>{movieTitle}</p>
        
            <p className='movieRating'>{movieRating}</p>
        </div>
    )
}
export default MovieCard