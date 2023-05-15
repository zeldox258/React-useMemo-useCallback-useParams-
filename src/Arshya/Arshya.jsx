import React from 'react'
import {Counter} from './Counter.jsx'

const Arshya=({name,age,initialValue})=>{
    return (
    <div>
        
        <p>{name}</p>
        <p>{2024-age}</p>
        <Counter initialValue = {initialValue}/>
    </div>
    )
        
}

//you will have counter, inside of counter you will have start button, after you click start button its gonna increase
//the seconds one 1 one in every second. 
//you will also have stop button if you click stop button the result not gonna increment until start detected.
//result should not be effected by buttons clicks     
export default Arshya;