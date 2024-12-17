import React from 'react';

const Support = () => {
  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h2>Customer Support</h2>
      <p>Need assistance? Reach out to us!</p>
      <form>
        <label>
          Your Email:
          <input type="email" name="email" required style={{ margin: '10px', padding: '5px' }} />
        </label>
        <br />
        <label>
          Your Message:
          <textarea name="message" required style={{ margin: '10px', padding: '5px' }} />
        </label>
        <br />
        <button type="submit" style={{ background: 'blue', color: 'white', padding: '10px 20px' }}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Support;