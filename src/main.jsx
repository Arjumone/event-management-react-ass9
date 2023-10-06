import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainLayout from './components/Layout/MainLayout';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import ErrorPage from './components/Error/ErrorPage';
import EventDetails from './components/EventDetails/EventDetails';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
      {
        path:'/',
        element:<Home></Home>,
        loader:()=>fetch("./events.json")
      },
      {
        path:'/event/:id',
        element:<EventDetails></EventDetails>,
        loader:()=>fetch("./events.json")
      },
      {
        path:'/login',
        element:<Login></Login>
      },
      {
        path:'/',
        element:<Register></Register>
      },
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'/',
        element:<Home></Home>
      },
    ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
)
