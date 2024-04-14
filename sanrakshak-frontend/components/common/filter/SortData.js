import React, { useState, useContext } from "react";
import { PiSlidersLight } from "react-icons/pi";
import { DataLayer } from "@/context/UserDataProvider";

const SortData = ({ sortValue, setSortValue, sortOptionData }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedSort, setSelectedSort] = useState("Latest");
  const { refresh, setRefresh } = useContext(DataLayer);

  const handleSortClick = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (sortOption) => {
    setSortValue(sortOption);

    setIsOpen(!isOpen);
    setRefresh(!refresh);

    // You'll likely want to trigger a sorting action here based on the selected option
    console.log("Selected sort option:", sortOption);
  };
  return (
    <div className="flex relative   gap-[1rem]  ">
      <div
        onClick={handleSortClick}
        className=" cursor-pointer flex items-center justify-evenly bg-[#101935] border-[1px] border-[#191F35]  w-[4.5rem]  h-[1.8rem] rounded-md text-[.98rem] "
      >
        <PiSlidersLight className=" text-[1.2rem] " />
        Sort
      </div>
      <div className="flex items-center justify-evenly  border-[2px] border-[#191F35]  px-[.4rem] py-[.3rem]  h-[1.8rem] rounded-md text-[.93rem]">
        {sortValue}
      </div>
      <div className=" absolute translate-y-[3rem] flex flex-col  min-w-[5rem] bg-second z-[15]   rounded-md ">
        {isOpen &&
          sortOptionData.map((data, index) => {
            return (
              <div
                onClick={() => handleOptionClick(data.option)}
                key={index}
                className="  text-[.86rem] hover:bg-second2 px-[.8rem] py-[.3rem] cursor-pointer  "
              >
                {data.option}
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default SortData;
