const mongoose = require('mongoose');

const User = new mongoose.Schema(
  {
    firstName: {
      type: String,
      require: true
    },
    lastName: {
      type: String,
      require: true
    },
    email: {
      type: String,
      require: true,
      max: 50,
      unique: true
    },
    password: {
      type: String,
      required: true,
      min: 6
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('User', User);