import React from 'react'
import Image from 'next/image'

const TeamCard = ({ data }) => {
  return (
    <div className=' flex flex-col justify-end relative  h-[12rem] hover:scale-[1.04] duration-300 cursor-pointer ' >
      <div className=' flex flex-col justify-end items-center gap-[.5rem] w-[100%] h-[8rem] px-[1rem] py-[1rem] rounded-md bg-[#101935] border-[1px] border-[#191F35] ' >
        <Image
          src={data.src}
          width={300}
          height={300}
          alt={data.name}
          className=' rounded-full w-[6rem] border-[1px] border-[#6C72FF] absolute translate-y-[-70%] '
        />
        <h1>{data.name}</h1>
        <button className={`available-bg flex justify-center items-center gap-[.4rem] w-[6rem] h-[1.6rem] ${data.available ? " text-[#16E738]  " : "text-[#c32e29]"} text-[.8rem] `} >
          <div className={` ${data.available ? " bg-[#16E738]  " : "bg-[#c32e29]"} rounded-full w-[.5rem] h-[.5rem]  `} ></div>
          {data.available ? "Available" : "Not Available"}
        </button>
      </div>

    </div>
  )
}

export default TeamCard
