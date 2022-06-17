import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Outlet } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./components/ui/Theme";

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <>
  <ThemeProvider theme={theme}> 
      <App/>
      <Outlet/>
  </ThemeProvider>
  </>
);