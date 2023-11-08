import React, { useState } from 'react';

const SubscribeForm = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubscribed(true);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      {isSubscribed ? (
        <p style={{ color: 'green' }}>Thank you for subscribing!</p>
      ) : (
        <form onSubmit={handleSubmit} style={{ display: 'inline-block' }}>
          <label style={{ color: 'red', marginRight: '10px' }}>
            Email:
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              style={{ marginLeft: '10px', padding: '5px' }}
            />
          </label>
          <button
            type="submit"
            style={{
              backgroundColor: 'black',
              color: 'red',
              padding: '5px 10px',
              border: 'none',
              cursor: 'pointer',
            }}
          >
            Subscribe
          </button>
        </form>
      )}
    </div>
  );
};

export default SubscribeForm;
