import React from 'react'
import { Container, Paper, Box, Grid } from '@mui/material'
import { styled } from '@mui/material/styles'
import Job from '../../components/jobs/JobItem'
import JobItem from '../../components/jobs/JobItem'

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body1,
  padding: theme.spacing(2),
  textAlign: 'center',
  fontWeight: 'bold',
  color: theme.palette.text.secondary,
}))

export default function DashboardColumn() {
  return (
    <Container
      id="dashboard-container"
      disableGutters
      style={{ margin: '0px' }}
      maxWidth={false}
    >
      <Box style={{ marginLeft: '210px' }} sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
            <Grid item xs={12} lg>
              <Item>
                <img
                  src="img/tabs/wishlist.png"
                  alt="color icon used to style columns"
                  style={{ width: '12px', marginRight: '5px' }}
                />
                WISHLIST
              </Item>
              <JobItem/>
            </Grid>
            <Grid item xs={12} lg>
              <Item>
                <img
                  src="img/tabs/applied.png"
                  alt="color icon used to style columns"
                  style={{ width: '12px', marginRight: '5px' }}
                />
                APPLIED
              </Item>
            </Grid>
            <Grid item xs={12} lg>
              <Item>
                <img
                  src="img/tabs/interview.png"
                  alt="color icon used to style columns"
                  style={{ width: '12px', marginRight: '5px' }}
                />
                INTERVIEW
              </Item>
            </Grid>
            <Grid item xs={12} lg>
              <Item>
                <img
                  src="/img/tabs/offer.png"
                  alt="color icon used to style columns"
                  style={{ width: '12px', marginRight: '5px' }}
                />
                OFFER
              </Item>
            </Grid>
            <Grid item xs={12} lg>
              <Item>
                <img
                  src="/img/tabs/rejected.png"
                  alt="color icon used to style columns"
                  style={{ width: '12px', marginRight: '5px' }}
                />
                REJECTED
              </Item>
            </Grid>
        </Grid>
      </Box>
    </Container>
  )
}
