const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv/config');

// Import Routes
const authRoute = require('./routes/auth');

// Middlewares
app.use(express.json());
app.use(cors());
app.use('/api/user', authRoute);

// Connect to MongoDB
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true }, () => {
    console.log("Connected to MongoDB!");
});

// Home route
app.get('/', (req, res) => {
    res.send('Home Page');
});

// 404: no matching route

// Listen
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Listening on Port: ${port}`);
});