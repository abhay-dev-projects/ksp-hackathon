import React, { useState } from "react";
import UpdataFir from "@/components/modals/UpdataFir";

const FirDataCard = ({ data }) => {
  const [updateFir, setUpdateFir] = useState(false);
  const openFir = () => { };
  return (
    <div className=" flex justify-between items-center gap-[1rem] w-[100%] h-[3.5rem] px-[.8rem] py-[.4rem] border-[1px] border-[#191F35] bg-[#101935] rounded-md  ">
      <UpdataFir
        visible={updateFir}
        onClose={() => setUpdateFir(false)}
        callback={() => fetchRecentFirData()}
        data={data}
      />
      <div className=" w-[10%] flex flex-col justify-between ">
        <h2 className=" line-clamp-1 " >{data.name}</h2>
        <h2 className=" line-clamp-1 " >{data.age} years</h2>
      </div>
      <div className=" w-[50%] line-clamp-2 ">{data.report}</div>
      <div
        className={` ${data.stage === "registered"
          ? "stage-1 text-[#6C72FF] "
          : data.stage === "investigation"
            ? "stage-2 text-[#FFAE11] "
            : data.stage === "action"
              ? "stage-3 text-[#FF132F] "
              : "stage-4 text-[#16E738] "
          } px-[.3rem] py-[.3rem] w-[6rem] h-[2rem] flex justify-center items-center mx-[1rem]  `}
      >
        {data.stage}
      </div>
      <div className=" w-[4rem] flex flex-col justify-between ">
        <h2>{data.reportedDate}</h2>
        <h2>{data.reportedDay}</h2>
      </div>
      <button onClick={() => setUpdateFir(true)} className=" bg-[#6C72FF] flex justify-center items-center w-[6rem] h-[2rem] rounded-md text-white ">
        Investigate
      </button>
    </div>
  );
};

export default FirDataCard;
