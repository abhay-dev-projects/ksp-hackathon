import React from 'react'
import { LogoImage } from '@/public/assetsManager'
import Image from 'next/image'
import { BiSearch } from "react-icons/bi";


const PanelHeader = ({ user }) => {
  return (
    <div className='  flex flex-col gap-[1rem] px-[1.5rem] py-[1.5rem]  border-b-[1px] border-[#1F2A4A] ' >
      <div className=' flex items-center gap-[1rem] pl-[.2rem] ' >
        <Image
          src={LogoImage}
          width={300}
          height={300}
          alt='Rajsthan Police Hackathon'
          className=' w-[2.1rem] '
        />
        <h2 className=' text-[#AEB9E1] font-roboto font-[800] text-[1.1rem] tracking-wider ' >{user} Dashboard</h2>
      </div>
      <div className=' flex justify-between items-center bg-[#101935] h-[2.1rem] rounded-md border-[#191F35] border-[1px] text-[#7E88AE] px-[.8rem] ' >
        <BiSearch className=' text-[1.1rem] ' />
        <input placeholder='Search...' type="text" className=' bg-[#101935] outline-none text-[.9rem] w-[87%] ' />
      </div>

    </div>
  )
}

export default PanelHeader
