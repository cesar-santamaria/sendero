import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate, Link } from 'react-router-dom'
import {
  Box,
  Paper,
  TextField,
  FormControl,
  Stack,
  Button,
  InputLabel,
  OutlinedInput,
  Grow,
  LinearProgress,
  InputAdornment,
  IconButton,
} from '@mui/material'
import { Visibility, VisibilityOff } from '@mui/icons-material'
import { login, reset } from '../../features/auth/authSlice'
import { toast } from 'react-toastify'
import Theme from '../../components/ui/Theme'

import Wave from 'react-wavify'

export default function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    showPassword: false,
  })

  const { email, password, showPassword } = formData

  const handleShowPassword = () => {
    setFormData({
      ...formData,
      showPassword: !showPassword,
    })
  }

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { user, isLoading, isSuccess, isError, message } = useSelector(
    (state) => state.auth
  )

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const userData = {
      email,
      password,
    }
    dispatch(login(userData))
  }

  useEffect(() => {
    if (isError) {
      toast.error(message)
    }
    if (isSuccess || user) {
      navigate('/')
    }
    dispatch(reset())
  }, [user, isError, isSuccess, message, navigate, dispatch])

  return (
    <>
      <Grow in={true} {...{ timeout: 1000 }}>
        <Box
          sx={{
            display: 'flex',
            minHeight: '78vh',
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
              <img
                src="img/sendero_logo.png"
                alt=""
                style={{ width: '240px' }}
              />
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
                      name="email"
                      value={email}
                      onChange={onChange}
                    />
                    <FormControl sx={{ m: 1 }} variant="outlined">
                      <InputLabel
                        htmlFor="outlined-adornment-password"
                        required
                      >
                        Password
                      </InputLabel>
                      <OutlinedInput
                        id="outlined-adornment-password"
                        type={showPassword ? 'text' : 'password'}
                        label="Password"
                        name="password"
                        value={password}
                        onChange={onChange}
                        endAdornment={
                          <InputAdornment position="end">
                            <IconButton
                              aria-label="toggle password visibility"
                              onClick={handleShowPassword}
                              edge="end"
                            >
                              {showPassword ? (
                                <Visibility />
                              ) : (
                                <VisibilityOff />
                              )}
                            </IconButton>
                          </InputAdornment>
                        }
                      />
                    </FormControl>
                    <Button type="submit" variant="contained">
                      Login
                    </Button>
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
            {isLoading && <LinearProgress />}
          </Paper>
        </Box>
      </Grow>
    </>
  )
}
