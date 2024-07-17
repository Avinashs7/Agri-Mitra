import './App.css'
import Navibar from './components/Navibar'
import Navbar from './components/Navbar'
import Login from './components/Login'
import SignUp from './components/SignUp'
import Otp from './components/Otp'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element:<>
        <Navibar />
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
