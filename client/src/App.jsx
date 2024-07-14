import './App.css'
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
        <Navbar /></>
    },
    {
      path: '/login',
      element: <>
        <Navbar />
        <Login /></>
    },
    {
      path: '/signup',
      element:<>
        <Navbar />
        <SignUp />
      </>
    },
    {
      path: '/otp',
      element: <>
        <Navbar />
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
