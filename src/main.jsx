import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"
import ErrorPage from './components/Error/ErrorPage';
import MainLayout from './MainLayout/MainLayout';
import Home from './pages/Home/Home';
import Services from './pages/Services';
import TeamMember from './pages/TeamMember/TeamMember';
import Blogs from './pages/Blogs/Blogs';
import Login from './pages/Login';
import Register from './pages/Register';
import AuthProvider from './Provider/AuthProvider';
import PrivateRoute from './routes/PrivateRoute';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
      {
        path:'/',
        element: <Home></Home>,
        loader:()=>fetch("./events.json")
      },
      {
        path:'/services/:id',
        element:<PrivateRoute><Services></Services></PrivateRoute>,
        // loader:()=>fetch("./events.json")
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
