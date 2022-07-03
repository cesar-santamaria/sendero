import {useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  Box,
  TextField,
  Typography,
  Modal,
  IconButton,
  Button,
  FormControl,
  MenuItem,
  Input,
  InputLabel,
  InputAdornment,
  Select,
  Stack,
  Paper
} from '@mui/material'

import {
  Chart,
  PieSeries,
  Tooltip,
  Legend,
} from '@devexpress/dx-react-chart-material-ui'
import {
  Animation,
  EventTracker,
  HoverState,
  Palette,
} from '@devexpress/dx-react-chart'

import { getJob } from '../../features/jobs/jobSlice'



const jobPalette = ['#82919E', '#9CA78F', '#90BE6D', '#43AA8B', '#F94144'];

export default function Stats() {
  const { jobs, isLoading, isError, message } = useSelector((state) => {
    return state.jobs
  })
  const dispatch = useDispatch()
  const interestedJobs = jobs.filter((job)=> job.status === 'interested')
  const appliedJobs = jobs.filter((job)=> job.status === 'applied')
  const interviewJobs = jobs.filter((job)=> job.status === 'interview')
  const offerJobs = jobs.filter((job)=> job.status === 'offer')
  const rejectedJobs = jobs.filter((job)=> job.status === 'rejected')

  const chartData = [
    { status: "Interested", jobs: interestedJobs.length },
    { status: "appliedJobs", jobs: appliedJobs.length },
    { status: "interviewJobs", jobs: interviewJobs.length },
    { status: "offerJobs", jobs: offerJobs.length },
    { status: "rejectedJobs", jobs: rejectedJobs.length },
  ]

  console.log(rejectedJobs.length)

  useEffect(()=> {
    dispatch(getJob())
  },[getJob])


  return (
    <section
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        width: '100vw',
      }}
    >
      <div style={{ width: '50%', marginLeft: '200px' }}>
        <Box
          mb={2}
          display="flex"
          justifyContent="center"
          alignContent="center"
        >
          <Typography style={{ fontWeight: '400' }} variant="h4">
            Job Tracking Stats
          </Typography>
        </Box>
        <Chart data={chartData}>
        <Palette scheme={jobPalette} />
          <PieSeries valueField="jobs" argumentField="status"></PieSeries>
          <Animation />
          <Legend/>
          <EventTracker />
          <HoverState />
          <Tooltip />
        </Chart>
      </div>
    </section>
  )
}
