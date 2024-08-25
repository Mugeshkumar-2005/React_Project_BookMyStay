// src/components/BookingConfirmation.js
import React from 'react';
import '../CSS/BookingConfirmation.css';

function BookingConfirmation({ bookingDetails }) {
  const handleDownload = () => {
    // Logic to download the booking receipt
  };

  return (
    <div className="booking-confirmation">
      <h2>Booking Confirmation</h2>
      <p>Hotel: {bookingDetails.hotelName}</p>
      <p>Check-in: {bookingDetails.startDate.toLocaleDateString()}</p>
      <p>Check-out: {bookingDetails.endDate.toLocaleDateString()}</p>
      <button onClick={handleDownload}>Download Receipt</button>
    </div>
  );
}

export default BookingConfirmation;
