import React, { useContext } from "react";
import TextFields from "../common/InputFields/TextFields";
import { useState, useEffect } from "react";
import StageSelector from "../common/InputFields/StageSelector";
import axios from "axios";
import { ApiUrl } from "@/utils/BaseUrl";
import { DataLayer } from "@/context/UserDataProvider";
import Cookies from 'js-cookie';

const UpdataFir = ({
  visible,
  onClose = () => { },
  callback = () => { },
  data,
  firid
}) => {
  const [accusedName, setAccusedName] = useState();
  const [accusedAge, setAccusedAge] = useState();
  const [accusedCity, setAccusedCity] = useState();
  const [accusedReport, setAccusedReport] = useState();

  const [suspectName, setSuspectName] = useState();
  const [suspectAge, setSuspectAge] = useState();
  const [suspectCity, setSuspectCity] = useState();

  const [stage, setStage] = useState();

  const [disabled, setDisabled] = useState(false);

  const { setRefresh } = useContext(DataLayer);
  console.log("data in update fir", data)

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
  const getFirData = async () => {
    try {
      console.log("data in update fir", data)
      const token = Cookies.get('accessToken');
      const response = await axios.get(
        `${ApiUrl}/api/getSingleFir/${firid}?token=${token}`,
        {
          withCredentials: true,
        }
      );
      console.log("fir data ", response)
      const fir = response.data.userFir;
      console.log(fir.stages);
      setAccusedName(fir.accusedName);
      setAccusedAge(fir.accusedAge);
      setAccusedCity(fir.accusedCity);
      setAccusedReport(fir.accusedReport);
      setSuspectAge(fir.suspectAge);
      setSuspectName(fir.suspectName);
      setSuspectCity(fir.suspectCity);
    } catch (error) {
      console.log(error);
    }
  };

  const updateFirData = async () => {
    try {
      const token = Cookies.get('accessToken');
      await axios.put(
        `${ApiUrl}/api/upInvStg/${data.firid}/${stageData[stage - 1].name}?token=${token}`, {},
        { withCredentials: true }
      );
      setRefresh((prev) => !prev);
      onClose();

    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (visible) {
      document.body.style.overflow = "hidden";
      getFirData();
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
              disabled={disabled}
            />
            <TextFields
              value={suspectName}
              setValue={setSuspectName}
              label="Suspect Name"
              placeholder="Enter Full Name"
              required={true}
              disabled={disabled}
            />
          </div>
          <div className=" flex justify-between gap-[1.5rem] w-[100%] ">
            <TextFields
              value={accusedAge}
              setValue={setAccusedAge}
              label="Informant Age"
              placeholder="Enter Age"
              required={true}
              disabled={disabled}
            />
            <TextFields
              value={suspectAge}
              setValue={setSuspectAge}
              label="Suspect Age"
              placeholder="Enter Age"
              required={true}
              disabled={disabled}
            />
          </div>
          <div className=" flex justify-between gap-[1.5rem] w-[100%] ">
            <TextFields
              value={accusedCity}
              setValue={setAccusedCity}
              label="Informant City"
              placeholder="Enter City"
              required={true}
              disabled={disabled}
            />
            <TextFields
              value={suspectCity}
              setValue={setSuspectCity}
              label="Suspect City"
              placeholder="Enter City"
              required={true}
              disabled={disabled}
            />
          </div>
          <div className=" flex flex-col gap-[.5rem] w-[100%] text-[#AEB9E180]  ">
            <label htmlFor={"accused-report"}>
              Informant Report <span className={` text-red-600 `}>*</span>
            </label>
            <textarea
              disabled={disabled}
              onChange={(e) => setAccusedReport(e.target.value)}
              value={accusedReport}
              type="text"
              className=" h-[8rem] bg-[#8C8C9A1F] text-[#AEB9E180] px-[1rem] py-[.5rem] rounded-md outline-none focus:outline-[#6c71ff5c]"
              placeholder={"Enter Report"}
            />
          </div>
          <div className=" flex justify-start gap-[1rem] w-[100%]  ">
            {/* {stageData &&
              stageData.map((data, index) => {
                return (
                  <div
                    onClick={() => setStage(data.id)}
                    key={index}
                    className={` ${
                      data.id === stage
                        ? "stage-select text-[#BB800C] "
                        : "stage-no-select text-[#AEB9E1] "
                    } cursor-pointer flex justify-center items-center gap-[.3rem] px-[.6rem] py-[.3rem]  `}
                  >
                    <div
                      className={` ${
                        data.id === stage ? "  " : " bg-transparent "
                      } w-[.5rem] h-[.5rem] rounded-full bg-[#FFAE11]  `}
                    ></div>
                    {data.name}
                  </div>
                );
              })} */}
            <StageSelector setStage={setStage} stage={stage} data={stageData} />
          </div>
          <button
            onClick={() => updateFirData()}
            className=" w-[100%] h-[2.6rem] flex justify-center items-center rounded-md bg-[#6C72FF] text-white mt-[1.5rem] "
          >
            Update FIR Report
          </button>
        </div>
      </div>
    </div>
  );
};

export default UpdataFir;
