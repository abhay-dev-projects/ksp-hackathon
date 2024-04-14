import React, { useState } from 'react'
import Image from 'next/image'
import { FcReddit } from "react-icons/fc";
import { GoHeart } from "react-icons/go";
import { GoHeartFill } from "react-icons/go";
import { BiSolidMessageSquareAdd } from "react-icons/bi";
import { BsFillSendFill } from "react-icons/bs";
import { MdVerifiedUser } from "react-icons/md";
import Link from 'next/link';
import SharePost from '@/components/modals/SharePost';

const SocialMediaCardPage = ({ data }) => {
  const [liked, setLiked] = useState(false);
  const [commentModel, setCommentModel] = useState(false);
  const [shareModel, setShareModel] = useState(false);
  const [shareId, setShareId] = useState("")
  const sampleData = {
    id: 1,
    name: "Neha Sharma",
    createdAt: "14.01.24",
    post: "Finally Rajasthan Police Took action at the local goons creating havoc in the society. Great Work!.",
    profileImage: "TestProfileImage",
    postImage: "TestPostImage",
  }
  const handleShareFeatures = (id) => {
    // alert("hanlde share clicked")
    setShareId(id)
    setShareModel(true)
  }

  return (
    <div className=' cursor-pointer bg-[#101935] border-[2px] border-[#191F35] rounded-md w-[100%] h-[29rem] py-[.6rem] flex flex-col gap-[.5rem] ' >
      <div className=' flex items-center gap-[.5rem] px-[.5rem] h-[3.7rem]   ' >
        <SharePost
          visible={shareModel}
          onClose={() => setShareModel(false)}
          callback={() => fetchRecentFirData()}
          postId={shareId}
        />
        <div className=' flex flex-col justify-center items-center w-[4.5rem]   ' >
          <Image
            src={data?.profileImage}
            width={300}
            height={300}
            alt="Profile Picture"
            className={` ${data.profileImage ? " w-[100%] h-[100%] aspect-square translate-y-[.1rem] " : "hidden"} `}

          />
          <FcReddit className={` ${data.profileImage ? "hidden" : ""} text-[1.6rem] `} />
          {/* <div className=' text-[.75rem] ' >
            {data.createdAt}
          </div> */}
        </div>

        <div className=' flex flex-col gap-[.07rem]   ' >
          <h2 className=' flex gap-[.4rem] items-center text-[#6C72FF] text-[.8rem] ' >
            {data.name}
            <span className='  bg-second2 text-[#AEB9E1] px-[.2rem] py-[.08rem] rounded-sm  '  >
              {data.createdAt}
            </span>
          </h2>
          <p className=' text-[.95rem] line-clamp-1 ' >{data.post}</p>
        </div>

      </div>
      <div className=' w-[100%] h-[20rem] ' >

        <Image
          src={data.postImage}
          width={1000}
          height={1000}
          className=' aspect-video w-[100%] h-[100%] object-cover cursor-pointer '

        />

      </div>
      <div className=' flex h-[2.8rem] justify-evenly items-center text-[#6C72FF]  ' >
        <button onClick={() => setLiked(!liked)} >
          {liked ? <GoHeartFill className=' text-[1.4rem] text-red-700 ' /> : <GoHeart className=' text-[1.4rem] ' />}
        </button>
        <button>
          <BiSolidMessageSquareAdd className=' text-[1.4rem] ' />
        </button>
        <button onClick={() => handleShareFeatures(data.id)} >
          <BsFillSendFill className=' text-[1.4rem] ' />
        </button>
        <button>
          <MdVerifiedUser className=' text-[1.4rem] ' />
        </button>
      </div>

    </div>
  )
}

export default SocialMediaCardPage
