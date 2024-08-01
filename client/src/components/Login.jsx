import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { FaUserAlt, FaLock } from "react-icons/fa";
import axios from 'axios';
import farmland from '../images/background.png'
const SERVER_URL=import.meta.env.VITE_SERVER_URL;


const Login = ({setUser}) => {
    const [loginDetails,setLoginDetails]=useState({});
    const navigate=useNavigate();
    const loginUser=async(e)=>{
        e.preventDefault();
        try{
            const data=await axios.post(`${SERVER_URL}/user/login`,loginDetails)
            const userData=data?.data?.data;
            // console.log(userData?.accessToken)
            const fullName=userData?.firstName+" "+userData?.lastName;
            setUser(fullName);
            localStorage.setItem("user",fullName);
            localStorage.setItem("accessToken",userData?.accessToken);
            navigate("/");
        }
        catch(err){
            console.error(err);
        }
    }
    const updateLoginDetails=(e)=>{
        setLoginDetails({...loginDetails,[e.target.name]:e.target.value});
    }
    axios.interceptors.request.use(request=>{
        console.log('Starting request',request);
        return request;
    })
  return (
    <div style={{backgroundImage: `url(${farmland})`}} className='h-[90vh] flex flex-col items-center justify-center bg-repeat-round'>
        <div className='h-[350px] bg-blue-600/20 border border-gray-300 backdrop-blur-lg px-6 w-96 text-white'>
            {/* Login Form  */}
            <div>
                <h1 className='text-3xl font-bold pb-6 pt-10 text-center'>Login</h1>
                <form className='flex flex-col items-center' action=''>
                    <div className='w-full relative'>
                        <input type='email' name="email" className='border border-gray-300 w-full rounded-full px-4 py-2 my-2 bg-transparent' placeholder='email' onChange={updateLoginDetails}/>
                        <FaUserAlt className='absolute top-[35%] right-3'/>
                    </div>
                    <div className='w-full relative'>
                        <input type='password' name='password' className='border border-gray-300 w-full rounded-full px-4 py-2 my-2 bg-transparent' placeholder='Password' onChange={updateLoginDetails}/>
                        <FaLock className='absolute top-[35%] right-3'/>
                    </div>
                    <button className='my-2 py-2 w-full rounded-full border border-blue-300 bg-blue-700 text-white' onClick={loginUser}>Login</button>
                    <span>Do not have an account? <Link to='/signup' className='text-blue-400'>Sign Up</Link></span>
                </form>
            </div> 
        </div>
    </div>
  )
}

export default Login
