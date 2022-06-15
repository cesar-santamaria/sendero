import React from 'react'
import { Container, Paper, Box, Grid } from '@mui/material';
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
    <Container id="dashboard-container" disableGutters style={{ margin: '0px' }} maxWidth={false}>
      <Box style={{marginLeft: "210px"}} sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          {headings.map((item) => (
            <Grid key={item.id} item xs={12} lg>
              <Paper style={{minHeight: '98vh'}}>
                <Item>
                  <img src={item.tab} alt="color icon used to style columns" style={{width:"12px", marginRight:'5px'}}/>
                  {item.title}
                </Item>
              </Paper>
          </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  )
}
