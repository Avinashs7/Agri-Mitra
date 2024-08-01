import React, { useState } from 'react'
import { FiPlus } from "react-icons/fi";
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios'
const SERVER_URL=import.meta.env.VITE_SERVER_URL;


const Question = () => {
    const {farmId}=useParams();
    const navigate=useNavigate();
    const [issue,setIssue]=useState();
    const handleSubmit=async(e)=>{
        e.preventDefault();
        const accessToken=localStorage.getItem("accessToken");
        if(!accessToken)
            navigate("/login");
        await axios.post(`${SERVER_URL}/issue/add/${farmId}`,issue,{headers:{
            Authorization:`Bearer ${accessToken}`
        }})
        .then((data)=>{
            if(data?.data?.success){
                console.log(data?.data)
                navigate(`${SERVER_URL}/issue/issueDetail/${data?.data?.data?._id}`);
            }
        })
        .catch((err)=>{
            console.error(err);
        })
    }
    const updateIssue=(e)=>{
        e.preventDefault();
        setIssue({...issue,[e.target.name]:e.target.value});
    }
    
  return (
    <div>
        <div className='text-3xl text-center font-bold mt-28'>
            <h1>What's Your Query?</h1>
        </div>
        <div className='flex flex-col justify-center items-center'>
            <div className='mt-10 flex flex-row justify-center items-center'>
                <form>
                    <div className='flex flex-row'>
                        <div className='flex flex-col justify-center items-center'>
                            <div className='mt-4 border border-gray-400 mx-40 p-10'>
                                <label className='text-xl ml-20 mt-10'>Upload the images</label><br />
                                <input name='images' type='file' onChange={updateIssue} className='text-md ml-6 mt-6'/>
                            </div>

                        </div>
                        <div className='border border-gray-400 p-4 mt-4'>
                            <div>
                                <label className='text-xl'>Describe your issue</label><br/>
                            </div>
                            <div>
                                <textarea rows={4} cols={50} name='challenges' onChange={updateIssue} className='text-base mt-2 border border-gray-300'></textarea> 
                            </div>
                        </div>
                    </div>
                </form>
            </div>
            <div className='mt-20'>
                <button onClick={handleSubmit} className='w-60 bg-gray-600 h-14 rounded-md text-white text-lg hover:bg-gray-800'>Submit</button>
            </div>
        </div>
    </div>
  )
}

export default Question
