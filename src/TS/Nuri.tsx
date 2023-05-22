import React from 'react';



function TsNuri(): React.FC{


    // let age : number = 24;
    // let name : string = "Nuri";
    // let activities: string[] = ["running","coding","volleyball"];

    // function nuri(a:string, b:string[], c:number) : null | undefined | boolean{
    //     return null;
    //     return undefined;
    //     return true || false;
    // }
    
    // console.log(nuri(name,activities,age))

    type carNuri = {
        age: number,
        brand: string
    }

    let myCar: carNuri ={
        age: 12,
        brand:"opel"
    }

    function func(a: carNuri): number{
        return a.age
    }
    const print = func(myCar)

    return(
        <div>
            <h1>{print}</h1>
        </div>
    )

}
export default TsNuri;
//takes 3 pram string number and string array it will return null or undefined or boolean

// create car type and write function that takes car type parameter and return age of car.

