import React from 'react'
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { navbarItems } from './consts/navbarItems';
import { useNavigate } from "react-router-dom";



const drawerWidth = 210;


export default function Navbar() {
  const navigate = useNavigate();

  return (
  <Drawer
    sx={{ width: drawerWidth, flexShrink: 0, '& .MuiDrawer-paper': { width: drawerWidth,boxSizing: 'border-box', color: "#fff", backgroundColor: "#1F2021"} }} variant="permanent" anchor="left">
    <div style={{ display:'flex', justifyContent: 'center', padding:'32px 0'}}>
      <img src="img/sendero.png" alt='sendero logo' style={{ width: "32px",height: '100%', display: 'flex' }} />
    </div>
    <Divider style={{backgroundColor: "#fff"}}/>
    <List>
      {navbarItems.map((item, index) => (
        <ListItem key={item.id} onClick={()=>navigate(item.path)}>
          <ListItemButton>
            <ListItemIcon sx={{color: "#fff", padding:"0"}}>
              {item.icon}
            </ListItemIcon>
            <ListItemText primary={item.label} />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  </Drawer>
  )
}
