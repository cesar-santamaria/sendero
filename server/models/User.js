const mongoose = require('mongoose');

const UsersSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
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
    min: 6,
  },
},
{
  timestamps: true
}
);

module.exports = mongoose.model('User', UsersSchema);