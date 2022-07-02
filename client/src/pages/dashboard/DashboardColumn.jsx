import {useEffect} from 'react'
import { Container, Paper, Box, Grid } from '@mui/material'
import { styled } from '@mui/material/styles'
import JobItem from '../../components/jobs/JobItem'
import { getJobs } from '../../features/jobs/jobSlice'
import { useSelector, useDispatch } from 'react-redux'
import DashboardColumnHeading from './DashboardColumnHeading'

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body1,
  padding: theme.spacing(2),
  textAlign: 'center',
  fontWeight: 'bold',
  color: theme.palette.text.secondary,
}))

export default function DashboardColumn() {
  const dispatch = useDispatch()

  const { jobs, isLoading, isError, message } = useSelector((state) => {
    return state.jobs
  })

  useEffect(() => {
    dispatch(getJobs());
  }, [dispatch]);

  const jobItems = jobs.map((job) => (
  <JobItem
      key={job._id}
      id={job._id}
      company={job.companyName}
      jobTitle={job.jobTitle}
      status={job.status}
      salary={job.salary}
      location={job.location}
      jobLink={job.jobLink}
      calendar={job.calendar}
      details={job.details}
      contactName={job.contactName}
      contactEmail={job.contactEmail}
      resume={job.resume}
    />
  )
)

  return (
    <Container
      id="dashboard-container"
      disableGutters
      style={{ margin: '0px' }}
      maxWidth={false}
    >
      <Box style={{ marginLeft: '210px' }} sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
            <DashboardColumnHeading index={0} job={jobItems.filter((job)=>job.props.status === "interested")} title="INTERESTED"/>
            <DashboardColumnHeading index={1} job={jobItems.filter((job)=>job.props.status === "applied")} title="APPLIED"/>
            <DashboardColumnHeading index={2} job={jobItems.filter((job)=>job.props.status === "interview")} title="INTERVIEW"/>
            <DashboardColumnHeading index={3} job={jobItems.filter((job)=>job.props.status === "offer")} title="OFFER"/>
            <DashboardColumnHeading index={4} job={jobItems.filter((job)=>job.props.status === "rejected")} title="REJECTED"/>
        </Grid>
      </Box>
    </Container>
  )
}
