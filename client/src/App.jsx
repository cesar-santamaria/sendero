import React from 'react';
import { navbarItems } from './components/navbar/consts/navbarItems';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Dashboard from './pages/dashboard/Dashboard';




function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Dashboard/>}>
        {navbarItems.map((item) => <Route key={item.id} path={item.path} element={item.element}/>)}
      </Route>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
