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

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element:<>
        <Navibar />
        <Landing />
        <Workflow />
        <Vision />
      </>
    },
    {
      path: '/login',
      element: <>
        <Navibar />
        <Login /></>
    },
    {
      path: '/signup',
      element:<>
        <Navibar />
        <SignUp />
      </>
    },
    {
      path: '/otp',
      element: <>
        <Navibar />
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
