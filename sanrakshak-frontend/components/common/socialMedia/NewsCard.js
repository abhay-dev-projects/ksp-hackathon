import React from "react";
import Image from "next/image";
import CreateNews from "@/components/modals/CreateNews";

const NewsCard = ({ data }) => {
  const sampleData = {
    name: "Rajasthan Police",
    createdAt: "14.01.24",
    profileImage: "",
    post: "AS per Bhavisya Malika book and Indian MDA our city is going to hit massive earthqake, and cyclone. So all citizen are requested to stay in home",
  };
  const changeFormat = () => {
    const dateObj = new Date(data.createdAt);
    
    const year = dateObj.getFullYear().toString().slice(-2);
    const month = ("0" + (dateObj.getMonth() + 1)).slice(-2);
    const day = ("0" + dateObj.getDate()).slice(-2);
  
    return `${day}.${month}.${year}`;
  };
  return (
    <div className=" cursor-pointer flex gap-[.3rem] w-[100%]  flex-col px-[.8rem] py-[.5rem] bg-[#1F253B] rounded-md ">
      <div className=" flex items-center gap-[.5rem] ">
        <img
          src={data.profileImage}
          width={300}
          height={300}
          alt="profileImage"
          className=" w-[2rem] rounded-full"
        />
        <div className=" flex flex-col ">
          <h2 className=" text-[.98rem] ">{data.name}</h2>
          <p className=" text-[.75rem] ">{changeFormat()}</p>
        </div>
      </div>
      <div className=" h-[1px] w-[100%] bg-[#4E546B] " />
      <p className=" text-[.85rem] line-clamp-2 ">{data.News}</p>
    </div>
  );
};

export default NewsCard;
