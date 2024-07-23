import React from 'react'
import logo from '../images/Logo.jpg'
import { IoAddCircleOutline } from "react-icons/io5";

const IssueDetail = () => {
  return (
    <div>
      <div className='text-3xl text-center font-bold mt-7'>
        <h1>Solutions</h1>
      </div>
      <div className='flex flex-col justify-center items-center px-80 py-10'>
        <div className='shadow-md w-full py-5 my-5 hover:shadow-lg'>
            <div className='flex flex-row justify-start items-start'>
                <div className='mt-1 ml-2'>
                    <img src={logo} className='rounded-full h-8 w-8' />
                </div>
                <div>
                    <p className='ml-1'><strong>Username</strong></p>
                    <p className='text-xs'>Add your location here</p>
                </div>
            </div>
            <div>
                <p className='pl-2 pt-2'>
                    <strong>Question heading goes here</strong>
                </p>
            </div>
            <div>
                <p className='pl-2'>The solution for the questions goes here.......</p>
            </div>
        </div>   
      </div>
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
