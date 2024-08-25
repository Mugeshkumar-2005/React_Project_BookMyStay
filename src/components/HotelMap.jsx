// src/components/HotelMap.js
import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import '../CSS/HotelMap.css';

function SetMapView({ hotels }) {
  const map = useMap();
  useEffect(() => {
    if (hotels.length > 0) {
      // Compute the bounds of all hotel locations
      const bounds = hotels.map(hotel => hotel.location);
      map.fitBounds(bounds);
    }
  }, [hotels, map]);

  return null;
}

function HotelMap({ hotels }) {
  const [mapCenter, setMapCenter] = useState([51.505, -0.09]);
  const [zoom, setZoom] = useState(13);

  useEffect(() => {
    if (hotels.length > 0) {
      // Optionally, compute a new center based on hotel locations
      const center = hotels.length > 0 ? hotels[0].location : mapCenter;
      setMapCenter(center);
    }
  }, [hotels, mapCenter]);

  return (
    <div className="map-container">
      <MapContainer center={mapCenter} zoom={zoom} style={{ height: '400px', width: '100%' }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; OpenStreetMap contributors"
        />
        <SetMapView hotels={hotels} />
        {hotels.map((hotel) => (
          <Marker key={hotel.id} position={hotel.location}>
            <Popup>{hotel.name}</Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}

export default HotelMap;
