import React from "react";
import { TestProfileImage } from "@/public/assetsManager";
import { FcReddit } from "react-icons/fc";
import Image from "next/image";

const CommentCard = ({ data }) => {
  const sampleData = {
    name: "Priyanshu Ranjan",
    comment:
      "In mulle ko pakad pakad ke maro jo pathar baji karte hai ,desh ke andar rah kar desh ko barbad kar rahe hai yeh sab desh drohi long",
    profileImage: TestProfileImage,
    createdAt: "14.01.24",
  };
  const changeFormat = () => {
    const dateObj = new Date(data.createdAt);
    
    const year = dateObj.getFullYear().toString().slice(-2);
    const month = ("0" + (dateObj.getMonth() + 1)).slice(-2);
    const day = ("0" + dateObj.getDate()).slice(-2);
  
    return `${day}.${month}.${year}`;
  };

  return (
    <div className=" flex gap-[.5rem] w-[100%]  flex-col px-[.8rem] py-[.5rem] bg-[#1F253B] rounded-md">
      <div className=" flex items-center gap-[.5rem]  ">
        <Image
          src={data?.profileImage}
          width={300}
          height={300}
          alt="Profile Picture"
          className={` ${
            data.profileImage? " w-[7.5rem]  aspect-square translate-y-[.4rem] "
              : "hidden"
          } `}
        />
        <FcReddit
          className={` ${data.profileImage ? "hidden" : ""} text-[1.6rem] `}
        />
        {/* <div className=' text-[.75rem] ' >
            {data.createdAt}
          </div> */}
        <h2 className=" flex gap-[.4rem] items-center text-[#6C72FF] text-[.85rem] font-[600] font-nunito ">
          {data.name}
          <span className="  bg-[#1F253B] text-[#AEB9E1] text-[.8rem] font-[500] px-[.2rem] py-[.08rem] rounded-sm  ">
            {changeFormat(data.createdAt)}
          </span>
        </h2>
      </div>

      <div className=" h-[1px] w-[100%] bg-[#4E546B]" />
      <div className="flex px-2">
        <p className=" text-[.85rem] line-clamp-2 text-fontCol ">
          {data.comment}
        </p>
      </div>
    </div>
  );
};

export default CommentCard;
