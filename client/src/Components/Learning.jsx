import React from 'react'
import './Styles/Learning.css'
function Resume() {
    return (
        <div className='LearnResume'>
            <div className="resume-section">
                <h2>Build Your Resume</h2>
                <hr />
                <p>Craft a compelling resume to showcase your skills and experience to potential employers. Our resume building tools and templates can help you create an impressive resume that stands out.</p>
                <a href="#">Get Started</a>
            </div>
        </div>
    )
}

function Course() {
    return (
        <div className='LearnCourse'>
            <section className="course">
                <h2 style={{ textAlign: 'center' }}>Offered Courses</h2>
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="card">
                                <img className="card-img-top" src="https://images.pexels.com/photos/3762940/pexels-photo-3762940.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Card image cap" />
                                <div className="card-body">
                                    <h5 className="card-title">Introduction to Software Engineering</h5>
                                    <p className="card-text">Learn the basics of software engineering and its best practices.</p>
                                    <a href="#" className="btn btn-primary">Enroll Now</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card">
                                <img className="card-img-top" src="https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Card image cap" />
                                <div className="card-body">
                                    <h5 className="card-title">Data Science Fundamentals</h5>
                                    <p className="card-text">Master the fundamentals of data science and its applications.</p>
                                    <a href="#" className="btn btn-primary">Enroll Now</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card">
                                <img className="card-img-top" src="https://www.codingdojo.com/blog/wp-content/uploads/webdevbeginners-1280x720.jpg" alt="Card image cap" />
                                <div className="card-body">
                                    <h5 className="card-title">Advanced Web Development</h5>
                                    <p className="card-text">Enhance your web development skills with advanced techniques and technologies.</p>
                                    <a href="#" className="btn btn-primary">Enroll Now</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card">
                                <img className="card-img-top" src="https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Card image cap" />
                                <div className="card-body">
                                    <h5 className="card-title">Digital Marketing Strategies</h5>
                                    <p className="card-text">Learn effective digital marketing strategies to boost your online presence.</p>
                                    <a href="#" className="btn btn-primary">Enroll Now</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card">
                                <img className="card-img-top" src="https://images.pexels.com/photos/3938022/pexels-photo-3938022.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Card image cap" />
                                <div className="card-body">
                                    <h5 className="card-title">Cloud Computing Essentials</h5>
                                    <p className="card-text">Master the fundamentals of cloud computing and its applications in businesses.</p>
                                    <a href="#" className="btn btn-primary">Enroll Now</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card">
                                <img className="card-img-top" src="https://images.pexels.com/photos/1181271/pexels-photo-1181271.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Card image cap" />
                                <div className="card-body">
                                    <h5 className="card-title">UI/UX Design Principles</h5>
                                    <p className="card-text">Learn the principles of user interface and user experience design for creating user-friendly products.</p>
                                    <a href="#" className="btn btn-primary">Enroll Now</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}


function InterviewQuestions() {
    return (
        <div className='Interview'>
            <div className="container">
                <h2 className="text-center mb-4">Top Interview Questions for MNCs</h2>
                <div id="accordion">
                    <div className="card">
                        <div className="card-header" id="headingOne">
                            <h5 className="mb-0">
                                <button className="btn btn-link no-underline " data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                    Google
                                </button>
                            </h5>
                        </div>
                        <div id="collapseOne" className="collapse" aria-labelledby="headingOne" data-parent="#accordion">
                            <div className="card-body">
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item">Describe your most significant achievement.</li>
                                    <li className="list-group-item">How would you optimize Google's advertising revenue?</li>
                                    <li className="list-group-item">Describe a situation where you had to deal with an underperforming team member.</li>
                                    <li className="list-group-item">How would you improve Google's search algorithm?</li>
                                    <li className="list-group-item">How do you prioritize projects when you have multiple deadlines?</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="card">
                        <div className="card-header" id="headingTwo">
                            <h5 className="mb-0">
                                <button className="btn btn-link no-underline " data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                    Microsoft
                                </button>
                            </h5>
                        </div>
                        <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
                            <div className="card-body">
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item">How would you design an online collaborative editor like Google Docs?</li>
                                    <li className="list-group-item">What are the differences between C# and C++?</li>
                                    <li className="list-group-item">Describe a situation where you had to resolve a conflict within a team.</li>
                                    <li className="list-group-item">How would you improve the Windows operating system?</li>
                                    <li className="list-group-item">How do you stay updated with the latest technology trends in the industry?</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="card">
                        <div className="card-header" id="headingThree">
                            <h5 className="mb-0">
                                <button className="btn btn-link no-underline " data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                    Amazon
                                </button>
                            </h5>
                        </div>
                        <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordion">
                            <div className="card-body">
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item">How would you improve the efficiency of the Amazon supply chain?</li>
                                    <li className="list-group-item">Describe a situation where you had to handle a dissatisfied customer.</li>
                                    <li className="list-group-item">How would you improve Amazon's recommendation algorithm?</li>
                                    <li className="list-group-item">What is your understanding of the Amazon leadership principles?</li>
                                    <li className="list-group-item">How do you ensure quality control in a fast-paced environment like Amazon?</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="card">
                        <div className="card-header" id="headingFour">
                            <h5 className="mb-0">
                                <button className="btn btn-link no-underline " data-toggle="collapse" data-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                    Facebook
                                </button>
                            </h5>
                        </div>
                        <div id="collapseFour" className="collapse" aria-labelledby="headingFour" data-parent="#accordion">
                            <div className="card-body">
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item">How would you handle privacy concerns related to user data on Facebook?</li>
                                    <li className="list-group-item">Describe a situation where you had to lead a cross-functional team.</li>
                                    <li className="list-group-item">How would you improve Facebook's news feed algorithm?</li>
                                    <li className="list-group-item">What is your understanding of Facebook's mission and values?</li>
                                    <li className="list-group-item">How would you handle fake accounts and misinformation on the platform?</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="card">
                        <div className="card-header" id="headingFive">
                            <h5 className="mb-0">
                                <button className="btn btn-link no-underline " data-toggle="collapse" data-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                    Apple
                                </button>
                            </h5>
                        </div>
                        <div id="collapseFive" className="collapse" aria-labelledby="headingFive" data-parent="#accordion">
                            <div className="card-body">
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item">How would you contribute to Apple's user interface design?</li>
                                    <li className="list-group-item">Describe a situation where you had to meet tight deadlines for product release.</li>
                                    <li className="list-group-item">How would you improve the integration of hardware and software at Apple?</li>
                                    <li className="list-group-item">What is your understanding of Apple's design philosophy?</li>
                                    <li className="list-group-item">How would you ensure product quality in a highly competitive market?</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="card">
                        <div className="card-header" id="headingSix">
                            <h5 className="mb-0">
                                <button className="btn btn-link no-underline " data-toggle="collapse" data-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                                    IBM
                                </button>
                            </h5>
                        </div>
                        <div id="collapseSix" className="collapse" aria-labelledby="headingSix" data-parent="#accordion">
                            <div className="card-body">
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item">How would you contribute to IBM's cloud computing initiatives?</li>
                                    <li className="list-group-item">Describe a situation where you had to manage a complex project at IBM.</li>
                                    <li className="list-group-item">How would you improve IBM's data analytics capabilities?</li>
                                    <li className="list-group-item">What is your understanding of IBM's approach to artificial intelligence?</li>
                                    <li className="list-group-item">How would you ensure security in IBM's enterprise-level solutions?</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}


function Mistakes() {
    return (
        <div className='mistakes'>
            <div className="container">
                <h2 className="text-center mb-4">Common Mistakes During Interviews</h2>

                <div className="card">
                    <div className="card-header">
                        Common Mistakes During Interviews
                    </div>
                    <div className="card-body">
                        <p>Lack of Preparation: Failing to research the company, the role, and the industry can reflect poorly on a candidate.</p>
                        <p>Poor Body Language: Nonverbal cues, such as avoiding eye contact, slouching, or fidgeting excessively, can convey a lack of confidence and professionalism.</p>
                        <p>Inadequate Communication: Rambling, using too many filler words, or not being clear and concise in responses can lead to miscommunication and a lack of understanding.</p>
                        <p>Negativity: Speaking poorly about previous employers, colleagues, or experiences can create a negative impression. Employers want to hire candidates who are positive and adaptable.</p>
                        <p>Overemphasis on Money: Focusing too much on salary, benefits, and vacation time during the initial interviews can make the candidate appear more interested in personal gain than the role itself.</p>
                        <p>Lack of Enthusiasm: Showing a lack of interest or enthusiasm for the role or the company can make the interviewer question the candidate's commitment and passion.</p>
                        <p>Failure to Ask Questions: Not having thoughtful questions.</p>
                    </div>
                </div>

            </div>
        </div>
    )
}
function Learning() {
    return (
        <div>
            <Resume />
            <Course />
            <Mistakes/>
            <InterviewQuestions />
        </div>
    )
}

export default Learning
