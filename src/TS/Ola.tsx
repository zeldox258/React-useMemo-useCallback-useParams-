

import React from "react";
function Ola(): void {
    let name: string = 'Ola';
    let age: number = 29;
    let isFocused: boolean = false;
    let favActivity: string[] = ['movies', 'music']
}
//takes 3 pram string number and string array it will return null or undefined or boolean
function Smthg(a: string, b: number, c: string[]) : null | undefined | boolean {
    if (typeof(a) == "string") return null;
    if (typeof(b) == "number") return undefined;
    if (c = []) return true;
}
// create car type and write function that takes car type parameter and return age of car.

type carOla = {
    name: string,
    year: number,
}

const Audi : carOla = {
    name: "Audi",
    year: 1994,
}

function carTypeOla(name: string) : number {
    return 5;
}


export default function TsOla () : React.FC {
    let name : string = "Ola";
    return (<div>
        <h1>Hello {name}</h1>
    </div>)
}