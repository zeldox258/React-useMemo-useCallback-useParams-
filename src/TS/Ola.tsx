
import { useState } from "react";
import React from "react";
// function Ola(): void {
//     let name: string = 'Ola';
//     let age: number = 29;
//     let isFocused: boolean = false;
//     let favActivity: string[] = ['movies', 'music']
// }
//takes 3 pram string number and string array it will return null or undefined or boolean
// function Smthg(a: string, b: number, c: string[]) : null | undefined | boolean {
//     if (typeof(a) == "string") return null;
//     if (typeof(b) == "number") return undefined;
//     if (c = []) return true;
// }
// create car type and write function that takes car type parameter and return age of car.

// type carOla = {
//     name: string,
//     year: number,
// }

// const Audi : carOla = {
//     name: "Audi",
//     year: 1994,
// }

// function carTypeOla(name: string) : number {
//     return 5;
// }


export default function TsOla () : React.FC {
    let name : string = "Ola";
    type Person = {
        name: string,
        age: number
    }
    
    const p1 : Person = {
        name: 'Ola',
        age: 29
    }
    
    function Person1(a : Person) : String {
        return a.name + a.age;
    }
    
    const [person1, setperson1] = useState(Person1(p1))

    return (<div>
            <h1>Hello {person1}</h1>
     </div>)
 }

//Create a type which includes name and age. create function which returns combine of name and age.
//call that function and assign the result to useState and print it in the page


//create 2 interfaces first one will Person second one will be Manager, manager should extends person

interface Person  {
    name: string,
    age: number
}

const sisi : Person = {
    name: "sisi",
    age: 13
}

interface Manager extends Person {
    isManager: boolean
}

const john : Manager = {
    name: 'John',
    age: 34,
    isManager: true,
}

//create generic interface which will have value key and value result will be generic array
//create one object from this interface value should be [1,2,3,4,5]

interface Item<T> {
    value:T[]
}

const item1 : Item<number> = {
    value:[1,2,3,4,5]
}

