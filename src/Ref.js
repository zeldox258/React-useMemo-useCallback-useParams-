import React, {useState , useRef} from 'react';

export default function Ref(){
    const [count, setCount] = useState(0);
    let inputRef = useRef(null);
    const divRef = useRef(null);


    const handleClick = () =>{
        setCount(count + 1);
        inputRef.current.focus();
        inputRef.current.value = "Hello";
        divRef.current.textContent = "holaa";
        divRef.current.style.backgroundColor = "blue";

        //divRef.current.addEventListener("click", ()=>{console.log("I love Alberto")});
        console.log(divRef);

    }

    return(
        <div>
            <h1>Total Count : {count}</h1>
            <input type="text" ref={inputRef}/>
            <div ref={divRef} onClick={()=>{console.log("I love Nuri")}}></div>
            <button onClick={handleClick}>Increment</button>


        </div>
    )
}