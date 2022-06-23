const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const userRoutes = require('./routes/users')
const jobRoutes = require('./routes/jobs')
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;
const URI = process.env.MONGO_URI;

mongoose.connect(URI, {useNewUrlParser: true}, () => {
console.log("connected to mongoDB 💻")
});

mongoose.connection.on('connected', () => {
  console.log('Mongoose is connected 🦦')
});

// HTTP Request logger
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));

//User Routes
app.use('/api/users', userRoutes);

//Job Routes
app.use('/api/jobs', jobRoutes);

// PORT
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT} 🙉`);
});
