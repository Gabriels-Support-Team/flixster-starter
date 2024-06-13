import React, { useState } from 'react';

function DropDown({ sortSelection, setSortSelection, setFetchURL }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const handleChange = (event) => {
    setSortSelection(event.target.value);
    setFetchURL("https://api.themoviedb.org/3/discover/movie?language=en-US&page=");
  };

  return (
    <div>
      <button onClick={toggle}>Sort</button>
      {isOpen && (
        <select value={sortSelection} onChange={handleChange}>
          <option value="">Select Sorting</option>
            <option value="original_title.asc"> alphabetical-Low to High</option>
            <option value="original_title.desc"> alphabetical-High to Low</option>
            <option value="primary_release_date.asc"> Release Date-Low to High</option>
            <option value="primary_release_date.desc"> Release Date-High to Low</option>
            <option value="vote_average.asc">Rating-Low to High</option>
            <option value="vote_average.desc">Rating-High to Low</option>
        </select>)}
        </div>
    )
} export default DropDown

