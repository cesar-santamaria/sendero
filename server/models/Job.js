const mongoose = require('mongoose');

const JobsSchema = new mongoose.Schema({
  companyName: {
    type: String,
    required: true,
  },
  jobTitle: {
    type: String,
    required: true,
  },
  salary: {
    type: String,
    required: false,
  },
  status: {
    type: String,
    required: true,
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