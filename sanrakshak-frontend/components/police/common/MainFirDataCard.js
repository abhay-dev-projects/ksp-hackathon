import React, { useState } from "react";
import { MdEdit, MdDeleteForever } from "react-icons/md";
import UpdataFir from "@/components/modals/UpdataFir";
import DeleteFir from "@/components/modals/DeleteFir";

const MainFirDataCard = ({ data }) => {
  const [updateModel, setUpdateModel] = useState(false);
  const [deleteModel, setDeleteModel] = useState(false);
  console.log("MainFrame: ");
  console.log(data);

  return (
    <div className=" flex justify-between items-center gap-[1rem] w-[100%] h-[3.8rem] px-[.8rem] py-[.5rem] border-[1px] border-[#191F35] bg-[#101935] rounded-md  ">
      <UpdataFir visible={updateModel} onClose={() => setUpdateModel(false)} data={data} firid={data.firid} />
      <div className=" w-[10%] flex flex-col justify-between ">
        <h2>{data.name}</h2>
        <h2>{data.age} years</h2>
      </div>
      <div className=" w-[50%] line-clamp-2 ">{data.report}</div>
      <div
        className={` stage-2 text-[#FFAE11] px-[.3rem] py-[.3rem] w-[6rem] h-[2rem] flex justify-center items-center mx-[1rem]  `}
      >
        {data.hero}
      </div>
      <div className=" w-[4rem] flex flex-col justify-between ">
        <h2>{data.reportedDate}</h2>
        <h2>{data.reportedDay}</h2>
      </div>
      <div className=" flex w-[4.2rem] justify-center items-center gap-[.5rem] ">
        <button
          onClick={() => setUpdateModel(true)}
          className=" text-[#d5e3ff] fir-edit-bg px-[.25rem] py-[.25rem] "
        >
          <MdEdit className=" text-[1.02rem] " />
        </button>
        <button
          onClick={() => setDeleteModel(true)}
          className=" text-[#FD001EA8] fir-delete-bg px-[.25rem] py-[.25rem] "
        >
          <MdDeleteForever className=" text-[1.02rem] " />
        </button>
      </div>
      <DeleteFir
        visible={deleteModel}
        onClose={() => setDeleteModel(false)}
        callback={() => etchRecentFirData()}
        data={data}
      />
    </div>
  );
};

export default MainFirDataCard;
