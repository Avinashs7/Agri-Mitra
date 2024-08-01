import React from 'react'

import { FaFacebook } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { IoMdCall } from "react-icons/io";


const Footer = () => {
  return (
    <div>
        <footer className="text-center text-lg-start text-gray-300 bg-gray-900 p-4 mt-8">
        <section className="footer-element">
          <div className="container mx-auto text-center md:text-left mt-4">
            <div className="flex flex-wrap justify-center md:justify-start">
              <div className="w-full md:w-1/3 lg:w-1/4 px-4 mb-4 md:mb-0">
                <h6 className="text-uppercase font-bold">Agri Mitra</h6>
                <p>
               Agri-Mitra is dedicated to revolutionizing agriculture through innovative solutions and expert guidance. Empowering 
                farmers to achieve sustainable growth and success.
                </p>
              </div>
              <div className="w-full md:w-1/4 px-4 mb-4 md:mb-0">
                <p><a href="#!">Your Account</a></p>
                <p><a href="#!">Products</a></p>
                <p><a href="#!">Shipping Rates</a></p>
                <p><a href="#!">Help</a></p>
              </div>
              <div className="w-full md:w-1/4 px-4 mb-4 md:mb-0">
                <p><a href="#!">Terms</a></p>
                <p><a href="#!">Privacy policy</a></p>
                <p><a href="#!">Cookie settings</a></p>
                <p><a href="#!">Sitemap</a></p>
                <p><a href="#!">Accessibility statement</a></p>
              </div>
              <div className="flex flex-col items-start justify-center w-full md:w-1/4 px-4 mb-4 md:mb-0">
                <h6 className="text-uppercase font-bold">Contact</h6>
                <p className='flex flex-row justify-center items-center gap-2'><FaHome /><a>Bengaluru 560078</a></p>
                <p className='flex flex-row justify-center items-center gap-2'><HiOutlineMail /><a href="mailto:agrimitra@gmail.com">agrimitra@gmail.com</a></p>
                <p className='flex flex-row justify-center items-center gap-2'><IoMdCall /><a href="tel:6362787832">+91 6362787832</a></p>
                <p className='flex flex-row justify-center items-center gap-2'><IoMdCall /><a href='tel:7892937355'>+91 7892937355</a></p>
              </div>
            </div>
          </div>
        </section>
        <div className="flex justify-between items-center p-2 my-4 bg-gray-800">
          <div className="text-white">
            Get connected with us on social networks:
          </div>
          <div className="flex flex-row gap-2">
            <a href="#" className="text-white">
              <FaFacebook size={25}/>
            </a>
            <a href="#" className="text-white">
              <FaTwitter size={25}/>
            </a>
            <a href="#" className="text-white">
              <FaGoogle size={25}/>
            </a>
            <a href="#" className="text-white">
              <FaInstagram size={25}/>
            </a>
            <a href="#" className="text-white">
              <FaLinkedin size={25}/>
            </a>
            <a href="#" className="text-white">
              <FaGithub size={25}/>
            </a>
          </div>
        </div>
        <div className="text-center p-2 bg-gray-800 text-gray-300">
          © 2024 Copyrights reserved
        </div>
      </footer>
    </div>
  )
}

export default Footer
