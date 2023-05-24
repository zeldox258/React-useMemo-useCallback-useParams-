import React,{useState} from 'react';

//Create a type which includes name and age. create function which returns combine of name and age.
//call that function and assign the result to useState and print it in the page

    // let age : number = 24;
    // let name : string = "Nuri";
    // let activities: string[] = ["running","coding","volleyball"];


    // function nuri(a:string, b:string[], c:number) : null | undefined | boolean{
    //     return null;
    //     return undefined;
    //     return true || false;
    // }
    
    // console.log(nuri(name,activities,age))

    // type carNuri = {
    //     age: number,
    //     brand: string
    // }

    // let myCar: carNuri ={
    //     age: 12,
    //     brand:"opel"
    // }

    // function func(a: carNuri): number{
    //     return a.age
    // }
    // const print = func(myCar)




function TsNuri(): React.FC{


   
    
    // type newNuriFunc = {
    //          name: string,
    //          age: number
    //     }
    // let newNuri: newNuriFunc = {
    //     name: "nuri",
    //     age: 24
    // }
    
    // function nuriFunction(a: newNuriFunc): string{
    //     let result: string = a.name + " "+ a.age
    //     return(result)
    // }
    // const[header, setHeader] = useState(nuriFunction(newNuri))

    // interface person {
    //     name: string,
    //     age: number
    // }
    // interface manager extends person{
    //     experience:string
    // }
    //create generic interface which will have value key and value result will be generic array
    //create one object from this interface value should be [1,2,3,4,5]
    interface nuriInterface<T> {
        value: T[]
    }
    let newNuri : nuriInterface<number> ={
        value: [1,2,3,4,5]
    }

    return(
        <div>
            <h1>hi</h1>
        </div>
    )

}
export default TsNuri;
//takes 3 pram string number and string array it will return null or undefined or boolean

// create car type and write function that takes car type parameter and return age of car.

//create 2 interfaces first one will Person second one will be Manager, manager should extends person