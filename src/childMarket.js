import  {useState} from "react";



function ChildMarket(props) {
    return ( <div className="App">
        
        <button onClick = {() =>{props.sell()}}>Click to sell a product</button>
        <button onClick = {() =>{props.buy()}}>Click to buy a product</button>

        </div>);
}

export default ChildMarket;









 