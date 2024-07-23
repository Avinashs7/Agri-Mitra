import './App.css'
import Navbar from './components/Navbar'
import Login from './components/Login'
import SignUp from './components/SignUp'
import Otp from './components/Otp'
import AboutUs from './components/AboutUs'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Landing from './components/Landing'
import Workflow from './components/Workflow'
import Vision from './components/Vision'
import { useEffect, useState } from 'react'
import Farms from './components/Farms'
import FarmDetail from './components/FarmDetail'
import Footer from './components/Footer'


function App() {
  const [user,setUser]=useState();
  useEffect(()=>{
    if(localStorage.getItem("accessToken")===null){
      localStorage.clear();
    }
    if(!user && localStorage.getItem("user")){
      setUser(localStorage.getItem("user"));
    }
  },[])
  const router = createBrowserRouter([
    {
      path: '/',
      element:<>
        <Navbar user={user}/>
        <Landing />
        <Workflow />
        <Vision />
        <AboutUs />
        <Footer />
      </>
    },
    {
      path: '/login',
      element: <>
        <Navbar user={user}/>
        <Login setUser={setUser}/></>
    },
    {
      path: '/signup',
      element:<>
        <Navbar user={user}/>
        <SignUp />
      </>
    },
    {
      path: '/otp',
      element: <>
        <Navbar user={user}/>
        <Otp />
      </>
    },  
    {
      path: '/farms',
      element : <>
      <Navbar user={user} />
      <Farms />
      </>
    },
    {
      path: '/farmDetail',
      element: <>
      <Navbar user={user}/>
      <FarmDetail />
      </>
    },
  ])
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
