import { useState,useCallback } from "react";

import CallBackChild from "./CallBackChild";
function CallBack() {
    const [value,setValue] = useState(0);

    const incement = useCallback(()=>{
        setValue(value+1);
    });

    const aFunction = () =>{setValue(value+1);}


    return (
      <div className="App">
        <h1>Value of value: {value} </h1>
        <CallBackChild  increment={aFunction}/>
      </div>
    );
  }
  
  export default CallBack;
  