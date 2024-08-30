// src/components/SearchHotels.js
import React from 'react';
import { Link } from 'react-router-dom';

function SearchHotels() {
  return (
    <div className="search-hotels">
      <h1>Search Hotels</h1>
      <form>
        <input type="text" placeholder="Location" />
        <input type="date" placeholder="Check-in" />
        <input type="date" placeholder="Check-out" />
        <button type="submit">Search</button>
      </form>

      <div className="hotel-results">
        <Link to="/hotel/1">Hotel Example 1</Link>
        <Link to="/hotel/2">Hotel Example 2</Link>
      </div>
    </div>
  );
}

export default SearchHotels;