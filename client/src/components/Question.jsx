import React from 'react'
import { FiPlus } from "react-icons/fi";

const Question = () => {
  return (
    <div>
        <div className='text-3xl text-center font-bold mt-28'>
            <h1>What's Your Query?</h1>
        </div>
        <div className='flex flex-col justify-center items-center'>
            <div className='mt-10 flex flex-row justify-center items-center'>
                <form>
                    <div className='flex flex-row'>
                        <div className='flex flex-col justify-center items-center'>
                            <div className='mt-4 border border-gray-400 mx-40 p-10'>
                                <label className='text-xl ml-20 mt-10'>Upload the image</label><br />
                                <input type='file' className='text-md ml-6 mt-6'/>
                            </div>

                        </div>
                        <div className='border border-gray-400 p-4 mt-4'>
                            <div>
                                <label className='text-xl'>Describe your question</label><br/>
                            </div>
                            <div>
                                <textarea rows={4} cols={50} className='text-base mt-2 border border-gray-300'></textarea> 
                            </div>
                        </div>
                    </div>
                </form>
            </div>
            <div className='mt-20'>
                <button className='w-60 bg-gray-600 h-14 rounded-md text-white text-lg hover:bg-gray-800'>Submit</button>
            </div>
        </div>
    </div>
  )
}

export default Question
