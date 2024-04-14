import React, { useContext, useEffect, useState } from "react";
import toast from "react-toastify";
import { DataLayer } from "../context/UserDataProvider.js";
import { useRouter } from "next/router.js";
import PoliceLogo from "@/public/Rajasthan_Police_Logo.png";
import Image from "next/image";
import { ApiUrl } from "@/utils/BaseUrl.js";
import { IoSearch, IoCall, IoPersonSharp } from "react-icons/io5";
import { IoIosArrowForward } from "react-icons/io";
import { GoHomeFill } from "react-icons/go";
import { MdInsertDriveFile, MdPeopleAlt } from "react-icons/md";
import { RiSendPlaneFill } from "react-icons/ri";
import { LuLogOut } from "react-icons/lu";
import Cookies from 'js-cookie';

const Sidebar = ({ User = "User" }) => {
  const { isAuthenticated, setIsAuthenticated, loading, setLoading } =
    useContext(DataLayer);
  const [isReportDropdownOpen, setReportDropdownOpen] = useState(false);
  const [isComplaint, setComplaint] = useState(false);
  const toggleReportDropdown = () => {
    setReportDropdownOpen(!isReportDropdownOpen);
  };
  const toggleComplaintDown = () => {
    setComplaint(!isComplaint);
  };
  const logoutHandler = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const { data } = await axios.get(`${ApiUrl}/users/logout`, {
        withCredentials: true,
      });
      setIsAuthenticated(false);
      setLoading(false);
    } catch (error) {
      setIsAuthenticated(false);
      setLoading(false);
    }
  };
  return (
    <div className="bg-prim w-[45vh] h-screen border-r-[0.2vh] border-borderBg">
      <div className="px-6 py-8 flex justify-center flex-wrap">
        <Image draggable={false} width={50} src={PoliceLogo} />
        <div className="p-2 text-[2.7vh] text-fontCol2 font-semibold flex items-center">
          {User} Dashboard
        </div>
      </div>

      <div className="flex justify-center pb-8 border-borderBg border-b-[0.2vh]">
        <div className="relative flex items-center text-fontCol">
          <IoSearch className="w-5 h-5 absolute ml-3 pointer-events-none" />
          <input
            width={500}
            className="pl-10 p-2 w-64 rounded-lg bg-second"
            placeholder="Search things..."
          />
        </div>
      </div>
      
      <div className="text-fontCol2 font-nunito pb-12 flex-col">
        <SidebarIcon
          icon={<GoHomeFill className="w-6 h-6 mr-6 mb-[0.5]" />}
          text="Dashboard"
        />
        <div
          className="flex my-8 items-center px-10 text-[2.7vh] hover:cursor-pointer"
          onClick={toggleReportDropdown}
        >
          <MdInsertDriveFile className="w-6 h-6 mr-6 mb-[0.5]" />
          Report
          <IoIosArrowForward className="text-[#1F2A4A] w-5 h-5 ml-auto transform duration-300" />
        </div>
        {isReportDropdownOpen && (
          <div className="ml-10">
            <SidebarIcon2
              icon={
                <IoIosArrowForward className="text-[#1F2A4A] w-5 h-5 mr-2" />
              }
              text="FIR"
            />
            <SidebarIcon2
              icon={
                <IoIosArrowForward className="text-[#1F2A4A] w-5 h-5 mr-2" />
              }
              text="Complaint"
            />
          </div>
        )}
        <div
          className="flex my-8 items-center px-10 text-[2.7vh] hover:cursor-pointer"
          onClick={toggleComplaintDown}
        >
          <RiSendPlaneFill className="w-6 h-6 mr-6 mb-[0.5]" />
          Call for Help
          <IoIosArrowForward className="text-[#1F2A4A] w-5 h-5 ml-auto transform duration-300" />
        </div>
        {isComplaint && (
          <div className="ml-10">
            <SidebarIcon2
              icon={
                <IoIosArrowForward className="text-[#1F2A4A] w-5 h-5 mr-2" />
              }
              text="FIR"
            />
            <SidebarIcon2
              icon={
                <IoIosArrowForward className="text-[#1F2A4A] w-5 h-5 mr-2" />
              }
              text="Complaint"
            />
          </div>
        )}
        <SidebarIcon
          icon={<MdPeopleAlt className="w-6 h-6 mr-6 mb-[0.5]" />}
          text="Our Team"
        />
        <SidebarIcon
          icon={<IoCall className="w-6 h-6 mr-6 mb-[0.5]" />}
          text="Contact Admin"
        />
      </div>

      <div className="border-borderBg border-t-[0.2vh] flex flex-col h-[28vh] text-[2.5vh] text-fontCol2 px-4 pt-auto">
        <div className="flex pb-4 pl-4 pt-8 items-end justify-center">
          <IoPersonSharp className="w-6 h-6 mr-6" />
          Your Profile
        </div>
        <button
          onClick={logoutHandler}
          className="bg-btn rounded-lg flex items-center justify-center py-2 pr-10 mt-4"
        >
          <LuLogOut className="w-6 h-6 mr-6" /> Logout
        </button>
      </div>
    </div>
  );
};

const SidebarIcon = ({ icon, text }) => {
  return (
    <div className="flex my-6 items-center px-10 text-[2.5vh] hover:cursor-pointer">
      {icon}
      {text}
    </div>
  );
};
const SidebarIcon2 = ({ icon, text }) => {
  return (
    <div className="flex items-center px-10 text-[2.5vh] hover:cursor-pointer">
      {icon}
      {text}
    </div>
  );
};
export default Sidebar;
