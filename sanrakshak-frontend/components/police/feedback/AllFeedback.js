import React, { useEffect, useState } from "react";
import FeedbackDataCard from "../common/FeedbackDataCard";

const AllFeedback = ({ feedbackData }) => {
  const [feedback, setFeedbacks] = useState(feedbackData);

  // const feedbackData = [
  //   {
  //     name: "Vijay Singh",
  //     age: 38,
  //     report: "I thank you to all police men who investigate my problem and solved within short period of time , I love Rajasthan Police",
  //     hero: "Sher Singh",
  //     reportedDate: "25.12.23",
  //     reportedDay: "Monday",
  //   },
  // ]

  useEffect(() => {
    console.log("Rerendering Feedback");
    console.log(feedback);
    setFeedbacks(feedbackData);
  }, [feedbackData]);

  return (
    <div className=" w-[100%] flex flex-col gap-[1rem] text-[#AEB9E1] text-[.9rem] ">
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
        <div className="  flex justify-center items-center w-[8rem]  ">
          Rating
        </div>
      </div>
      <div className=" flex flex-col gap-[1rem] overflow-y-auto h-[73vh] ">
        {feedback &&
          feedback.map((data, index) => {
            return <FeedbackDataCard data={data} key={index} />;
          })}
      </div>
    </div>
  );
};

export default AllFeedback;
