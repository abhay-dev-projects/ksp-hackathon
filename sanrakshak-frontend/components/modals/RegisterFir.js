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

  const [accusedName, setAccusedName] = useState();
  const [accusedAge, setAccusedAge] = useState();
  const [accusedCity, setAccusedCity] = useState();
  const [accusedReport, setAccusedReport] = useState();

  const [suspectName, setSuspectName] = useState();
  const [suspectAge, setSuspectAge] = useState();
  const [suspectCity, setSuspectCity] = useState();
  const [hero, setHero] = useState();
  const [phoneNo, setPhoneNo] = useState();

  const [stage, setStage] = useState(1);

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
  const makeFir = async () => {
    try {
      const token = Cookies.get('accessToken');
      await axios.post(
        `${ApiUrl}/api/police/createFir?token=${token}`,
        {
          accusedName: accusedName,
          suspectName: suspectName,
          accusedAge: accusedAge,
          suspectAge: suspectAge,
          accusedCity: accusedCity,
          suspectCity: suspectCity,
          accusedReport: accusedReport,
          stages: stageData[1].name,
          hero: hero,
          phoneno: phoneNo,
        },
        {
          withCredentials: true,
        }
      );
      setRefresh((prev) => !prev);
      setAccusedName();
      setSuspectName();
      setAccusedAge();
      setSuspectAge();
      setSuspectCity();
      setAccusedCity();
      setAccusedReport();
      setStage();
      setHero();
      setPhoneNo();
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
              value={accusedName}
              setValue={setAccusedName}
              label="Informant Name"
              placeholder="Enter Full Name"
              required={true}
            />
            <TextFields
              value={suspectName}
              setValue={setSuspectName}
              label="Suspect Name"
              placeholder="Enter Full Name"
              required={true}
            />
          </div>
          <div className=" flex justify-between gap-[1.5rem] w-[100%] ">
            <TextFields
              value={accusedAge}
              setValue={setAccusedAge}
              label="Informant Age"
              placeholder="Enter Age"
              required={true}
            />
            <TextFields
              value={suspectAge}
              setValue={setSuspectAge}
              label="Suspect Age"
              placeholder="Enter Age"
              required={true}
            />
          </div>
          <div className=" flex justify-between gap-[1.5rem] w-[100%] ">
            <TextFields
              value={accusedCity}
              setValue={setAccusedCity}
              label="Informant City"
              placeholder="Enter City"
              required={true}
            />
            <TextFields
              value={suspectCity}
              setValue={setSuspectCity}
              label="Suspect City"
              placeholder="Enter City"
              required={true}
            />
          </div>
          <div className=" flex justify-between gap-[1.5rem] w-[100%] ">
            <TextFields
              value={hero}
              setValue={setHero}
              label="Official Name"
              placeholder="Enter official name"
              required={true}
            />
            <TextFields
              value={phoneNo}
              setValue={setPhoneNo}
              label="Phone no"
              placeholder="Enter no"
              required={true}
            />
          </div>
          <div className=" flex flex-col gap-[.5rem] w-[100%] text-[#AEB9E180]  ">
            <label htmlFor={"accused-report"}>
              In Report <span className={` text-red-600 `}>*</span>
            </label>
            <textarea
              onChange={(e) => setAccusedReport(e.target.value)}
              value={accusedReport}
              type="text"
              className=" h-[8rem] bg-[#8C8C9A1F] text-[#AEB9E180] px-[1rem] py-[.5rem] rounded-md outline-none focus:outline-[#6c71ff5c]"
              placeholder={"Enter Report"}
            />
          </div>
          {/* <StageSelector stage={stage} setStage={setStage} data={stageData} /> */}
          <button
            onClick={makeFir}
            className=" w-[100%] h-[2.6rem] flex justify-center items-center rounded-md bg-[#6C72FF] text-white mt-[1.5rem] "
          >
            Create FIR Report
          </button>
        </div>
      </div>
    </div>
  );
};

export default RegisterFir;
