
import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import HotelMap from './components/HotelMap';
import BookingForm from './components/BookingForm';
import Reviews from './components/Reviews';
import BookingConfirmation from './components/BookingConfirmation';

function App() {
  const [hotels, setHotels] = useState([]);
  const [bookingDetails, setBookingDetails] = useState(null);
  const [reviews, setReviews] = useState([]);

  const handleSearch = (criteria) => {
    //Logic to fetch hotels based on search criteria
  };

  const handleBook = (details) => {
    setBookingDetails({ ...details, hotelName: 'Sample Hotel' });
  };

  return (
    <div>
      <h1>Book My Stay</h1>
      <SearchBar onSearch={handleSearch} />
      <HotelMap hotels={hotels} />
      <BookingForm onBook={handleBook} />
      {bookingDetails && <BookingConfirmation bookingDetails={bookingDetails} />}
      <Reviews reviews={reviews} />
    </div>
  );
}

export default App;

