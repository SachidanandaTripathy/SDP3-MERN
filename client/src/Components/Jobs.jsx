import React, { useRef, useEffect } from 'react';
import './Styles/Jobs.css';
import jobsData from './Json/Jobs.json';

function Jobs() {
  const rowRef = useRef(null);
  const cardWidth = 500;


  useEffect(() => {
    const scroll = () => {
      if (rowRef.current) {
        const { scrollLeft, clientWidth } = rowRef.current;
        rowRef.current.scrollLeft += cardWidth * 2;

        if (scrollLeft >= rowRef.current.scrollWidth - clientWidth) {
          rowRef.current.scrollLeft = 0;
        }
      }
    };

    const interval = setInterval(scroll, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className='Jobs'>
      <div>
        <h2 style={{ textAlign: 'center' }}>Jobs Available for Hiring freshers</h2>
        <hr/>
      </div>
      <div className='container' style={{ overflowX: 'auto' }} ref={rowRef}>

        {jobsData.map((job, index) => (
          <div className='row-card' key={index}>
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{job.jobTitle} at {job.companyName}</h5>
                <hr/>
                <h6 className="card-subtitle text-muted"><span>Location: </span>{job.location}</h6>
                <h6 className="card-subtitle text-muted"><span>Job Type: </span>{job.jobType}</h6>
                <h6 className="card-subtitle text-muted">
                  <span>Experience Level: </span> {job.experienceLevel}
                  <span className="vertical-line"></span>
                  <span>Salary Range: </span> {job.salaryRange}
                </h6>
                <h6 className="card-subtitle text-muted">
                  <span>Application Deadline: </span> {job.applicationDeadline}
                  <span className="vertical-line"></span>
                  <span>Date Posted: </span> {job.datePosted}
                </h6>

                <h6 className="card-subtitle text-muted">Skills Required:</h6>
                <div>
                  {job.skillsRequired.map((skill, skillIndex) => (
                    <span key={skillIndex} className="skill-tag">
                      {skill}
                    </span>
                  ))}
                </div>
                <p className="card-text mt-3">{job.jobDescription}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <hr/>
    </div>
  );
}

export default Jobs;
