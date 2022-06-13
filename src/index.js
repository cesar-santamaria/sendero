import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { navbarItems } from './components/navbar/consts/navbarItems';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <>
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App/>}>
        {navbarItems.map((item) => <Route key={item.id} path={item.path} element={item.element}/>)}
      </Route>
    </Routes>
  </BrowserRouter>
  </>
);