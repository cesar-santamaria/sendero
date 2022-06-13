import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { headings } from './headings';
import { padding } from '@mui/system';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function BasicGrid() {

  return (
    <Box style={{marginLeft: "240px"}} sx={{ flexGrow: 1 }}>
      <Grid wrap='nowrap' container spacing={2}>
        {headings.map((item) => (
          <Grid item xs={3}>
            <Item key={item.id}> 
            <img src={item.tab} style={{width:"12px", marginRight: "8px"}}/>
              {item.title}
            </Item>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}