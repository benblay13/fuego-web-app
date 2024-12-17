import React from 'react';

const OrderHistory = () => {
  const orders = [
    { id: 1, date: '2024-12-14', fuelType: 'Petrol', quantity: '20L', cost: '$30' },
    { id: 2, date: '2024-12-10', fuelType: 'Diesel', quantity: '15L', cost: '$25' },
  ];

  return (
    <div style={{ padding: '20px', maxWidth: '500px', margin: '0 auto' }}>
      <h2>Order History</h2>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {orders.map((order) => (
          <li
            key={order.id}
            style={{
              marginBottom: '10px',
              padding: '10px',
              border: '1px solid #ddd',
              borderRadius: '10px',
              backgroundColor: '#f9f9f9',
            }}
          >
            <p><strong>Date:</strong> {order.date}</p>
            <p><strong>Fuel Type:</strong> {order.fuelType}</p>
            <p><strong>Quantity:</strong> {order.quantity}</p>
            <p><strong>Cost:</strong> {order.cost}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OrderHistory;
