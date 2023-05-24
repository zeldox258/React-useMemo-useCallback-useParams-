import React, { useState } from 'react';

//Create a type which includes name and age. create function which returns combine of name and age.
//call that function and assign the result to useState and print it in the page
//create 2 interfaces first one will Person second one will be Manager, manager should extends person
export default function Emre(): React.FC{
    let name: string = "Emre";

    
    type Person = {name, age}
    const Myvariable: Person = { name: "Emre", age: 29 }

    function Combine(person: Person) : string { 
        return `${person.name} " " ${person.age}`
    }
    const [combine, setcombine] = useState(Combine(Myvariable))

    interface Person1 { 
        name: string,
        age: number
    }
    
    interface Manager extends Person1  {
        title: string
    }
    
    const Myvariable2: Manager = { name: "Emre", age: 29, title: "Developer" }
    
    function Combine2(person: Manager) : string { 
        return `${person.name} " " ${person.age} " " ${person.title}`
    }
    
    return (
        <div>
            <h1>Hello {combine}</h1>
            <h1>Hello {Combine2(Myvariable2)}</h1>                        
        </div>      
        
      );
      
};

//create generic interface which will have value key and value result will be generic array
//create one object from this interface value should be [1,2,3,4,5]

interface Generic<T> {
    value: T
}

const Myvariable: Generic<number> = { value: 1 }

const Myvariable3: Generic<number[]> = { value: [1,2,3,4,5] }




