import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import {
  styled,
  List,
  Divider,
  IconButton,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material'
import MuiDrawer from '@mui/material/Drawer'

import DashboardCustomizeRoundedIcon from '@mui/icons-material/DashboardCustomizeRounded'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import BarChartIcon from '@mui/icons-material/BarChart'
import AddBoxIcon from '@mui/icons-material/AddBox'
import EventIcon from '@mui/icons-material/Event'
import LogoutIcon from '@mui/icons-material/Logout'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'

import { logout, reset } from '../../features/auth/authSlice'

import Theme from '../ui/Theme'

const drawerWidth = 170

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
})

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
})

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}))

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: 'nowrap',
  boxSizing: 'border-box',
  ...(open && {
    ...openedMixin(theme),
    '& .MuiDrawer-paper': openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    '& .MuiDrawer-paper': closedMixin(theme),
  }),
}))

export default function MiniDrawer() {
  const [open, setOpen] = useState(false)
  const dispatch = useDispatch()

  const navigate = useNavigate()

  const handleDrawerOpen = () => {
    setOpen(true)
  }

  const handleDrawerClose = () => {
    setOpen(false)
  }

  const handleLogout = () => {
    dispatch(logout())
    dispatch(reset())
    navigate('/login')
  }

  return (
    <Drawer
      variant="permanent"
      sx={{
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          boxSizing: 'border-box',
          backgroundColor: Theme.palette.common.black,
        },
      }}
      open={open}
      color="primary"
    >
      <img
        height="auto"
        src="img/sendero_icon.svg"
        alt="sendero logo"
        style={{
          display: 'flex',
          justifyContent: 'center',
          marginTop: '15px',
          height: '50px',
          width: '100%',
        }}
      />
      <DrawerHeader
        style={{ display: 'flex', justifyContent: 'center', marginTop: '25px' }}
      >
        {open === true ? (
          <IconButton onClick={handleDrawerClose}>
            {' '}
            <ChevronLeftIcon sx={{ color: '#fff' }} />
          </IconButton>
        ) : (
          <IconButton onClick={handleDrawerOpen}>
            <ChevronRightIcon sx={{ color: '#fff' }} />
          </IconButton>
        )}
      </DrawerHeader>
      <Divider style={{ backgroundColor: '#F7FBFF' }} />
      <Divider />
      <List>
        <ListItem disablePadding sx={{ display: 'block' }}>
          <ListItemButton
            sx={{
              minHeight: 48,
              justifyContent: open ? 'initial' : 'center',
              px: 2,
            }}
            onClick={() => navigate('/')}
          >
            <ListItemIcon
              sx={{
                minWidth: 0,
                mr: open ? 3 : 'auto',
                justifyContent: 'center',
                color: '#fff',
              }}
            >
              <DashboardCustomizeRoundedIcon />
            </ListItemIcon>
            <ListItemText
              primary={'Dashboard'}
              sx={{ opacity: open ? 1 : 0, color: '#fff' }}
            />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding sx={{ display: 'block' }}>
          <ListItemButton
            sx={{
              minHeight: 48,
              justifyContent: open ? 'initial' : 'center',
              px: 2,
            }}
            onClick={() => navigate('/profile')}
          >
            <ListItemIcon
              sx={{
                minWidth: 0,
                mr: open ? 3 : 'auto',
                justifyContent: 'center',
                color: '#fff',
              }}
            >
              <AccountCircleIcon />
            </ListItemIcon>
            <ListItemText
              primary={'Profile'}
              sx={{ opacity: open ? 1 : 0, color: '#fff' }}
            />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding sx={{ display: 'block' }}>
          <ListItemButton
            sx={{
              minHeight: 48,
              justifyContent: open ? 'initial' : 'center',
              px: 2,
            }}
            onClick={() => navigate('/stats')}
          >
            <ListItemIcon
              sx={{
                minWidth: 0,
                mr: open ? 3 : 'auto',
                justifyContent: 'center',
                color: '#fff',
              }}
            >
              <BarChartIcon />
            </ListItemIcon>
            <ListItemText
              primary={'Stats'}
              sx={{ opacity: open ? 1 : 0, color: '#fff' }}
            />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding sx={{ display: 'block' }}>
          <ListItemButton
            sx={{
              minHeight: 48,
              justifyContent: open ? 'initial' : 'center',
              px: 2,
            }}
            onClick={() => navigate('/job-form')}
          >
            <ListItemIcon
              sx={{
                minWidth: 0,
                mr: open ? 3 : 'auto',
                justifyContent: 'center',
                color: '#fff',
              }}
            >
              <AddBoxIcon />
            </ListItemIcon>
            <ListItemText
              primary={'Add job'}
              sx={{ opacity: open ? 1 : 0, color: '#fff' }}
            />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding sx={{ display: 'block' }}>
          <ListItemButton
            sx={{
              minHeight: 48,
              justifyContent: open ? 'initial' : 'center',
              px: 2,
            }}
            onClick={() => navigate('/job-form')}
          >
            <ListItemIcon
              sx={{
                minWidth: 0,
                mr: open ? 3 : 'auto',
                justifyContent: 'center',
                color: '#fff',
              }}
              onClick={() => {
                window.open(
                  'https://calendar.google.com/calendar/u/0/r',
                  '_blank'
                )
              }}
            >
              <EventIcon />
            </ListItemIcon>
            <ListItemText
              primary={'Calendar'}
              sx={{ opacity: open ? 1 : 0, color: '#fff' }}
            />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding sx={{ display: 'block' }}>
          <ListItemButton
            sx={{
              minHeight: 48,
              justifyContent: open ? 'initial' : 'center',
              px: 2,
              marginTop: '200px'
            }}
            onClick={() => navigate('/job-form')}
          >
            <ListItemIcon
              sx={{
                minWidth: 0,
                mr: open ? 3 : 'auto',
                justifyContent: 'center',
                color: '#fff',
              }}
              onClick={handleLogout}
            >
              <LogoutIcon />
            </ListItemIcon>
            <ListItemText
              primary={'Logout'}
              sx={{ opacity: open ? 1 : 0, color: '#fff' }}
            />
          </ListItemButton>
        </ListItem>
      </List>
    </Drawer>
  )
}
