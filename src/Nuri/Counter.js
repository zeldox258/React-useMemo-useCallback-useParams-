import { useState } from "react"



export function Counter(){
    let [count, setCount] = useState(0);
    let [id,setId] = useState();
    
    const startInt = () =>{
        
        let interval = setInterval(()=>{
            setCount(e => e +1);
        },1000);
        setId(interval)
    }
    const stopInt = ()=>{
        clearInterval(id);
    }
    

    return(
        <div>
            <p>{count}</p>
        <button onClick={()=>startInt()}>start</button>
        <button onClick={()=>stopInt()}>stop</button>
        </div>
    )
}