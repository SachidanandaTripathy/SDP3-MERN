const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const Application = require('../Models/Application');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    const filename = uniqueSuffix + '-' + file.originalname;
    cb(null, filename);
  }
});

const upload = multer({ storage: storage });

router.post('/application', upload.fields([
  { name: 'resume', maxCount: 1 },
  { name: 'passportPhoto', maxCount: 1 }
]), async (req, res) => {
  try {
    const { fullName, email, phoneNumber, coverLetter, companyName, jobTitle } = req.body;
    const resume = req.files['resume'][0].filename;
    const passportPhoto = req.files['passportPhoto'][0].filename;
    const application = new Application({ fullName, email, phoneNumber, resume, coverLetter, companyName, jobTitle, passportPhoto });
    await application.save();
    res.status(200).json({ message: 'Application submitted successfully.' });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;
