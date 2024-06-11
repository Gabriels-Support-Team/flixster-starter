import React, { useState, useEffect } from 'react';
import './MovieList.css';
import MovieCard from './MovieCard';
//component that holds all the movie cards
function MovieList() {
    //initialize state variables
    const [data, setData] = useState({ results: [] });
    const [page, setPage] = useState(1);
    const [searchQuery, setSearchQuery ] = useState();
    const [fetchURL, setFetchURL] = useState("https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=");
    //fetch api data
    useEffect(() => {
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4M2Y0ZGE0MjI0M2IxNDljZmRjM2E2YmM4MWI1OGVkNSIsInN1YiI6IjY2Njc2NGRlMDdmNzg5ZGYzMTk5ZmI2MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.TpNQ6V0IuyirQEQTh3f7XMeE7SOItQeymtCD1oCUy8Y`
            }
        };

        fetch(`${fetchURL}${page}`, options)
            .then(response => response.json())
            .then(newData => {
                setData(data => ({
                    ...newData,
                    results: page != 1 ? [...data.results, ...newData.results] : [...newData.results]
                }));
            })
            .catch(error => console.error('Error fetching data:', error));
    }, [page,fetchURL]);
//load API data into movieCard containers
    const divs = data.results.map((movie, index) => (
        <MovieCard
            key={movie.id}
            movieImage={`https://image.tmdb.org/t/p/w342${movie.poster_path}`}
            movieRating={movie.vote_average}
            movieTitle={movie.original_title}
        />
    ));
    // Search functionality
    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
      };
      function submitSearch(searchQuery){
        setFetchURL(`https://api.themoviedb.org/3/search/movie?query=${searchQuery}&include_adult=false&language=en-US&page=`);
      }
//return list of new MovieCard containers
    return (
        <div className="movieList">
            <input type="text" value={searchQuery} onChange={handleSearchChange} placeholder="Search" />
            <button onClick={() => submitSearch(searchQuery)}>Search🔍</button>
        <div className="movieListContainer">
            {divs}
            <button onClick={() => setPage(page+1)}>Load More</button>
        </div>
        </div>
    );
}

export default MovieList;