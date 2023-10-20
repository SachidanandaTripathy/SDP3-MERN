import React, { useState } from 'react'
import './Styles/Community.css'
import { useAuth } from '../AuthContext';
import axios from 'axios';

function PostForms() {
  const [title, setTitle] = useState('');
  const [experience, setExperience] = useState('');
  const [image, setImage] = useState(null);
  const auth = useAuth();

  const handlePost = (e) => {
    e.preventDefault();
    console.log('Title:', title);
    console.log('Experience:', experience);
    console.log('Image:', image);

    const formData = new FormData();
    formData.append('title', title);
    formData.append('experience', experience);
    formData.append('image', image);
    formData.append('author', `${auth.user.fname} ${auth.user.lname}`);
    console.log(auth.user.fname)
    console.log(auth.user.lname)

    const currentDate = new Date().toISOString().split('T')[0];
    // formData.append('date', currentDate);

    axios
      .post('http://localhost:8000/api/community', formData)
      .then((response) => {
        console.log('Response:', response.data);
        if (response.status === 200) {
          console.log('Successfully added');
        }
      })
      .catch((error) => {
        console.error('Error:', error);
      });

    setTitle('');
    setExperience('');
    setImage(null);
  };

  return (
    <div className="modal fade" id="PostFormModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="posting">
          <div className="modal-content">
            <div className="modal__header modal-header">
              <span className="modal__title modal-title">New project</span>
              <button type="button" className="button button--icon btn-close" data-bs-dismiss="modal" aria-label="Close">
                <svg width="24" viewBox="0 0 24 24" height="24" xmlns="http://www.w3.org/2000/svg">
                  <path fill="none" d="M0 0h24v24H0V0z"></path>
                  <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"></path>
                </svg>
              </button>
            </div>
            <div className="modal__body modal-body">
              <form onSubmit={handlePost}>
                <div className="input">
                  <label className="input__label form-label">Title of the Achievement</label>
                  <input
                    className="input__field form-control"
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    name="title"
                  />
                  <p className="input__description form-text">The title must contain a maximum of 32 characters</p>
                </div>
                <div className="input">
                  <label className="input__label form-label">Experience/Posting words</label>
                  <textarea
                    className="input__field input__field--textarea form-control"
                    rows="3"
                    value={experience}
                    onChange={(e) => setExperience(e.target.value)}
                    name="experience"
                  ></textarea>
                  <p className="input__description form-text">Give your project a good description so everyone knows what it's for</p>
                </div>
                <div className="input">
                  <label className="input__label form-label">Upload Image</label>
                  <input
                    type="file"
                    className="form-control"
                    onChange={(e) => setImage(e.target.files[0])}
                    name="image"
                  />
                  <p className="input__description form-text">Upload an image related to your project</p>
                </div>
                <div className="modal__footer modal-footer">
                  <button type="submit" className="button button--primary btn btn-primary">
                    Post
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function CommunityPostForm() {
  return (
    <div className="PostForm">

      <div className="container-fluid d-flex justify-content-center">
        <div className="card custom-form">
          <div className="card-body d-flex align-items-center">
            <p className="flex-grow-1">
              This is an example sentence. Replace this with your own content
            </p>
            <button type="button" className="btn" data-bs-toggle="modal"
              data-bs-target="#PostFormModal">
              Button
            </button>
          </div>
        </div>
      </div>
      <PostForms />
    </div>
  )
}

export default CommunityPostForm
