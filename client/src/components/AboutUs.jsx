import React from 'react'
import aboutus from '../images/aboutus.png'

const AboutUs = () => {
  return (
    <div>
        <div className="bg-gray-300">
            <div className="p-10">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 text-center" >About Us</h1>
            </div>
            <div className='flex justify-center items-center'>
              <div className='float-end'>
                <img className='w-96 h-80 pl-10 pr-10 pt-30 rounded-3xl' src={aboutus} alt='Image' />
              </div>
              <p className='text-justify pt-28 pb-20 text-lg pl-40 pr-96'> We are a passionate team of agricultural experts, data scientists, and technology enthusiasts committed to transforming
                traditional farming practices. By leveraging machine learning and data analytics, our platform analyzes soil nutrient 
                levels (N, P, K values), temperature, humidity, and other climatic conditions to provide precise crop predictions and
                tailored recommendations. Our mission is to empower farmers with actionable insights to optimize their farming practices, 
                maximize crop yield, and promote sustainable soil management. We envision a world where farmers thrive, food security is
                ensured, and the environment is protected through the intelligent use of advanced technology. Join us in revolutionizing
                agriculture and securing a sustainable future for farming communities worldwide.</p>
              </div>
        </div>
    </div>
  )
}

export default AboutUs
