import { useState, useEffect } from 'react'
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
import { Link } from 'react-router-dom'
import Theme from '../../components/ui/Theme'

export default function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })

  const { email, password } = formData

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(formData)
  }

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
        <form onSubmit={handleSubmit}>
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
                  name='email'
                  value={email}
                  onChange={onChange}
                />
                <FormControl sx={{ m: 1 }} variant="outlined">
                  <InputLabel htmlFor="outlined-adornment-password" required>
                    Password
                  </InputLabel>
                  <OutlinedInput
                    id="outlined-adornment-password"
                    label="Password"
                    name="password"
                    value={password}
                    onChange={onChange}
                  />
                </FormControl>
                <Button type='submit' variant="contained">Login</Button>
                <Link
                  to="/register"
                  style={{ textAlign: 'center', color: '#39533C' }}
                >
                  Don&apos;t have an account? Register!
                </Link>
              </Stack>
            </FormControl>
          </Box>
        </form>
      </Paper>
    </Box>
  )
}