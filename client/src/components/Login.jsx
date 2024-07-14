import React from 'react'
import { Link } from 'react-router-dom'
import { FaUserAlt, FaLock } from "react-icons/fa";

const Login = () => {
  return (
    <div className='h-[90vh] flex flex-col items-center justify-center bg-background bg-repeat-round'>
        <div className='h-[350px] bg-blue-600/20 border border-gray-300 backdrop-blur-lg px-6 w-96 text-white'>
            {/* Login Form  */}
            <div>
                <h1 className='text-3xl font-bold pb-6 pt-10 text-center'>Login</h1>
                <form className='flex flex-col items-center' action=''>
                    <div className='w-full relative'>
                        <input type='text' className='border border-gray-300 w-full rounded-full px-4 py-2 my-2 bg-transparent' placeholder='Username'/>
                        <FaUserAlt className='absolute top-[35%] right-3'/>
                    </div>
                    <div className='w-full relative'>
                        <input type='password' className='border border-gray-300 w-full rounded-full px-4 py-2 my-2 bg-transparent' placeholder='Password'/>
                        <FaLock className='absolute top-[35%] right-3'/>
                    </div>
                    <button className='my-2 py-2 w-full rounded-full border border-blue-300 bg-blue-700 text-white'>Login</button>
                    <span>Do not have an account? <Link to='/signup' className='text-blue-400'>Sign Up</Link></span>
                </form>
            </div> 

            {/* Registration Form */}
            
        </div>
    </div>
  )
}

export default Login
