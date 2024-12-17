import React, { useState } from 'react';

const Ratings = () => {
  const [rating, setRating] = useState(0);
  const [feedback, setFeedback] = useState('');

  const handleSubmit = () => {
    alert(`Thank you for your feedback! Rating: ${rating}, Feedback: ${feedback}`);
    setRating(0);
    setFeedback('');
  };

  return (
    <div style={{ padding: '20px', maxWidth: '500px', margin: '0 auto', textAlign: 'center' }}>
      <h2>Ratings & Feedback</h2>
      <p>Rate your experience:</p>
      <div>
        {[1, 2, 3, 4, 5].map((star) => (
          <button
            key={star}
            onClick={() => setRating(star)}
            style={{
              fontSize: '20px',
              margin: '5px',
              backgroundColor: star <= rating ? '#ffd700' : '#ddd',
              border: 'none',
              borderRadius: '50%',
              cursor: 'pointer',
              width: '40px',
              height: '40px',
            }}
          >
            ★
          </button>
        ))}
      </div>
      <textarea
        placeholder="Write your feedback here..."
        value={feedback}
        onChange={(e) => setFeedback(e.target.value)}
        style={{
          width: '100%',
          height: '80px',
          marginTop: '10px',
          padding: '10px',
          borderRadius: '10px',
          border: '1px solid #ddd',
        }}
      ></textarea>
      <br />
      <button
        onClick={handleSubmit}
        style={{
          backgroundColor: '#007bff',
          color: '#fff',
          border: 'none',
          borderRadius: '10px',
          padding: '10px 20px',
          cursor: 'pointer',
          marginTop: '10px',
        }}
      >
        Submit
      </button>
    </div>
  );
};

export default Ratings;
