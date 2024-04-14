import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { ApiUrl } from "@/utils/BaseUrl";
import { Toast } from "react-toastify";
import { DataLayer } from "@/context/UserDataProvider";
import Cookies from 'js-cookie';
const SMSform = () => {
  const [message, setMessage] = useState("");
  const handleSendMessage = async () => {
    try {
      const token = Cookies.get('accessToken');
      const response = await axios.post(`${ApiUrl}/api/getMessageToSend?token=${token}`, { message }, { withCredentials: true });
      console.log(response.data);
      Toast.success(response.data.message);
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };
  return (
    <div className=" flex flex-col w-[28rem] gap-[1rem] ">
      <label htmlFor="problem" className=" text-[#AEB9E180] ">
        Type your SMS
      </label>
      <textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className=" bg-[#8C8C9A1F] w-[100%] h-[10rem] outline-none rounded-md px-[1rem] py-[1rem] "
      ></textarea>
      <button onClick={handleSendMessage} className=" bg-[#6C72FF] text-white w-[100%] px-[1rem] py-[.5rem] rounded-md  ">
        Submit
      </button>
    </div>
  );
};

export default SMSform;
