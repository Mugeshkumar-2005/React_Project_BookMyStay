// src/components/Reviews.js
import React, { useState } from 'react';
import '../CSS/Review.css';

function Reviews({ reviews }) {
  const [newReview, setNewReview] = useState('');
  const [rating, setRating] = useState(5);

  const handleSubmit = () => {
    // Add logic to submit the new review
  };

  return (
    <div className="reviews">
      <h3>User Reviews</h3>
      {reviews.map((review, index) => (
        <div key={index} className="review-item">
          <p>{review.text}</p>
          <p>Rating: {review.rating}</p>
        </div>
      ))}
      <div className="review-form">
        <textarea
          value={newReview}
          onChange={(e) => setNewReview(e.target.value)}
          placeholder="Write a review"
        />
        <input
          type="number"
          value={rating}
          onChange={(e) => setRating(e.target.value)}
          min="1"
          max="5"
        />
        <button onClick={handleSubmit}>Submit Review</button>
      </div>
    </div>
  );
}

export default Reviews;
