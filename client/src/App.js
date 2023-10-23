import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useAuth } from './AuthContext';

import Navbar from './Components/Navbar';
import Community from './Components/Community'
import Jobs from './Components/Jobs'
import Home from './Components/Home'
import JobApplication from './Components/JobApplication';
import Learning from './Components/Learning';


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
          <Route path="/company" element={<JobApplication/>}/>
          <Route path="/learning" element={<Learning/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
