import React from 'react'
import crop from '../images/crop.png'
import nitrogen from '../images/Nitrogen.png'
import texture from '../images/texture.png'
import depth from '../images/Depth.png'
import pH from '../images/pH.png'
import pressure from '../images/pressure.png'
import humidity from '../images/humidity.png'
import climate from '../images/climate.png'

const FarmDetail = () => {
  return (
    <div>
      <div>
            <h1 className='text-3xl font-medium text-center mt-5'>Enter your farm details</h1>
        </div>
        <div className='flex justify-center'>
            <button onClick={()=>setCropShowModal(true)}>
                <div className='m-8 shadow-xl hover:shadow-2xl w-96 h-80'>
                    <img src={crop} className='p-6'/>
                    <label className='mr-5 text-lg'>Crop:</label>
                    <input type='text' className='border border-gray-500 w-60' />
                </div>
            </button>
            <div className='flex flex-col m-8 shadow-xl hover:shadow-2xl w-96 h-80'>
                <img src={nitrogen} className='pt-10 px-10 h-64'/>
                <div className='flex flex-row pt-4'>
                    <label className='ml-12 mr-5 text-lg'>NPK:</label>
                    <input type='text' className='border border-gray-500 w-60' />
                </div>
            </div>
            <div className='flex flex-col m-8 shadow-xl hover:shadow-2xl w-96 h-80'>
                <img src={texture} className='mt-10 pl-6 pr-6' />
                <div className='flex flex-row mt-7 justify-center items-center'>
                    <label className='text-lg mr-4'>Texture:</label>
                    <input type='text' className='border border-gray-500 w-60' />
                </div>
            </div>
        </div>
        <div className='flex justify-center'>
            <div className='m-8 shadow-xl hover:shadow-2xl w-96 h-80'>
                <img src={depth} className='px-6 pt-6'/>
                <div className='flex justify-center items-center pt-2'>
                    <label className='mr-5 text-lg'>Depth:</label>
                    <input type='text' className='border border-gray-500 w-60' />
                </div>
            </div>
            <div className='m-8 shadow-xl hover:shadow-2xl w-96 h-80'>
                <img src={pH} className='px-6 pt-8'/>
                <div className='flex justify-center items-center pt-5'>
                    <label className='mr-4 text-lg'>pH:</label>
                    <input type='text' className='border border-gray-500 w-60' />
                </div>
            </div>
            <div className='m-8 shadow-xl hover:shadow-2xl w-96 h-80'>
                <img src={pressure} className='px-6 pt-8'/>
                <div className='flex justify-center items-center pt-5'>
                    <label className='mr-4 text-lg'>Pressure:</label>
                    <input type='text' className='border border-gray-500 w-60' />
                </div>
            </div>
        </div>
        <div className='flex justify-center'>
            <div className='m-8 shadow-xl hover:shadow-2xl w-96 h-80'>
                <img src={humidity} className='px-6 pt-5'/>
                <div className='flex justify-center items-center pt-4'>
                    <label className='mr-4 text-lg'>Humidity:</label>
                    <input type='text' className='border border-gray-500 w-60' />
                </div>
            </div>
            <div className='m-8 shadow-xl hover:shadow-2xl w-96 h-80'>
                <img src={climate} className='px-6 pt-8'/>
                <div className='flex justify-center items-center pt-4'>
                    <label className='mr-4 text-lg'>Climate:</label>
                    <input type='text' className='border border-gray-500 w-60' />
                </div>
            </div>
        </div>
        <div className='flex flex-col justify-center items-center p-10'>
            <button className='bg-gray-900 w-72 h-16 text-white rounded-md text-2xl hover:bg-gray-950'>Submit</button>
        </div>
    </div>
  )
}

export default FarmDetail
