import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  Box,
  Typography,
  Grid,
  Container,
  Paper,
  FormControl,
  InputLabel,
  Button,
  MenuItem,
  Select,
  Snackbar,
  Alert,
  Stack,
  TextField,
  InputAdornment,
  Avatar
} from '@mui/material'
import axios from 'axios'
import { createJob } from '../../features/jobs/jobSlice'
import { reset } from '../../features/auth/authSlice'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';



export default function JobForm() {
  const [open, setOpen] = useState(false)
  const [logo, setLogo] = useState("img/sendero_job_icon.png" || "")
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
  const [value, setValue] = useState(new Date(Date.now()));

  const handleChange = (newValue) => {
    setValue(newValue);
  };

  const { jobs } = useSelector(
    (state) => {
      return state.jobs
    }
  )

  const {
    companyName,
    jobTitle,
    salary,
    location,
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

  const handleClose = () => {
    setOpen(false)
  }

  const handleOpenSnackBar = () => {
    console.log(jobs)
    dispatch(reset())
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const jobData = {
      companyName,
      jobTitle,
      salary,
      location,
      calendar: value,
      jobLink,
      resume,
      contactName,
      contactEmail,
      details,
      status,
    }
    setOpen(true)
    dispatch(createJob(jobData))
    setFormData({
      companyName: '',
      jobTitle: '',
      salary: '',
      location: '',
      calendar : '',
      jobLink: '',
      resume: '',
      contactName: '',
      contactEmail: '',
      details: '',
      status: '',
    })
  }

  useEffect(() => {
    async function fetchLogo() {
      if (companyName.length > 0) {
        try {
          const result = await axios.get(
            `https://autocomplete.clearbit.com/v1/companies/suggest?query=${companyName}`
          )
          setLogo(result.data[0].logo)
        } catch (err) {
          setLogo('img/sendero_job_icon.png')
        }
      }
    }
    fetchLogo()
  }, [companyName])

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
              <div style={{ flexDirection: 'row' }}>
              <Avatar src={logo} />
              <TextField
                id="standard-basic"
                name="companyName"
                label="company"
                variant="standard"
                value={companyName}
                onChange={onChange}
                sx={{ mt: 1, mr: 2 }}
              />
              <TextField
                id="standard-basic"
                name="jobTitle"
                label="job title"
                variant="standard"
                value={jobTitle}
                onChange={onChange}
                sx={{ mt: 1, mr: 2 }}
              />
              <div
                style={{
                  display: 'flex',
                  marginTop: '15px',
                }}
              >
                <TextField
                  sx={{ mt: 1, mr: 2, width: '100px' }}
                  id="standard-adornment-amount"
                  name="salary"
                  label="salary"
                  variant="standard"
                  value={salary}
                  onChange={onChange}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">$</InputAdornment>
                    ),
                  }}
                />
                <TextField
                  id="standard-basic"
                  name="location"
                  label="location"
                  variant="standard"
                  value={location}
                  onChange={onChange}
                  sx={{ mt: 1, mr: 2, width: '100px' }}
                />
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <Stack spacing={1}>
                    <DesktopDatePicker
                      label='calendar'
                      name='calendar'
                      inputFormat='MM/dd/yy'
                      value={value}
                      onChange={handleChange}
                      renderInput={(params)=> <TextField {...params} style={{width:'135px'}}/>}
                    />
                  </Stack>
                </LocalizationProvider>
              </div>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  margin: '15px 0',
                }}
              >
                <TextField
                  id="standard-basic"
                  name="jobLink"
                  label="job link"
                  variant="standard"
                  value={jobLink}
                  onChange={onChange}
                  sx={{ mt: 1, mr: 2 }}
                />
                <TextField
                  id="standard-basic"
                  name="resume"
                  label="resume link"
                  variant="standard"
                  value={resume}
                  onChange={onChange}
                  sx={{ mt: 1, mr: 2 }}
                />
              </div>
              <TextField
                id="standard-basic"
                name="contactName"
                label="contact name"
                variant="standard"
                value={contactName}
                onChange={onChange}
                sx={{ mt: 1, mr: 2 }}
              />
              <TextField
                id="standard-basic"
                name="contactEmail"
                label="contact email"
                variant="standard"
                value={contactEmail}
                onChange={onChange}
                sx={{ mt: 1, mr: 2 }}
              />
              <TextField
                id="standard-basic"
                name="details"
                label="details"
                variant="standard"
                multiline
                fullWidth
                maxRows={4}
                value={details}
                onChange={onChange}
                sx={{ mt: 1, mr: 2 }}
              />
              <FormControl
                variant="standard"
                fullWidth
                style={{ marginTop: '20px' }}
              >
                <InputLabel>status</InputLabel>
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
              </div>
                <Button
                  variant="contained"
                  style={{ marginTop: '25px', color: 'white' }}
                  type="submit"
                  fullWidth
                  onClick={handleOpenSnackBar}
                  sx={{
                    border: '1px solid #475541',
                    '&:hover': {
                      color: '#fff',
                      backgroundColor: '#475541',
                    },
                  }}
                >
                  add job
                </Button>
              </form>
            </Box>
            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
              <Alert onClose={handleClose} severity="success">
                Job added succesfully
              </Alert>
            </Snackbar>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  )
}
