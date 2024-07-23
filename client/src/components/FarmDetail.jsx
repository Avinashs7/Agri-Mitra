import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import crop from '../images/crop.png'
import nitrogen from '../images/Nitrogen.png'
import texture from '../images/texture.png'
import depth from '../images/Depth.png'
import pH from '../images/pH.png'
import pressure from '../images/pressure.png'
import humidity from '../images/humidity.png'
import axios from 'axios'

const FarmDetail = () => {
    const [farmReport,setFarmReport]=useState();
    const {farmId}=useParams();
    const navigate=useNavigate()
    // console.log(farmId)
    const [solution,setSolution]=useState();
    const updateFarmReport=(e)=>{
        e.preventDefault();
        setFarmReport({...farmReport,[e.target.name]:e.target.value});
    }
    const predictSolution=async(reportId)=>{
        const accessToken=localStorage.getItem("accessToken");
        if(!accessToken)
            navigate("/login")
        await axios.post(`http://localhost:8000/predict/crop/${reportId}`,farmReport,{headers:{
            Authorization:`Bearer ${accessToken}`
        }})
        .then((data)=>{
            setSolution(data?.data?.data);
        })
    }
    const handleSubmit=async(e)=>{
        e.preventDefault();
        const accessToken=localStorage.getItem("accessToken");
        await axios.post(`http://localhost:8000/report/add/${farmId}`,farmReport,{
            headers:{
                Authorization:`Bearer ${accessToken}`
            }
        })
        .then((data)=>{
            // console.log(data?.data?.data?._id)
            predictSolution(data?.data?.data?._id);
        })
        .catch((err)=>{
            console.error(err);
        })
    }
    const fetchPrediction=async(reportId)=>{
        const accessToken=localStorage.getItem("accessToken");
        await axios.get(`http://localhost:8000/predict/get/${reportId}`,{headers:{
            Authorization:`Bearer ${accessToken}`
        }})
        .then((data)=>{
            if(data?.data?.success){
                // console.log(data?.data)
                setSolution(data?.data?.data)
            }
        })
        .catch((err)=>{
            console.error(err);
        })
    }
    const fetchFarmDetails=async()=>{
        const accessToken=localStorage.getItem("accessToken");
        await axios.get(`http://localhost:8000/report/get/${farmId}`,{headers:{
            Authorization:`Bearer ${accessToken}`
        }})
        .then((data)=>{
            if(data?.data?.success){
                setFarmReport(data?.data?.data);
                fetchPrediction(data?.data?.data?._id);
            }
        })
        .catch((err)=>{
            console.error(err);
        })
    }

    useEffect(()=>{
        fetchFarmDetails();
    },[solution?.crop])
    return (
    <div>
      <div>
            <h1 className='text-3xl font-medium text-center mt-5'>Enter your farm details</h1>
        </div>
        <div className='flex justify-center'>
            <button onClick={()=>setCropShowModal(true)}>
                <div className='m-8 shadow-xl hover:shadow-2xl w-96 h-80'>
                    <img src={crop} className='p-6'/>
                    <label className='mr-5 text-lg'>Nitrogen:</label>
                    <input type='number' value={farmReport?.N} name="N" onChange={updateFarmReport} className='border border-gray-500 w-60' />
                </div>
            </button>
            <div className='flex flex-col m-8 shadow-xl hover:shadow-2xl w-96 h-80'>
                <img src={nitrogen} className='pt-10 px-10 h-64'/>
                <div className='flex flex-row pt-4'>
                    <label className='ml-1 mr-5 text-lg'>Phosphorous:</label>
                    <input type='number' value={farmReport?.P} name="P" onChange={updateFarmReport} className='border border-gray-500 w-60' />
                </div>
            </div>
            <div className='flex flex-col m-8 shadow-xl hover:shadow-2xl w-96 h-80'>
                <img src={texture} className='mt-10 pl-6 pr-6' />
                <div className='flex flex-row mt-7 justify-center items-center'>
                    <label className='text-lg mr-4'>Potassium:</label>
                    <input type='number' value={farmReport?.K} name='K' onChange={updateFarmReport} className='border border-gray-500 w-60' />
                </div>
            </div>
        </div>
        <div className='flex justify-center'>
            <div className='m-8 shadow-xl hover:shadow-2xl w-96 h-80'>
                <img src={depth} className='px-6 pt-6'/>
                <div className='flex justify-center items-center pt-2'>
                    <label className='mr-5 text-lg'>Temperature:</label>
                    <input type='number' value={farmReport?.temperature} name='temperature' onChange={updateFarmReport} className='border border-gray-500 w-60' />
                </div>
            </div>
            <div className='m-8 shadow-xl hover:shadow-2xl w-96 h-80'>
                <img src={pH} className='px-6 pt-8'/>
                <div className='flex justify-center items-center pt-5'>
                    <label className='mr-4 text-lg'>pH:</label>
                    <input type='number' value={farmReport?.ph} name='ph' onChange={updateFarmReport} className='border border-gray-500 w-60' />
                </div>
            </div>
            <div className='m-8 shadow-xl hover:shadow-2xl w-96 h-80'>
                <img src={pressure} className='px-6 pt-8'/>
                <div className='flex justify-center items-center pt-5'>
                    <label className='mr-4 text-lg'>Rainfall:</label>
                    <input type='number' value={farmReport?.rainfall} name='rainfall' onChange={updateFarmReport} className='border border-gray-500 w-60' />
                </div>
            </div>
        </div>
        <div className='flex justify-center'>
            <div className='m-8 shadow-xl hover:shadow-2xl w-96 h-80'>
                <img src={humidity} className='px-6 pt-5'/>
                <div className='flex justify-center items-center pt-4'>
                    <label className='mr-4 text-lg'>Humidity:</label>
                    <input type='number' value={farmReport?.humidity} name='humidity' onChange={updateFarmReport} className='border border-gray-500 w-60' />
                </div>
            </div>
        </div>
        <div>
        <Link className='mr-5 shadow hover:shadow-md float-right flex items-center justify-center gap-2 px-3 py-3 font-bold bg-gray-900 text-white rounded-md' 
            to={`/question/${farmId}`} >
            Raise an Issue
        </Link>
        </div>
        {
            solution&&
            <div className='mt-10 shadow-[0px_7px_29px_0px_rgba(100,100,111,0.2)] hover:shadow-lg mx-40 rounded-md text-center py-6'>
                <h1 className='text-xl text-bold'>Predicted Crop : {solution?.crop}</h1>
                <p>{solution?.benefits}</p>
            </div>
        }
        
        <div className='flex flex-col justify-center items-center p-10'>
            <button onClick={handleSubmit} className='bg-gray-900 w-72 h-16 text-white rounded-md text-2xl hover:bg-gray-950'>Submit</button>
        </div>
        
    </div>
  )
}

export default FarmDetail
