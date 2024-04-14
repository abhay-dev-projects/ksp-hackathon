import React, { useState, useContext, useEffect } from "react";
import FeedbackDataCard from "../../common/FeedbackDataCard";
import axios from "axios";
import { ApiUrl } from "@/utils/BaseUrl";
import { DataLayer } from "@/context/UserDataProvider";
import Cookies from 'js-cookie';

const RecentFeedback = () => {
  const [feedbacks, setFeedbacks] = useState([]);
  const { refresh } = useContext(DataLayer);

  const getFeedback = async () => {
    try {
      const token = Cookies.get('accessToken');
      const feedbackData = await axios.get(`${ApiUrl}/api/getFeedback?token=${token}`, {
        withCredentials: true,
      });
      console.log("feedbackData");
      console.log(feedbackData);
      const mappedFeedbacks = feedbackData.data.feedbacks.map((feedback) => {
        const reportDate = new Date(feedback.createdAt);
        const daysOfWeek = [
          "Sunday",
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ];
        const day = daysOfWeek[reportDate.getDay()];
        const dayDate = reportDate.getDate();
        const month = reportDate.getMonth() + 1;
        const year = reportDate.getFullYear() % 100;

        // Format the date as "DD.MM.YY"
        const formattedDate = `${dayDate}.${month}.${year}`;

        return {
          name: feedback.userName,
          age: feedback.userAge,
          report: feedback.userFeedback,
          hero: feedback.hero,
          reportedDate: formattedDate,
          reportedDay: day,
          rating: feedback.rating,
        };
      });
      setFeedbacks(mappedFeedbacks);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getFeedback();
  }, [refresh]);
  // const feedbackData = [
  //   {
  //     name: "Vijay Singh",
  //     age: 38,
  //     report:
  //       "I thank you to all police men who investigate my problem and solved within short period of time , I love Rajasthan Police",
  //     hero: "Sher Singh",
  //     reportedDate: "25.12.23",
  //     reportedDay: "Monday",
  //   },
  // ];
  return (
    <div className=" w-[100%] flex flex-col gap-[1rem] h-60 text-[#AEB9E1] text-[.9rem] ">
      <div className=" flex justify-between items-center  w-[100%] text-[#6C72FF] pr-[.8rem] mb-[-.5rem]  ">
        <div className=" w-[10%] flex flex-col justify-between ">
          <h2>User Details</h2>
        </div>
        <div className=" w-[50%] flex justify-center  line-clamp-2 ">
          Feedback
        </div>
        <div
          className={`  px-[.3rem] py-[.3rem] w-[6rem] h-[2rem] flex justify-center items-center mx-[1rem]  `}
        >
          Hero
        </div>
        <div className=" w-[5rem] flex flex-col justify-between ">
          Posted at
        </div>
        <div className="  flex justify-center items-center w-[6rem]  ">
          Approval level
        </div>
      </div>
      <div className="gap-[1rem] flex flex-col overflow-auto scroll-m-40 overflow-x-hidden overflow-y-auto">
        {feedbacks &&
          feedbacks.map((data, index) => {
            return <FeedbackDataCard data={data} key={index} />;
          })}
      </div>
    </div>
  );
};

export default RecentFeedback;
