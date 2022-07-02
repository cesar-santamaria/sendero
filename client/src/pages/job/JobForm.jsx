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
    calendar: '',
    jobLink: '',
    resume: '',
    contactName: '',
    contactEmail: '',
    details: '',
    status: '',
  })

  const {
    companyName,
    jobTitle,
    salary,
    location,
    calendar,
    jobLink,
    resume,
    contactName,
    contactEmail,
    details,
    status,
  } = formData
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
      calendar,
      jobLink,
      resume,
      contactName,
      contactEmail,
      details,
      status,
    }
    dispatch(createJob(jobData))
    setFormData({
      companyName: '',
      jobTitle: '',
      salary: '',
      location: '',
      calendar: '',
      jobLink: '',
      resume: '',
      contactName: '',
      contactEmail: '',
      details: '',
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
                  <InputLabel>company</InputLabel>
                  <Input
                    name="companyName"
                    label="company"
                    value={companyName}
                    onChange={onChange}
                    required
                  />
                </FormControl>
                <FormControl style={{ marginTop: '20px' }}>
                  <InputLabel>job title</InputLabel>
                  <Input
                    name="jobTitle"
                    label="job title"
                    value={jobTitle}
                    onChange={onChange}
                    required
                  />
                </FormControl>
                <FormControl style={{ marginTop: '20px' }}>
                  <InputLabel>salary</InputLabel>
                  <Input
                    name="salary"
                    label="salary"
                    value={salary}
                    onChange={onChange}
                  />
                </FormControl>
                <FormControl style={{ marginTop: '20px' }}>
                  <InputLabel>location</InputLabel>
                  <Input
                    name="location"
                    label="location"
                    value={location}
                    onChange={onChange}
                  />
                </FormControl>
                <FormControl style={{ marginTop: '20px' }}>
                  <InputLabel>date</InputLabel>
                  <Input
                    name="calendar"
                    label="calendar"
                    value={calendar}
                    onChange={onChange}
                  />
                </FormControl>
                <FormControl style={{ marginTop: '20px' }}>
                  <InputLabel>job link</InputLabel>
                  <Input
                    name="jobLink"
                    label="jobLink"
                    value={jobLink}
                    onChange={onChange}
                  />
                </FormControl>
                <FormControl style={{ marginTop: '20px' }}>
                  <InputLabel>resume</InputLabel>
                  <Input
                    name="resume"
                    label="resume"
                    value={resume}
                    onChange={onChange}
                  />
                </FormControl>
                <FormControl style={{ marginTop: '20px' }}>
                  <InputLabel>contact name</InputLabel>
                  <Input
                    name="contactName"
                    label="contactName"
                    value={contactName}
                    onChange={onChange}
                  />
                </FormControl>
                <FormControl style={{ marginTop: '20px' }}>
                  <InputLabel>contact email</InputLabel>
                  <Input
                    name="contactEmail"
                    label="contactEmail"
                    value={contactEmail}
                    onChange={onChange}
                  />
                </FormControl>
                <FormControl style={{ marginTop: '20px' }}>
                  <InputLabel>details</InputLabel>
                  <Input
                    name="details"
                    label="details"
                    value={details}
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
