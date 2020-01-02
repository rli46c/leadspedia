const express = require('express');

const app = express();

const connectDB = require('./config/db');
connectDB();

app.use('/api/auth/login', require('./routes/api/auth/login'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Express Server started at ${PORT}`));