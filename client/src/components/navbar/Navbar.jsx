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
} from '@mui/material'
import LogoutIcon from '@mui/icons-material/Logout'
import { navbarItems } from './consts/navbarItems'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { logout, reset } from '../../features/auth/authSlice'
import Theme from '../ui/Theme'

const drawerWidth = 210

export default function Navbar(props) {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const {user} = useSelector((state) => state.auth)

  const handleLogout = () => {
    dispatch(logout())
    dispatch(reset())
    navigate('/login')
  }
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
        <CardMedia
          component="img"
          height="100%"
          width="32px"
          image="img/sendero_icon.svg"
          alt="sendero logo"
        />
      </Box>
      <Divider style={{ backgroundColor: '#F7FBFF' }} />
      <List>
        {navbarItems.map((item, index) => (
          <ListItem key={item.id} onClick={() => navigate(item.path)}>
            <ListItemButton>
              <ListItemIcon sx={{ color: '#fff', padding: '0' }}>
                {item.icon}
              </ListItemIcon>
              <ListItemText primary={item.label}/>
            </ListItemButton>
          </ListItem>
        ))}
        <ListItemButton onClick={handleLogout}>
          <ListItemIcon sx={{ color: '#fff', marginLeft: '20px', marginTop: '80px' }}>
            <LogoutIcon />
            <Typography sx={{ marginLeft: '28px' }}>Logout</Typography>
          </ListItemIcon>
        </ListItemButton>
      </List>
    </Drawer>
  )
}
