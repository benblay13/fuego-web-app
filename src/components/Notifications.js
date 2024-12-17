import React from 'react';

const Notifications = () => {
  const notifications = [
    { id: 1, message: 'Your order has been confirmed!', time: '2 minutes ago' },
    { id: 2, message: 'Delivery is on the way!', time: '10 minutes ago' },
    { id: 3, message: 'Enjoy 10% off on your next order with code FUEGO10.', time: '1 day ago' },
  ];

  return (
    <div style={{ padding: '20px', maxWidth: '500px', margin: '0 auto' }}>
      <h2>Notifications</h2>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {notifications.map((notification) => (
          <li
            key={notification.id}
            style={{
              marginBottom: '10px',
              padding: '10px',
              border: '1px solid #ddd',
              borderRadius: '10px',
              backgroundColor: '#f9f9f9',
            }}
          >
            <p>{notification.message}</p>
            <small style={{ color: '#555' }}>{notification.time}</small>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Notifications;
