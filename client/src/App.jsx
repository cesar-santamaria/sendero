import React from 'react';
import { navbarItems } from './components/navbar/consts/navbarItems';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import Dashboard from './pages/dashboard/Dashboard';
import Register from './pages/register/Register'
import Login from './pages/login/Login'

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/login" element={<Login/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/" element={<Dashboard/>}>
        {navbarItems.map((item) => <Route key={item.id} path={item.path} element={item.element}/>)}
      </Route>
    </Routes>
  </BrowserRouter>
  <ToastContainer/>
  </>
  );
}

export default App;
