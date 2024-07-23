import React, { useEffect } from 'react'
import { useState } from 'react';
import FarmModal from './FarmModal';
import { IoAddCircleOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';
import axios from 'axios';

const Farms = () => {
  const [showModal, setShowModal] =useState(false)
  const [farmDetails,setFarmDetails]=useState({});
  useEffect(()=>{
    const fetchFarm=async()=>{
      const accessToken=localStorage.getItem("accessToken")
      await axios.get("http://localhost:8000/farm/getFarms",{headers:{
        Authorization:`Bearer ${accessToken}`
      }})
      .then((data)=>{
        setFarmDetails(data?.data?.data)
      })
      .catch((err)=>{
        console.error(err);
      })
    }
    fetchFarm();
  },[showModal])
  return (
    <div>
      <div>
        <button className='mr-5 shadow hover:shadow-xl float-right flex items-center justify-center gap-2 px-3 py-3 font-bold bg-gray-900 text-white rounded-md' 
        onClick={() => setShowModal(true)}>
          Add<IoAddCircleOutline size={30}/>
        </button>
      </div>
      <div className='text-4xl text-center font-bold mt-7'>
        <h1>Your Farms</h1>
      </div>
      {farmDetails && farmDetails.length > 0 ? (
        farmDetails.map((farmDetail) => (
          <Link to="/farmDetail" key={farmDetail._id}>
              <div className="mt-10 shadow-[0px_7px_29px_0px_rgba(100,100,111,0.2)] hover:shadow-lg mx-40 rounded-md text-center py-6">
                <h1 className='text-xl text-bold'>{farmDetail._id}</h1>
                <h6 className='text-lg'>{farmDetail.area} {farmDetail.unit}</h6>
                <address className='italic'>{farmDetail.region}</address>
              </div>
          </Link>
        ))
      ) : ( 
        <div>
          <p>No farms registered by the user</p>
        </div>
      )}
      {
        showModal && <FarmModal onClose = {() => setShowModal(false)} />
      }
    </div>
  )
}

export default Farms
