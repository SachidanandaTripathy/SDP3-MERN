const express = require('express');
const Application = require('../models/Application');

const router = express.Router();

router.delete('/application/:email', async (req, res) => {
  const { email } = req.params;

  try {
    await Application.findOneAndDelete({ email });
    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
