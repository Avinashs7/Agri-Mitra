import React from 'react'
import { Link } from 'react-router-dom'

const Landing = () => {
  return (
    <div>
        <div className="relative isolate px-6 pt-14 lg:px-8 bg-gradient-to-tr from-[#242527] to-[#040303] bg-opacity-25">
            <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-28">
            <div className="text-center">
                <h1 className="text-4xl font-bold tracking-tight text-gray-100 sm:text-6xl">Farming Meets Innovation: Predict Your Best Crop
                </h1>
                <p className="mt-6 text-lg leading-8 text-gray-300">Empowering farmers with data-driven crop predictions for optimal yield 
                  and sustainable farming.</p>
                <div className="mt-10 flex items-center justify-center gap-x-6">
                <Link to="/signup" className="rounded-md max-w-96 bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm
                hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2
                focus-visible:outline-indigo-600">Get Started</Link>
                </div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Landing
