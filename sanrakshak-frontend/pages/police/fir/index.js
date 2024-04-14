import React, { useState, useContext, useEffect } from "react";
import PoliceLayout from "@/pages/layout/PoliceLayout";
import Panel from "@/components/common/Leftpanel.js/Panel";
import SortData from "@/components/common/filter/SortData";
import AllFir from "@/components/police/fir/AllFir";
import { BiSearch } from "react-icons/bi";
import RegisterFir from "@/components/modals/RegisterFir";
import RegisterFirButton from "@/components/police/fir/RegisterFirButton";
import { DataLayer } from "@/context/UserDataProvider";
import { ApiUrl } from "@/utils/BaseUrl";
import axios from "axios";

const Index = () => {
  const { refresh } = useContext(DataLayer);
  const [firs, setFirs] = useState([{}]);
  const sortOptionData = [
    {
      id: 1,
      option: "Latest",
    },
    {
      id: 2,
      option: "Oldest",
    },
  ];

  const getFir = async () => {
    try {
      if (sortValue == "Latest") {
        console.log("Rendering New");
        console.log(sortValue);
        const firData = await axios.get(`${ApiUrl}/api/police/getFir`, {
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
            hero: fir.hero,
            firid: fir._id,
          };
        });
        setFirs(mappedFir);
      } else {
        console.log("Rendering Old");
        console.log(sortValue);
        const firData = await axios.get(`${ApiUrl}/api/police/getFIROld`, {
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
            hero: fir.hero,
            firid: fir._id,
          };
        });
        setFirs(mappedFir);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getFir();
  }, [refresh]);

  const [sortValue, setSortValue] = useState(sortOptionData[0].option);
  const [registerFir, setRegisterFir] = useState(false);

  return (
    <>
      <PoliceLayout>
        <RegisterFir
          visible={registerFir}
          onClose={() => setRegisterFir(false)}
          callback={() => fetchRecentFirData()}
        />
        <div className=" bg-[#080F25] w-[100%] h-[100vh] flex flex-row relative ">
          <Panel />
          <div className=" w-[81%] h-[100vh] flex flex-col items-center text-[#AEB9E1]  pt-[1rem] px-[1.5rem] ">
            <div className=" w-[100%] flex justify-between items-center mt-[1rem] ">
              <SortData
                sortValue={sortValue}
                setSortValue={setSortValue}
                sortOptionData={sortOptionData}
              />
              <div className=" ml-[-4rem] ">
                <RegisterFirButton />
              </div>
              <div className=" flex justify-between items-center bg-[#101935] h-[2.1rem] rounded-md border-[#191F35] border-[1px] text-[#7E88AE] px-[.8rem] ">
                <BiSearch className=" text-[1.1rem] " />
                <input
                  type="text"
                  className=" bg-[#101935] outline-none text-[.9rem] w-[87%] "
                />
              </div>
            </div>

            <div className=" w-[100%] mt-[2rem] ">
              <h2 className=" text-[#6C72FF] text-[1.1rem]  w-[15rem] mb-[.5rem] ">
                Recent FIR{" "}
              </h2>
              <AllFir firs={firs} />
            </div>
          </div>
        </div>
      </PoliceLayout>
    </>
  );
};

export default Index;
