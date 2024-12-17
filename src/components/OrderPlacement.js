import React, { useState } from 'react';

function OrderPlacement() {
  const [orderConfirmed, setOrderConfirmed] = useState(false);
  const [fuelType, setFuelType] = useState('');
  const [quantity, setQuantity] = useState('');

  const handleConfirmOrder = () => {
    if (fuelType && quantity) {
      setOrderConfirmed(true);
    } else {
      alert('Please select a fuel type and quantity before confirming.');
    }
  };

  return (
    <div style={{ padding: '20px', maxWidth: '500px', margin: '0 auto', textAlign: 'center' }}>
      <h2>Order Placement</h2>
      {orderConfirmed ? (
        <div>
          <h3>Your order has been confirmed!</h3>
          <p>Fuel Type: {fuelType}</p>
          <p>Quantity: {quantity} liters</p>
          <p>Estimated Delivery Time: 30 minutes</p>
        </div>
      ) : (
        <div>
          <p>
            Please confirm your fuel type and quantity before placing the order.
          </p>
          <button
            onClick={handleConfirmOrder}
            style={{
              backgroundColor: '#007bff',
              color: '#fff',
              border: 'none',
              borderRadius: '10px',
              padding: '10px 20px',
              cursor: 'pointer',
            }}
          >
            Confirm Order
          </button>
        </div>
      )}
    </div>
  );
}

export default OrderPlacement;
