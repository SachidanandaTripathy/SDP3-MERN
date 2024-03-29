const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const User = require('../models/User');

router.post('/register', async (req, res) => {
  try {
    const { fname, lname, email,role, password } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) {
        return res.send("user already exist");
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      fname,
      lname,
      email,
      role,
      password: hashedPassword,
    });
    
    await newUser.save();

    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

module.exports = router;
