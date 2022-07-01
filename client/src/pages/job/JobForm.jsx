import React, { useState } from 'react'
import {
  Box,
  Typography,
  Grid,
  Container,
  Paper,
  FormControl,
  InputLabel,
  Input,
  Button,
  MenuItem,
} from '@mui/material'
import { useDispatch } from 'react-redux'
import { createJob } from '../../features/jobs/jobSlice'
import Select from '@mui/material/Select'

export default function JobForm() {
  const [formData, setFormData] = useState({
    companyName: '',
    jobTitle: '',
    salary: '',
    location: '',
    status: '',
  })

  const { companyName, jobTitle, salary, location, status } = formData
  const dispatch = useDispatch()

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    const jobData = {
      companyName,
      jobTitle,
      salary,
      location,
      status,
    }
    dispatch(createJob(jobData))
    setFormData({
      companyName: '',
      jobTitle: '',
      salary: '',
      location: '',
      status: '',
    })
  }
  return (
    <Container
      maxWidth="md"
      sx={{
        display: 'flex',
        height: '100vh',
        width: '50%',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Paper style={{ padding: '30px' }}>
        <Grid container>
          <Grid item xs={12} md={12}>
            <Box display="flex" flexDirection="column" flexGrow={1} p={2}>
              <Typography variant="h4" style={{ marginBottom: '20px' }}>
                Add a job
              </Typography>
              <form onSubmit={handleSubmit}>
                <FormControl style={{ marginTop: '20px' }}>
                  <InputLabel>Company</InputLabel>
                  <Input
                    name="companyName"
                    label="Company"
                    value={companyName}
                    onChange={onChange}
                    required
                  />
                </FormControl>
                <FormControl style={{ marginTop: '20px' }}>
                  <InputLabel>Job Title</InputLabel>
                  <Input
                    name="jobTitle"
                    label="Job Title"
                    value={jobTitle}
                    onChange={onChange}
                    required
                  />
                </FormControl>
                <FormControl style={{ marginTop: '20px' }}>
                  <InputLabel>Salary</InputLabel>
                  <Input
                    name="salary"
                    label="Salary"
                    value={salary}
                    onChange={onChange}
                  />
                </FormControl>
                <FormControl style={{ marginTop: '20px' }}>
                  <InputLabel>Location</InputLabel>
                  <Input
                    name="location"
                    label="Location"
                    value={location}
                    onChange={onChange}
                  />
                </FormControl>
                <FormControl
                  variant="standard"
                  fullWidth
                  style={{ marginTop: '20px' }}
                >
                  <InputLabel>Status</InputLabel>
                  <Select
                    value={status}
                    name="status"
                    label="Status"
                    defaultValue="status"
                    onChange={onChange}
                    required
                  >
                    <MenuItem value={'interested'}>Interested</MenuItem>
                    <MenuItem value={'applied'}>Applied</MenuItem>
                    <MenuItem value={'interview'}>Interview</MenuItem>
                    <MenuItem value={'offer'}>Offer</MenuItem>
                    <MenuItem value={'rejected'}>Rejected</MenuItem>
                  </Select>
                </FormControl>
                <Button
                  variant="contained"
                  color="primary"
                  style={{ marginTop: '25px', color: 'white' }}
                  type="submit"
                  fullWidth
                >
                  Save
                </Button>
              </form>
            </Box>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  )
}
