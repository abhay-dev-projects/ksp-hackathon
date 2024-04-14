import React, { useState, useEffect } from "react";
import CommentCard from "./CommentCard";
import axios from "axios";
import { ApiUrl } from "@/utils/BaseUrl.js";
import { FaPlus } from "react-icons/fa6";

const Comment = ({
  visible,
  onClose = () => {},
  callback = () => {},
  postId,
}) => {
  const [commentText, setCommentText] = useState("");
  const [comments, setComments] = useState([]);

  const handleAddComment = async () => {
    try {
      // Add the comment to the server
      const response = await axios.post(
        `${ApiUrl}/api/addComment`,
        {
          postId: postId,
          comment: commentText,
        },
        {
          withCredentials: true,
        }
      );

      // If the comment is added successfully, update the comments state
      if (response.data.status === 200) {
        setComments([...comments, response.data.data]);
        setCommentText(""); // Clear the comment text input
      }
    } catch (error) {
      console.error("Error adding comment:", error);
    }
  };
  // Fetch comments for the post when the component mounts
  const fetchComments = async () => {
    try {
      const { data } = await axios.get(
        `${ApiUrl}/api/postComments?postId=${postId}`,
        { withCredentials: true }
      );
      console.log("COmments: ");
      setComments(data.result);
    } catch (error) {
      console.error("Error fetching comments:", error);
    }
  };
  useEffect(() => {
    fetchComments();
    if (visible) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [postId]); // Fetch comments whenever postId changes
  return (
    <div
      id="background"
      onClick={(e) => {
        if (e.target.id == "background") onClose();
      }}
      className="fixed inset-0 flex justify-center items-center z-50 bg-black bg-opacity-50"
    >
      <div
        className=" h-[45rem] px-[1rem] py-[.9rem] flex w-[40rem]  rounded-md flex-col gap-[.4rem] register-fir-bg"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="w-full flex items-center">
          <textarea
            value={commentText}
            onChange={(e) => setCommentText(e.target.value)}
            type="textarea"
            className=" resize-none text-lg px-4 w-full mr-2 py-2 placeholder:text-fontCol rounded-md bg-second2/50 min-h-14 max-h-14 mb-1"
            placeholder="Enter Comment"
            required
          />
          <button
            onClick={handleAddComment}
            className="bg-btn text-fontCol2 p-2 rounded-md mb-1 hover:bg-btn/70"
          >
            <FaPlus className=" w-9 h-9" />
          </button>
        </div>
        <div className=" flex w-[100%] flex-col gap-[.8rem] overflow-auto ">
          {comments &&
            comments.map((comment, index) => {
              return <CommentCard key={index} data={comment} />;
            })}
        </div>
      </div>
    </div>
  );
};

export default Comment;
