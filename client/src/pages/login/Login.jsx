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
import { Link } from 'react-router-dom'

export default function Login() {
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
            padding: '20px 50px',
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
                label="Email"
                variant="outlined"
              />
              <FormControl sx={{ m: 1 }} variant="outlined">
                <InputLabel htmlFor="outlined-adornment-password" required>
                  Password
                </InputLabel>
                <OutlinedInput
                  id="outlined-adornment-password"
                  label="Password"
                />
              </FormControl>
              <Button variant="contained">Login</Button>
              <Link
                to="/register"
                style={{ textAlign: 'center', color: '#577590' }}
              >
                Don&apos;t have an account? Register!
              </Link>
            </Stack>
          </FormControl>
        </Box>
      </Paper>
    </Box>
  )
}
