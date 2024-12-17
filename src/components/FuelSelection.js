import React, { useState } from 'react';

const FuelSelection = () => {
  const [fuelType, setFuelType] = useState('');
  const [quantity, setQuantity] = useState('');
  const [price, setPrice] = useState(0);

  const fuelPrices = {
    Petrol: 5.0, // Price per liter
    Diesel: 4.5, // Price per liter
  };

  const handleFuelChange = (event) => {
    const selectedFuel = event.target.value;
    setFuelType(selectedFuel);

    if (quantity && fuelPrices[selectedFuel]) {
      setPrice(quantity * fuelPrices[selectedFuel]);
    }
  };

  const handleQuantityChange = (event) => {
    const selectedQuantity = event.target.value;
    setQuantity(selectedQuantity);

    if (fuelType && fuelPrices[fuelType]) {
      setPrice(selectedQuantity * fuelPrices[fuelType]);
    }
  };

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h2>Select Your Fuel</h2>
      <form>
        <div style={{ marginBottom: '15px' }}>
          <label>
            <strong>Fuel Type:</strong>
          </label>
          <select value={fuelType} onChange={handleFuelChange} style={{ marginLeft: '10px' }}>
            <option value="">Select Fuel</option>
            <option value="Petrol">Petrol</option>
            <option value="Diesel">Diesel</option>
          </select>
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label>
            <strong>Quantity (Liters):</strong>
          </label>
          <input
            type="number"
            value={quantity}
            onChange={handleQuantityChange}
            style={{ marginLeft: '10px' }}
          />
        </div>
        <div>
          <h3>Total Price: ${price.toFixed(2)}</h3>
        </div>
      </form>
    </div>
  );
};

export default FuelSelection;