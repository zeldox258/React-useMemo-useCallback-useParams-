import { useState } from "react";

function CallBackChild(props) {

    return (
      <div className="App">
        <button onClick={()=>{props.increment()}}>Increment the value of value</button>
      </div>
    );
  }
  
  export default CallBackChild;
  