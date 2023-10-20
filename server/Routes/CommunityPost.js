const express = require('express');
const multer  = require('multer');
const router = express.Router();
const path = require('path');
const Post = require('../models/Post');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    const ext = path.extname(file.originalname);
    const filename = file.fieldname + '-' + uniqueSuffix + ext;
    cb(null, filename);
  }
});

const upload = multer({ storage: storage });

router.post('/community', upload.single('image'), async (req, res) => {
  try {
    const { title, experience, author } = req.body;
    const imagePath = req.file ? req.file.filename : null;

    const newPost = new Post({
      title,
      experience,
      image: imagePath,
      author,
    });

    await newPost.save();
    res.status(200).json({ message: 'Successfully added' });
  } catch (err) {
    console.error('Error:', err);
    res.status(500).json({ message: 'Internal server error' });
  }
});

module.exports = router;
