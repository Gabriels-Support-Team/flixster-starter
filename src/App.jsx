import React, { useState } from 'react';
import './App.css';
import MovieList from './MovieList';
import SortBy from './SortBy';
import IncludeGenre from './IncludeGenre';
import FlixterHeader from './FlixterHeader';
import FlixterFooter from './FlixterFooter'

const App = () => {
  const [sortSelection, setSortSelection] = useState("");
  const [fetchURL, setFetchURL] = useState("https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=");
  const [genreSelection,setGenreSelection] = useState("");
  const [genres, setGenres] = useState()
  const [page, setPage] = useState(1);
  
  const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4M2Y0ZGE0MjI0M2IxNDljZmRjM2E2YmM4MWI1OGVkNSIsInN1YiI6IjY2Njc2NGRlMDdmNzg5ZGYzMTk5ZmI2MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.TpNQ6V0IuyirQEQTh3f7XMeE7SOItQeymtCD1oCUy8Y'
      }
    };
    
    fetch('https://api.themoviedb.org/3/genre/movie/list?language=en', options)
      .then(response => response.json())
      .then(response => setGenres(response))

  

  return (
    <div className="App">
      <FlixterHeader/>
      <div style={{ paddingTop: '130px' }}>
      <div className='selectContainer' >
        <SortBy className="select" sortSelection={sortSelection} setSortSelection={setSortSelection} setFetchURL={setFetchURL} setPage={setPage}/>
        <IncludeGenre className="select" setGenreSelection={setGenreSelection} genreSelection={genreSelection} setFetchURL={setFetchURL} genres={genres} setPage={setPage}/>
      </div>
      <MovieList sortSelection={sortSelection}  fetchURL={fetchURL}setFetchURL={setFetchURL} genreSelection={genreSelection} page={page}setPage={setPage}/>
      <FlixterFooter/>
      </div>
    </div>
  );
}

export default App;