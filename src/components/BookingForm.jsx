// src/components/BookingForm.js
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import '../CSS/BookingForm.css'

function BookingForm({ onBook }) {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [guests, setGuests] = useState(1);

  const handleBooking = () => {
    onBook({ startDate, endDate, guests });
  };

  return (
    <div className="booking-form">
      <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
      <DatePicker selected={endDate} onChange={(date) => setEndDate(date)} />
      <input
        type="number"
        value={guests}
        onChange={(e) => setGuests(e.target.value)}
        min="1"
      />
      <button onClick={handleBooking}>Book Now</button>
    </div>
  );
}

export default BookingForm;
