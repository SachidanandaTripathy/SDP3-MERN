import React from 'react'
import './Styles/Community.css'
function CommunityPostForm() {
  return (
    <div className="PostForm">
       <div className="container">
        <div className="post-form">
            <form id="post-form" enctype="multipart/form-data">
                <textarea name="post" placeholder="Share your achievement..."></textarea>
                <input type="file" name="photo" accept="image/*"/>
                <button type="submit">Post</button>
            </form>
        </div>
    </div>
    </div>
  )
}

export default CommunityPostForm
