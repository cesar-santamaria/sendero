import { useEffect } from 'react'
import { Container, Paper, Box, Grid } from '@mui/material'
import { styled } from '@mui/material/styles'

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body1,
  padding: theme.spacing(2),
  textAlign: 'center',
  fontWeight: 'bold',
  color: theme.palette.text.secondary,
}))

export default function DashboardColumnHeading(props) {

  return (
    <>
      <Grid item xs={12} lg>
        <Item>
          <img
            src="img/tabs/wishlist.png"
            alt="color icon used to style columns"
            style={{ width: '12px', marginRight: '5px' }}
          />
          {props.title}
        </Item>
        {props.job}
      </Grid>
    </>
  )
}
