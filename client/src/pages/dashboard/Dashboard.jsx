import * as React from 'react';
import Navbar from '../../components/navbar/Navbar';
import DashboardColumn from './DashboardColumn'
import { Outlet } from 'react-router-dom';




export default function Dashboard() {

  return (
    <>
    <Navbar/>
    <Outlet/>
    </>
  );
}