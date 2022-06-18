const mongoose = require('mongoose');

const UsersSchema = new Schema({
  firstName: {
    type: String,
    require: true,
  },
  lastName: {
    type: String,
    require: true,
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
  timestamps: {
    createdAt: 'created_at', // Use `created_at` to store the created date
    updatedAt: 'updated_at' // and `updated_at` to store the last updated date
  }
});

module.exports = mongoose.model('User', UsersSchema);