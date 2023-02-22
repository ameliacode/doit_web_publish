import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.css';
import AppRouter from 'components/Router';
import {routes} from "components/Router"
import { createBrowserRouter } from 'react-router-dom';
import { RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <div className='bg-red'/>,
    children: routes.map((route) => ({
      index: route.path === '/',
      path: route.path === '/' ? undefined : route.path,
      element: route.element,
    })),
  },
])


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router}/>
);


