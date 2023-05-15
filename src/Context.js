import React from "react";

import ThemeContext from './ThemeContext';
import ContextChild from "./ContextChild";


function Context() {

    return (
      <ThemeContext.Provider value="light">
            <ContextChild/>
      </ThemeContext.Provider>
    );
  }
  
  export default Context;



  
