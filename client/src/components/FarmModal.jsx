import React, { useRef } from 'react'
import { IoClose } from "react-icons/io5";

const FarmModal = ({onClose}) => {
    const modalReference = useRef();

    const closeModal = (e) =>
    {
        if(modalReference.current == e.target)
            onClose();
    }
  return (
    <div>
        <div ref = {modalReference} onClick={closeModal} className='fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center'>
            <div className='mt-10 flex flex-col gap-5 text-white'>
                <button className='place-self-end' onClick={onClose}><IoClose size={30}/></button>
                <div className='bg-indigo-600 rounded-xl px-10 py-10 flex flex-col items-center gap-5 mx-4 w-96'>
                    <h1 className='text-4xl font-extrabold'>Add New Farm</h1>
                    <form>
                        <input type='number' placeholder='Area' className='w-full my-2 rounded-md px-4 py-3 text-black border-gray-300'/>
                        <input type='text' placeholder='Units (acre/sqkm)' className='w-full my-2 rounded-md px-4 py-3 text-black border-gray-300'/>
                        <input type='text' placeholder='Region' className='w-full my-2 rounded-md px-4 py-3 text-black border-gray-300'/>
                        <input type='text' placeholder='Report' className='w-full my-2 rounded-md px-4 py-3 text-black border-gray-300  '/>
                        <button className='mt-4 w-full justify-center items-center px-5 py-3 rounded-md bg-black font-medium'>Add</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default FarmModal
