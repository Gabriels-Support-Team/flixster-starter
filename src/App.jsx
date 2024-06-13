import React, { useState } from 'react';
import './App.css';
import MovieList from './MovieList';
import DropDown from './DropDown';

const App = () => {
  const [sortSelection, setSortSelection] = useState("hello");
  

  return (
    <div className="App">
      <header>
        <h1 className='title'>🎥 Flixter 🎬</h1>
        <DropDown sortSelection={sortSelection} setSortSelection={setSortSelection} />
      </header>
      <MovieList sortSelection={sortSelection}  />
    </div>
  );
}

export default App;