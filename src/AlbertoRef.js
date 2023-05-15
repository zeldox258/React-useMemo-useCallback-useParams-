//email and password area. ref 

import React, {useState , useRef} from 'react';

export default function AlbertoRef(){
    const username = useRef();
    const password= useRef();
  
    function Clean(){
        username.current.value = ''
        password.current.value = ''
    }
    
    return (
        <div>
            <h1>Log in</h1>
            <input type="text" ref={username} placeholder='username'/>
            <input type="text" ref={password} placeholder='password'/>
            <button onClick={Clean}>Log in</button>


        </div>
    )
}