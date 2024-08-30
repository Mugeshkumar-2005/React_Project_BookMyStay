// src/components/HotelDetails.js
import React from 'react';
import { Link } from 'react-router-dom';

function HotelDetails() {
  return (
    <div className="hotel-details">
      <h1>Hotel Example 1</h1>
      <p>Details about the hotel.</p>
      <p>Ratings: ★★★★☆</p>
      <Link to="/booking/1">Book Now</Link>
    </div>
  );
}

export default HotelDetails;