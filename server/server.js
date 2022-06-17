const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const userRoute = require('./routes/users')
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;
const URI = process.env.MONGO_URI;

mongoose.connect(URI, {useNewUrlParser: true}, () => {
console.log("connected to mongoDB 💻")
});

mongoose.connection.on('connected', () => {
  console.log('Mongoose is connected 🦦')
})

// HTTP Request logger
app.use(morgan('dev'));


app.get('/', (req, res) => {
  res.send('Hello Worldsssssss!');
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT} 🙉`);
});
