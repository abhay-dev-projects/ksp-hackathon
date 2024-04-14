'use client'
import React from 'react'
import Image from 'next/image'
import { LogoImage } from '@/public/assetsManager'
import Link from 'next/link'
import ThemeMode from '../themeMode'

const IntialUserNavbar = ({ showLink = true }) => {
  return (
    <>

      <div className=' sticky top-0 w-[100%] h-[4rem] flex items-center px-[2rem] dark:bg-[#080F25] justify-between dark:border-b-[1px]  dark:border-[#aaadff30] border-0 shadow-md dark:shadow-none ' >
        <div className=' flex items-center gap-[.8rem] ' >
          <Image
            src={LogoImage}
            width={500}
            height={500}
            alt="logo"
            className=' w-[2.6rem]'
          />
          <h2 className=' font-roboto dark:text-white text-black text-[.8rem] uppercase w-[5rem] ' >karnataka Police</h2>
        </div>

        <div className=' flex items-center gap-[1rem] ' >
          <Link href={'/login'} className={` ${showLink ? "" : "hidden"} text-[#2c2c33]  dark:text-[#c5c6ef] font-nunito font-[600] text-[1.15] tracking-wide `} >Login</Link>
          <Link href={'/register'} className={` ${showLink ? "" : "hidden"} text-[#2c2c33]  dark:text-[#c5c6ef] font-nunito font-[600] text-[1.15] tracking-wide `} >Register</Link>
          <ThemeMode />
        </div>

      </div>
    </>
  )
}

export default IntialUserNavbar