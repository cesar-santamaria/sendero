import DashboardCustomizeRoundedIcon from '@mui/icons-material/DashboardCustomizeRounded';
import DescriptionRoundedIcon from '@mui/icons-material/DescriptionRounded';
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';
import Documents from '../../../pages/documents/Documents';
import Dashboard from '../../../pages/home/Dashboard';
import Settings from '../../../pages/settings/Settings';

export const navbarItems = [
  {
    id: 0, 
    icon: <DashboardCustomizeRoundedIcon/>,
    label: "Dashboard",
    path: "dashboard",
    element: <Dashboard/>
  },
  {
    id: 1, 
    icon: <DescriptionRoundedIcon/>,
    label: "Documents",
    path: "documents",
    element: <Documents/>
  },
  {
    id: 2, 
    icon: <SettingsRoundedIcon/>,
    label: "Settings",
    path: "settings",
    element: <Settings/>
  },
]