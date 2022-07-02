import * as React from 'react'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import Modal from '@mui/material/Modal'
import MoreVertRoundedIcon from '@mui/icons-material/MoreVertRounded'
import { IconButton, Button } from '@mui/material'
import Input from '@mui/material/Input'
import InputLabel from '@mui/material/InputLabel'
import InputAdornment from '@mui/material/InputAdornment'
import { useSelector, useDispatch } from 'react-redux'
import { deleteJob } from '../../features/jobs/jobSlice'

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
  const [open, setOpen] = React.useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)
  const dispatch = useDispatch()

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
          <Typography variant="h6" component="h2">
            Edit
          </Typography>
          <form style={{ display: 'flex', justifyContent: 'space-evenly' }}>
            <div style={{ flexDirection: 'row' }}>
              <TextField
                id="standard-basic"
                label="company"
                variant="standard"
                defaultValue={props.company}
                sx={{ mt: 1, mr: 2 }}
              />
              <TextField
                id="standard-basic"
                label="job title"
                variant="standard"
                defaultValue={props.jobTitle}
                sx={{ mt: 1, mr: 2 }}
              />
              <div
                style={{
                  display: 'flex',
                  marginTop: '5px',
                }}
              >
                <TextField
                  sx={{ mt: 1, mr: 2, width: '100px' }}
                  id="standard-adornment-amount"
                  label="salary"
                  variant="standard"
                  defaultValue={props.salary}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">$</InputAdornment>
                    ),
                  }}
                />
                <TextField
                  id="standard-basic"
                  label="location"
                  variant="standard"
                  defaultValue={props.location}
                  sx={{ mt: 1, mr: 2, width: '100px' }}
                />
                <TextField
                  id="standard-basic"
                  label="date"
                  variant="standard"
                  defaultValue={new Date(props.calendar).toLocaleString(
                    'en-US',
                    { dateStyle: 'medium' }
                  )}
                  sx={{ mt: 1, mr: 2, width: '100px' }}
                />
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
                  label="job link"
                  variant="standard"
                  defaultValue={props.jobLink}
                  sx={{ mt: 1, mr: 2 }}
                />
                <TextField
                  id="standard-basic"
                  label="resume link"
                  variant="standard"
                  defaultValue={props.resume}
                  sx={{ mt: 1, mr: 2 }}
                />
              </div>
              <TextField
                id="standard-basic"
                label="contact name"
                variant="standard"
                defaultValue={props.contactName}
                sx={{ mt: 1, mr: 2 }}
              />
              <TextField
                id="standard-basic"
                label="contact email"
                variant="standard"
                defaultValue={props.contactEmail}
                sx={{ mt: 1, mr: 2 }}
              />
              <TextField
                id="standard-basic"
                label="details"
                variant="standard"
                multiline
                fullWidth
                maxRows={4}
                defaultValue={props.details}
                sx={{ mt: 1, mr: 2 }}
              />
              <div style={{ marginTop: '20px', display:'flex' ,justifyContent:'space-evenly' }}>
                <Button
                  sx={{
                    width: '45%',
                    border: '1px solid #7E3D46',
                    '&:hover': {
                      color: '#fff',
                      backgroundColor: '#7E3D46',
                    },
                  }}
                  onClick={() => (dispatch(deleteJob(props.id)))}
                >
                  Delete
                </Button>
                <Button sx={{
                    width: '45%',
                    border: '1px solid #475541',
                    '&:hover': {
                      color: '#fff',
                      backgroundColor: '#475541',
                    },
                  }}>Save</Button>
              </div>
            </div>
          </form>
        </Box>
      </Modal>
    </div>
  )
}
