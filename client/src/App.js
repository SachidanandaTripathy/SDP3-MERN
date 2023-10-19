import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './Components/Navbar';
import Community from './Components/Community'


function App() {
  return (
    <BrowserRouter>
      <div className="App">

        <Navbar />
        <Routes>
          <Route path='/community' element={<Community />} />
        </Routes>

      </div>
    </BrowserRouter>
  );
}

export default App;
