import React from 'react';
import Navbar from './Components/Navbar';

import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
    return (
        <BrowserRouter>
            <div className="App">
              
                <Navbar />
                <Routes>
                  
                </Routes>
               
            </div>
        </BrowserRouter>
    );
}

export default App;
