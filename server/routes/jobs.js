const Job = require('../models/Job');
const router = require('express').Router();

// GET
/* 
Desc: Get all jobs
Route: /api/jobs
access: Private
 */

router.get('/', async (req, res) => {
  const jobs = await Job.find();
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

router.post('/', async (req, res) => {
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
    })
    res.status(200).json(job)
  } catch(error) {
    console.log("ERROR:", error)
  }
});

// PUT
/* 
Desc: Update existing job
Route: /api/jobs/:id
access: Private
 */

router.put('/:id', async (req, res) => {
  const job = await Job.findById(req.params.id);

  if (!job) {
    res.status(400)
    throw new Error("Job not found")
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

router.delete('/:id', async (req, res) => {
  const job = await Job.findByIdAndDelete(req.params.id)
  if (!job) {
    res.status(400)
    throw new Error("Unsuccessful in deleting job")
  }
  res.status(200).json({id: req.params.id})
});

module.exports = router