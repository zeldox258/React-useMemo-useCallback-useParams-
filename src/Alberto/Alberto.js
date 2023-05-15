
import React from 'react';
import AlbertoCounter from './CounterAlberto';



const Alberto = ({name,age}) => {
    
    const currentYear = 2023;
    const birthYear = currentYear - age;
    
  return( 
         <div>
            <h1>my name is {name}</h1>
            <p> I was born in {birthYear}</p>
            <AlbertoCounter/>
        </div>
     );
};
//you will have counter, inside of counter you will have start button, after you click start button its gonna increase
//the seconds one 1 one in every second. 
//you will also have stop button if you click stop button the result not gonna increment until start detected.
//result should not be effected by buttons clicks  
export default Alberto;