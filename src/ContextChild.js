import React, { useContext } from 'react';
import ThemeContext from './ThemeContext';

import './App.css';


function ContextChild() {
    const theme = useContext(ThemeContext);

    return (
      <div className={theme}>
        <h1>Hello Arshya to Nuri {theme}</h1>
      </div>
    );
  }

  export default ContextChild;