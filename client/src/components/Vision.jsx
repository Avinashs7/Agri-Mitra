import React from 'react'

const Vision = () => {
  return (
    <div>
      <div className="bg-gray-900 pt-20 pb-10">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:text-center">
                <h1 className="text-4xl font-bold tracking-tight text-gray-300 sm:text-6xl">Vision and Mission</h1>
            </div>
            <div className="mx-auto mt-16 sm:mt-20 lg:mt-24 lg:max-w-4xl">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
                <div className="relative border border-solid border-white">
                    <dt className="text-center text-2xl font-semibold leading-7 text-gray-300 pt-5">Vision</dt>
                    <dd className="mt-2 text-base leading-7 pl-7 pr-5 text-white">Our vision is to lead a revolution in agriculture by harnessing
                        the power of machine learning and data analytics to enable farmers to make informed decisions that optimize crop yield
                        and enhance soil health. We envision a future where sustainable farming practices, driven by advanced technology, ensure
                        food security and contribute to the well-being of our planet, fostering a harmonious relationship between innovation, 
                        nature, and agriculture.</dd>
                </div>
                <div className="relative border border-solid border-white">
                    <dt className="text-center text-2xl font-semibold leading-7 text-gray-300 pt-5">Mission</dt>
                    <dd className="mt-2 text-base leading-7 text-white pl-7 pr-5 pb-5">Our mission is to empower farmers with state-of-the-art machine 
                        learning models and data-driven insights, helping them select the most suitable crops based on detailed soil nutrient 
                        analysis and climatic conditions. By providing precise and actionable recommendations, we aim to maximize crop yield, 
                        enrich soil nutrients, and promote sustainable farming practices. We are dedicated to transforming agriculture through
                        cutting-edge technology, innovative solutions, and a commitment to environmental stewardship, ultimately improving the 
                        livelihoods of farmers and contributing to a more sustainable world.</dd>
                </div>
            </dl>
            </div>
        </div>
        </div>

    </div>
  )
}

export default Vision
