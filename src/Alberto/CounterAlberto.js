import React, {useState, useEffect} from 'react';

const AlbertoCounter =() => {
    
        const [count, setCount] = useState(0);
        const [isCounting, setIsCounting] = useState(false);
      
        useEffect(() => {
          let timer;
      
          if (isCounting) {
            timer = setInterval(() => {
              setCount(prevCount => prevCount + 1);
            }, 1000);
          }
      
          return () => {
            clearInterval(timer);
          };
        }, [isCounting]);
      
        const startCount = () => {
            setIsCounting(true);
        };
      
        const stopCount = () => {
          setIsCounting(false);
        };
      
      return (
        
            <div>
            
                <h1>Counter</h1>
                
                <p> Count: {count}</p>
                
                <button onClick={startCount}> Start</button>
                <button onClick={stopCount}> Stop </button>
                
             </div>      
             );
             
      };
      
      
      export default AlbertoCounter;