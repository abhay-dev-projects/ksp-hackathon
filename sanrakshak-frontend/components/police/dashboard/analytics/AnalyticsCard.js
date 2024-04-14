import React from 'react'
import Image from 'next/image'
import { BsArrowUpRight } from "react-icons/bs";
import { IoIosArrowRoundForward } from "react-icons/io";

const AnalyticsCard = ({ data }) => {
  return (
    <div className=' hover:scale-[1.02] duration-300 flex flex-shrink-0 gap-[2rem] cursor-pointer w-[16rem] h-[6rem] bg-[#101935] border-[1px] border-[#191F35] rounded-md px-[.8rem] py-[.8rem] ' >
      <div className=' flex flex-col justify-between gap-[.2rem]   px-0 py-0 ' >
        <Image
          src={data.img}
          width={300}
          height={300}
          alt={data.name}
          className=' w-[2.2rem] mx-auto '
          draggable={false}
        />

        <h2 className={` ${data.id === 0 ? "text-[#6C72FF]" : data.id === 1 ? "text-[#FFAE11]" : data.id === 2 ? "text-[#16E738]" : data.id === 3 ? "text-[#FF132F]" : ""}  text-[1.5rem] font-roboto `} >{data.count}</h2>
      </div>

      <div className=' flex flex-col justify-between  ' >
        <h1 className=' text-[#c1cae6] text-[1.5rem] line-clamp-1  font-[400] pl-[.8rem] ' >{data.name}</h1>
        <div className=' flex gap-[.2rem] items-center ' >
          <div className={`${data.increased ? "text-[#0A9D4C]" : " text-[#E13030] "} text-[.9rem] flex items-center   `} >
            <IoIosArrowRoundForward className={`${data.increased ? "rotate-[-45deg] " : " rotate-[45deg] "}    text-[1.2rem]`} />
            {data.percent}%
          </div>
          <h2 className=' text-[#93939A] text-[.9rem] ' >from last week</h2>
        </div>
      </div>

    </div>
  )
}

export default AnalyticsCard
