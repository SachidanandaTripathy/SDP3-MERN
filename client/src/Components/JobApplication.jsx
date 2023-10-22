import React, { useState } from 'react';
import { toast } from "react-toastify";
import { useAuth } from '../AuthContext';
import axios from 'axios';
import './Styles/Jobs.css';

function JobApplication() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [resume, setResume] = useState(null);
  const [coverLetter, setCoverLetter] = useState('');

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('fullName', fullName);
    formData.append('email', email);
    formData.append('phoneNumber', phoneNumber);
    formData.append('coverLetter', coverLetter);
    formData.append('resume', resume);

    try {
      const response = await axios.post('http://localhost:8000/api/application', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      if (response.status == 200) {
        toast.success("Form data has been successfully submitted!", { position: "bottom-right" });
      } else {
        toast.info("form is not submitted! try again!", { position: "bottom-right" });
      }
    } catch (error) {
      if (error.response) {
        toast.error("Server responded with an error:", { position: "bottom-right" });
      } else if (error.request) {
        toast.error("No response received from the server:", { position: "bottom-right" });
      } else {
        toast.error("Error during request setup:", { position: "bottom-right" });
      }
    }
  };

  return (
    <div className="modal fade modal-lg" id="ApplicationModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-body">
            <div className='Application'>
              <div>
                <h1>Job Application</h1>
                <hr />
              </div>
              <div className="container mt-3">
                <form onSubmit={handleFormSubmit}>
                  <div className="form-group">
                    <label htmlFor="fullName">Full Name:</label>
                    <input type="text" className="form-control" id="fullName" placeholder="Enter your full name" required value={fullName} onChange={(e) => setFullName(e.target.value)} />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email address:</label>
                    <input type="email" className="form-control" id="email" placeholder="Enter email" required value={email} onChange={(e) => setEmail(e.target.value)} />
                  </div>
                  <div className="form-group">
                    <label htmlFor="phone">Phone Number:</label>
                    <input type="tel" className="form-control" id="phone" placeholder="Enter your phone number" required value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
                  </div>
                  <div className="form-group">
                    <label htmlFor="resume">Upload Resume:</label>
                    <input type="file" className="form-control-file" id="resume" required onChange={(e) => setResume(e.target.files[0])} />
                  </div>
                  <div className="form-group">
                    <label htmlFor="coverLetter">Describe yourself:</label>
                    <textarea className="form-control" id="coverLetter" rows="5" required value={coverLetter} onChange={(e) => setCoverLetter(e.target.value)}></textarea>
                  </div>
                  <div className="button-container">
                    <button type="submit" className="btn">Submit</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default JobApplication;
