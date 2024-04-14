import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ApiUrl } from "@/utils/BaseUrl.js";
import { FaPlus } from "react-icons/fa6";
import Cookies from 'js-cookie';

const Comments = ({ postId }) => {
  const [commentText, setCommentText] = useState('');
  const [comments, setComments] = useState([]);

  const handleAddComment = async () => {
    try {
      const token = Cookies.get('accessToken');
      // Add the comment to the server
      const response = await axios.post(`${ApiUrl}/api/addComment?token=${token}`, {
        postId: postId,
        comment: commentText,
      }, {
        withCredentials: true
      });

      // If the comment is added successfully, update the comments state
      if (response.data.status === 200) {
        setComments([...comments, response.data.data]);
        setCommentText(''); // Clear the comment text input
      }
    } catch (error) {
      console.error('Error adding comment:', error);
    }
  };

  useEffect(() => {
    // Fetch comments for the post when the component mounts
    const fetchComments = async () => {
      try {
        const token = Cookies.get('accessToken');
        const { data } = await axios.get(`${ApiUrl}/api/postComments?postId=${postId}&?token=${token}`, { withCredentials: true });
        console.log("COmments: ");
        setComments(data.result);
      } catch (error) {
        console.error('Error fetching comments:', error);
      }
    };

    fetchComments();
  }, [postId]); // Fetch comments whenever postId changes

  return (
    <div className="flex flex-col text-xl">

      <div className="flex items-center justify-between p-2">
        {/* Add comment input */}
        <textarea
          value={commentText}
          onChange={(e) => setCommentText(e.target.value)}
          type="textarea"
          className="w-full px-4 py-2 mr-2 text-lg rounded-md resize-none  placeholder:text-fontCol bg-second min-h-14 max-h-14"
          placeholder="Enter Comment"
          required
        />
        {/* Add comment button */}
        <button
          onClick={handleAddComment}
          className="p-2 rounded-md bg-btn text-fontCol2 hover:bg-btn/70"
        >
          <FaPlus className=" w-9 h-9" />
        </button>
      </div>
      <div className="overflow-auto">
        {/* Render comments */}
        {comments.map((item) => (
          <div key={item._id} className="mb-2">
            <strong>{item.name}:</strong> {item.comment}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Comments;
