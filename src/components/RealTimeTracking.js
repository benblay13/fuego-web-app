import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';


// Fix default marker icons for Leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

const RealTimeTracking = () => {
  const [position, setPosition] = useState([5.6037, -0.1870]); // Default: Accra, Ghana

  useEffect(() => {
    const interval = setInterval(() => {
      setPosition((prev) => [prev[0] + 0.0001, prev[1] + 0.0001]); // Simulate movement
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ height: '400px', margin: '20px 0' }}>
      <MapContainer center={position} zoom={15} style={{ height: '100%', width: '100%' }}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <Marker position={position}>
          <Popup>Your fuel is on the way!</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default RealTimeTracking;