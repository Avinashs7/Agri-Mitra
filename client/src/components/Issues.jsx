import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../images/Logo.jpg'

const Issues = () => {
  return (
    <div>
        <div>
        <Link className='mr-5 shadow hover:shadow-md float-right flex items-center justify-center gap-2 px-3 py-3 font-bold bg-gray-900 text-white rounded-md' 
            to='/question' >
          Ask Question
        </Link>
      </div>
      <div className='text-3xl text-center font-bold mt-7'>
        <h1>Challenges Faced by Farmers</h1>
      </div>
        <div className='flex flex-col justify-center items-center px-80 py-10'>
            <Link to='/issueDetail' className='shadow-md w-full py-5 my-5 hover:shadow-lg'>
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
            </Link>
            <Link to='/issueDetail' className='shadow-md w-full py-5 my-5 hover:shadow-lg'>
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
            </Link>
            <Link to='/issueDetail' className='shadow-md w-full py-5 my-5 hover:shadow-lg'>
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
            </Link>
            <Link to='/issueDetail' className='shadow-md w-full py-5 my-5 hover:shadow-lg'>
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
            </Link>
            <Link to='/issueDetail' className='shadow-md w-full py-5 my-5 hover:shadow-lg'>
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
            </Link>
        </div>
    </div>
  )
}

export default Issues
