import axios from 'axios'

const API_URL = '/api/jobs/'

// create new job
const createJob = async (jobData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.post(API_URL, jobData, config)

  return response.data
}

// get user jobs
const getJobs = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.get(API_URL, config)

  return response.data
}

export const jobService = {
  createJob,
  getJobs,
}

export default jobService
