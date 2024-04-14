import React from "react";
import Image from "next/image";

const TrendingCard = ({ data }) => {
  return (
    <div className=" cursor-pointer flex gap-[.3rem] w-[100%]  flex-col px-[.8rem] py-[.5rem] bg-[#1F253B] rounded-md ">
      <div className=" flex items-center gap-[.5rem] ">
        <Image
          src={data.profileImage}
          width={300}
          height={300}
          alt="profileImage"
          className=" w-[2rem] "
        />
        <div className=" flex flex-col ">
          <h2 className=" text-[.98rem] ">{data.name}</h2>
          <p className=" text-[.75rem] ">{data.createdAt}</p>
        </div>
      </div>
      <div className=" h-[1px] w-[100%] bg-[#4E546B] " />
      <p className=" text-[.85rem] line-clamp-2 ">{data.post}</p>
    </div>
  );
};

export default TrendingCard;
