import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useAuth } from './AuthContext';

import Navbar from './Components/Navbar';
import Community from './Components/Community'


function App() {
  const { user } = useAuth();
  return (
    <BrowserRouter>
      <div className="App">
        <ToastContainer />
        <Navbar />
        <div>
          {user && (
            <div>
              <p>{user.fname}</p>
              <p>{user.lname}</p>
              <p>Username: {user.email}</p>
              <p>Role: {user.role}</p>
            </div>
          )}
        </div>
        <Routes>
          <Route path="/community" element={<Community />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
