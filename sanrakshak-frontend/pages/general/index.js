import React from "react";
import { useRouter } from "next/router";
import axios from "axios";
import Cookies from "js-cookie";
import Panel from '@/components/common/Leftpanel.js/Panel'

const GeneralDashboard = () => {
  const router = useRouter();
  const handleLogout = async () => {
    console.log("logout clicked");
    try {
      const reponse = await axios.get("http://localhost:4000/api/auth/logout", {
        withCredentials: true,
      });
      console.log(reponse);
      if (reponse.data.success == true) {
        console.log("response sucess");
        Cookies.remove("accessToken");
        router.push("/login");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className=" w-[100%] h-[100vh] flex flex-col justify-center items-center gap-[2rem] ">
      <div className=" bg-[#080F25] w-[100%] h-[100vh] flex flex-row relative flex-shrink ">
        <Panel />
        <div className=" w-[100%] h-[81vh] flex  flex-col items-center px-[2.5rem] pt-[1rem] text-[#AEB9E1] text-[2rem] ">
          
        </div>
      </div>{" "}
    </div>
  );
};

export default GeneralDashboard;
