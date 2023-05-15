import { Counter } from "./Counter"



export function Nuri({name="nuri",age}) {
    
    return(
        <div>
            <p>Hello my name is {name}</p>
            <p>{2023 - age}</p>
            <Counter />
        </div>
    )
 }

 //you will have counter, inside of counter you will have start button, after you click start button its gonna increase
//the seconds one 1 one in every second. 
//you will also have stop button if you click stop button the result not gonna increment until start detected.
//result should not be effected by buttons clicks  