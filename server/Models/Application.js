const mongoose = require('mongoose');

let Application;

try {
  Application = mongoose.model('Application');
} catch (error) {
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
    passportPhoto: {
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

  Application = mongoose.model('Application', ApplicationSchema);
}

module.exports = Application;
