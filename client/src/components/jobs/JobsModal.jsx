import { useState } from 'react'
import { useDispatch } from 'react-redux'
import {
  Box,
  TextField,
  Typography,
  Modal,
  IconButton,
  Button,
  FormControl,
  MenuItem,
  Input,
  InputLabel,
  InputAdornment,
  Select,
  Stack
} from '@mui/material'
import MoreVertRoundedIcon from '@mui/icons-material/MoreVertRounded'
import { deleteJob, editJob } from '../../features/jobs/jobSlice'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  borderRadius: '3px',
  boxShadow: 24,
  p: 3,
}

export default function JobsModal(props) {
  const [open, setOpen] = useState(false)
  const [formData, setFormData] = useState({
    companyName: props.company || '',
    jobTitle: props.jobTitle || '',
    salary: props.salary || '',
    location: props.location || '',
    calendar: props.calendar || '',
    jobLink: props.jobLink || '',
    resume: props.resume || '',
    contactName: props.contactName || '',
    contactEmail: props.contactEmail || '',
    details: props.details || '',
    status: props.status || '',
  })
  const [value, setValue] = useState(new Date(Date.now()));

  const handleChange = (newValue) => {
    setValue(newValue);
  };

  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)
  const dispatch = useDispatch()
  const {
    companyName,
    jobTitle,
    salary,
    location,
    jobLink,
    calendar,
    resume,
    contactEmail,
    contactName,
    details,
    status,
  } = formData

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
    dispatch(editJob({ id: props.id, jobData }))
    console.log({ id: props.id, jobData })
  }

  return (
    <div>
      <IconButton onClick={handleOpen}>
        <MoreVertRoundedIcon fontSize="small" />
      </IconButton>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography variant="h5">Edit</Typography>
          <hr />
          <form
            style={{ display: 'flex', justifyContent: 'space-evenly' }}
            onSubmit={handleSubmit}
          >
            <div style={{ flexDirection: 'row' }}>
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
              <div
                style={{
                  marginTop: '20px',
                  display: 'flex',
                  justifyContent: 'space-evenly',
                }}
              >
                <Button
                  sx={{
                    width: '45%',
                    border: '1px solid #932E2E',
                    '&:hover': {
                      color: '#fff',
                      backgroundColor: '#932E2E',
                    },
                  }}
                  onClick={() => dispatch(deleteJob(props.id))}
                >
                  Delete
                </Button>
                <Button
                  type="submit"
                  sx={{
                    width: '45%',
                    border: '1px solid #475541',
                    '&:hover': {
                      color: '#fff',
                      backgroundColor: '#475541',
                    },
                  }}
                >
                  Save
                </Button>
              </div>
            </div>
          </form>
        </Box>
      </Modal>
    </div>
  )
}
