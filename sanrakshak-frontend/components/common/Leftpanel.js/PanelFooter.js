import React from 'react'
import Link from 'next/link'
import SingleLinks from './SingleLinks'
import { IoPersonSharp } from "react-icons/io5";
import { MdLogout } from "react-icons/md";
import { useRouter } from 'next/router';
import axios from 'axios';
import { ApiUrl } from '@/utils/BaseUrl';


const PanelFooter = () => {
  const router = useRouter()
  const handleLogout = async () => {
    console.log('logout clicked')
    try {
      const reponse = await axios.get(`${ApiUrl}/api/auth/logout`, {
        withCredentials: true
      });
      console.log(reponse)
      if (reponse.data.success == true) {
        console.log('response sucess');
        router.push('/login')
      }

    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div className='flex flex-col  gap-[1rem] px-[1.5rem] py-[1.5rem]  w-[100%] border-t-[1px] border-[#1F2A4A]  ' >
      <Link href={'/police/profile'} className={` flex items-center gap-[1rem] px-[.7rem]  w-[100%] h-[2.2rem]   text-[#AEB9E1]  rounded-[.25rem] `} >
        <div className={` text-[1.2rem] `} >
          <IoPersonSharp />
        </div>
        <h2 className=' text-[1rem] font-nunito ' >Your Profile</h2>
      </Link>
      <button onClick={handleLogout} className=' bg-[#6C72FF] text-[#FFF] flex justify-center items-center px-[.5rem] py-[.5rem] rounded-md gap-[.5rem] ' >
        <MdLogout className=' text-[1.1rem] ' />
        Logout
      </button>
    </div>
  )
}

export default PanelFooter
