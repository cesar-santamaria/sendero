import React from 'react'
import Grid from '@mui/material/Grid';
import { Paper } from '@mui/material';
import { styled } from '@mui/material/styles';
import { headings } from './headings';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body1,
  padding: theme.spacing(2),
  textAlign: 'center',
  fontWeight: 'bold',
  color: theme.palette.text.secondary,
}));

export default function DashboardColumn() {
  return (
    <>
    {headings.map((item) => (
      <Grid key={item.id} item xs={12} lg>
        <Item>
          <img src={item.tab} alt="color icon used to style columns" style={{width:"12px"}}/>
            {item.title}
        </Item>
      </Grid>
    ))}
    </>
  )
}
