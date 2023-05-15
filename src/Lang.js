import React, {useContext} from "react";

const LangContext = React.createContext('En')


function Child(){
    const langValue = useContext(LangContext)
    return (
        <div className={langValue}>
            <h1>The website language is: {langValue}</h1>
        </div>

    )
}

export default function Lang(){

    return(
            <LangContext.Provider value='En'>
              <Child/>
            </LangContext.Provider>
    )
}
//ThemeContext.Provider value="light"
