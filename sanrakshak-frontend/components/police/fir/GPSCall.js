import { useEffect, useState } from "react";
import React from "react";
import CallForHelp from "@/components/modals/CallForHelp";
import { MdOutlineAddCircle } from "react-icons/md";

const GPSCall = () => {
  const [registerFir, setRegisterFir] = useState(false);

  return (
    <div>
      <CallForHelp
        visible={registerFir}
        onClose={() => setRegisterFir(false)}
        callback={() => fetchRecentFirData()}
      />
      <button
        onClick={() => setRegisterFir(true)}
        className=" active:scale-95 duration-300 bg-red-500 shadow-[0px_0px_77.8px_17px_rgba(108, 114, 255, 0.41)] rounded-lg  w-[12rem] h-[2.5rem] text-white flex justify-center items-center gap-[1rem]  "
      >
        <MdOutlineAddCircle className=" text-[1.12rem] " />
        Call For Help
      </button>
    </div>
  );
};

export default GPSCall;
