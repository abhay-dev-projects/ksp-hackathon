import React, { useContext, useState } from "react";
import Image from "next/image";
import { FcReddit } from "react-icons/fc";
import { GoHeart } from "react-icons/go";
import { GoHeartFill } from "react-icons/go";
import { BiSolidMessageSquareAdd } from "react-icons/bi";
import { BsFillSendFill } from "react-icons/bs";
import { MdVerifiedUser, MdOutlineVerifiedUser } from "react-icons/md";
import { PiChatTeardropTextBold } from "react-icons/pi";
import { LuSend } from "react-icons/lu";
import Link from "next/link";
import SharePost from "@/components/modals/SharePost";
import axios from "axios";
import { DataLayer } from "@/context/UserDataProvider.js";
import { ApiUrl } from "@/utils/BaseUrl.js";
import Comment from "./Comment";

const SocialMediaCard = ({ data }) => {
  const [likeCount, setLikeCount] = useState(data.likeCount);
  const [showComment, setShowComment] = useState(false);
  const [commentCount, setCommentCount] = useState(data.commentCount);
  const [liked, setLiked] = useState(data.liked);
  const [commentModel, setCommentModel] = useState(false);
  const [shareModel, setShareModel] = useState(false);
  const [shareId, setShareId] = useState("");

  const postId = data._id;
  const { setRefresh } = useContext(DataLayer);

  const handleShareFeatures = (id) => {
    // alert("hanlde share clicked")
    setShareId(id);
    setShareModel(true);
  };

  const changeFormat = () => {
    let dateObj = new Date(data.timestamp);
    const options = {
      weekday: "short",
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
      timeZoneName: "short",
    };

    const formattedDate = dateObj.toLocaleDateString("en-US", options);

    const dateString = formattedDate.slice(0, 17);
    console.log("Date:", dateString);
    const date = dateObj.toUTCString();

    return dateString;
  };

  const date = changeFormat();

  const toggleLike = () => {
    setLiked(!liked);
    if (!liked) {
      setLikeCount(likeCount + 1);
    } else {
      setLikeCount(likeCount - 1);
    }
    try {
      axios.post(
        `${ApiUrl}/api/updateLike`,
        {
          postId,
        },
        {
          withCredentials: true,
        }
      );
      setRefresh((prev) => !prev);
    } catch (error) {
      console.log(error);
    }
  };

  // const demoCallback = () => {
  //   alert("callblack called");
  // };

  return (
    <div className="  bg-[#101935] border-[2px] border-[#191F35] rounded-md w-[100%] h-[28rem] py-[.6rem] flex flex-col gap-[.5rem] ">
      <SharePost
        visible={shareModel}
        onClose={() => setShareModel(false)}
        // callback={() => demoCallback()}
        postId={shareId}
      />
      <div className=" flex items-center gap-[.5rem] px-[.5rem] h-[3.7rem]   ">
        <div className=" flex flex-col justify-center items-center w-[4.5rem]   ">
          <Image
            src={data?.img}
            width={300}
            height={300}
            alt="Profile Picture"
            className={` ${data.profileImage
                ? " w-[100%] h-[100%] aspect-square translate-y-[.1rem] "
                : "hidden"
              } `}
          />
          <FcReddit
            className={` ${data.profileImage ? "hidden" : ""} text-[1.6rem] `}
          />
          {/* <div className=' text-[.75rem] ' >
            {data.createdAt}
          </div> */}
        </div>

        <div className=" flex flex-col gap-[.07rem]   ">
          <h2 className=" flex gap-[.4rem] items-center text-[#6C72FF] text-[.8rem] ">
            {data.name}
            <span className="  bg-second2 text-[#AEB9E1] px-[.2rem] py-[.08rem] rounded-sm  ">
              {changeFormat(data.timestamp)}
            </span>
          </h2>
          <p className=" text-[.95rem] line-clamp-1 ">{data.content}</p>
        </div>
      </div>
      <div className=" w-[100%] h-[20rem] ">
        <Link href={`/police/social/${data._id}`}>
          <Image
            src={data.img}
            width={1000}
            height={1000}
            className=" aspect-video w-[100%] h-[100%] object-cover cursor-pointer "
          />
        </Link>
      </div>
      <div className=" flex h-[2.8rem] justify-evenly items-center text-[#6C72FF]  ">
        <div className="text-lg items-center flex flex-row">
          <span className=" p-2">{likeCount}</span>
          <button onClick={() => toggleLike()}>
            {liked ? (
              <GoHeartFill className=" text-[1.4rem] text-red-700 " />
            ) : (
              <GoHeart className=" text-[1.4rem] " />
            )}
          </button>
        </div>
        <div className="items-center flex flex-row">
          <span onClick={() => setShowComment(true)} className=" text-lg p-2">
            {commentCount}
          </span>
          <button>
            <PiChatTeardropTextBold
              onClick={() => setShowComment(true)}
              className=" text-[1.4rem] "
            />
          </button>
          {showComment && (
            <div
              onClick={() => setShowComment(false)}
              className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-50"
            >
              <div className="h-full text-4xl text-center">
                Comments
                {/* <Divider2 /> */}
                <Comment postId={postId} />
              </div>
            </div>
          )}
        </div>
        <button onClick={() => handleShareFeatures(data._id)}>
          <LuSend className=" text-[1.4rem] " />
        </button>
        <button>
          <MdOutlineVerifiedUser className=" text-[1.4rem] " />
        </button>
      </div>
    </div>
  );
};

export default SocialMediaCard;
