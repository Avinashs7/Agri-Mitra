import React, { useState } from 'react'
import logo from '../images/Logo.jpg'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
const SERVER_URL=import.meta.env.VITE_SERVER_URL;


const   Solution = () => {
  const {issueId}=useParams();
  const [solution,setSolution]=useState();
  const navigate=useNavigate();
  const handleSubmit=async()=>{
    const accessToken=localStorage.getItem('accessToken');
    if(!accessToken)
      navigate("/login")
    await axios.post(`${SERVER_URL}/solution/add/${issueId}`,solution,{
      headers:{
        Authorization:`Bearer ${accessToken}`
      }
    })
    .then((data)=>{
      if(data?.data?.success)
        navigate(`/issueDetail/${issueId}`)
    })
    .catch((err)=>{
      console.error(err);
    })
  }
  const updateSolution=(e)=>{
    e.preventDefault();
    setSolution({...solution,[e.target.name]:e.target.value});
  }
  console.log(solution?.images)
  return (
    <div>
      <div className='text-3xl text-center font-bold mt-7'>
        <h1>Explain Your Solution</h1>
      </div>
      <div className='mt-10 pb-20'>
        <form>
            <div>
                <div className='flex flex-col mx-96'>
                    <label className='text-start mb-2 ml-4 text-lg font-bold'>Describe Your Answer</label>
                    <textarea name='answer' onChange={updateSolution} rows={10} cols={50} className='border border-gray-500'></textarea>
                </div>
                <div className='flex flex-col mx-96 mt-10 border border-gray-500'>
                    <label className='mb-5 p-2 ml-5 text-lg font-bold'>Upload Image</label>
                    <input name='images' type='file' onChange={updateSolution} className='ml-5 p-5' />
                    {solution&& 
                      <div>
                          <img src={solution?.images} className='h-48 w-48 mx-auto pb-5'/>
                      </div>
                    }
                </div>
            </div>
        </form>
      </div>
        <div className='flex flex-col justify-center items-center'>
            <button onClick={handleSubmit} className='bg-gray-900 text-white rounded-md p-4 w-60 justify-center items-center mb-10 text-xl hover:bg-black'>Submit</button>
        </div>
    </div>
  )
}

export default Solution
