import { useState } from "react";

export function Counter() {
    const [count, setCount] = useState(0);
    const [id, setId] = useState(0);
    const handleStart = () => {
        let idInterval = setInterval(() => {
            setCount((c) => c+ 1)
        }, 1000);
        setId(idInterval);
    }

    const handleStop = () => {
        clearInterval(id)
    }
    

    return <div>
        <h2>Counter: {count}</h2>
        <button onClick={handleStart}>Start</button>
        <button onClick={handleStop}>Stop</button>
    </div>
}


function Ola(props) {
    const name = props.name
    const birthYear = props.birthYear

    return <div>
        <h2>Hello my name is {name}</h2>
        <h2>My age is {2023 - birthYear}</h2>
        <Counter/>
    </div>
}
//you will have counter, inside of counter you will have start button,
//after you click start button its gonna increase
//the seconds one 1 one in every second. 
//you will also have stop button if you click stop button the
//result not gonna increment until start detected.
//result should not be effected by buttons clicks  
export default Ola