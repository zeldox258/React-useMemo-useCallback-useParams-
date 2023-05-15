import React, { useState } from 'react';

export const Counter = ({initialValue}) => {
  const [count, setCount] = useState(initialValue);
  const [id, setId] = useState(null);
  

  const handleStart = () => {
    if (!id) {
      const newId = setInterval(() => {
        setCount((prevCount) => prevCount + 1);
      }, 1000);
      setId(newId);
    }
  };

  const handleStop = () => {
    if (id) {
      clearInterval(id);
      setId(null);
    }
  };

  const counterStyles = {
    textAlign: 'center',
    marginBottom: '20px'
  };

  const buttonStyles = {
    margin: '0 5px',
    padding: '10px 15px',
    fontSize: '16px',
    backgroundColor: '#ccc',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer'
  };

  return (
    <div style={counterStyles}>
      <h1>Counter</h1>
      <h2>{count}</h2>
      <button style={buttonStyles} onClick={handleStart}>Start</button>
      <button style={buttonStyles} onClick={handleStop}>Stop</button>
    </div>
  );
};
