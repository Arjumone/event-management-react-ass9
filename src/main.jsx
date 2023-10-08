import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainLayout from './components/Layout/MainLayout';
import Home from './components/Home/Home';
import ErrorPage from './components/Error/ErrorPage';
// import Services from './components/Services/Services';
import TeamMember from './components/TeamMember/TeamMember';
import Blogs from './components/Blogs/Blogs';
import PrivateRoute from './routes/PrivateRoute';

import Login from './Login/Login';
import Register from './Register/Register';
import AuthProvider from './Provider/AuthProvider';
import Services from './components/Home/Services';

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
        path:'/services/:id',
        element:<PrivateRoute><Services></Services></PrivateRoute>,
        loader:()=>fetch("./events.json")
      },
      {
        path:'/team',
        element:<PrivateRoute><TeamMember></TeamMember></PrivateRoute> 
      },
      {
        path:'/blogs',
        element:<PrivateRoute><Blogs></Blogs></PrivateRoute>
      },
      {
        path:'/login',
        element:<Login></Login>
      },
      {
        path:'/register',
        element:<Register></Register>
      },
    ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   
   <AuthProvider><RouterProvider router={router} /></AuthProvider>
   
  </React.StrictMode>,
)
