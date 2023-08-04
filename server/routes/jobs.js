const router = require('express').Router();
const Job = require('../models/Job');
const { protect } = require('../middleware/auth');
const User = require('../models/User');

// GET
/* 
Desc: Get all jobs
Route: /api/jobs
access: Private
 */

router.get('/', protect ,async (req, res) => {
  const jobs = await Job.find({ user: req.user.id });
  if (!jobs) {
    res.status(400);
    throw new Error("No jobs found");
  }
  res.status(200).json(jobs)
});

// POST
/* 
Desc: Create new job
Route: /api/jobs
access: Private
 */

router.post('/', protect ,async (req, res) => {
  if (!req.body.companyName) {
    res.status(400)
    throw new Error();
  }
  try{
    const job = await Job.create({
      companyName: req.body.companyName,
      jobTitle: req.body.jobTitle,
      salary: req.body.salary,
      status: req.body.status,
      location: req.body.location,
      jobLink: req.body.jobLink,
      calendar: req.body.calendar,
      details: req.body.details,
      contactName: req.body.contactName,
      contactEmail: req.body.contactEmail,
      resume: req.body.resume,
      user: req.user.id,
    })
    res.status(200).json(job)
  } catch(error) {
    console.log("!!KJ!HKJ",req.user.id)
    console.log("ERROR:", error)
  }
});

// PUT
/* 
Desc: Update existing job
Route: /api/jobs/:id
access: Private
 */

router.put('/:id', protect ,async (req, res) => {
  const job = await Job.findById(req.params.id);

  if (!job) {
    res.status(400)
    throw new Error("Job not found")
  }


  if (!req.user) {
    res.status(401)
    throw new Error("User not found")
  }
  // Make sure the logged user matches the goal user
  if (job.user.toString() !== req.user.id) {
    res.status(401)
    throw new Error("User not authorized")
  }
  const updatedJob = await Job.findByIdAndUpdate(req.params.id, req.body, {new: true})
  res.status(200).json(updatedJob)
});

// DELETE
/* 
Desc: Delete existing job
Route: /api/jobs/:id
access: Private 
*/

router.delete('/:id', protect ,async (req, res) => {
  const job = await Job.findByIdAndDelete(req.params.id)
  if (!job) {
    res.status(400)
    throw new Error("Unsuccessful in deleting job")
  }


  if (!req.user) {
    res.status(401)
    throw new Error("User not found")
  }
  // Make sure the logged user matches the goal user
  if (job.user.toString() !== req.user.id) {
    res.status(401)
    throw new Error("User not authorized")
  }
  
  res.status(200).json({id: req.params.id})
});

module.exports = router