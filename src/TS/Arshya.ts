function IsComponent():void{
  let age : number=23;
  let name: string="Arshya";
  let favActivity:string[]=["hikking","walking","music"];
}
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
    return age;
}
console.log(Age);






import React from 'react';

interface TsComponentProps {
  title: string;
}

function TsComponent () : React.FC {
  let age : number = 23;
  let name : string = "Arshya";
  

  console.log(symbolExample);
  return (
    <div></div>
      <h1>Hi {name}</h1>
    </div>
    
  );

};

export default TsComponent;