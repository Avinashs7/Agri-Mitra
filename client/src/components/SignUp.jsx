import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { MdOutlineMail } from "react-icons/md";
import { FaUserAlt, FaLock, FaPhoneAlt } from "react-icons/fa";
import axios from 'axios'
import {object, string} from 'yup'
import farmland from '../images/background.png'
const SERVER_URL=import.meta.env.VITE_SERVER_URL;


const SignUp = () => {
    const navigate=useNavigate();
    const [signUpDetails,setsignUpDetails]=useState({});

    const [errors, setErrors] = useState({})

    let validateSchema = object({
        email : string()
            .email("Enter the valid email")
            .required("This field is required"),
        phone : string()
            .matches(/^\d{10}$/, "Phone number must have 10 digits"),
        password : string()
            .required("This field is required")
            .min(8, "Password must have atleast 8 characters")
            .matches(/[!@#$&*()%^,.{}<>|]/, "Password must contain atleast one special character")
            .matches(/[0-9]/, "Password must contain atleast one number")
            .matches(/[A-Z]/,'Password must contain atleast one uppercase letter')
            .matches(/[a-z]/, "Password must contain atleast one lowercase letter"),
        firstName: string().required("This field is required")
    });

    const signup=async(e)=>{
        e.preventDefault();

        //Form validation
        try{
            await validateSchema.validate(signUpDetails, {abortEarly: false});
            console.log("Form validated successfully");
        }
        catch(error)
        {
            const newErrors = {}
            error.inner.forEach(err =>{
                newErrors[err.path] = err.message;
            })
            setErrors(newErrors);
        }

        const formData=new FormData();
        for(const key in signUpDetails){
            formData.append(key,signUpDetails[key]);
        }
        await axios.post(`${SERVER_URL}/user/register`,formData,{headers:{
            'Content-Type': 'multipart/form-data',
          }})
        .then((data)=>{
            console.log(data?.data?.data)
            navigate("/otp",{state:{id:data?.data?.data?._id}});
        })
        .catch((err)=>{
            console.error(err);
        })
    }
    const updateSignUpDetails=(e)=>{
        e.preventDefault();
        setsignUpDetails({...signUpDetails,[e.target.name]:e.target.value})
    }
  return (
    <div style={{backgroundImage: `url(${farmland})`}} className='h-[90vh] flex flex-col items-center justify-center bg-repeat-round'>
        <div className='h-[600px] bg-blue-600/20 border border-blue-300 backdrop-blur-lg px-6 w-96   '>
            <div>
                <h1 className='text-3xl font-bold pb-6 pt-6 text-center text-white'>Sign Up</h1>
                <form className='flex flex-col items-center' action='' encType="multipart/form-data">
                    <div className='w-full relative'>
                        <input type='email' name='email' className='border border-gray-300  text-white w-full rounded-full px-4 py-2 my-2 bg-transparent' placeholder='Email' onChange={updateSignUpDetails}/>
                        <MdOutlineMail className='absolute top-[30%] right-3 text-white'/>
                        {errors.email && <div className='text-xs text-red-600 bg-gray-50 ml-6 w-32 rounded-full p-1'>{errors.email}</div>}
                    </div>
                    <div className='w-full relative'>
                        <input type='text' name='firstName' className='border border-gray-300 text-white w-full rounded-full px-4 py-2 my-2 bg-transparent' placeholder='First Name' onChange={updateSignUpDetails}/>
                        <FaUserAlt className='absolute top-[30%] right-3 text-white'/>
                        {errors.firstname && <div className='text-xs  text-red-600 bg-gray-50 ml-6 w-32 rounded-full p-1'>{errors.firstname}</div>}
                    </div>
                    <div className='w-full relative'>
                        <input type='text' name='lastName' className='border border-gray-300  text-white w-full rounded-full px-4 py-2 my-2 bg-transparent' placeholder='Last Name' onChange={updateSignUpDetails}/>
                        <FaUserAlt className='absolute top-[30%] right-3 text-white'/>
                    </div>
                    <div className='w-full relative'>
                        <input type='number' name='phone' className='border border-gray-300 text-white w-full rounded-full px-4 py-2 my-2 bg-transparent' placeholder='Phone Number' onChange={updateSignUpDetails}/>
                        <FaPhoneAlt className='absolute top-[30%] right-3 text-white'/>
                        {errors.phone && <div className='text-xs  text-red-600 bg-gray-50 ml-6 w-52 rounded-full p-1'>{errors.phone}</div>}
                    </div>
                    <div className='w-full relative'>
                        <select name='gender' className="border border-gray-300 w-full rounded-2xl px-4 py-2 my-2 bg-gray-400 text-white" onChange={updateSignUpDetails}>
                            <option value=''>Gender</option>
                            <option value='M'>Male</option>
                            <option value='F'>Female</option>
                            <option value='O'>Others</option>
                        </select><br></br>
                        </div >
                    <div className='w-full relative'>
                        <input type='password' name='password' className='border border-gray-300 text-white w-full rounded-full px-4 py-2 my-2 bg-transparent' placeholder='Password' onChange={updateSignUpDetails}/>
                        <FaLock className='absolute top-[30%] right-3 text-white'/>
                        {errors.password && <div className='text-xs  text-red-600 bg-gray-50 ml-6 w-64 rounded-full p-1'>{errors.password}</div>}
                    </div>
                    <button className='my-2 py-2 w-full rounded-full bg-blue-700 border border-blue-400 text-white' onClick={signup}>Sign Up</button>
                    <span className='text-white'>Already have an account? <Link to='/login' className='text-blue-400'>Login</Link></span>
                </form>
            </div>  
        </div>
    </div>
  )
}

export default SignUp
