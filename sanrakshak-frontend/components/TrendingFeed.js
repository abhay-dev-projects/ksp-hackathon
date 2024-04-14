import React from "react";

const TrendingFeed = () => {
  return (
    <div className="p-4 ">
      <div className="bg-second w-full text-btn text-2xl font-medium px-4 py-2 min-h-[30vh] border-borderBg border-[0.2vh] rounded-xl">
        <span className="p-2"># Trending</span>
        <Divider />
        <div className="py-4 overflow-y-auto overflow-hidden h-[22vh]">
          <TrendChip />
          <TrendChip />
          <TrendChip />
          <TrendChip />
          <TrendChip />
        </div>
      </div>
    </div>
  );
};
const Divider = () => <hr className="sidebar-hr mt-2" />;
const Divider2 = () => (
  <div className="h-[0.1vh] rounded-xl mx-4 bg-[#4E546B] mt-2" />
);
const TrendChip = () => {
  return (
    <div className=" w-full my-2 bg-second2 rounded-xl border-borderBg border-[0.2vh]">
      <div className="flex px-4 pt-2 text-fontCol2 font-roboto font-semibold">
        <div className="ml-2 flex items-center">
          <div className="text-lg">Rajasthan Police</div>
          <div className=" h-1 w-1 mx-2 bg-fontSec rounded-full" />
          <div className=" text-fontSec -mt-1 text-[1.8vh] h-6">24-12-23</div>
        </div>
      </div>
      <div className=" flex flex-row">
        <div className=" text-[1.8vh] h-24 w-64 font-nunito text-fontSec px-5 text-ellipsis overflow-hidden truncate text-wrap">
          AS per Bhavisya Malika book and Indian MDA our city is going to hit
          massive earthqake, and cyclone. So all citizen are requested to stay
          in home
        </div>
        <div className=" m-2 bg-second rounded-lg h-20 w-20">

        </div>
      </div>
    </div>
  );
};
export default TrendingFeed;
