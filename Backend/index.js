const express = require('express');
const mongoose = require('mongoose');
const multer = require('multer');
const User = require('./models/User'); // Import the User model
const cors = require('cors');
const bodyParser = require("body-parser"); 
require('dotenv').config(); // For environment variables

const app = express();
app.use(cors());
app.use(express.json()); // Middleware to parse JSON
app.use(bodyParser.json())

// Set up multer for file uploads
const storage = multer.memoryStorage();
const upload = multer({ storage });

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, { // Use environment variables for sensitive info
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch((err) => console.log('MongoDB connection error:', err));

// Upload user info and resume
app.post('/upload', upload.single('resume'), async (req, res) => {
  try {
    const newUser = new User({
      name: req.body.name,
      number: req.body.number,
      workExperience: req.body.workExperience,
      resume: {
        data: req.file.buffer,
        contentType: req.file.mimetype,
      },
    });

    await newUser.save();
    res.status(201).json({ message: 'User created successfully', user: newUser });
  } catch (err) {
    res.status(500).json({ error: 'Failed to save user' });
  }
});

// Fetch user data including the resume
app.get('/user/:id', async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    // console.log(json(user));
        
    if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }
  
    res.json(user);

    // res.json({
    //   name: user.name,
    //   number: user.number,
    //   workExperience: user.workExperience,
    //   resumeUrl: `/user/${user._id}/resume`
    // });
  } catch (err) {
    res.status(500).json({ error: 'Failed to retrieve user' });
  }
});

// Endpoint to serve the resume file
app.get('/user/:id/resume', async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    
    if (!user || !user.resume) {
      return res.status(404).json({ error: 'Resume not found' });
    }

    res.contentType(user.resume.contentType);
    res.send(user.resume.data);
  } catch (err) {
    res.status(500).json({ error: 'Failed to retrieve resume' });
  }
});

// Start the server
const PORT = process.env.PORT || 5000; // Use environment variable for port
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
