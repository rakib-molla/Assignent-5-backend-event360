// server.js
const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const dbConnect = require('./config/db/dbConnection');

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Database connection
dbConnect();

// Routes
app.get('/', (req, res) => {
  res.send('Hello, this is your Node.js server with MongoDB!');
});

// Controller 
const EventItemsManagementRoute = require('./route/EventItemsManagement/EventItemsManagementRoute');


//event-items-management  Routes 
app.use('/event-items-management', EventItemsManagementRoute);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
