import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Memo from './Memo.js';
import Param from './Param.js';
import Param2 from './Param2.js';
import Market from './Market.js';
import CallBack from './CallBack.js';
import Context from './Context.js';
import Lang from './Lang.js';
import Ref from './Ref.js';
//import AlbertoRef from './AlbertoRef.js';
import SWR from './SWR.js';

import Ola from "./Ola/Ola"
import {Nuri} from "./Nuri/Nuri.js";
import Arshya from "./Arshya/Arshya.jsx";
import Emre from "./Emre/Emre.js";
import Alberto from './Alberto/Alberto.js';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Memo />} />          
          <Route path="/callback" element={<CallBack />} />
          <Route path="/param/:id" element={<Param />} />
          <Route path='/ola/:id' element={<Param2/>}/>
          <Route path='/market/:id' element={<Market/>} />
          <Route path='/context' element={<Context/>} />
          <Route path='/lang' element={<Lang />} />
          <Route path='/ref' element={<Ref />} />
          <Route path='/albertoref'/>
          <Route path='/swr' element={<SWR />} />

          <Route path='/nuri' element={<Nuri name ="Nuri" age={24} />} />
          <Route path='/Ola' element={<Ola name='Ola' birthYear={1999}/>} />
          <Route path='/arshya' element={<Arshya name = 'Arshya' age={1999} initialValue = {15155}/>}/>
          <Route path='/emre' element={<Emre name='Emre' age={29} />} />
          <Route path='/alberto' element={<Alberto name='Alberto' age={28}/>} />
        </Routes>
        
      </div>
    </Router>

  );
}

export default App;
