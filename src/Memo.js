
import { useState, useMemo } from "react";


function Memo() {
    const [x,setX] = useState(5);
    const [y,setY] = useState(8);
    //const [total,setTotal] = useState(x+y);
    const total = useMemo(() => {
        console.log("Something has changed new value is calculating");
        return x+y;   
    },[x,y]);

  return (
    <div className="App">
        <h1>x + y = total = {x} + {y} = {total}</h1>
        <button onClick = {() =>{setX(x+25);}}>Click to chage X value</button>
        <button onClick = {() =>{setY(y+25);}}>Click to chage Y value</button>

    </div>
  );
}

export default Memo;
