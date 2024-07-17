import React from 'react'

const Workflow = () => {
  return (
    <div>
        <div className="text-center">
        <h1 className="text-4xl pt-32 pb-20 font-bold tracking-tight text-gray-900 sm:text-6xl">What we Do?</h1>
            <div className="mt-1 flex flex-col sm:mt-0 sm:flex-row sm:flex-wrap sm:space-x-6">
                <ol className='text-xl pl-40 pr-40 pb-44 leading-10 list-disc text-left'>
                    <li><b>Analyze Soil Nutrients:</b> We start by collecting essential soil data, including nitrogen (N), phosphorus (P),
                    and potassium (K) values, to understand the nutrient profile of your farm.</li>
                    
                    <li><b>Assess Climatic Conditions:</b> Next, we gather critical climatic information such as temperature, humidity, and 
                    other environmental factors that influence crop growth.</li>
                    
                    <li><b>Predict Optimal Crops:</b> Using advanced algorithms and predictive analytics, we identify the best crop varieties that 
                    not only maximize your yield but also enrich your soil with the nutrients it needs.</li>

                    <li><b>Empower Your Farm:</b> Armed with precise recommendations, you can make informed decisions, ensuring a bountiful harvest 
                    and sustainable soil health for future planting.</li>
                </ol> 
            </div>
        </div>
    </div>
  )
}

export default Workflow
