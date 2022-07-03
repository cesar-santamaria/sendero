import React from 'react'
import {
  Drawer,
  List,
  Divider,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Box,
  CardMedia,
  Typography,
  Modal,
  Button,
} from '@mui/material'
import LogoutIcon from '@mui/icons-material/Logout'
import EventIcon from '@mui/icons-material/Event'
import { navbarItems } from './consts/navbarItems'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { logout, reset } from '../../features/auth/authSlice'
import Theme from '../ui/Theme'
import { Grow } from '@mui/material'

const drawerWidth = 200
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  borderRadius: '3px',
  boxShadow: 15,
  pt: 2,
  px: 4,
  pb: 3,
}

export default function Navbar(props) {
  const [open, setOpen] = React.useState(false)
  const { user } = useSelector((state) => state.auth)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleLogout = () => {
    dispatch(logout())
    dispatch(reset())
    navigate('/login')
  }

  const handleOpen = () => {
    setOpen(true)
  }
  const handleClose = () => {
    setOpen(false)
  }

  /* 
  GOOGLE CALENDAR
  onClick={() => { window.open('https://calendar.google.com/calendar/u/0/r', '_blank'); }}
  */

  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: drawerWidth,
          boxSizing: 'border-box',
          backgroundColor: Theme.palette.common.black,
          color: '#fff',
        },
      }}
      color="primary"
      variant="permanent"
      anchor="left"
    >
      <Box
        style={{
          display: 'flex',
          justifyContent: 'center',
          padding: '32px 80px',
        }}
      >
        <Grow in={true} {...{ timeout: 1500 }}>
          <CardMedia
            component="img"
            width="32px"
            image="img/sendero_icon.svg"
            alt="sendero logo"
          />
        </Grow>
      </Box>
      <Divider style={{ backgroundColor: '#F7FBFF' }} />
      <List>
        {navbarItems.map((item, index) => (
          <ListItem key={item.id} onClick={() => navigate(item.path)}>
            <ListItemButton>
              <ListItemIcon sx={{ color: '#fff', padding: '0' }}>
                {item.icon}
              </ListItemIcon>
              <ListItemText primary={item.label} />
            </ListItemButton>
          </ListItem>
        ))}
        <ListItemButton>
          <ListItemIcon
            sx={{ color: '#fff', marginLeft: '17px', marginTop: '20px' }}
            onClick={() => {
              window.open(
                'https://calendar.google.com/calendar/u/0/r',
                '_blank'
              )
            }}
          >
            <EventIcon />
            <Typography sx={{ marginLeft: '28px' }}>Calendar</Typography>
          </ListItemIcon>
        </ListItemButton>
        <ListItemButton onClick={handleOpen}>
          <ListItemIcon
            sx={{ color: '#fff', marginLeft: '20px', marginTop: '80px' }}
          >
            <LogoutIcon />
            <Typography sx={{ marginLeft: '28px' }}>Logout</Typography>
          </ListItemIcon>
        </ListItemButton>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="child-modal-title"
          aria-describedby="child-modal-description"
        >
          <Box sx={{ ...style, width: 300 }}>
            <Typography
              sx={{ mt: 3 }}
              variant="h5"
              id="child-modal-description"
            >
              Are you sure you want to logout?
            </Typography>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-evenly',
                marginTop: '30px',
              }}
            >
              <Button
                onClick={handleClose}
                sx={{
                  width: '40%',
                  border: '1px solid #932E2E',
                  '&:hover': {
                    color: '#fff',
                    backgroundColor: '#932E2E',
                  },
                }}
              >
                cancel
              </Button>
              <Button
                onClick={handleLogout}
                type="submit"
                sx={{
                  width: '40%',
                  border: '1px solid #475541',
                  '&:hover': {
                    color: '#fff',
                    backgroundColor: '#475541',
                  },
                }}
              >
                yes
              </Button>
            </div>
          </Box>
        </Modal>
      </List>
    </Drawer>
  )
}
