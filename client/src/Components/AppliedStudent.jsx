import React, { useState, useEffect } from 'react';
import './Styles/AppliedStudent.css';
import axios from 'axios';

export default function AppliedStudent() {
  const [applications, setApplications] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/application');
        setApplications(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  const handleDownload = (filename) => {
    const url = `http://localhost:8000/${filename}`;
    const link = document.createElement('a');
    link.href = url;
    link.target = '_blank';
    link.download = url.substr(url.lastIndexOf('/') + 1);
    link.click();
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleShortlist = (email) => {
    if (email) {
      axios.post('http://localhost:8000/api/shortlist', { email })
        .then(response => {
          alert('Applicant shortlisted successfully!');
        })
        .catch(error => {
          console.error('Error shortlisting applicant:', error);
        });
    } else {
      console.error('Email not found or undefined');
    }
  };

  const handleReject = (email) => {
    if (email) {
      axios.delete(`http://localhost:8000/api/application/${email}`)
        .then(response => {
         
          alert('Applicant rejected and application deleted successfully!');
        
          setApplications(applications.filter(app => app.email !== email));
        })
        .catch(error => {
          console.error('Error rejecting applicant:', error);
        });
    } else {
      console.error('Email not found or undefined');
    }
  };

  const filteredApplications = applications.filter((application) => {
    return application.jobTitle.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <>
      <div>
        <input
          type="text"
          placeholder="Search by job title"
          value={searchTerm}
          onChange={handleSearch}
          style={{
            display: 'flex',
            justifyContent: 'center',
            textAlign: 'center',
            alignItems: 'center',
            margin: 'auto',
            padding: '10px',
            width: '300px',
            borderRadius: '5px',
            border: '1px solid #ccc',
            fontSize: '16px',
          }}
        />
      </div>
      <div className="Student-Applied">
        {filteredApplications.map((application, index) => (
          <div key={index} className="card">
            <div className="card-header">
              <img src={`http://localhost:8000/${application.passportPhoto}`} alt="student-img" />
            </div>
            <div className="card-body">
              <span className="name">{application.fullName}</span>
              <br />
              <span className="job-title">
                <span>Post:</span> {application.jobTitle}
              </span>
              <br />
              <button onClick={() => handleDownload(application.resume)}>Download Resume</button>
              <div className="bio">{application.coverLetter}</div>
            </div>
            <div className="Buttons">
              <button onClick={() => handleShortlist(application.email)}>Shortlist</button>
              <button onClick={() => handleReject(application.email)}>Reject</button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
