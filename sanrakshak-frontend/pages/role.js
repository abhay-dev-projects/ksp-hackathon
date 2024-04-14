'use client'
import React, { useEffect, useState } from 'react'
import RoleTypeInput from '@/components/userType/roleTypeInput';
import { FaUserTie } from "react-icons/fa";
import { GiPoliceOfficerHead } from "react-icons/gi";
import { RiAdminFill } from "react-icons/ri";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import IntialUserNavbar from '@/components/navbar/intialUserNavbar';
import { useRouter } from 'next/router';

const Role = () => {
  const [step, setStep] = useState(1)
  const [userType, setUserType] = useState("");
  const [city, setCity] = useState("")
  const router = useRouter();

  const submitData = async (e) => {
    if (userType && city) {
      console.log("role subamit data is called")
      router.push(`/register?role=${userType}&city=${city}`)
    }
  }

  console.log("role", userType)
  console.log("city", city)
  return (
    <>
      <IntialUserNavbar showLink={false} />
      {
        step === 1 ? (
          <div className=' w-[100%] h-[calc(100vh-4rem)] dark:bg-[#080F25] flex flex-col justify-center items-center gap-[1rem]  ' >
            <h2 className=' dark:text-[#c1c3ff] text-[#2c2c33] text-[2rem]  font-[600] tracking-wide mb-[3rem] ' >Select your Role</h2>
            <div className='flex justify-center items-center gap-[8rem]' >
              <RoleTypeInput user={'general'} icon={<GiPoliceOfficerHead />} setUserType={setUserType} userType={userType} />
              <RoleTypeInput user={'police'} icon={<GiPoliceOfficerHead />} setUserType={setUserType} userType={userType} />
              <RoleTypeInput user={'super'} icon={<GiPoliceOfficerHead />} setUserType={setUserType} userType={userType} />
            </div>
            <button onClick={() => setStep(2)} className=' flex justify-center items-center gap-[.3rem] bg-[#6C72FF] text-white w-[10rem] px-[.5rem] py-[.5rem] rounded-md mt-[8rem] ' >Continue<MdKeyboardDoubleArrowRight className=' text-[1.3rem] ' /></button>
          </div>
        ) : null
      }
      {
        step === 2 ? (
          <div className=' w-[100%] h-[calc(100vh-4rem)] dark:bg-[#080F25] flex flex-col justify-center items-center gap-[1rem]  ' >
            <h2 className=' dark:text-[#c1c3ff] text-[#2c2c33]  text-[2rem]  font-[600] tracking-wide mb-[3rem] ' >Add Your City</h2>
            <div className='flex justify-center items-center gap-[8rem] w-[20rem]' >
              <div className=' flex flex-col gap-[.5rem] w-[100%]  ' >
                <label htmlFor="email" className=' text-[#4c4e58e2] dark:text-[#AEB9E180]  ' >City <span className='text-red-600 ' >*</span></label>
                <input onChange={(e) => setCity(e.target.value)} value={city} className=' bg-[#8C8C9A1F] text-[#4c4e58e2] dark:text-[#AEB9E180] px-[1rem] py-[.5rem] rounded-md outline-none focus:outline-[#2649bbe0] dark:focus:outline-[#6c71ff5c]  ' type="text" id="city" name="city" placeholder="Enter your City " />
              </div>
            </div>
            <div className=' flex justify-center items-center gap-[3rem] mt-[8rem] ' >
              <button onClick={() => setStep(1)} className=' flex justify-center items-center gap-[.3rem] border-[#6C72FF] border-[2px] dark:text-white text-[#4c4e58e2] w-[10rem] px-[.5rem] py-[.5rem] rounded-md  ' >
                <MdKeyboardDoubleArrowRight className=' dark:text-white text-[#4c4e58e2] text-[1.3rem] rotate-180 ' />
                back
              </button>
              <button onClick={(e) => submitData(e)} className=' flex justify-center items-center gap-[.3rem] bg-[#6C72FF] text-white w-[10rem] px-[.5rem] py-[.5rem] rounded-md  ' >Submit<MdKeyboardDoubleArrowRight className=' text-[1.3rem] ' /></button>
            </div>
          </div>
        ) : null
      }

    </>
  )
}

export default Role
