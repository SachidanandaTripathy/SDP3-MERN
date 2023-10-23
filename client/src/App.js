import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useAuth } from './AuthContext';

import Navbar from './Components/Navbar';
import Community from './Components/Community'
import Jobs from './Components/Jobs'
import Home from './Components/Home'
import Learning from './Components/Learning';
import Comapany from './Components/Comapany';

function App() {
  const { user } = useAuth();
  return (
    <BrowserRouter>
      <div className="App">
        <ToastContainer />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/community" element={<Community />} />
          <Route path="/Jobs" element={<Jobs/>}/>
          <Route path="/company" element={<Comapany/>}/>
          <Route path="/learning" element={<Learning/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
