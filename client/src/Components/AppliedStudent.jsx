import React, { useState, useEffect } from 'react';
import './Styles/AppliedStudent.css';
import axios from 'axios';

export default function AppliedStudent() {
  const [applications, setApplications] = useState([]);

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

  return (
    <div className="Student-Applied">
      {applications.map((application, index) => (
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
            <button>ShortList</button>
            <button>Reject</button>
          </div>
        </div>
      ))}
    </div>
  );
}
