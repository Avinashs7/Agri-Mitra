import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import logo from '../images/Logo.jpg'
import axios from 'axios';
const SERVER_URL=import.meta.env.VITE_SERVER_URL;


const Issues = () => {
    const navigate=useNavigate();
    const [issues,setIssues]=useState();
    const fetchIssues=async(accessToken)=>{
        await axios.get(`${SERVER_URL}/issue/allIssues`,{headers:{
            Authorization:`Bearer ${accessToken}`
        }})
        .then((data)=>{
            setIssues(data?.data?.data);
        })
        .catch((err)=>{
            console.error(err);
        })
    }
    useEffect(()=>{
        const accessToken=localStorage.getItem("accessToken"); 
        if(!accessToken)
            navigate("/login");
        fetchIssues(accessToken)
    },[])
  return (
    <div>
      <div className='text-3xl text-center font-bold mt-7'>
        <h1>Challenges Faced by Farmers</h1>
      </div>
        <div className='flex flex-col justify-center items-center px-80 py-10'>
            {issues&& issues.map((issue)=>{
                return (
                    <Link to={`/issueDetail/${issue._id}`} className='shadow-md w-full py-5 my-5 hover:shadow-lg'>
                    <div key={issue._id} className='flex flex-row justify-start items-start'>
                        <div className='mt-1 ml-2'>
                            <img src={issue?.userId?.avatar} className='rounded-full h-8 w-8' />
                        </div>
                        <div>
                            <p className='ml-1'><strong>{issue?.userId?.firstName} {issue?.userId?.lastName}</strong></p>
                            <p className='text-xs'>{issue?.ownedBy?.region}</p>
                        </div>
                    </div>
                    <div>
                        <p className='pl-2 pt-2'>
                            <strong>{issue.challenges}</strong>
                        </p>
                    </div>
                    <div>
                        <p className='pl-2'></p>
                    </div>
                    </Link>
                );
            })}
            
            
        </div>
    </div>
  )
}

export default Issues
