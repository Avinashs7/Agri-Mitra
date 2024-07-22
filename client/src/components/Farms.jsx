import React from 'react'
import { useState } from 'react';
import FarmModal from './FarmModal';
import { IoAddCircleOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';

const Farms = () => {
  const [showModal, setShowModal] =useState(false)
  return (
    <div>
      <div>
        <button className='mr-5 shadow hover:shadow-xl float-right flex items-center justify-center gap-2 px-3 py-3 font-bold bg-gray-900 text-white rounded-md' 
        onClick={() => setShowModal(true)}>
          Add<IoAddCircleOutline size={30}/>
        </button>
      </div>
      <div className='text-3xl text-center font-bold mt-7'>
        <h1>Your Farms</h1>
      </div>
      <Link to='/farmDetail'>
        <div className=' mt-10 shadow-[0px_7px_29px_0px_rgba(100,100,111,0.2)] hover:shadow-lg mx-40 rounded-md text-center'>
          <h1 className='p-5'>Vijayanagar</h1>
        </div>
      </Link>
      <Link to='/farmDetail'>
        <div className=' mt-5 mx-40 rounded-md shadow-[0px_7px_29px_0px_rgba(100,100,111,0.2)] hover:shadow-lg text-center'>
          <h1 className='p-5'>Vijayanagar</h1>
        </div>
      </Link>
      <Link to='/farmDetail'>
        <div className=' mt-5 shadow-[0px_7px_29px_0px_rgba(100,100,111,0.2)] hover:shadow-lg mx-40 rounded-md text-center'>
          <h1 className='p-5'>Vijayanagar</h1>
        </div>
      </Link>
      {
        showModal && <FarmModal onClose = {() => setShowModal(false)} />
      }
    </div>
  )
}

export default Farms
