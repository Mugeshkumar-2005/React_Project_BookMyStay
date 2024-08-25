// src/components/SearchBar.js
import React, { useState } from 'react';
import '../CSS/SearchBar.css'

function SearchBar({ onSearch }) {
  const [location, setLocation] = useState('');
  const [dates, setDates] = useState('');
  const [preferences, setPreferences] = useState('');

  const handleSearch = () => {
    onSearch({ location, dates, preferences });
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Location"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />
      <input
        type="text"
        placeholder="Dates"
        value={dates}
        onChange={(e) => setDates(e.target.value)}
      />
      <input
        type="text"
        placeholder="Preferences"
        value={preferences}
        onChange={(e) => setPreferences(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
}

export default SearchBar;
