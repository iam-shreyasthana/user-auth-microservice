const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const authRoutes = require('./routes/authRoutes');
const profileRoutes = require('./routes/profileRoutes');

dotenv.config();

const app = express();
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('Error connecting to MongoDB:', err));

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/profile', profileRoutes);

// Start server
const PORT = process.env.PORT || 4080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
