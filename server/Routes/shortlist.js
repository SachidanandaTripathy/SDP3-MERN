const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');


router.post('/shortlist', (req, res) => {
    const { email } = req.body;

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'viswatejaperla@gmail.com',
        pass: 'qrpa dmss npyq ijpi',
      },
    });
  
    const mailOptions = {
      from: 'viswatejaperla@gmail.com',
      to: email,
      subject: 'You have been shortlisted!',
      text: 'Congratulations! You have been shortlisted for the position.',
    };
  
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error('Error sending email:', error);
        res.status(500).send('Error sending email');
      } else {
        console.log('Email sent: ' + info.response);
        res.status(200).send('Email sent successfully');
      }
    });
  });
  module.exports = router;