import { useState, useEffect } from 'react'
import axios from 'axios'
import { useSelector } from 'react-redux'

import LinearProgress from '@mui/material/LinearProgress';


import { Card, CardHeader, Avatar } from '@mui/material'
import JobsModal from './JobsModal'

export default function JobItem(props) {
  const [logo, setLogo] = useState('')
  const [open, setOpen] = useState(false)

  const { isLoading} = useSelector((state) => {
    return state.jobs
  })

  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

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
    resume,
    status
  } = props

  useEffect(() => {
    async function fetchLogo() {
      if (company.length > 0) {
        try {
          const result = await axios.get(
            `https://autocomplete.clearbit.com/v1/companies/suggest?query=${company}`
          )
          setLogo(result.data[0].logo)
        } catch (err) {
          setLogo('img/sendero_job_icon.png')
        }
      }
    }
    fetchLogo()
  }, [company])

  if (isLoading) {
    return <LinearProgress />
  }
  
  return (
    <Card style={{ marginTop: '25px' }} onClick={handleOpen}>
      <CardHeader
        avatar={<Avatar src={logo} />}
        title={company.toUpperCase()}
        subheader={jobTitle}
        action={
          <JobsModal 
            open={open} 
            onClose={handleClose}
            id={id}
            company={company}
            jobTitle={jobTitle}
            salary={salary}
            location={location}
            jobLink={jobLink}
            calendar={calendar}
            details={details}
            contactName={contactName}
            contactEmail={contactEmail}
            resume={resume}
            status={status}
          />
        }
      />
    </Card>
  )
}
