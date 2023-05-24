
/*

function TsComponent(): void{

    console.log("Hello");


    let age : number = 25;
    let name : string = "Ola";
    let isConnected : boolean = true;
    let bigNumber : bigint = 90007154651684151n;
    let undefValue : undefined = undefined;
    let nullValue : null = null;
    let symbolExample  : Symbol = Symbol("id");
    let array: number[] = [1,2,3,4,5];

    let anyValue : any = "helllo";
    anyValue = 15616;

    //Error
    //isConnected = 1515;

    
    function Sum(a : number, b : number) : number {
        return a + b;
    }


    function divide(a : number, b : number) : number | undefined | null {
        if(b == 0) return undefined;

        return null;


        return a + b;
    }


    const resultOfSum : number = Sum(48,88);

}

// number   : 0001
// string   : 0010
// undefined: 0100

//0011
//0110
//takes 3 pram string number and string array it will return null or undefined or boolean


//000000000
//000000001 = 1
//000000010 = 2
//000000100 = 4
//000001000 = 8
//000001001 = 9


function returnNum(): any{
    return 695815151;
}

//two solution use one of them
const randValue : any = returnNum() as number;


type person = {
    name:string,
    age:number,
    isCitizen:boolean
}


const emre : person = {
    name: "Emre",
    age:29,
    isCitizen:true,
}

// create car type and write function that takes car type parameter and return age of car.


*/




//Create a type which includes name and age. create function which returns combine of name and age.
//call that function and assign the result to useState and print it in the page



//any unknown and never












import { type } from '@testing-library/user-event/dist/type';
import React from 'react';

interface TsComponentProps {
  title: string;
}

function TsComponent () : React.FC {
  let age : number = 25;
  let name : string = "Ola";
  let isConnected : boolean = true;
  let bigNumber : bigint = 90007154651684151n;
  let undefValue : undefined = undefined;
  let nullValue : null = null;
  let symbolExample  : Symbol = Symbol("id");
  let array: number[] = [1,2,3,4,5];

  console.log(bigNumber);
  let var1 : any = 25; 
  let var2 : unknown = 5;
  
  if(typeof(var2) == "number"){
    var2 = 15;
  }

  var1 = 35;


function something() : never{
  throw new Error("WRONG");
}

function infinitiyLoop() : never{
  while(true){
    console.log("Loading...");
  }
}

type animal = {
  readonly name : string,
  age : number
}


const animal1 : animal = {
  name : "Dog",
  age : 15
}


console.log(animal1.name)

animal1.name = "Omer";
console.log(animal1.name)




interface student {
  name:string,
  studentNumber:number
}


const omer : student = {
  name:"Omer",
  studentNumber:15
}


interface student2 extends student{
  fatherName:string
}

const omer1 : student2 = {
  name:"Omer",
  studentNumber:15,
  fatherName:"Omer"
}

//create 2 interfaces first one will Person second one will be Manager



//Tuples are rule format for types

type firstTuple = [number,string,boolean]

const smthg1 : firstTuple = [15,"fsa",true]


interface Box<T>{
  value:T
}


const box1 : Box<number>  = {
  value : 5
}


console.log("Result is :",box1.value);
console.log(smthg1[2]);


//create generic interface which will have value key and value result will be generic array
//create one object from this interface value should be [1,2,3,4,5]



enum Fruit{
  Apple = "apple",
  Banana = "banana",
  Orange = "orange"
}


enum directions{
  up,down,left,right
}



console.log(Fruit.Apple);


const directionChecker = (a:directions) : void => {
  if(a == directions.down){
    console.log("you moved down");
  }
  else if(a == directions.up){
    console.log("you moved up");
  }
  else if(a == directions.left){
    console.log("you moved left");
  }
  else if(a == directions.right){
    console.log("you moved right");
  }
}

directionChecker(directions.down);
directionChecker(directions.right);




interface first{
  name:string
}

interface second {
  age:number
}


interface third extends first , second{
  number : number
}


type combinedInterfaces = first & second;


let comb1 : combinedInterfaces = {name:"Nuri",age:22}
let comb2 : third = {name:"Nuri",age:22,number:25}

console.log(comb1,typeof(comb1));


console.log(comb2,typeof(comb2));



  return (
    <div>
      <h1>HELLOOO {typeof(var1)} {typeof(var2)} {var2} {var1}</h1>
    </div>
    
  );

};

export default TsComponent;