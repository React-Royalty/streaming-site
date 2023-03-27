import React from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './components/App';
import Home from './components/Home';
import ErrorPage from './components/ErrorPage';
import Login from './components/Login';


const appElement = document.getElementById('app');
const root = createRoot(appElement);


export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: '/login',
        element: <Login />
      }
    ]
  }
]);

root.render( <RouterProvider router={router} />);