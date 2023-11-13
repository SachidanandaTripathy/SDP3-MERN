import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Styles/Community.css';

const Post = () => {
    const [postData, setPostData] = useState([]);

    useEffect(() => {
        const fetchPostData = async () => {
            try {
                const response = await axios.get('http://localhost:8000/api/community');
                setPostData(response.data);
                console.log(response.data);
            } catch (error) {
                console.error('Error fetching post data:', error);
            }
        };

        fetchPostData();
    }, []);

    return (
        <div className='Community'>
            <div className="container">
                {postData.map((post, index) => (
                    <div className="post" key={index}>
                         <h4>{post.title}</h4>
                        <div className="post-author">
                            <span>{post.author}</span>
                            <span className="author-options">...</span>
                        </div>
                        <p className="post-date">Posted on {post.date}</p>
                        <p className="post-content">
                            {post.experience}
                        </p>
                        <img src={`http://localhost:8000/${post.image}`} alt="Project Image" />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Post;
