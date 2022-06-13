import React from 'react'
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { navbarItems } from './consts/navbarItems';


const drawerWidth = 240;

export default function Navbar() {
  return (
    <Drawer
    sx={{
      width: drawerWidth,
      flexShrink: 0,
      '& .MuiDrawer-paper': {
        width: drawerWidth,
        boxSizing: 'border-box',
        color: "#fff",
        backgroundColor: "#1F2021"
      },
    }}
    variant="permanent"
    anchor="left"
  >
    <div 
      style={{
      display:'flex',
      justifyContent: 'center',
      padding:'32px 0'
      }}
    >
      <img 
      src="img/sendero.png" 
      style={{
        width: "32px", 
        display: 'flex',
        alignItems: 'center',
        justifyContent:'center'
      }}
      />
    </div>
    <Divider style={{backgroundColor: "#fff"}}/>
    <List>
      {navbarItems.map((text, index) => (
        <ListItem key={text.id} disablePadding>
          <ListItemButton>
            <ListItemIcon sx={{color: "#fff"}}>
              {text.icon}
            </ListItemIcon>
            <ListItemText primary={text.label} />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  </Drawer>
  )
}
