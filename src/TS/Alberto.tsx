import React, {useState} from "react";

type Person = {
  name:string;
  age: number;
};
// let age: number = 28;
         
    // let name: string = "Alberto";
    
    // let favActivity: string[] = ["play videogames","play guitar","dance"]

const TsAlberto =():React.FC =>{

    const combineNameAndAge = (person: Person) : string =>{
      return `${person.name}  (${person.age} years old)`
    }
    
    const person: Person = {
      name: "Alberto",
      age: 25,
    }

    const [combinedNameAndAge, setCombinedNameAndAge] = useState(combineNameAndAge (person));
  
    interface Person {
      name: string;
      age:number;
    }
    
    const peasant : Person = {
      
      name: "Jhonny",
      age: 97
      
    }
    
    interface Manager extends Person {
      department:string;
      employees:number;
    }
    
    const bravo : Manager ={
      name: "Jhonny Bravo",
      age:30,
      department: "HR",
      employees:-2
    }
    
    interface MyGenericInterface<T> {
      value: T[];
    }
    
    const whatOmerWantsObj : MyGenericInterface <number> = {
      value: [1, 2, 3, 4, 5]
    };
    
    return (
      <div>
        <h1>Combined Name and Age: {combinedNameAndAge}</h1>
        
    </div>
      
    );
  
  };


  export default TsAlberto;
  


// create car type and write function that takes car type parameter and return age of car.


//age name and favoroite activities as an array


//takes 3 pram string number and string array it will return null or undefined or boolean

//Create a type which includes name and age. create function which returns combine of name and age.
//call that function and assign the result to useState and print it in the page



//create 2 interfaces first one will Person second one will be Manager, manager should extends person
