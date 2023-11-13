import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Styles/HomePage.css';

import jobsData from './Json/Jobs.json';
import JobApplication from './JobApplication';

function Freshers() {
  const [randomJobs, setRandomJobs] = useState([]);
  const navigate = useNavigate();

  const handleViewMoreClick = () => {
    navigate('/Jobs');
  };

  useEffect(() => {
    const shuffledJobs = jobsData.sort(() => 0.5 - Math.random()).slice(0, 3);
    setRandomJobs(shuffledJobs);
  }, []);

  return (
    <div className='Home-Jobs' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
      <div>
        <h2 style={{ textAlign: 'center' }}>Jobs Available for Hiring</h2>
        <hr />
      </div>
      <div className='container' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'row', flexWrap: 'wrap' }}>
        {randomJobs.map((job, index) => (
          <div className='row-card' key={index} style={{ margin: '10px' }}>
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{job.jobTitle} at {job.companyName}</h5>
                <hr />
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

                <h6 className="card-subtitle text-muted"><span>Skills Required:</span></h6>
                <div>
                  {job.skillsRequired.map((skill, skillIndex) => (
                    <span key={skillIndex} className="skill-tag">
                      {skill}
                    </span>
                  ))}
                </div>
                <p className="card-text mt-3">{job.jobDescription}</p>
                <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}
                  data-bs-toggle="modal"
                  data-bs-target="#ApplicationModal">
                  <button>Apply Now</button>
                </div>
              </div>
            </div>
          </div>
        ))}
        <JobApplication />
        <button onClick={handleViewMoreClick}>View More</button>
      </div>

    </div>
  );
}


function Carousel() {
  const [index, setIndex] = useState(0);
  const handlePrev = () => {
    setIndex(index > 0 ? index - 1 : 0);
  };
  const handleNext = () => {
    setIndex(index < 2 ? index + 1 : 2);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex < 2 ? prevIndex + 1 : 0));
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const images = [
    "https://images.pexels.com/photos/4050425/pexels-photo-4050425.jpeg?auto=compress&cs=tinysrgb&w=800",
    "https://images.pexels.com/photos/3811593/pexels-photo-3811593.jpeg?auto=compress&cs=tinysrgb&w=800",
    "https://images.pexels.com/photos/3803517/pexels-photo-3803517.jpeg?auto=compress&cs=tinysrgb&w=800"
  ];

  return (
    <div className='carousel'>
      <div className="container-fluid p-0">
        <div id="myCarousel" className="carousel slide" data-ride="carousel">
          <div className="carousel-inner">
            {images.map((image, i) => (
              <div key={i} className={`carousel-item ${i === index ? 'active' : ''}`}>
                <img src={image} alt={`Slide ${i}`} />
                <div className="carousel-caption">
                  <h3>Welcome to Our Website</h3>
                  <button>Display your skill</button>
                </div>
              </div>
            ))}
          </div>
          <a className="carousel-control-prev" href="#myCarousel" data-slide="prev" onClick={handlePrev}>
            <span className="carousel-control-prev-icon"></span>
          </a>
          <a className="carousel-control-next" href="#myCarousel" data-slide="next" onClick={handleNext}>
            <span className="carousel-control-next-icon"></span>
          </a>
        </div>
      </div>
    </div>
  );
}

function Home() {
  return (
    <div>
      <Carousel />
      <Freshers />

    </div>
  )
}

export default Home;
