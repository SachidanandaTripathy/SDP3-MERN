const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

// GET request to fetch all community post data
router.get('/community', async (req, res) => {
  try {
    const allPosts = await Post.find();
    res.status(200).json(allPosts);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

module.exports = router;
