const mongoose = require('mongoose');

const ApplicationSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  phoneNumber: {
    type: String,
    required: true
  },
  resume: {
    type: String,
    required: true
  },
  coverLetter: {
    type: String,
    required: true
  },
  companyName: {
    type: String,
    required: true
  },
  jobTitle: {
    type: String,
    required: true
  }
});

const Application = mongoose.model('Application', ApplicationSchema);

module.exports = Application;
