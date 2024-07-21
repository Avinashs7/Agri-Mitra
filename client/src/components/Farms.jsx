import React from 'react'
import { useState } from 'react';
import FarmModal from './FarmModal';
import { IoAddCircleOutline } from "react-icons/io5";

const Farms = () => {
  const [showModal, setShowModal] =useState(false)
  return (
    <div>
      <div>
        <button className='mt-5 mr-5 float-right flex items-center justify-center gap-2 px-3 py-3 font-bold bg-gray-900 text-white rounded-md' 
        onClick={() => setShowModal(true)}>
          Add<IoAddCircleOutline size={30}/>
        </button>
      </div>
      {
          showModal && <FarmModal onClose = {() => setShowModal(false)} />
      }
    </div>
  )
}

export default Farms
