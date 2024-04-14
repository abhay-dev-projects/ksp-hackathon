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
import { MdEdit, MdDeleteForever } from "react-icons/md";
import TextFields from "@/components/common/InputFields/TextFields";
import SortData from "@/components/common/filter/SortData";
import InputFilter from "@/components/common/filter/InputFilter";
import { useBoards } from '@/context/BoardContext';

const AddTask = ({
  visible,
  onClose = () => { },
  callback = () => { },
  data,
}) => {
  const [search, setSearch] = useState('');
  const [searchResult, setSearchResult] = useState([]);
  const [assignedPolice, setAssignedPolice] = useState([]);
  const [caseSelcted, setCaseSelcted] = useState(null);
  const [crimeSelected, setCrimeSelected] = useState(null);
  const [caseShortName, setCaseShortName] = useState(null);
  const [createTaskValidated, setTaskValidated] = useState(false);
  const [creatingTask, setCreatingTask] = useState(null);

  const { createTask } = useBoards();



  const caseData = [
    {
      informantName: "Priya Sharma",
      suspectName: "Rahul Verma",
      informantAge: 42,
      suspectAge: 36,
      informantCity: "Bangalore",
      suspectCity: "Chennai",
      officialName: "Sub-Inspector Reddy",
      phoneNo: "+91 8765432109",
      report: "Suspect Rahul Verma was reported for vandalism in Bangalore downtown.",
      date: "12-04-24 8:13 PM"
    },
    {
      informantName: "Karthik Reddy",
      suspectName: "Sneha Rao",
      informantAge: 28,
      suspectAge: 30,
      informantCity: "Bangalore",
      suspectCity: "Bangalore",
      officialName: "Constable Kumar",
      phoneNo: "+91 9876543212",
      report: "Suspect Sneha Rao was apprehended for theft at a mall in Bangalore.",
      date: "12-04-24 9:30 AM"
    },
    {
      informantName: "Deepa Singh",
      suspectName: "Ajay Kumar",
      informantAge: 35,
      suspectAge: 40,
      informantCity: "Bangalore",
      suspectCity: "Bangalore",
      officialName: "Inspector Patel",
      phoneNo: "+91 7654321098",
      report: "Suspect Ajay Kumar was involved in a hit-and-run accident in Bangalore outskirts.",
      date: "12-04-24 11:45 PM"
    },
    {
      informantName: "Anand Sharma",
      suspectName: "Meera Patel",
      informantAge: 39,
      suspectAge: 32,
      informantCity: "Bangalore",
      suspectCity: "Bangalore",
      officialName: "Sub-Inspector Nair",
      phoneNo: "+91 8765432107",
      report: "Suspect Meera Patel was arrested for fraud in a financial scam in Bangalore.",
      date: "12-04-25 2:20 PM"
    },
    {
      informantName: "Shivani Gupta",
      suspectName: "Rajesh Singh",
      informantAge: 45,
      suspectAge: 48,
      informantCity: "Bangalore",
      suspectCity: "Bangalore",
      officialName: "Inspector Rao",
      phoneNo: "+91 9876543211",
      report: "Suspect Rajesh Singh was apprehended for domestic violence in Bangalore.",
      date: "12-04-25 5:55 AM"
    },
    {
      informantName: "Suresh Menon",
      suspectName: "Aarti Sharma",
      informantAge: 50,
      suspectAge: 46,
      informantCity: "Bangalore",
      suspectCity: "Bangalore",
      officialName: "Constable Khan",
      phoneNo: "+91 7654321096",
      report: "Suspect Aarti Sharma was reported for embezzlement in a corporate office in Bangalore.",
      date: "12-04-25 1:10 PM"
    },
    {
      informantName: "Neha Patel",
      suspectName: "Vijay Kumar",
      informantAge: 33,
      suspectAge: 38,
      informantCity: "Bangalore",
      suspectCity: "Bangalore",
      officialName: "Sub-Inspector Desai",
      phoneNo: "+91 8765432106",
      report: "Suspect Vijay Kumar was apprehended for drug trafficking in Bangalore.",
      date: "12-04-26 4:35 PM"
    },
    {
      informantName: "Arjun Singh",
      suspectName: "Pooja Reddy",
      informantAge: 28,
      suspectAge: 31,
      informantCity: "Bangalore",
      suspectCity: "Bangalore",
      officialName: "Constable Sharma",
      phoneNo: "+91 9876543210",
      report: "Suspect Pooja Reddy was involved in a road rage incident in Bangalore.",
      date: "12-04-26 10:15 AM"
    },
    {
      informantName: "Geeta Kapoor",
      suspectName: "Sanjay Gupta",
      informantAge: 55,
      suspectAge: 50,
      informantCity: "Bangalore",
      suspectCity: "Bangalore",
      officialName: "Inspector Kumar",
      phoneNo: "+91 8765432105",
      report: "Suspect Sanjay Gupta was apprehended for illegal gambling in Bangalore.",
      date: "12-04-27 3:45 PM"
    },
    {
      informantName: "Vishal Rao",
      suspectName: "Anita Mehra",
      informantAge: 40,
      suspectAge: 37,
      informantCity: "Bangalore",
      suspectCity: "Bangalore",
      officialName: "Sub-Inspector Singh",
      phoneNo: "+91 7654321095",
      report: "Suspect Anita Mehra was reported for shoplifting in a store in Bangalore.",
      date: "12-04-27 12:20 PM"
    }
  ];

  const crime_categories = [
    { "id": 1, "crime": 'POCSO' },
    { "id": 2, "crime": 'KARNATAKA POLICE ACT 1963' },
    { "id": 3, "crime": 'MOTOR VEHICLE ACCIDENTS NON-FATAL' },
    { "id": 4, "crime": 'MOTOR VEHICLE ACCIDENTS FATAL' },
    { "id": 5, "crime": 'THEFT' },
    { "id": 6, "crime": 'CrPC' },
    { "id": 7, "crime": 'CRUELTY BY HUSBAND' },
    { "id": 8, "crime": 'ATTEMPT TO MURDER' },
    { "id": 9, "crime": 'CHEATING' },
    { "id": 10, "crime": 'Karnataka State Local Act' },
    { "id": 11, "crime": 'ELECTION' },
    { "id": 12, "crime": 'REPRESENTATION OF PEOPLE ACT 1951 & 1988' },
    { "id": 13, "crime": 'MOLESTATION' },
    { "id": 14, "crime": 'MISSING PERSON' },
    { "id": 15, "crime": 'CASES OF HURT' },
    { "id": 16, "crime": 'FORGERY' },
    { "id": 17, "crime": 'SCHEDULED CASTE AND THE SCHEDULED TRIBES' },
    { "id": 18, "crime": 'BURGLARY - NIGHT' },
    { "id": 19, "crime": 'NEGLIGENT ACT' },
    { "id": 20, "crime": 'MURDER' },
    { "id": 21, "crime": 'RIOTS' },
    { "id": 22, "crime": 'Attempting to commit offences' },
    { "id": 23, "crime": 'KIDNAPPING AND ABDUCTION' },
    { "id": 24, "crime": 'EXPLOSIVES' },
    { "id": 25, "crime": 'EXPOSURE AND ABANDONMENT OF CHILD' },
    { "id": 26, "crime": 'ARSON' },
    { "id": 27, "crime": 'CONSUMER' },
    { "id": 28, "crime": 'OFFENCES AGAINST PUBLIC SERVANTS (Public servant is a victim)' },
    { "id": 29, "crime": 'CRIMES RELATED TO WOMEN' },
    { "id": 30, "crime": 'DEATHS DUE TO RASHNESS/NEGLIGENCE' },
    { "id": 31, "crime": 'COMMUNAL / RELIGION' },
    { "id": 32, "crime": 'DOWRY DEATHS' },
    { "id": 33, "crime": 'CRIMINAL BREACH OF TRUST' },
    { "id": 34, "crime": 'DACOITY' },
    { "id": 35, "crime": 'PREVENTION OF DAMAGE TO PUBLIC PROPERTY ACT 1984' },
    { "id": 36, "crime": 'BURGLARY - DAY' },
    { "id": 37, "crime": 'ANIMAL' },
    { "id": 38, "crime": 'MISCHIEF' },
    { "id": 39, "crime": 'INSULTING MODESTY OF WOMEN (EVE TEASING)' },
    { "id": 40, "crime": 'CRIMINAL TRESPASS' },
    { "id": 41, "crime": 'CRIMINAL INTIMIDATION' },
    { "id": 42, "crime": 'CRIMINAL CONSPIRACY' },
    { "id": 43, "crime": 'SUICIDE' },
    { "id": 44, "crime": 'NARCOTIC DRUGS & PSYCHOTROPIC SUBSTANCES' },
    { "id": 45, "crime": 'PUBLIC SAFETY' },
    { "id": 46, "crime": 'CHILDREN ACT' },
    { "id": 47, "crime": 'ROBBERY' },
    { "id": 48, "crime": 'RAPE' },
    { "id": 49, "crime": 'ANTIQUES (CULTURAL PROPERTY)' },
    { "id": 50, "crime": 'CYBER CRIME' },
    { "id": 51, "crime": 'Concealment of birth by secret disposal of Child' },
    { "id": 52, "crime": 'FOREST' },
    { "id": 53, "crime": 'AFFRAY' },
    { "id": 54, "crime": 'CULPABLE HOMICIDE NOT AMOUNTING TO MURDER' },
    { "id": 55, "crime": 'DEFAMATION' },
    { "id": 56, "crime": 'ATTEMPT TO CULPABLE HOMICIDE NOT AMOUNTING TO MURDER' },
    { "id": 57, "crime": 'WRONGFUL RESTRAINT/CONFINEMENT' },
    { "id": 58, "crime": 'COTPA, CIGARETTES AND OTHER TOBACCO PRODUCTS' },
    { "id": 59, "crime": 'CRIMINAL MISAPPROPRIATION' },
    { "id": 60, "crime": 'ASSAULT OR USE OF CRIMINAL FORCE TO DISROBE WOMAN' },
    { "id": 61, "crime": 'Disobedience to Order Promulgated by Public Servant' },
    { "id": 62, "crime": 'UNNATURAL SEX' },
    { "id": 63, "crime": 'POISONING-PROFESSIONAL' },
    { "id": 64, "crime": 'ASSAULT' },
    { "id": 65, "crime": 'ARMS ACT 1959' },
    { "id": 66, "crime": 'SEDITION' },
    { "id": 67, "crime": 'COPYRIGHT ACT 1957' },
    { "id": 68, "crime": 'OF ABETMENT' },
    { "id": 69, "crime": 'OFFENCES RELATED TO MARRIAGE' },
    { "id": 70, "crime": 'PUBLIC NUISANCE' },
    { "id": 71, "crime": 'Failure to appear to Court' },
    { "id": 72, "crime": 'ADULTERATION' },
    { "id": 73, "crime": 'POST & TELEGRAPH, TELEGRAPH WIRES(UNLAWFUL POSSESSION) ACT 1950' },
    { "id": 74, "crime": 'IMPERSONATION' },
    { "id": 75, "crime": 'PUBLIC JUSTICE' },
    { "id": 76, "crime": 'OFFENCES PROMOTING ENMITY' },
    { "id": 77, "crime": 'INDIAN MOTOR VEHICLE' },
    { "id": 78, "crime": 'COUNTERFEITING' },
    { "id": 79, "crime": 'DEATHS-MISCARRIAGE' },
    { "id": 80, "crime": 'PORNOGRAPHY' },
    { "id": 81, "crime": 'IMMORAL TRAFFIC' },
    { "id": 82, "crime": 'FALSE EVIDENCE' },
    { "id": 83, "crime": 'BONDED LABOUR SYSTEM' },
    { "id": 84, "crime": 'ESCAPE FROM LAWFUL CUSTODY AND RESISTANCE' },
    { "id": 85, "crime": 'PASSPORT ACT' },
    { "id": 86, "crime": 'Human Trafficking' },
    { "id": 87, "crime": 'OFFENCES BY PUBLIC SERVANTS (EXCEPT CORRUPTION) (Public servant is accused)' },
    { "id": 88, "crime": 'SLAVERY' },
    { "id": 89, "crime": 'Giving false information respecting an offence com' },
    { "id": 90, "crime": 'FOREIGNER' },
    { "id": 91, "crime": 'RECEIVING OF STOLEN PROPERTY' },
    { "id": 92, "crime": 'OFFICIAL SECURITY RELATED ACTS' },
    { "id": 93, "crime": 'UNLAWFUL ACTIVITIES(Prevention)ACT 1967' },
    { "id": 94, "crime": 'UNNATURAL DEATH (Sec 174/174c/176)' },
    { "id": 95, "crime": 'CINEMATOGRAPH ACT 1952' },
    { "id": 96, "crime": 'DOCUMENTS & PROPERTY MARKS' },
    { "id": 97, "crime": 'DEFENCE FORCES OFFENCES RELATING TO (also relating to desertion)' },
    { "id": 98, "crime": 'INDIAN ELECTRICITY ACT' },
    { "id": 99, "crime": 'PREVENTION OF CORRUPTION ACT 1988' },
    { "id": 100, "crime": 'INFANTICIDE' },
    { "id": 101, "crime": 'NATIONAL SECURITY ACT' },
    { "id": 102, "crime": 'ILLEGAL DETENTION' },
    { "id": 103, "crime": 'RAILWAYS ACT' },
    { "id": 104, "crime": 'OFFENCES AGAINST STATE' },
    { "id": 105, "crime": 'CIVIL RIGHTS' },
    { "id": 106, "crime": 'FAILURE TO APPEAR TO COURT' },
    { "id": 107, "crime": 'BUYING & SELLING MINOR FOR PROSTITUTION' }
  ]

  const [crimeList, setCrimeList] = useState(crime_categories);

  const handleSearch = () => {
    if (search.length > 0) {
      const regex = new RegExp(search, 'i');
      const filteredCase = caseData.filter((c) => {
        const fieldsToSearch = ['informantName', 'suspectName', 'officialName', 'report', 'date'];
        for (let key of fieldsToSearch) {
          if (regex.test(c[key])) {
            return true; // if any field matches, include the case
          }
        }
        return false; // if no field matches, exclude the case
      });
      setSearchResult(filteredCase);
    } else {
      setSearchResult(caseData); // If search is empty, show all cases
    }
  };

  const handleCaseSelection = (informantName, suspectName, informantAge, suspectAge, informantCity, suspectCity, officialName, phoneNo, report, date) => {
    const selectedCase = {
      informantName,
      suspectName,
      informantAge,
      suspectAge,
      informantCity,
      suspectCity,
      officialName,
      phoneNo,
      report,
      date
    };
    setCaseSelcted(selectedCase);
    setSearch('');
  };

  const validateTaskCreation = () => {
    if (caseShortName && caseSelcted) {
      setTaskValidated(true)
    }
    else {
      setTaskValidated(false)
    }
  }
  useEffect(() => {
    validateTaskCreation()
  }, [caseShortName, caseSelcted])


  const handleTaskCreation = () => {
    if (createTaskValidated) {
      setCreatingTask(true);
      let taskData = {
        title: caseShortName,
        description: "",
        subtasks: ['', ''],
        status: "Initial"
      }
      createTask(taskData);
      setTimeout(() => onClose(), 3000);

    }
    else {
      setTaskValidated(false);
      setCreatingTask(false);
    }

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
            <div className={` ${caseSelcted === null ? "" : "hidden"}  `} >
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
                  placeholder='Search FIR Case'
                  className='bg-[#8C8C9A1F] text-[#bcc8f080] px-[1rem] py-[.5rem] rounded-md outline-none focus:outline-[#6c71ff5c] text-[1.12rem] text-center'
                />
              </form>
            </div>

            <div className={`${searchResult.length > 0 && search.length > 0 ? "py-[2rem]" : ""} absolute z-[1] top-[2.7rem] rounded-md w-[100%] items-center flex flex-col gap-[.5rem] max-h-[26.2rem] overflow-y-auto bg-[#3f4b69] text-[.9rem]`}>
              {
                searchResult.length > 0 && search.length > 0 && searchResult.map((data, index) => (
                  <div key={index} onClick={() => handleCaseSelection(data.informantName, data.suspectName, data.informantAge, data.suspectAge, data.informantCity, data.suspectCity, data.officialName, data.phoneNo, data.report, data.date)} className="cursor-pointer select-none flex justify-between gap-[.5rem] w-[25rem] max-h-[6rem] px-[.8rem] py-[.5rem] border-[1px] border-[#2f3241] bg-[#141d35] rounded-md text-[.9rem] shadow-xl shadow-[#20263b]">

                    <div className="flex flex-col gap-[.2rem] text-[.9rem] normal-case ">
                      <div className="flex justify-between " >
                        <h3>{data.informantName}</h3>
                        <p className=" text-[.76rem] opacity-[.75] " >{data.date}</p>
                      </div>
                      <div className="flex " >
                        <h2 className=" text-[.84rem] opacity-[.55] " >{data.report}</h2>
                      </div>
                    </div>
                  </div>
                ))
              }
            </div>

            <div className={`w-[100%] ${caseSelcted ? "flex h-[66.3vh] " : "hidden"} flex-col  bg-[#212c47]  rounded-tl-[1rem] rounded-tr-[1rem]     `} >

              <div className={`flex justify-center  w-[100%] text-[1.15rem] bg-[#0a0f1c] py-[.7rem] rounded-tl-[1rem] rounded-tr-[1rem]  `} >
                <h2>Case Data </h2>
              </div>

              <div className=" relative flex flex-col w-[100%] py-[1rem] gap-[.5rem] px-[1rem]   " >
                <label htmlFor={"case selected"} className=" normal-case text-[.95rem] ml-[.1rem] opacity-[.8] " >
                  Case selected
                </label>
                {
                  caseSelcted && (
                    <div className=" w-[100%]  cursor-pointer select-none flex justify-between gap-[.5rem] min-h-[4.2rem]  max-h-[6rem] px-[.8rem] py-[.5rem] border-[1px] border-[#2f3241] bg-[#141d35] rounded-md text-[.9rem] shadow-xl shadow-[#20263b]">
                      <div className="flex flex-col gap-[.2rem] text-[.9rem] normal-case ">
                        <div className="flex justify-between " >
                          <h3>{caseSelcted.informantName}</h3>
                          <p className=" text-[.76rem] opacity-[.75] " >{caseSelcted.date}</p>
                        </div>
                        <div className="flex " >
                          <h2 className=" text-[.84rem] opacity-[.55] line-clamp-2 " >{caseSelcted.report}</h2>
                        </div>
                      </div>
                    </div>
                  )
                }
                <button
                  onClick={() => setCaseSelcted(null)}
                  className=" absolute right-[.5rem] p-[.5rem] top-[2.6rem] text-[#fd001ec9] task-delete-bg rounded-full w-fit px-[.25rem] py-[.25rem] "
                >
                  <MdDeleteForever className=" text-[1.02rem] " />
                </button>
              </div>

              <div className=" flex flex-col gap-[1rem] px-[1rem] mt-[.5rem] " >
                <label htmlFor={"crime selected"} className=" normal-case    text-[.95rem] ml-[.1rem] opacity-[.8] " >
                  Selected type of crime
                  <span className="text-red-500 top-[.7rem] ml-[.2rem] " >*</span>
                </label>
                <InputFilter
                  fieldsToSearch={['crime']}
                  searchInData={crime_categories}
                  searchResult={crimeList}
                  setSearchResult={setCrimeList}
                  searchPlaceholder={"Search crime"}
                />
              </div>
              <div className=" text-[1rem] normal-case px-[.8rem] mt-[1rem] " >
                <TextFields
                  value={caseShortName}
                  setValue={setCaseShortName}
                  label={"Short Case name"}
                  placeholder={"Enter short name for above case"}
                  required={true}
                />
                <button
                  disabled={!createTaskValidated}
                  onClick={handleTaskCreation}
                  className={` ${creatingTask ? "animate-pulse" : ""
                    } ${createTaskValidated ? "" : " opacity-[.4] cursor-not-allowed "} flex gap-[.8rem] justify-center items-center bg-[#6C72FF] py-[.6rem] text-white rounded-md mt-[2rem] w-[100%] h-[2.5rem] text-[1.01rem] mx-auto   `}
                >
                  {" "}
                  {creatingTask ? "Creating your task" : "Create Task"}
                  <div
                    className={` ${creatingTask ? "" : "hidden"
                      } w-[1rem] h-[1rem] border-t-2  border-white rounded-[50%] animate-spin `}
                  />
                </button>
              </div>




            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddTask;
