import DashboardCustomizeRoundedIcon from '@mui/icons-material/DashboardCustomizeRounded';
import BarChartIcon from '@mui/icons-material/BarChart';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SavedSearchIcon from '@mui/icons-material/SavedSearch';
import EventIcon from '@mui/icons-material/Event';
import Profile from '../../../pages/profile/Profile';
import Stats from '../../../pages/stats/Stats';
import Calendar from '../../../pages/calendar/Calendar';
import Search from '../../../pages/search/Search';
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
    icon: <EventIcon/>,
    label: "Calendar",
    path: "calendar",
    element: <Calendar/>
  },
  {
    id: 4, 
    icon: <SavedSearchIcon/>,
    label: "Search",
    path: "search",
    element: <Search/>
  },
  {
    id: 5, 
    icon: <AddBoxIcon/>,
    label: "Add Job",
    path: "job-form",
    element: <JobForm/>
  },
]