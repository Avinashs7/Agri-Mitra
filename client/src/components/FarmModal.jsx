import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react'
import { IoClose } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';


const FarmModal = ({onClose,details={}}) => {
    const modalReference = useRef();
    const navigate=useNavigate();
    useEffect(()=>{
        if(Object.keys(details).length!==0)
            setFarmDetails(details)
    },[])
    const [farmDetails,setFarmDetails]=useState();
    const closeModal = (e) =>
    {
        if(modalReference.current == e.target)
            onClose();
    }
    const updateFarmDetails=(e)=>{
        setFarmDetails({...farmDetails,[e.target.name]:e.target.value});
    }
    const submitFarmDetails=async(e)=>{
        e.preventDefault();
        const accessToken=localStorage.getItem("accessToken");
        if(accessToken){
            await axios.post("http://localhost:8000/farm/add",farmDetails,{headers:{
                Authorization:`Bearer ${accessToken}`
            }}).then((data)=>{
                onClose()
            })
            .catch((err)=>{
                console.error(err);
            })
        }
    }
    console.log(farmDetails)
  return (
    <div>
        <div ref = {modalReference} onClick={closeModal} className='fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center'>
            <div className='mt-10 flex flex-col gap-5 text-white'>
                <button className='place-self-end' onClick={onClose}><IoClose size={30}/></button>
                <div className='bg-indigo-600 rounded-xl px-10 py-10 flex flex-col items-center gap-5 mx-4 w-96'>
                    <h1 className='text-4xl font-extrabold'>Add New Farm</h1>
                    <form>
                        <input type='number' name='area' value={farmDetails?.area} onChange={updateFarmDetails} placeholder='Area' className='w-full my-2 rounded-md px-4 py-3 text-black border-gray-300' required/>
                        <input type='text' name='unit' value={farmDetails?.units} onChange={updateFarmDetails} placeholder='Units (acre/sqkm)' className='w-full my-2 rounded-md px-4 py-3 text-black border-gray-300' required/>
                        <input type='text' name='region' value={farmDetails?.region} onChange={updateFarmDetails} placeholder='Region' className='w-full my-2 rounded-md px-4 py-3 text-black border-gray-300' required/>
                        <button onClick={submitFarmDetails} className='mt-4 w-full justify-center items-center px-5 py-3 rounded-md bg-black font-medium'>Add</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default FarmModal
