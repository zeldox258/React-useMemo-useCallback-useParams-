
import React from 'react';
import { useState } from 'react';
//Create a type which includes name and age. create function which returns combine of name and age.
//call that function and assign the result to useState and print it in the page
type person1={
  name:string,
  age:number
}
 /* let age : number = 23;
  let name : string = "Arshya";*/

interface TsComponentProps {
  title: string;
}

function TsArshya () : React.FC {


  const arshya : person1 ={
    name:"Arshya",
    age:23
  }
  function Result(a : person1) : string{
      return a.name + " " + a.age;      
  }

  const[nameAndAge,setNameAndAge]=useState(Result(arshya));

  return (
    <div>
      <h1>my name is {nameAndAge}</h1>
    </div>
    
  );

};

export default TsArshya;


/*function IsComponent():void{
  let age : number=23;
  let name: string="Arshya";
  let favActivity:string[]=["hikking","walking","music"];
}*/
//takes parameters will be string, number and string array it will return null or undefined or boolean

function Num(a:string, b:number, c:string[] ): undefined|null|boolean{
    
     return null;
}
const result=Num("Arshya",23,["Omer","Nuri"]);
// create car type and write function that takes car type parameter and return age of car.

type carArshya={
    brand:string,
    age:number
}

const sahin:carArshya={
    brand:"sahin",
    age:30
}

function Age(a:carArshya):number{
    return a.age;
}
console.log(Age);

//===========================================================================

/*interface TsComponentProps {
  title: string;
}

function TsArshya () : React.FC {
  let age : number = 23;
  let name : string = "Arshya";
  

  return (
    <div>
      <h1>Hi {name}</h1>
    </div>
    
  );

};

export default TsArshya;*/




//create 2 interfaces first one will Person second one will be Manager, manager should extends person

interface person {
  name:string,
  age:number,
  job:string
}


const arshya1 : person = {
  name:"Arshya",
  age:23,
  job: "student"
}


interface manager extends person{
  fatherName:string
}

const omer1 : manager = {
  name:"Omer",
  age:25,
  fatherName:"Omer",
  job:"Manger"
}


interface Car<T>{
  value:T
}
const car1:Car<number[]>={
   value:[1,2,3,4,5]
}
console.log("Result is: ",car1.value)

