import React, { useState, useContext, useEffect } from "react";
import FirDataCard from "../../common/FirDataCard";
import axios from "axios";
import { ApiUrl } from "@/utils/BaseUrl";
import { DataLayer } from "@/context/UserDataProvider";
import Cookies from 'js-cookie';

const RecentFir = () => {
  const [firs, setFirs] = useState([]);
  const { refresh } = useContext(DataLayer);

  const getFir = async () => {
    try {
      const token = Cookies.get('accessToken');
      const firData = await axios.get(`${ApiUrl}/api/getFir?token=${token}`, {
        withCredentials: true,
      });
      console.log("firData");
      console.log(firData);
      const mappedFir = firData.data.totalFirs.map((fir) => {
        const reportDate = new Date(fir.createdAt);
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
          name: fir.accusedName,
          age: fir.accusedAge,
          report: fir.accusedReport,
          stage: fir.stages,
          reportedDate: formattedDate,
          reportedDay: day,
          firid: fir._id
        };
      });
      setFirs(mappedFir);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getFir();
  }, [refresh]);

  return (
    <div className=" w-[100%] flex flex-col h-[36vh] gap-[1rem] text-[#AEB9E1] text-[.9rem] ">
      <div className=" flex justify-between items-center  w-[100%] text-[#6C72FF] pr-[.8rem] mb-[-.5rem]  ">
        <div className=" w-[10%] flex flex-col justify-between ">
          <h2>Accused Details</h2>
        </div>
        <div className=" w-[50%] flex justify-center  line-clamp-2 ">
          Report
        </div>
        <div
          className={`  px-[.3rem] py-[.3rem] w-[6rem] h-[2rem] flex justify-center items-center mx-[1rem]  `}
        >
          Stages
        </div>
        <div className=" w-[5rem] flex flex-col justify-between ">
          Reported at
        </div>
        <div className="  flex justify-center items-center w-[6rem]  ">
          Investigate
        </div>
      </div>
      <div className="gap-[1rem] flex flex-col overflow-auto scroll-m-40 overflow-x-hidden overflow-y-auto">
        {firs &&
          firs.map((data, index) => {
            return <FirDataCard data={data} key={index} />;
          })}
      </div>
    </div>
  );
};

export default RecentFir;
