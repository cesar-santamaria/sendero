import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Box, Typography } from '@mui/material'

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

const jobPalette = ['#245187', '#3abca2', '#d5513b', '#e38b3f', '#cf334b']

export default function Stats() {
  const { jobs } = useSelector((state) => {
    return state.jobs
  })
  const dispatch = useDispatch()
  const interestedJobs = jobs.filter((job) => job.status === 'interested')
  const appliedJobs = jobs.filter((job) => job.status === 'applied')
  const interviewJobs = jobs.filter((job) => job.status === 'interview')
  const offerJobs = jobs.filter((job) => job.status === 'offer')
  const rejectedJobs = jobs.filter((job) => job.status === 'rejected')

  const chartData = [
    { status: 'Interested', jobs: interestedJobs.length },
    { status: 'Applied', jobs: appliedJobs.length },
    { status: 'Interview', jobs: interviewJobs.length },
    { status: 'Offer', jobs: offerJobs.length },
    { status: 'Rejected', jobs: rejectedJobs.length },
  ]

  console.log(rejectedJobs.length)

  useEffect(() => {
    dispatch(getJob())
  }, [dispatch])

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
          <Legend />
          <EventTracker />
          <HoverState />
          <Tooltip />
        </Chart>
      </div>
    </section>
  )
}
