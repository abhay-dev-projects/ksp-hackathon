import React, { useState, useContext, useEffect } from "react";
import MainFirDataCard from "../common/MainFirDataCard";
import { DataLayer } from "@/context/UserDataProvider";

const AllFir = ({ firs }) => {
  const [firData, setFirData] = useState(firs);
  // const firData = [
  //   {
  //     name: "Neha Sharma",
  //     age: 29,
  //     report:
  //       "Husband beaten him brutually after knowing her extra marital affair. He also need official divorce so she have to leave her house immediately",
  //     hero: "Sher Singh",
  //     reportedDate: "25.12.23",
  //     reportedDay: "Monday",
  //   },
  // ];
  useEffect(() => {
    console.log("Rerendering");
    console.log(firs);
    setFirData(firs);
  }, [firs]);
  return (
    <div className=" w-[100%] flex flex-col gap-[1rem] text-[#AEB9E1] text-[.9rem] ">
      <div className=" flex justify-between items-center  w-[100%] text-[#6C72FF]  mb-[-.5rem]  ">
        <div className=" w-[10%] flex flex-col justify-between ">
          <h2>Informant Details</h2>
        </div>
        <div className=" w-[50%] flex justify-center  line-clamp-2 ">
          Report
        </div>
        <div
          className={`  px-[.3rem] py-[.3rem] w-[6rem] h-[2rem] flex justify-center items-center mx-[1rem]  `}
        >
          Hero
        </div>
        <div className=" w-[5rem] flex flex-col justify-between ">
          Reported at
        </div>
        <div className="  flex justify-center items-center px-[1.2rem]  ">
          Action
        </div>
      </div>
      <div className=" flex flex-col gap-[1rem] overflow-y-auto h-[73vh] ">
        {firData &&
          firData.map((data, index) => {
            return <MainFirDataCard data={data} key={index} />;
          })}
      </div>
    </div>
  );
};

export default AllFir;
