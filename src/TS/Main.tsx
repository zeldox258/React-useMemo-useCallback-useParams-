
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

  return (
    <div>
      <h1>HELLOOO {name}</h1>
    </div>
    
  );

};

export default TsComponent;