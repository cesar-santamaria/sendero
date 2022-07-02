import React from 'react'
import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import jobSlice, { getJobs } from '../../features/jobs/jobSlice'
import { deleteJob } from '../../features/jobs/jobSlice'
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

export default function JobItem(props) {
  const [expanded, setExpanded] = useState(false)
  const dispatch = useDispatch()

  const { jobs, isLoading, isError, message } = useSelector((state) => {
    return state.jobs
  })

  const {
    id,
    company,
    jobTitle,
    salary,
    location,
    jobLink,
    calendar,
    details,
    contactName,
    contactEmail,
    resume
  } = props

  const handleExpandClick = () => {
    setExpanded(!expanded)
  }

  if (isLoading) {
    return <div>SPINNERRRRRR!!!</div>
  }
  return (
    <Card style={{ marginTop: '25px' }}>
      <CardHeader
        avatar={<Avatar src="https://logo.clearbit.com/spotify.com" />}
        title={company}
        subheader={jobTitle}
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
          <Typography paragraph>
            {salary}
          </Typography>
          <Typography paragraph>
            {location}
          </Typography>
          <Typography paragraph>
            {details}
          </Typography>
          <Typography paragraph>
            {contactName}
          </Typography>
          <Typography paragraph>
            {contactEmail}
          </Typography>
          <Typography paragraph>
            {resume}
          </Typography>
          <Typography paragraph>
            {jobLink}
          </Typography>
          <div style={{display: 'flex'}}>
            <Button sx={{backgroundColor: "#ff817b", marginRight: '5px'}} fullWidth>Edit</Button>
            <Button sx={{backgroundColor: "#ff817b"}} onClick={() => dispatch(deleteJob(id))} fullWidth>Delete</Button>
          </div>
        </CardContent>
      </Collapse>
    </Card>
  )
}