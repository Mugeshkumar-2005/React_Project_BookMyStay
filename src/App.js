import React, { useState, useEffect } from 'react';
import './App.css';
import BookingSystem from './components/BookingSystem';
function App() {
  return (
    <div className="App">
      
      <Header />
      
      <div className="mainContent">
        <SearchBar />
        <Map />
      </div>
      <div>
        <hr></hr>
      </div>
      <div className=''>
        <BookingSystem/>
      </div>
    </div>
  );
}

function Header() {
  return (
    <header className="header">
      <div className="logo">BookMyStay</div>
      <nav className="nav">
        <a href="#hotels">Hotels</a>
        <a href="#homes">Homes & Apts</a>
        <a href="#flights">Flights</a>
        <a href="#activities">Activities</a>
        <a href="#airport">Airport transfer</a>
        <a href="#bundle" className="bundle">Bundle & Save</a>
        <a href="#signin">Sign in</a>
        <a href="#create-account" className="createAccount">Create account</a>
      </nav>
    </header>
  );
}

function SearchBar() {
  const [activeTab, setActiveTab] = useState('overnight');

  return (
    <div className="searchContainer">
      <div className="search">
        <div className="tab">
          <button
            //className={tabButton ${activeTab === 'overnight' ? 'active' : ''}}
            className={`tabButton ${activeTab === 'overnight' ? 'active' : ''}`}

            onClick={() => setActiveTab('overnight')}
          >
            Overnight Stays
          </button>
          <button
            //className={tabButton ${activeTab === 'dayuse' ? 'active' : ''}}
            className={`tabButton ${activeTab === 'overnight' ? 'active' : ''}`}

            onClick={() => setActiveTab('dayuse')}
          >
            Day Use Stays
          </button>
        </div>
        <div className="searchBar">
          <input type="text" placeholder="Enter a destination or property" className="searchInput" aria-label="Enter a destination or property" />
          <input type="date" className="dateInput" aria-label="Check-in date" />
          <input type="date" className="dateInput" aria-label="Check-out date" />
          <input type="number" placeholder="2 adults" className="guestsInput" aria-label="Number of adults" />
          <button className="searchButton">SEARCH</button>
        </div>
      </div>
    </div>
  );
}

function Map() {
  return (
    <div className="mapContainer">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d125317.19998711378!2d76.9785856!3d11.026431999999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1724852151939!5m2!1sen!2sin"
        title="Google Map"
        allowFullScreen
        loading="lazy"
      />
    </div>
  );
}

function TopDestinations() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = ["image1.jpg", "image2.jpg", "image3.jpg"]; // Replace with actual image URLs

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(prevIndex => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="topDestinations">
      <h2>Top destinations in India</h2>
      <div className="gridContainer">
        <div className="card">
          <img src={images[currentImageIndex]} alt="Destination" className="cardImage" />
          <div className="cardContent">
            <h3>Destination Name</h3>
            <p>Random description about the destination. This is a placeholder text.</p>
          </div>
        </div>
        {/* Add more cards as needed */}
      </div>
    </div>
  );
}

export default App;
