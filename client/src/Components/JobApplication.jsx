import React from 'react';
import './Styles/Jobs.css';

function JobApplication() {
  return (
    <div className="modal fade modal-lg" id="ApplicationModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-body">
            <div className='Application'>
              <div>
                <h1>Job Application</h1>
                <hr/>
              </div>
              <div className="container mt-3">
                <form>
                  <div className="form-group">
                    <label htmlFor="fullName">Full Name:</label>
                    <input type="text" className="form-control" id="fullName" placeholder="Enter your full name" required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email address:</label>
                    <input type="email" className="form-control" id="email" placeholder="Enter email" required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="phone">Phone Number:</label>
                    <input type="tel" className="form-control" id="phone" placeholder="Enter your phone number" required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="resume">Upload Resume:</label>
                    <input type="file" className="form-control-file" id="resume" required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="coverLetter">Describe yourself:</label>
                    <textarea className="form-control" id="coverLetter" rows="5" required></textarea>
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
