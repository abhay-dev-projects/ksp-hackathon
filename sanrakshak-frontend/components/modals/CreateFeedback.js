import React, { useEffect, useState, useContext } from "react";
import TextFields from "../common/InputFields/TextFields";
import StageSelector from "../common/InputFields/StageSelector";
import axios from "axios";
import { ApiUrl } from "@/utils/BaseUrl";
import { DataLayer } from "@/context/UserDataProvider";
import Cookies from 'js-cookie';

const RegisterFir = ({
  visible,
  onClose = () => { },
  callback = () => { },
  data,
}) => {
  const { setRefresh } = useContext(DataLayer);

  const [userName, setUserName] = useState();
  const [userAge, setUserAge] = useState();
  const [userFeedback, setUserFeedback] = useState();
  const [rating, setRating] = useState();

  const [hero, setHero] = useState();

  const stageData = [
    {
      id: 1,
      name: "registered",
    },
    {
      id: 2,
      name: "investigation",
    },
    {
      id: 3,
      name: "action",
    },
    {
      id: 4,
      name: "case closed",
    },
  ];
  const makeFeedback = async () => {
    try {
      const token = Cookies.get('accessToken');
      await axios.post(
        `${ApiUrl}/api/createFeedback?token=${token}`,
        {
          userName,
          userAge,
          userFeedback,
          rating,
          hero
        },
        {
          withCredentials: true,
        }
      );
      setRefresh((prev) => !prev);
      onClose();
      console.log(fir.stages);
    } catch (error) {
      console.log(error);
    }
  };
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
        if (e.target.id == "background") onClose();
      }}
    >
      <div className=" flex w-[40rem]  px-[2rem] py-[2rem] register-fir-bg  ">
        <div className=" flex flex-col w-[100%] gap-[1rem] ">
          <div className=" flex justify-between gap-[1.5rem] w-[100%] ">
            <TextFields
              value={userName}
              setValue={setUserName}
              label="Informant Name"
              placeholder="Enter Full Name"
              required={true}
            />
            <TextFields
              value={userAge}
              setValue={setUserAge}
              label="Age"
              placeholder="Enter your "
              required={true}
            />
          </div>
          <div className=" flex justify-between gap-[1.5rem] w-[100%] ">
            <TextFields
              value={hero}
              setValue={setHero}
              label="Hero"
              placeholder="Hero Name"
              required={true}
            />
            <TextFields
              value={rating}
              setValue={setRating}
              label="Rating"
              placeholder="Enter rating out of 5"
              required={true}
            />
          </div>
          <div>
            <div className="flex-col flex w-[100%]">
              <label className="text-[#AEB9E180]">Feedback Report: </label>
              <textarea
                type="textarea"
                className=" resize-none text-[#bcc8f080] text-sm px-4 py-2 rounded-md bg-[#8C8C9A1F] min-h-20 max-h-32 w-full outline-none focus:outline-[#6c71ff5c]"
                placeholder="Enter Feedback"
                value={userFeedback}
                onChange={(e) => setUserFeedback(e.target.value)}
                required
              />
            </div>
          </div>
          {/* <StageSelector stage={stage} setStage={setStage} data={stageData} /> */}
          <button
            onClick={makeFeedback}
            className=" w-[100%] h-[2.6rem] flex justify-center items-center rounded-md bg-[#6C72FF] text-white mt-[1.5rem] "
          >
            Create Feedback
          </button>
        </div>
      </div>
    </div>
  );
};

export default RegisterFir;
