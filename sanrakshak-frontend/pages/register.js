'use client'
import React, { useEffect, useState } from 'react'
import IntialUserNavbar from '@/components/navbar/intialUserNavbar'
import { FcGoogle } from "react-icons/fc";
import Link from 'next/link';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import { useRouter } from 'next/router';
import { ApiUrl } from '@/utils/BaseUrl';
import Loader from './loader';


const Register = () => {
  const router = useRouter()
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [pass, setPass] = useState();
  const [cpass, setCPass] = useState();
  const [valid, setvalid] = useState(false)
  const [role, setRole] = useState("");
  const [city, setCity] = useState("")

  useEffect(() => {
    setRole(router?.query?.role);
    setCity(router?.query?.city)
    if (!router?.query?.role && !router?.query?.role && router?.query?.role == null && router?.query?.role == null) {
      router.push('/role')
    }
  }, [])

  const validDataForm = () => {
    if (name && email && pass) {
      if (pass === cpass) {
        setvalid(true);
      }
      else {
        setvalid(false)
      }
    }
    else {
      setvalid(false)
    }
  }
  useEffect(() => {
    validDataForm()
  }, [name, pass, cpass, email])

  const handleUserReg = async (e) => {
    e.preventDefault()
    try {
      if (name && email && pass && cpass && valid) {
        setvalid(true)
        const data = {
          "name": name,
          "email": email,
          "password": pass,
          "role": role,
          "city": city
        }
        const res = await axios.post(`${ApiUrl}/api/auth/register`, data);
        console.log(res);
        toast.success(res.data.message, {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        })
        router.push('/login')

      } else {
        setvalid(false);
        toast.error("fill all required details correctly", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      }
    } catch (error) {
      toast.error(error, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });

    }
  }
  if (!role || !city) return <Loader />;
  return (
    <>
      <div className='dark:bg-[#080F25] w-[100%] h-[100vh] ' >
        <IntialUserNavbar />
        <div className=' w-[100%] h-[90vh] flex justify-center items-center   ' >
          <form autoComplete='none' onSubmit={(e) => handleUserReg(e)} className=' flex flex-col gap-[1rem] w-[30rem]  dark:bg-[#101935] border-[1px] dark:border-[#6c71ff37]  rounded-md px-[2.5rem] py-[1.5rem]  '  >
            <div className=' flex flex-col gap-[.5rem] ' >
              <label htmlFor="name" className=' text-[#4c4e58e2] dark:text-[#AEB9E180]  ' >Name <span className='text-red-600 ' >*</span></label>
              <input onChange={(e) => setName(e.target.value)} className=' bg-[#8C8C9A1F] text-[#4c4e58e2] dark:text-[#AEB9E180] px-[1rem] py-[.5rem] rounded-md outline-none focus:outline-[#2649bbe0] dark:focus:outline-[#6c71ff5c] ' type="text" id="name" name="name" placeholder="Enter your Name " />
            </div>
            <div className=' flex flex-col gap-[.5rem] ' >
              <label htmlFor="email" className=' text-[#4c4e58e2] dark:text-[#AEB9E180]   ' >Email <span className='text-red-600 ' >*</span></label>
              <input onChange={(e) => setEmail(e.target.value)} className=' bg-[#8C8C9A1F] text-[#4c4e58e2] dark:text-[#AEB9E180] px-[1rem] py-[.5rem] rounded-md outline-none focus:outline-[#2649bbe0] dark:focus:outline-[#6c71ff5c]' type="email" id="email" name="email" placeholder="Enter your Email " />
            </div>
            <div className=' flex flex-col gap-[.5rem] ' >
              <label htmlFor="password" className=' text-[#4c4e58e2] dark:text-[#AEB9E180]  ' >Passowrd <span className='text-red-600 ' >*</span></label>
              <input onChange={(e) => setPass(e.target.value)} className=' bg-[#8C8C9A1F] text-[#4c4e58e2] dark:text-[#AEB9E180] px-[1rem] py-[.5rem] rounded-md outline-none focus:outline-[#2649bbe0] dark:focus:outline-[#6c71ff5c]' type="password" id="password" name="password" placeholder="Enter your password " />
            </div>
            <div className=' flex flex-col gap-[.5rem] ' >
              <label htmlFor="cpassword" className=' text-[#4c4e58e2] dark:text-[#AEB9E180]   ' >Confirm Passowrd <span className='text-red-600 ' >*</span></label>
              <input onChange={(e) => setCPass(e.target.value)} className=' bg-[#8C8C9A1F] text-[#4c4e58e2] dark:text-[#AEB9E180] px-[1rem] py-[.5rem] rounded-md outline-none focus:outline-[#2649bbe0] dark:focus:outline-[#6c71ff5c] ' type="password" id="cpassword" name="cpassword" placeholder="Enter your password " />
            </div>
            <button type='submit' className={`  active:scale-95 duration-300  ${valid ? "opacity-100 cursor-pointer" : "opacity-25 cursor-not-allowed "} bg-[#2243b1] dark:bg-[#6C72FF] text-white px-[.5rem] py-[.5rem] rounded-md mt-[1rem] `} >Register</button>


            <div className=' flex justify-center gap-[.4rem] ' >
              <p className='text-[#4c4e58e2] dark:text-[#AEB9E180] ' >Already have account,</p>
              <Link className=' text-[#2931ac] dark:text-[#b1b3ee] underline underline-offset-1 ' href={` ${role != null && city != null ? `/login?role=${role}&city=${city}` : "/login"} `}  >
                login
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default Register