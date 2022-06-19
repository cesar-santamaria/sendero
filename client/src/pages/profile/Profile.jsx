import React from 'react'
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

import Theme from '../../components/ui/Theme'

export default function Profile() {
  return (
    <Container
    maxWidth="md"
    sx={{
      display:"flex",
      height:"100vh",
      width: "50%",
      justifyContent: "center",
      alignItems:"center"
    }}
    >
      <Paper style={{ padding: '50px'}}>
        <Grid container>
          <Grid item xs={12} lg>
            <Box display="flex" flexDirection="column" p={2}>
              <Avatar
                src={`img/profile/c_profile.jpeg`}
                alt="user initials"
                sx={{ width: 100, height: 100 }}
              />
              <Typography
                variant="h5"
                style={{ marginTop: '5px', fontWeight: '400' }}
              >
                {' '}
                Cesar Santamaria{' '}
              </Typography>
              <Typography
                variant="h6"
                style={{ marginTop: '15px', fontWeight: '400' }}
              >
                {' '}
                Active Since{' '}
              </Typography>
              <Typography variant="body1"> 15/06/2022 </Typography>
              <Typography
                variant="h6"
                style={{ marginTop: '15px', fontWeight: '400' }}
              >
                {' '}
                Total Number of Jobs{' '}
              </Typography>
              <Typography variant="body1"> 10 </Typography>
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
                  value="Cesar"
                  style={{ marginBottom: '10px' }}
                />
              </FormControl>
              <FormControl>
                <TextField
                  label="Last Name"
                  value="Santa"
                  style={{ marginBottom: '10px' }}
                />
              </FormControl>
              <FormControl>
                <TextField
                  label="Email"
                  value="ces@gmail.com"
                  style={{ marginBottom: '10px' }}
                />
              </FormControl>
              <Typography variant="h4">Password</Typography>
              <FormControl>
                <InputLabel>Password</InputLabel>
                <Input label="Password" />
              </FormControl>
              <FormControl style={{marginTop: '10px'}}>
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
