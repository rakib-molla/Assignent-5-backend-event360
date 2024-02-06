// config/db/dbConnection.js
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const { MONGODB_URI } = process.env;

const dbConnect = async () => {
  try {
    await mongoose.connect(MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error.message);
    process.exit(1); // Exit the process if unable to connect
  }
};

module.exports = dbConnect;
