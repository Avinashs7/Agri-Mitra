import React, { useEffect } from 'react'
import AOS from 'aos'

const Workflow = () => {
  useEffect(()=>{
    AOS.init({duration:2000});
  }, []);

  return (
    <div>
        <div className="text-center px-20" data-aos='fade-right'>
          <h1 className="text-4xl pt-20 pb-20 font-bold tracking-tight text-gray-900 sm:text-6xl">What we Do?</h1>
        </div>
        <div className='px-40 pb-20 text-lg'>
          <div className='flex flex-row justify-center items-center text-justify px-18 py-5'>
            <div className='shadow-custom mx-10 p-10 h-40' data-aos="fade-right">
              <p><b>Analyze Soil Nutrients:</b> We start by collecting essential soil data, including nitrogen (N), phosphorus (P),
              and potassium (K) values, to understand the nutrient profile of your farm.
              </p>
            </div>
            <div className='shadow-custom h-40 p-10' data-aos="fade-right">
              <b>Assess Climatic Conditions:</b> Next, we gather critical climatic information such as temperature, humidity, and 
              other environmental factors that influence crop growth.
            </div>
          </div>
          <div className='flex flex-row justify-center items-center text-justify px-18 py-10'>
            <div className='shadow-custom mx-10 pt-5 px-10 h-40' data-aos="fade-right">
              <b>Predict Optimal Crops:</b> Using advanced algorithms and predictive analytics, we identify the best crop varieties that 
              not only maximize your yield but also enrich your soil with the nutrients it needs.
            </div>
            <div className='shadow-custom pt-5 px-10 h-40' data-aos="fade-right">
              <b>Empower Your Farm:</b> Armed with precise recommendations, you can make informed decisions, ensuring a bountiful harvest 
              and sustainable soil health for future planting.
            </div>
          </div>
        </div>
    </div>
  )
}

export default Workflow
