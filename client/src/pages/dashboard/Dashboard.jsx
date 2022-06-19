import * as React from 'react';
import Navbar from '../../components/navbar/Navbar';
import { Outlet } from 'react-router-dom';




export default function Dashboard() {

  return (
    <>
    <Navbar/>
    <Outlet/>
    </>
  );
}