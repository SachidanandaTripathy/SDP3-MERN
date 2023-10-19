import React from 'react';
import './Styles/Community.css'
const Post = () => {
    return (
        <div className='Community'>
            <div className="container">
                <div className="post">
                    <div className="post-author">
                        <span>John Doe</span>
                        <span className="author-options">...</span>
                    </div>
                    <p className="post-date">Posted on October 16, 2023</p>
                    <p className="post-content">
                        I'm excited to share that I've successfully completed a major project at our company. It was a challenging journey, but the result is incredibly rewarding. I'm grateful for the support of my team and mentors who helped me along the way. Looking forward to new opportunities!
                    </p>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCZlf5lc5tX-0gY-y94pGS0mQdL-D0lCH2OQ&usqp=CAU" alt="Project Image" />
                </div>
            </div>
        </div>
    );
};

export default Post;

