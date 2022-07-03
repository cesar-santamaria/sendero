import DashboardCustomizeRoundedIcon from '@mui/icons-material/DashboardCustomizeRounded';
import BarChartIcon from '@mui/icons-material/BarChart';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Profile from '../../../pages/profile/Profile';
import Stats from '../../../pages/stats/Stats';
import DashboardColumn from '../../../pages/dashboard/DashboardColumn';
import AddBoxIcon from '@mui/icons-material/AddBox';
import JobForm from '../../../pages/job/JobForm';

export const navbarItems = [
  {
    id: 0, 
    icon: <DashboardCustomizeRoundedIcon/>,
    label: "Dashboard",
    path: "/",
    element: <DashboardColumn/>
  },
  {
    id: 1, 
    icon: <AccountCircleIcon/>,
    label: "Profile",
    path: "profile",
    element: <Profile/>
  },
  {
    id: 2, 
    icon: <BarChartIcon/>,
    label: "Stats",
    path: "stats",
    element: <Stats/>
  },
  {
    id: 3, 
    icon: <AddBoxIcon/>,
    label: "Add Job",
    path: "job-form",
    element: <JobForm/>
  },
]