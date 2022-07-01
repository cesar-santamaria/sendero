import React from 'react'
import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getJobs } from '../../features/jobs/jobSlice'

import {
  Card,
  CardHeader,
  IconButton,
  Avatar,
  Collapse,
  CardContent,
  Typography,
  Button
} from '@mui/material'
import { styled } from '@mui/material/styles'
import EditIcon from '@mui/icons-material/Edit'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

const ExpandMore = styled((props) => {
  const { expand, ...other } = props
  return <IconButton {...other} />
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}))

export default function JobItem() {
  const [expanded, setExpanded] = useState(false)
  const dispatch = useDispatch()

  const { jobs, isLoading, isError, message } = useSelector((state) => {
    return state.jobs
  })

  const handleExpandClick = () => {
    setExpanded(!expanded)
  }

  useEffect(() => {
    if (isError) {
      console.log(message)
    }
    dispatch(getJobs())
  }, [isError, message, dispatch])

  if (isLoading) {
    return <div>SPINNERRRRRR!!!</div>
  }
  return (
    <Card style={{ marginTop: '25px' }}>
      <CardHeader
        avatar={<Avatar src="https://logo.clearbit.com/spotify.com" />}
        action={
          <IconButton aria-label="edit">
            <EditIcon />
          </IconButton>
        }
        title="Company Name"
        subheader="Job Title"
      />
      <ExpandMore
        expand={expanded}
        onClick={handleExpandClick}
        aria-expanded={expanded}
        aria-label="show more"
      >
        <ExpandMoreIcon />
      </ExpandMore>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Method:</Typography>
          <Typography paragraph>
            salary
          </Typography>
          <Typography paragraph>
            location
          </Typography>
          <Typography paragraph>
            location
          </Typography>
          <Typography paragraph>
            details
          </Typography>
          <Typography paragraph>
            contact name
          </Typography>
          <Typography paragraph>
            contact email
          </Typography>
          <Typography paragraph>
            resume link
          </Typography>
          <Typography paragraph>
            created at
          </Typography>
            <Button sx={{backgroundColor: "#ff817b"}} fullWidth>Delete</Button>
        </CardContent>
      </Collapse>
    </Card>
  )
}

/* 
salary
location
jobLink
details
contactName
contactEmail
resume
createdAt
*/