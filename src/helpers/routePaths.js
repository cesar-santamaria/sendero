import Home from '../pages/home/Home';
import Documents from '../pages/documents/Documents';
import Settings from '../pages/settings/Settings';

export const routePathHelper = [
  {
    id: 0,
    path:"home",
    element: <Home/>
  },
  {
    id: 1,
    path:"documents",
    element: <Documents/>
  },
  {
    id: 2,
    path:"settings",
    element: <Settings/>
  },
]