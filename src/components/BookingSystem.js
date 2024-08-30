import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import jsPDF from 'jspdf';
import 'react-datepicker/dist/react-datepicker.css';
import '../CSS/BookingSystem.css';

const hotels = [
  { name: 'Hotel Sunshine', image: 'https://photos.mandarinoriental.com/is/image/MandarinOriental/dubai-suite-skyline-view-bedroom' },
  { name: 'Grand Palace', image: 'https://i.dailymail.co.uk/i/pix/2014/03/21/article-2585986-1C77BACB00000578-283_964x642.jpg' },
  { name: 'Ocean View', image: 'https://aupacs.com/wp-content/uploads/2022/05/Conrad-Tulum-Riviera-Maya-1.jpeg' },
];

const BookingSystem = () => {
  const [step, setStep] = useState(1);
  const [bookingDetails, setBookingDetails] = useState(null);
  const [checkInDate, setCheckInDate] = useState(null);
  const [checkOutDate, setCheckOutDate] = useState(null);
  const [guestCount, setGuestCount] = useState(1);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [currentHotelIndex, setCurrentHotelIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHotelIndex((prevIndex) => (prevIndex + 1) % hotels.length);
    }, 10000); // Change image every 10 seconds
    return () => clearInterval(interval);
  }, []);

  const handleBookingSubmit = (details) => {
    setBookingDetails(details);
    setStep(2);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const bookingId = Math.floor(Math.random() * 1000000);
    const bookingDetails = {
      checkInDate,
      checkOutDate,
      guestCount,
      name,
      email,
      phone,
      bookingId,
    };
    handleBookingSubmit(bookingDetails);
  };

  const handleDownloadReceipt = () => {
    const doc = new jsPDF();
    doc.text('Booking Receipt', 20, 20);
    doc.text(`Booking ID: ${bookingDetails.bookingId}`, 20, 30);
    doc.text(`Name: ${bookingDetails.name}`, 20, 40);
    doc.text(`Email: ${bookingDetails.email}`, 20, 50);
    doc.text(`Phone: ${bookingDetails.phone}`, 20, 60);
    doc.text(`Check-In Date: ${bookingDetails.checkInDate.toLocaleDateString()}`, 20, 70);
    doc.text(`Check-Out Date: ${bookingDetails.checkOutDate.toLocaleDateString()}`, 20, 80);
    doc.text(`Number of Guests: ${bookingDetails.guestCount}`, 20, 90);
    doc.save(`Booking_Receipt_${bookingDetails.bookingId}.pdf`);
  };

  return (
    <div className="booking-system">
      {step === 1 && (
        <div className="booking-form-container">
          <form className="booking-form" onSubmit={handleSubmit}>
            <h3>Book Your Stay</h3>
            <div className="form-group">
              <label>Check-In Date:</label>
              <DatePicker
                selected={checkInDate}
                onChange={(date) => setCheckInDate(date)}
                className="form-control"
                placeholderText="Select Check-In Date"
                dateFormat="dd/MM/yyyy"
                minDate={new Date()}
              />
            </div>
            <div className="form-group">
              <label>Check-Out Date:</label>
              <DatePicker
                selected={checkOutDate}
                onChange={(date) => setCheckOutDate(date)}
                className="form-control"
                placeholderText="Select Check-Out Date"
                dateFormat="dd/MM/yyyy"
                minDate={checkInDate}
              />
            </div>
            <div className="form-group">
              <label>Guests:</label>
              <input
                type="number"
                className="form-control"
                value={guestCount}
                onChange={(e) => setGuestCount(e.target.value)}
                min="1"
                max="10"
                required
              />
            </div>
            <div className="form-group">
              <label>Full Name:</label>
              <input
                type="text"
                className="form-control"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label>Email:</label>
              <input
                type="email"
                className="form-control"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label>Phone Number:</label>
              <input
                type="tel"
                className="form-control"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="btn-submit">
              Confirm Booking
            </button>
          </form>
        </div>
      )}

      {step === 2 && bookingDetails && (
        <div className="booking-confirmation">
          <h3>Booking Confirmed</h3>
          <div className="confirmation-details">
            <p><strong>Booking ID:</strong> {bookingDetails.bookingId}</p>
            <p><strong>Name:</strong> {bookingDetails.name}</p>
            <p><strong>Email:</strong> {bookingDetails.email}</p>
            <p><strong>Phone:</strong> {bookingDetails.phone}</p>
            <p><strong>Check-In Date:</strong> {bookingDetails.checkInDate.toLocaleDateString()}</p>
            <p><strong>Check-Out Date:</strong> {bookingDetails.checkOutDate.toLocaleDateString()}</p>
            <p><strong>Number of Guests:</strong> {bookingDetails.guestCount}</p>
          </div>
          <button className="btn-download" onClick={handleDownloadReceipt}>
            Download Receipt
          </button>
        </div>
      )}

      <div className="hotel-card">
        <img src={hotels[currentHotelIndex].image} alt={hotels[currentHotelIndex].name} className="hotel-image" />
        <div className="hotel-info">
          <h4>{hotels[currentHotelIndex].name}</h4>
        </div>
      </div>
    </div>
  );
};

export default BookingSystem;
