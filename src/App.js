import React, { useState } from 'react';
import AuthForm from './components/AuthForm';
import Profile from './components/Profile';
import Location from './components/Location';
import FuelSelection from './components/FuelSelection';
import OrderPlacement from './components/OrderPlacement';
import RealTimeTracking from './components/RealTimeTracking'; // Adjust the path if necessary
import Notifications from './components/Notifications';
import OrderHistory from './components/OrderHistory';
import Ratings from './components/Ratings';




function App() {
  
  <div className="App">
      <h1>FueGo - Fuel Delivery Service</h1>
      <RealTimeTracking /> {/* This will render the real-time tracking map */}
    </div>
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentPage, setCurrentPage] = useState('profile'); // Default page

  const renderPage = () => {
    switch (currentPage) {
      case 'profile':
        return <Profile />;
      case 'location':
        return <Location />;
      default:
        return <Profile />;
        case 'fuelSelection':
  return <FuelSelection />;
  case 'orderPlacement':
  return <OrderPlacement />;
  case 'ratings':
  return <Ratings />;
  case 'realTimeTracking':
  return <RealTimeTracking />;
  case 'notifications':
  return <Notifications />;
  case 'orderHistory':
  return <OrderHistory />;





    }
  };

  return (
    <div style={{ fontFamily: 'Arial, sans-serif' }}>
      {!isLoggedIn ? (
        <AuthForm />
      ) : (
        <>
          <div style={{ marginBottom: '20px', textAlign: 'center' }}>
            <button
              onClick={() => setCurrentPage('profile')}
              style={{
                backgroundColor: currentPage === 'profile' ? '#0056b3' : '#007bff',
                color: '#fff',
                border: 'none',
                borderRadius: '10px',
                padding: '10px 20px',
                cursor: 'pointer',
                margin: '0 10px',
              }}
            >
              Profile
            </button>
            <button
              onClick={() => setCurrentPage('location')}
              style={{
                backgroundColor: currentPage === 'location' ? '#0056b3' : '#007bff',
                color: '#fff',
                border: 'none',
                borderRadius: '10px',
                padding: '10px 20px',
                cursor: 'pointer',
                margin: '0 10px',
              }}
            >
              Location
            </button>
            <button
  onClick={() => setCurrentPage('fuelSelection')}
  style={{
    backgroundColor: currentPage === 'fuelSelection' ? '#0056b3' : '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '10px',
    padding: '10px 20px',
    cursor: 'pointer',
    margin: '0 10px',
  }}
>
  Fuel Selection
</button>
<button
  onClick={() => setCurrentPage('orderPlacement')}
  style={{
    backgroundColor: currentPage === 'orderPlacement' ? '#0056b3' : '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '10px',
    padding: '10px 20px',
    cursor: 'pointer',
    margin: '0 10px',
  }}
>
  Order Placement
</button>
<button
  onClick={() => setCurrentPage('ratings')}
  style={{
    backgroundColor: currentPage === 'ratings' ? '#0056b3' : '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '10px',
    padding: '10px 20px',
    cursor: 'pointer',
    margin: '0 10px',
  }}
>
  Ratings
</button>

<button
  onClick={() => setCurrentPage('realTimeTracking')}
  style={{
    backgroundColor: currentPage === 'realTimeTracking' ? '#0056b3' : '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '10px',
    padding: '10px 20px',
    cursor: 'pointer',
    margin: '0 10px',
  }}
>
  Track Delivery
</button>
<button
  onClick={() => setCurrentPage('notifications')}
  style={{
    backgroundColor: currentPage === 'notifications' ? '#0056b3' : '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '10px',
    padding: '10px 20px',
    cursor: 'pointer',
    margin: '0 10px',
  }}
>
  Notifications
</button>
<button
  onClick={() => setCurrentPage('orderHistory')}
  style={{
    backgroundColor: currentPage === 'orderHistory' ? '#0056b3' : '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '10px',
    padding: '10px 20px',
    cursor: 'pointer',
    margin: '0 10px',
  }}
>
  Order History
</button>


          </div>
          {renderPage()}
        </>
      )}
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <button
          onClick={() => setIsLoggedIn(!isLoggedIn)}
          style={{
            backgroundColor: '#007bff',
            color: '#fff',
            border: 'none',
            borderRadius: '10px',
            padding: '10px 20px',
            cursor: 'pointer',
          }}
        >
          {isLoggedIn ? 'Logout' : 'Login'}
        </button>
        


      </div>
    </div>
  );
}

export default App;
