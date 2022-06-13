import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import DescriptionRoundedIcon from '@mui/icons-material/DescriptionRounded';
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';

export const navbarItems = [
  {
    id: 0, 
    icon: <HomeRoundedIcon/>,
    label: "Home",
    route: "home",
  },
  {
    id: 1, 
    icon: <DescriptionRoundedIcon/>,
    label: "Documents",
    route: "documents",
  },
  {
    id: 2, 
    icon: <SettingsRoundedIcon/>,
    label: "Settings",
    route: "settings",
  },
]