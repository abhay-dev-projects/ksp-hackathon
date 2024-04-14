import React, { useContext, useEffect, useState } from "react";
import DeleteLottieAnimation from "../../animation/DeleteLottieAnimation";
import axios from "axios";
import { ApiUrl } from "@/utils/BaseUrl";
import { DataLayer } from "@/context/UserDataProvider";
import UpdateAnimation from "../../animation/UpdateAnimation";
import ContactAdminForm from "../../police/contact/ContactAdminForm";
import SubTask from "@/components/Board/SubTask";
import { TestPoliceImage } from "@/public/assetsManager";
import Image from "next/image"
import { MdAssignmentTurnedIn } from "react-icons/md";

const AssignTask = ({
  visible,
  onClose = () => { },
  callback = () => { },
  data,
}) => {
  const [search, setSearch] = useState('');
  const [searchResult, setSearchResult] = useState([]);
  const [assignedPolice, setAssignedPolice] = useState([]);

  const policeData = [
    {
      name: "Veer Singh",
      profileImg: TestPoliceImage,
      taskAssigned: 23,
    },
    {
      name: "Rajesh Kumar",
      profileImg: TestPoliceImage,
      taskAssigned: 12,
    },
    {
      name: "Amit Patel",
      profileImg: TestPoliceImage,
      taskAssigned: 10,
    },
    {
      name: "Ravi Sharma",
      profileImg: TestPoliceImage,
      taskAssigned: 15,
    },
    {
      name: "Sanjeev Singh",
      profileImg: TestPoliceImage,
      taskAssigned: 18,
    },
    {
      name: "Rakesh Yadav",
      profileImg: TestPoliceImage,
      taskAssigned: 17,
    },
    {
      name: "Govind Kumar",
      profileImg: TestPoliceImage,
      taskAssigned: 11,
    },
    {
      name: "Manoj Singh",
      profileImg: TestPoliceImage,
      taskAssigned: 13,
    },
    {
      name: "Suresh Kumar",
      profileImg: TestPoliceImage,
      taskAssigned: 9,
    },
    {
      name: "Kishan Patel",
      profileImg: TestPoliceImage,
      taskAssigned: 8,
    },
    {
      name: "Jagdish Singh",
      profileImg: TestPoliceImage,
      taskAssigned: 7,
    },
    {
      name: "Pradeep Kumar",
      profileImg: TestPoliceImage,
      taskAssigned: 6,
    },
    {
      name: "Narendra Patel",
      profileImg: TestPoliceImage,
      taskAssigned: 5,
    },
    {
      name: "Raju Singh",
      profileImg: TestPoliceImage,
      taskAssigned: 4,
    },
    {
      name: "Lalit Kumar",
      profileImg: TestPoliceImage,
      taskAssigned: 3,
    },
    {
      name: "Rajan Singh",
      profileImg: TestPoliceImage,
      taskAssigned: 2,
    },
    {
      name: "Madan Patel",
      profileImg: TestPoliceImage,
      taskAssigned: 1,
    },
  ];

  const handleSearch = () => {
    if (search.length > 0) {
      const regex = new RegExp(search, 'i');
      const filteredPolice = policeData.filter((police) => regex.test(police.name));
      setSearchResult(filteredPolice);
    } else if (search.length === 0) {
      setSearchResult(policeData);
    }
  };

  const handleAssignPolice = (name, profileImg, taskAssigned) => {
    const newPolice = { name, profileImg, taskAssigned };
    setAssignedPolice(prevPolice => [...prevPolice, newPolice]);
    setSearch('');
  }

  useEffect(() => {
    handleSearch();
  }, [search])

  useEffect(() => {
    if (visible) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [visible]);

  if (!visible) return null;

  return (
    <div
      id="background"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
      onClick={(e) => {
        if (e.target.id === "background") onClose();
      }}
    >
      <div className="flex flex-col items-center w-[35rem] h-[33rem] pt-[2rem] py-[1rem] register-fir-bg">
        <div className="flex flex-col items-center w-[100%] px-[2rem] py-[1rem]">
          <div className="relative flex flex-col  gap-[4rem] w-[100%] mt-[1rem]">
            <div>
              <form
                onKeyDown={(e) => {
                  if (e.key === 'Enter') handleSearch();
                }}
                className='flex flex-col w-[100%] gap-[1rem]'
              >
                <input
                  type='text'
                  onChange={(e) => setSearch(e.target.value)}
                  value={search}
                  autoComplete="off"
                  placeholder='Search policemen'
                  className='bg-[#8C8C9A1F] text-[#bcc8f080] px-[1rem] py-[.5rem] rounded-md outline-none focus:outline-[#6c71ff5c] text-[1.12rem] text-center'
                />
              </form>
            </div>

            <div className={`${searchResult.length > 0 && search.length > 0 ? "py-[2rem]" : ""} absolute z-[1] top-[2.7rem] rounded-md w-[100%] items-center flex flex-col gap-[.5rem] max-h-[26.2rem] overflow-y-auto bg-[#3f4b69] text-[.9rem]`}>
              {
                searchResult && search.length > 0 && searchResult.map((data, index) => (
                  <div key={index} onClick={() => handleAssignPolice(data.name, data.profileImg, data.taskAssigned)} className="cursor-pointer select-none flex justify-between gap-[.5rem] w-[19rem] max-h-[4rem] px-[.8rem] py-[.5rem] border-[1px] border-[#2f3241] bg-[#141d35] rounded-md text-[.9rem] shadow-xl shadow-[#20263b]">
                    <div className="flex items-center">
                      <Image
                        src={data.profileImg}
                        height={100}
                        width={100}
                        className="w-[2.6rem] rounded-full"
                      />
                    </div>
                    <div className="flex flex-col gap-[.2rem]">
                      <h2>{data.name}</h2>
                      <h2 className="flex gap-[.1rem] items-center">
                        <MdAssignmentTurnedIn className="text-green-600 mr-[.2rem]" />
                        <span>{data.taskAssigned}</span>
                        <span>assigned</span>
                      </h2>
                    </div>
                  </div>
                ))
              }
            </div>

            <div className=" w-[100%] flex flex-col  justify-center  " >

              <div className="flex justify-center  w-[100%] text-[1.15rem] bg-[#0a0f1c] py-[.7rem] rounded-tl-[1rem] rounded-tr-[1rem]  " >
                <h2>Assigned Policemen </h2>
              </div>

              <div className=" flex flex-col h-[19rem] py-[1rem] gap-[.5rem] items-center bg-[#212c47] border-t-[2px] border-[#2a2e3e] overflow-y-auto " >
                {
                  assignedPolice && assignedPolice.map((data, index) => (
                    <div key={index} className="  cursor-pointer select-none flex justify-between gap-[.5rem] w-[14rem] max-h-[3.5rem] px-[.8rem] py-[.5rem] border-[1px] border-[#2f3241] bg-[#141d35] rounded-md text-[.9rem] shadow-xl shadow-[#20263b]">
                      <div className="flex items-center">
                        <Image
                          src={data.profileImg}
                          height={100}
                          width={100}
                          className="w-[1.7rem] rounded-full"
                        />
                      </div>
                      <div className="flex flex-col text-[.8rem] gap-[.2rem]">
                        <h2>{data.name}</h2>
                        <h2 className="flex gap-[.1rem] items-center">
                          <MdAssignmentTurnedIn className="text-green-600 mr-[.2rem]" />
                          <span>{data.taskAssigned}</span>
                          <span>assigned</span>
                        </h2>
                      </div>
                    </div>
                  ))
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AssignTask;
