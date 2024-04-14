import React, { useEffect } from "react";
import Sentiment from "sentiment";

const FeedbackDataCard = ({ data }) => {
  const fetchSentiment = () => {
    const senti = new Sentiment();
    const docx = senti.analyze(data.report);
    if (docx.score > 0) {
      return (
        <span className=" reply-bg flex justify-center items-center w-[8rem] text-sm h-[2rem]  text-[#9fd393] ">
          Slightly Positive
        </span>
      );
    } else if (docx.score > 2) {
      return (
        <span className=" reply-bg flex justify-center items-center w-[8rem] text-sm h-[2rem]  text-[#16E738] ">
          Very Positive
        </span>
      );
    } else if (docx.score < 0) {
      return (
        <span className=" reply-bg flex justify-center items-center w-[8rem] text-sm h-[2rem]  text-[#FFAE11]  ">
          Slightly Negative
        </span>
      );
    } else {
      return (
        <span className=" reply-bg flex justify-center items-center w-[8rem] text-sm h-[2rem] stage-3 text-[#FF132F]  ">
          Very Negative
        </span>
      );
    }
  };

  return (
    <div className=" feedback-text flex justify-between items-center gap-[1rem] w-[100%] h-[3.8rem] px-[.8rem] py-[.5rem] border-[1px] border-[#191F35] bg-[#101935] rounded-md  ">
      <div className=" w-[10%] flex flex-col justify-between ">
        <h2>{data.name}</h2>
        <h2>{data.age} years</h2>
      </div>
      <div className=" w-[50%] line-clamp-2 ">{data.report}</div>
      <div
        className={` stage-2 text-[#FFAE11] px-[.3rem] py-[.3rem] w-[6rem] h-[2rem] flex justify-center text-[0.8rem] items-center mx-[1rem] `}
      >
        {data.hero}
      </div>
      <div className=" w-[4rem] flex flex-col justify-between ">
        <h2>{data.reportedDate}</h2>
        <h2>{data.reportedDay}</h2>
      </div>
      {fetchSentiment(data.report)}
    </div>
  );
};

export default FeedbackDataCard;
