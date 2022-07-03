import {useState,useEffect}from 'react'
import {
  Box,
  Typography,
  Grid,
  Container,
  Paper,
  Avatar,
  FormControl,
  TextField,
  InputLabel,
  Input,
  Button,
} from '@mui/material'
import { useSelector, useDispatch } from 'react-redux'
import { jobsSelector } from '../../features/jobs/jobSlice'
import { getJob } from '../../features/jobs/jobSlice'

export default function Profile() {
  const { user } = useSelector((state) => state.auth)
  const { jobs } = useSelector(jobsSelector);
  const dispatch = useDispatch()
  
  console.log(jobs.length)
  console.log(user)
  
  useEffect(()=> {
    dispatch(getJob())
  },[getJob])
  
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
      <Paper style={{ padding: '50px' }}>
        <Grid container>
          <Grid item xs={12} lg>
            <Box display="flex" flexDirection="column" p={2}>
              <Avatar
                alt="user initials"
                sx={{ bgcolor: '#475541', width: 80, height: 80 }}
              >
                <Typography variant='h4'>{`${user.firstName.slice(0,1)} ${user.lastName.slice(0,1)}`}</Typography>
              </Avatar>
              <Typography
                variant="h5"
                style={{ marginTop: '5px', fontWeight: '400' }}
              >
                { `${user.firstName} ${user.lastName}` }
              </Typography>
              <Typography
                variant="h6"
                style={{ marginTop: '15px', fontWeight: '400' }}
              >
                {' '}
                Active Since{' '}
              </Typography>
              <Typography variant="body1">  </Typography>
              <Typography
                variant="h6"
                style={{ marginTop: '15px', fontWeight: '400' }}
              >
                {' '}
                Total Number of Jobs{' '}
              </Typography>
              <Typography variant="body1"> {jobs.length} </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={8}>
            <Box display="flex" flexDirection="column" flexGrow={1} p={2}>
              <Typography variant="h4" style={{ marginTop: '-5px' }}>
                Personal Information
              </Typography>
              <FormControl>
                <TextField
                  label="First Name"
                  value={user.firstName}
                  style={{ marginBottom: '10px' }}
                />
              </FormControl>
              <FormControl>
                <TextField
                  label="Last Name"
                  value={user.lastName}
                  style={{ marginBottom: '10px' }}
                />
              </FormControl>
              <FormControl>
                <TextField
                  label="Email"
                  value={user.email}
                  style={{ marginBottom: '10px' }}
                />
              </FormControl>
              <Typography variant="h4">Password</Typography>
              <FormControl>
                <InputLabel>Password</InputLabel>
                <Input label="Password" />
              </FormControl>
              <FormControl style={{ marginTop: '10px' }}>
                <InputLabel>Password Confirmation</InputLabel>
                <Input label="Password Confirmation" />
              </FormControl>
              <Button
                variant="contained"
                color="primary"
                style={{ marginTop: '25px', color: 'white' }}
              >
                Confirm Changes
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  )
}
