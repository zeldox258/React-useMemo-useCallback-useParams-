import { useParams } from "react-router-dom";
/* 
/ola/5
/ola/9

*/
function Param2() {
    let {id} = useParams();

    

    return (
      <div >
        <h3>The id is: {id}</h3>
      </div>
    );
  }
  
  export default Param2;
  