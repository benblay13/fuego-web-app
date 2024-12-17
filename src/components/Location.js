import React, { useState } from 'react';

function Location() {
  const [location, setLocation] = useState('');
  const [currentLocation, setCurrentLocation] = useState(null);

  const handleManualInput = (e) => {
    setLocation(e.target.value);
  };

  const handleUseCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setCurrentLocation({ latitude, longitude });
          alert(`Location detected: Lat: ${latitude}, Lng: ${longitude}`);
        },
        (error) => {
          alert('Unable to retrieve location. Please enable location services.');
          console.error(error);
        }
      );
    } else {
      alert('Geolocation is not supported by your browser.');
    }
  };

  const handleSubmit = () => {
    if (currentLocation) {
      alert(`Using Current Location: Lat: ${currentLocation.latitude}, Lng: ${currentLocation.longitude}`);
    } else if (location) {
      alert(`Using Manual Location: ${location}`);
    } else {
      alert('Please provide a location.');
    }
  };

  return (
    <div style={{ padding: '20px', maxWidth: '500px', margin: '0 auto', textAlign: 'center' }}>
      <h2>Location Services</h2>
      <div style={{ marginBottom: '20px' }}>
        <button
          onClick={handleUseCurrentLocation}
          style={{
            backgroundColor: '#007bff',
            color: '#fff',
            border: 'none',
            borderRadius: '10px',
            padding: '10px 20px',
            cursor: 'pointer',
            marginBottom: '10px',
          }}
        >
          Use Current Location
        </button>
      </div>
      <div>
        <input
          type="text"
          placeholder="Enter location manually"
          value={location}
          onChange={handleManualInput}
          style={{
            padding: '10px',
            borderRadius: '5px',
            border: '1px solid #ccc',
            width: '80%',
          }}
        />
      </div>
      <button
        onClick={handleSubmit}
        style={{
          backgroundColor: '#007bff',
          color: '#fff',
          border: 'none',
          borderRadius: '10px',
          padding: '10px 20px',
          cursor: 'pointer',
          marginTop: '20px',
        }}
      >
        Confirm Location
      </button>
    </div>
  );
}

export default Location;
