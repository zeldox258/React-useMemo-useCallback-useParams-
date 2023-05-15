import React from 'react'
import {Counter} from './Counter'
//Add age prop to Emre component
//Calculate the birthday
const Emre = ({name = "Emre", age}) => {
  const birthday = (new Date()).getFullYear() - age;
  return (
    <div>
      <h1>{name}</h1>
      <p>Age: {age}</p>
      <p>My Birthday: {birthday}</p>
      <Counter defaultValue={1154}/> 
    </div>
  )
}
//impostor benim

export default Emre