import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Memo from './Memo.js';
import Param from './Param.js';
import Param2 from './Param2.js';
import Market from './Market.js';
import CallBack from './CallBack.js';



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
        </Routes>
        
      </div>
    </Router>

  );
}

export default App;
