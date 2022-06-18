import React from 'react'
import {
  Box,
  Paper,
  TextField,
  FormControl,
  Stack,
  Button,
  InputLabel,
  OutlinedInput,
  
} from '@mui/material'
import Theme from '../../components/ui/Theme'

export default function Register() {

  return (
    <Box
      sx={{
        display: 'flex',
        minHeight: '90vh',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Paper
        sx={{
          width: 'auto',
          height: 'auto',
        }}
        elevation={5}
      >
        <Box
          style={{
            display: 'flex',
            justifyContent: 'center',
            backgroundColor: Theme.palette.common.black,
            padding: '50px',
          }}
        >
          <img src="img/sendero_logo.png" alt="" style={{ width: '240px' }} />
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            '& > :not(style)': { m: 3 },
          }}
        >
          <FormControl>
            <Stack spacing={1.5}>
              <TextField
                id="outlined-basic"
                required
                label="First name"
                variant="outlined"
              />
              <TextField
                id="outlined-basic"
                required
                label="Last name"
                variant="outlined"
              />
              <FormControl sx={{ m: 1}} variant="outlined">
                <InputLabel htmlFor="outlined-adornment-password">
                  Password
                </InputLabel>
                <OutlinedInput
                  id="outlined-adornment-password"
                  label="Password"
                />
              </FormControl>
              <FormControl sx={{ m: 1}} variant="outlined">
                <InputLabel htmlFor="outlined-adornment-password">
                  Password Confirmation
                </InputLabel>
                <OutlinedInput
                  id="outlined-adornment-password"
                  label="Password Confirmation"
                />
              </FormControl>
              <Button variant="contained">Register</Button>
            </Stack>
          </FormControl>
        </Box>
      </Paper>
    </Box>
  )
}
