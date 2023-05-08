import { useParams } from "react-router-dom";


function Param() {

    let {id} = useParams();


    return (
      <div className="App">
          <h1>Your Id : {id}</h1>
      </div>
    );
  }
  
  export default Param;
  