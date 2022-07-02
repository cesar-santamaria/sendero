import {useEffect} from 'react'
import { Container, Box, Grid } from '@mui/material'
import JobItem from '../../components/jobs/JobItem'
import { getJob } from '../../features/jobs/jobSlice'
import { useSelector, useDispatch } from 'react-redux'
import DashboardColumnHeading from './DashboardColumnHeading'


export default function DashboardColumn() {
  const dispatch = useDispatch()

  const { jobs, isLoading, isError, message } = useSelector((state) => {
    return state.jobs
  })

  useEffect(() => {
    dispatch(getJob());
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
