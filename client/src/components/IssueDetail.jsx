import React, { useState,useEffect } from 'react'
import logo from '../images/Logo.jpg'
import { IoAddCircleOutline } from "react-icons/io5";
import { useParams,Link } from 'react-router-dom';
import axios from 'axios'


const IssueDetail = () => {
  const [issue,setIssue]=useState();
  const [solution,setSolution]=useState();
  const {issueId}=useParams();
  const fetchSolution=async(issueId,accessToken)=>{
    await axios.get(`http://localhost:8000/solution/allSolution/${issueId}`,{headers:{
      Authorization:`Bearer ${accessToken}`
    }})
    .then((data)=>{
      setSolution(data?.data?.data)
    })
    .catch((err)=>{
      console.error(err);
    })
  }
  const fetchIssue=async()=>{
    const accessToken=localStorage.getItem("accessToken")
    await axios.get(`http://localhost:8000/issue/getIssue/${issueId}`,{headers:{
      Authorization:`Bearer ${accessToken}`
    }})
    .then((data)=>{
      setIssue(data?.data?.data)
      fetchSolution(data?.data?.data?._id,accessToken)
    })
    .catch((err)=>{
      console.error(err);
    })
  }
  useEffect(()=>{
    fetchIssue();
  },[])
  return (
    <div>
      <div className='text-3xl text-center font-bold mt-7'>
        <h1>Issue</h1>
      </div>
    {
      issue&&
      <div className='flex flex-col justify-center items-center px-80 py-10'>
        <div className='shadow-md w-full py-5 my-5 hover:shadow-lg'>
            <div className='flex flex-row justify-start items-start'>
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
                    <strong>{issue?.challenges}</strong>
                </p>
            </div>
        </div>
      </div>
    }
    <div className='text-3xl text-center font-bold mt-7'>
        <h1>Suggestions from fellow farmers</h1>
      </div>
      {
        solution&&
        solution.map((eachSolution)=>{
          return(
              <div className='flex flex-col justify-center items-center px-80 '>
                <div className='shadow-md w-full py-5 my-5 hover:shadow-lg'>
                  <p className='pl-2 pt-2'>{eachSolution?.answer}</p>
                  <div className='flex flex-row justify-start items-start'>
                    <img src={eachSolution?.advisedBy?.avatar} className='rounded-full h-6 w-6 ' />
                    <p className='pl-2 pt-2 text-xs'>{eachSolution?.advisedBy?.firstName} {eachSolution?.advisedBy?.lastName}</p>
                  </div>
                </div>
            </div>
            );
          })
        }
      <div className='flex flex-col h-full mr-5 mt-52 justify-end items-end '>
        <Link to={`/solution/${issueId}`} className='fixed p-5 shadow hover:shadow-xl flex items-center justify-center gap-2 px-3 py-3 font-bold bg-gray-900 text-white rounded-md'> 
          Add Your Solution <IoAddCircleOutline size={30}/>
        </Link>
      </div>
    </div>
  )
}

export default IssueDetail
