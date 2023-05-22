// //Define name age and hobby as array.
// let fullname: string = "Emre Dag";
// let age: number = 29;
// let FavHobbies: string[] = ["Video Game", "Cooking", "Workout"];

// //Write a function that takes three arguments,string number and string array it will return null or undefined or boolean

// function myFunction(name: string, age: number, hobbies: string[]): boolean  | null| undefined{
//     if(fullname === "Emre Dag" && age === 29 && hobbies === FavHobbies){
//         return true;
//     }
//     else{
//         return false;
//     }
    

// }
// // create car type and write function that takes car type parameter and return age of car.

// type caremre = { brand: string, model: string, year: number }

// let car: caremre = { brand: "Toyota", model: "Corolla", year: 2020 }

// function carAge(car: caremre): number{
//     return 2023 - car.year;           
// }

// console.log(carAge(car));
// console.log(myFunction(fullname, age, FavHobbies));

//Create tsx component with returning fullname

import React from 'react';



export default function Emre(): React.FC{
    let name: string = "Emre";
    
    return (
        <div>
            <h1>Hello {name}</h1>
            
        </div>      
        
      );
      
};