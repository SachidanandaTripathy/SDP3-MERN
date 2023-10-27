const express = require('express');
const router = express.Router();
const Application = require('../models/Application');


router.get('/application', async (req, res) => {
  try {
    const applications = await Application.find();
    res.json(applications);
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
