import './App.css'
import Navibar from './components/Navibar'
import Navbar from './components/Navbar'
import Login from './components/Login'
import SignUp from './components/SignUp'
import Otp from './components/Otp'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Landing from './components/Landing'
import Workflow from './components/Workflow'
import Vision from './components/Vision'
import { useEffect, useState } from 'react'


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
        <Navibar user={user}/>
        <Landing />
        <Workflow />
        <Vision />
      </>
    },
    {
      path: '/login',
      element: <>
        <Navibar user={user}/>
        <Login setUser={setUser}/></>
    },
    {
      path: '/signup',
      element:<>
        <Navibar user={user}/>
        <SignUp />
      </>
    },
    {
      path: '/otp',
      element: <>
        <Navibar value={user}/>
        <Otp />
      </>
    }
  ])
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
