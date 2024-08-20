
const mongoose = require('mongoose');

// Define the user schema
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  number: {
    type: String,
    required: true,
  },
  workExperience: {
    type: String,
    required: true,
  },
  resume: {
    data: Buffer, // Store the resume file as binary data
    contentType: String, // Store the MIME type of the file (e.g., 'application/pdf')
  },
});

// Create and export the User model
const User = mongoose.model('User', userSchema);
module.exports = User;
