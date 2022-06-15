import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import DashboardColumn from './DashboardColumn';




export default function Dashboard() {

  return (
    <Container id="dashboard-container" disableGutters style={{ margin: '0px' }} maxWidth={false}>
      <Box style={{marginLeft: "220px"}} sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
         <DashboardColumn/>
        </Grid>
      </Box>
    </Container>
  );
}