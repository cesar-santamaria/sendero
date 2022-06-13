import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { routePathHelper } from './helpers/routePaths';
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
        {routePathHelper.map((item) => <Route key={item.id} path={item.path} element={item.element}/>)}
      </Route>
    </Routes>
  </BrowserRouter>
  </>
);