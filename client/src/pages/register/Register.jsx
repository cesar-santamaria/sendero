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
import { register, reset } from '../../features/auth/authSlice'
import {toast} from 'react-toastify'
import Theme from '../../components/ui/Theme'


export default function Register() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    passwordConfirm: '',
    showPassword: false,
  })

  const { firstName, lastName, email, password, passwordConfirm, showPassword } = formData

  const navigate = useNavigate()
  const dispatch = useDispatch()
  const {user, isLoading, isSuccess, isError, message} = useSelector((state) => state.auth)

  useEffect(() => {
    if (isError) {
      toast.error(message)
    }
    if (isSuccess || user) {
      navigate('/')
    }

    dispatch(reset())
  }, [user, isError, isSuccess, message, navigate, dispatch])

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }

  const handleShowPassword = () => {
    setFormData({
      ...formData,
      showPassword: !showPassword,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if(password !== passwordConfirm){
      toast.error('Passwords do not match')
    } else {
      const userData = {
        firstName,
        lastName,
        email,
        password,
      }
      dispatch(register(userData))
    }
  }

  return (
    <Grow in={true} {...{ timeout: 1000 }}>
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
            padding: '0 50px',
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
                  label="First name"
                  variant="outlined"
                  name="firstName"
                  value={firstName}
                  onChange={onChange}
                />
                <TextField
                  id="outlined-basic"
                  required
                  label="Last name"
                  variant="outlined"
                  name="lastName"
                  value={lastName}
                  onChange={onChange}
                />
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
                  <InputLabel htmlFor="outlined-adornment-password" required>
                    Password
                  </InputLabel>
                  <OutlinedInput
                    id="outlined-adornment-password"
                    type={showPassword ? 'text' : 'password'}
                    name="password"
                    label="Password"
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
                <FormControl sx={{ m: 1 }} variant="outlined">
                  <InputLabel htmlFor="outlined-adornment-password" required>
                    Password Confirmation
                  </InputLabel>
                  <OutlinedInput
                    id="outlined-adornment-password"
                    type={showPassword ? 'text' : 'password'}
                    name="passwordConfirm"
                    label="Password Confirmation"
                    value={passwordConfirm}
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
                  Register
                </Button>
                <Link
                  to="/login"
                  style={{ textAlign: 'center', color: '#39533C' }}
                >
                  Already have an account? Login!
                </Link>
              </Stack>
            </FormControl>
          </Box>
        </form>
        {isLoading && <LinearProgress/>}
      </Paper>
    </Box>
    </Grow>
  )
}
