const mongoose = require('mongoose');

const JobsSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User',
  },
  companyName: {
    type: String,
    required: true,
  },
  jobTitle: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
  salary: {
    type: String,
    required: false,
  },
  location: {
    type: String,
    required: false,
  },
  jobLink: {
    type: String,
    required: false,
  },
  calendar: {
    type: Date,
    required: false,
  },
  details: {
    type: String,
    required: false,
  },
  contactName: {
    type: String,
    required: false,
  },
  contactEmail: {
    type: String,
    required: false,
  },
  resume: {
    type: String,
    required: false,
  },
},
{
  timestamps: true
}
);

module.exports = mongoose.model('Job', JobsSchema);