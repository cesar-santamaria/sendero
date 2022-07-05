const mongoose = require('mongoose');

const UsersSchema = mongoose.Schema({
  firstName: {
    type: String,
    required: [true, 'Please add a first name'],
  },
  lastName: {
    type: String,
    required: [true, 'Please add a last name'],
  },
  email: {
    type: String,
    require: [true, 'Please add an email'],
    max: 50,
    unique: true
  },
  password: {
    type: String,
    required: [true, 'Please add a password'],
    min: 6,
  },
  profilePicture: {
    type: String,
    required: [false, 'Please add a profile picture'],
  },
},
{
  timestamps: true
}
);

module.exports = mongoose.model('User', UsersSchema);