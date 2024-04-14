import { useEffect, useState } from "react";
import React from "react";
import RegisterFir from "@/components/modals/RegisterFir";
import { MdOutlineAddCircle } from "react-icons/md";

const RegisterFirButton = () => {
  const [registerFir, setRegisterFir] = useState(false);

  return (
    <div>
      <button
        onClick={() => setRegisterFir(true)}
        className=" active:scale-95 duration-300 register-fir-button  w-[12rem] h-[2.5rem] text-white flex justify-center items-center gap-[1rem]  "
      >
        <MdOutlineAddCircle className=" text-[1.12rem] " />
        Register Feedback
      </button>
    </div>
  );
};

export default RegisterFirButton;
