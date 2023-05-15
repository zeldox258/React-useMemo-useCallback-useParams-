import React, { useState } from 'react';

export const Counter = (defaultValue) => {
  const [count, setCount] = useState(defaultValue);
  const [id, setId] = useState(null);
  


  const handleStart = () => {
    if (!id) {
      const newId = setInterval(() => {
        setCount((e) => e + 1);
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

  return (
    <div>
      <h1>Counter</h1>
      <h2>{count}</h2>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
    </div>
  );
};
