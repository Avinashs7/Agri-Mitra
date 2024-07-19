import React from 'react'
import { useState } from 'react'
import OtpInput from 'otp-input-react'
import { CgSpinner } from 'react-icons/cg'
import { BsShieldLockFill, BsTelephoneFill } from 'react-icons/bs'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import { useLocation } from 'react-router-dom'

const Otp = () => {
    const [otp, setOtp] = useState("")
    const [loading, setLoading] = useState("")
    const [phone, setPhone] = useState("")
    const [showOtp, setShowOtp] = useState(true)
    const location=useLocation();
    const id=location.state;
    const verifyOtp=async(e)=>{
        e.preventDeault();
        await axios.post(`http://localhost:8000/user/verify/${id}`,{otp:otp})
        .then((data)=>{
            console.log("verified");
        })
        .catch((err)=>{
            console.error(err);
        })
    }
  return (
    <>
        <div className='h-[95vh] flex flex-col items-center justify-center text-black'>
            <div className='h-[350px] bg-blue-600/20 border border-blue-300 backdrop-blur-lg px-6 w-96'>
    {
        showOtp ?
                <div>
                    <div className='bg-white my-6 text-emerald-500 w-fit mx-auto p-4 rounded-full'>
                        <BsShieldLockFill size={30}/>
                    </div>
                    {/* <h1 className='text-3xl font-bold pb-6 pt-6 text-center text-black'>Verify your number</h1> */}
                    <form action=''>
                        <div>
                            <label className='font-bold text-2xl text-black text-center my-2'>Enter your OTP</label>
                            <OtpInput OTPLength={6} otpType='number' disabled={false} autofocus className='otp-container my-3   ' value={otp} onChange={setOtp}>
                            </OtpInput>
                            <button className='bg-emerald-600 w-full my-4 flex gap-1 items-center justify-center py-3 text-white rounded-lg'>
                            {
                                loading && <CgSpinner size={20} className='animate-spin'/>
                            }
                            <button onClick={verifyOtp}>Verify</button>
                            </button>
                        </div>
                    </form>
                </div>
                :
                <div>
                    {/* <h1 className='text-3xl font-bold pb-6 pt-6 text-center text-black'>Verify your number</h1> */}
                    <div className='bg-white my-6 text-emerald-500 w-fit mx-auto p-4 rounded-full'>
                        <BsTelephoneFill size={30}/>
                    </div>
                    <form action=''>
                        <div>
                            <label className='my-4 font-bold text-2xl text-black text-center'>Verify your phone number</label>
                            <PhoneInput country={'in'} value={phone} onChange={setPhone} className='my-4'/>
                            <button className='bg-emerald-600 w-full my-4 flex gap-1 items-center justify-center py-3 text-white rounded-lg'>
                            {
                                loading && <CgSpinner size={20} className='animate-spin'/>
                            }
                            <span>Send code via sms</span>
                            </button>
                        </div>
                    </form>
                </div>
    }
            </div>
        </div>
    </>
  )
}

export default Otp
