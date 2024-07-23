import React, { useState,useEffect } from 'react'
import logo from '../images/Logo.jpg'
import { IoAddCircleOutline } from "react-icons/io5";
import { useParams } from 'react-router-dom';
import axios from 'axios'

const IssueDetail = () => {
  const [issue,setIssue]=useState();
  const [solution,setSolution]=useState();
  const {issueId}=useParams();
  const fetchSolution=async(issueId)=>{
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
      fetchSolution(data?.data?.data?._id)
    })
    .catch((err)=>{
      console.error(err);
    })
  }
  useEffect(()=>{
    fetchIssue();
  },[])
  console.log(issue)
  return (
    <div>
      <div className='text-3xl text-center font-bold mt-7'>
        <h1>Problems and Suggestions from fellow farmers</h1>
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
            {
              solution&&
              solution.map((eachSolution)=>{
                <div>
                  <p className='pl-2'>{eachSolution?.answer}</p>
                  <div className='mt-1 ml-2'>
                    <img src={eachSolution?.advisedBy?.avatar} className='rounded-full h-8 w-8' />
                    <p>{eachSolution?.advisedBy?.firstName} {eachSolution?.userId?.lastName}</p>
                  </div>
                </div>
              })
            }
        </div>   
      </div>
    }
      <div >
        <button className='mr-5 shadow hover:shadow-xl float-right flex items-center justify-center gap-2 px-3 py-3 font-bold bg-gray-900 text-white rounded-md' 
        onClick={() => setShowModal(true)}>
          Add Your Solution<IoAddCircleOutline size={30}/>
        </button>
      </div>
    </div>
  )
}

export default IssueDetail
