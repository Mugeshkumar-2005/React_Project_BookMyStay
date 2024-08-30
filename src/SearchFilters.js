// SearchFilters.js
import React, { useState } from 'react';

const SearchFilters = ({ onFilterChange }) => {
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [starRating, setStarRating] = useState(0);
  const [amenities, setAmenities] = useState([]);

  const handleFilterChange = () => {
    onFilterChange({
      priceRange,
      starRating,
      amenities,
    });
  };

  return (
    <div>
      <h4>Filters</h4>
      <div>
        <label>Price Range:</label>
        <input
          type="range"
          min="0"
          max="1000"
          value={priceRange}
          onChange={(e) => setPriceRange([0, e.target.value])}
        />
      </div>
      <div>
        <label>Star Rating:</label>
        <input
          type="number"
          min="1"
          max="5"
          value={starRating}
          onChange={(e) => setStarRating(e.target.value)}
        />
      </div>
      <div>
        <label>Amenities:</label>
        <input
          type="checkbox"
          value="wifi"
          onChange={(e) =>
            setAmenities([...amenities, e.target.value])
          }
        />
        Wi-Fi
        <input
          type="checkbox"
          value="pool"
          onChange={(e) =>
            setAmenities([...amenities, e.target.value])
          }
        />
        Pool
        {/* Add more amenities as needed */}
      </div>
      <button onClick={handleFilterChange}>Apply Filters</button>
    </div>
  );
};

export default SearchFilters;
