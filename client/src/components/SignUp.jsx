import React from 'react'
import { Link } from 'react-router-dom';
import { MdOutlineMail } from "react-icons/md";
import { BsGenderAmbiguous } from "react-icons/bs";
import { FaUserAlt, FaLock, FaPhoneAlt } from "react-icons/fa";

const SignUp = () => {
  return (
    <div className='h-[90vh] flex flex-col items-center justify-center bg-background bg-repeat-round'>
        <div className='h-[550px] bg-blue-600/20 border border-blue-300 backdrop-blur-lg px-6 w-96   '>
            <div>
                <h1 className='text-3xl font-bold pb-6 pt-6 text-center text-white'>Sign Up</h1>
                <form className='flex flex-col items-center' action=''>
                    <div className='w-full relative'>
                        <input type='email' className='border border-gray-300 w-full rounded-full px-4 py-2 my-2 bg-transparent' placeholder='Email'/>
                        <MdOutlineMail className='absolute top-[35%] right-3 text-white'/>
                    </div>
                    <div className='w-full relative'>
                        <input type='text' className='border border-gray-300 w-full rounded-full px-4 py-2 my-2 bg-transparent' placeholder='First Name'/>
                        <FaUserAlt className='absolute top-[35%] right-3 text-white'/>
                    </div>
                    <div className='w-full relative'>
                        <input type='text' className='border border-gray-300 w-full rounded-full px-4 py-2 my-2 bg-transparent' placeholder='Last Name'/>
                        <FaUserAlt className='absolute top-[35%] right-3 text-white'/>
                    </div>
                    <div className='w-full relative'>
                        <input type='number' className='border border-gray-300 w-full rounded-full px-4 py-2 my-2 bg-transparent' placeholder='Phone Number'/>
                        <FaPhoneAlt className='absolute top-[35%] right-3 text-white'/>
                    </div>
                    <div className='w-full relative'>
                        <select name='gender' className="border border-gray-300 w-full rounded-2xl px-4 py-2 my-2 bg-transparent">
                            <option value=''>Gender</option>
                            <option value='male'>Male</option>
                            <option value='female'>Female</option>
                        </select><br></br>
                        <BsGenderAmbiguous className='absolute top-[35%] right-3 text-white'/>
                        </div >
                    <div className='w-full relative'>
                        <input type='password' className='border border-gray-300 w-full rounded-full px-4 py-2 my-2 bg-transparent' placeholder='Password'/>
                        <FaLock className='absolute top-[35%] right-3 text-white'/>
                    </div>
                    <button className='my-2 py-2 w-full rounded-full bg-blue-700 border border-blue-400 text-white'><Link to ='/otp' >Sign Up</Link></button>
                    <span>Already have an account? <Link to='/login' className='text-blue-400'>Login</Link></span>
                </form>
            </div>  
        </div>
    </div>
  )
}

export default SignUp
