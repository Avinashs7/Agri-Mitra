import React, { useEffect } from 'react'
import aboutus from '../images/aboutus.png'
import Aos from 'aos'

const AboutUs = () => {
  useEffect(()=>{
    Aos.init({duration:1000});
  },[]);
  return (
    <div id='aboutUs'>
        <div className="mx-auto max-w-2xl lg:text-center pt-24 pb-10">
                <h1 className="text-4xl font-bold tracking-tight sm:text-6xl text-gray-900" data-aos="zoom-in">About Us</h1>
            </div>
            <div className='flex flex-row pb-24 px-16'>
              <div className='px-24 py-20'>
                <p className='text-xl text-justify' data-aos="zoom-in"> We are a passionate team of agricultural experts, data scientists, and technology enthusiasts committed to transforming
                  traditional farming practices. By leveraging machine learning and data analytics, our platform analyzes soil nutrient 
                  levels (N, P, K values), temperature, humidity, and other climatic conditions to provide precise crop predictions and
                  tailored recommendations. Our mission is to empower farmers with actionable insights to optimize their farming practices, 
                  maximize crop yield, and promote sustainable soil management. We envision a world where farmers thrive, food security is
                  ensured, and the environment is protected through the intelligent use of advanced technology. Join us in revolutionizing
                  agriculture and securing a sustainable future for farming communities worldwide.
                </p>
              </div>
              <img className='w-96 h-80 pl-10 pr-10 pt-30 mt-12 rounded-md' src={aboutus} alt='Image' data-aos="zoom-in"/>
            </div>
    </div>
  )
}

export default AboutUs
