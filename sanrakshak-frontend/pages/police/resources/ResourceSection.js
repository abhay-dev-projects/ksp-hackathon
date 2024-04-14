import AddSubTask from '@/components/modals/task/AddSubTask';
import React from 'react'
import { useState } from 'react';
import { MdAssignmentAdd, MdGroupAdd, MdPlaylistPlay } from "react-icons/md";

export default function ResourceSection({data}) {
  const officerData = [
    {
      rank: "Police Inspectors",
      officers: [
        {
          name: "Manoj Tiwari",
          availability: "Leave",
          task: "",
          caseId: "",
        },
        {
          name: "Rahul Sharma",
          availability: "Available",
          task: "",
          caseId: "",
        },
      ],
    },
    {
      rank: "Sub-Inspector",
      officers: [
        {
          name: "Vikalp Sharma",
          availability: "Assigned",
          task: "Investigate robbery case in downtown area.",
          caseId: "12345",
        },
        {
          name: "Anjali Singh",
          availability: "Available",
          task: "",
          caseId: "",
        },
      ],
    },
    {
      rank: "Assistant Sub-Inspector",
      officers: [
        {
          name: "Ayush Nandi",
          availability: "Available",
          task: "",
          caseId: "",
        },
        {
          name: "Sneha Kapoor",
          availability: "Assigned",
          task: "Patrol duty in residential areas.",
          caseId: "67890",
        },
        {
          name: "Ravi Kumar",
          availability: "Leave",
          task: "",
          caseId: "",
        },
      ],
    },
    {
      rank: "Head Constable",
      officers: [
        {
          name: "Sanjay Gupta",
          availability: "Available",
          task: "Conduct a safety audit of all fire stations in the city.",
          caseId: "",
        },
      ],
    },
    {
      rank: "Police Constable",
      officers: [
        {
          name: "Amit Singh",
          availability: "Available",
          task: "Conduct a safety audit of all fire stations in the city.",
          caseId: "",
        },
        {
          name: "Pooja Sharma",
          availability: "Available",
          task: "Patrol duty in commercial areas.",
          caseId: "",
        },
      ],
    },
  ];

  const arsenalData = {
    "Guns & Rifles": [
      {
        id: "001",
        type: ".303 Rifles",
        availability: "Available",
        assigned: "",
      },
      {
        id: "002",
        type: ".410 Rifles",
        availability: "Assigned",
        assigned: "Rahul Sharma",
      },
      {
        id: "003",
        type: "Carbines",
        availability: "Service",
        assigned: "",
      },
      {
        id: "004",
        type: "Automatic Rifles",
        availability: "Available",
        assigned: "",
      },
      {
        id: "005",
        type: "Pistol",
        availability: "Available",
        assigned: "",
      },
      {
        id: "006",
        type: "Revolvers",
        availability: "Available",
        assigned: "",
      },
    ],
    "Grenades": [
      {
        id: "101",
        type: "Grenades",
        availability: "Available",
        assigned: "",
      },
      {
        id: "102",
        type: "Smoke Grenades",
        availability: "Assigned",
        assigned: "Anjali Singh",
      },
    ],
    "Equipments": [
      {
        id: "201",
        type: "Lathi",
        availability: "Available",
        assigned: "",
      },
      {
        id: "202",
        type: "Bulletproof Vests",
        availability: "Service",
        assigned: "",
      },
      {
        id: "203",
        type: "Ammunition",
        availability: "Available",
        assigned: "",
      },
      {
        id: "204",
        type: "Handsets",
        availability: "Available",
        assigned: "",
      },
    ],
  };

  const carrierData = {
    Bikes: [
      { name: "Apache 180", id: "KA03MM4456", availability: "Available", assignedTo: "" },
      { name: "Apache 180", id: "KA03MM4457", availability: "Assigned", assignedTo: "Officer A" },
      { name: "Apache 180", id: "KA03MM4458", availability: "Available", assignedTo: "" },
      { name: "Apache 180", id: "KA03MM4459", availability: "Service", assignedTo: "" },
    ],
    PatrolCars: [
      { name: "Ertiga", id: "KA05BB1234", availability: "Available", assignedTo: "" },
      { name: "Ertiga", id: "KA05BB1235", availability: "Available", assignedTo: "" },
      { name: "Ertiga", id: "KA05BB1236", availability: "Assigned", assignedTo: "Officer B" },
      { name: "Ertiga", id: "KA05BB1237", availability: "Service", assignedTo: "" },
    ],
    Jeeps: [
      { name: "Bolero", id: "KA07CC7890", availability: "Available", assignedTo: "" },
      { name: "Bolero", id: "KA07CC7891", availability: "Available", assignedTo: "" },
      { name: "Bolero", id: "KA07CC7892", availability: "Available", assignedTo: "" },
      { name: "Bolero", id: "KA07CC7893", availability: "Assigned", assignedTo: "Officer C" },
    ],
    "Traffic Unit Vehicles": [
      { name: "Ford Explorer", id: "KA09DD4567", availability: "Available", assignedTo: "" },
      { name: "Toyota Fortuner", id: "KA09DD4568", availability: "Available", assignedTo: "" },
      { name: "Honda CR-V", id: "KA09DD4569", availability: "Service", assignedTo: "" },
      { name: "Nissan X-Trail", id: "KA09DD4570", availability: "Assigned", assignedTo: "Officer D" },
    ],
  };


  const [expandedCarriers, setExpandedCarriers] = useState(Array(carrierData.length).fill(false));
  const [expandedArsenal, setExpandedArsenal] = useState(Array(arsenalData.length).fill(false));
  const [expandedOfficers, setExpandedOfficers] = useState(
    Array(officerData.length).fill(false)
  );
  const handleToggle = (index) => {
    const updatedExpandedOfficers = Array(officerData.length).fill(false);
    updatedExpandedOfficers[index] = !expandedOfficers[index];
    setExpandedOfficers(updatedExpandedOfficers);

    setExpandedArsenal(Array(arsenalData.length).fill(false));
    setExpandedCarriers(Array(carrierData.length).fill(false));

  };

  const handleToggleArsenal = (index) => {

    const updatedExpandedArsenal = Array(arsenalData.length).fill(false);
    updatedExpandedArsenal[index] = !expandedArsenal[index];
    setExpandedArsenal(updatedExpandedArsenal);

    setExpandedOfficers(Array(officerData.length).fill(false));
    setExpandedCarriers(Array(carrierData.length).fill(false));
  }

  const handleToggleCarrier = (index) => {
    const updatedExpandedCarriers = Array(carrierData.length).fill(false);
    updatedExpandedCarriers[index] = !expandedCarriers[index];
    setExpandedCarriers(updatedExpandedCarriers);

    setExpandedArsenal(Array(arsenalData.length).fill(false));
    setExpandedOfficers(Array(officerData.length).fill(false));
  }


  const [addTaskModel, setAddTaskModel] = useState(false)


  return (
    <div>
      <AddSubTask
        visible={addTaskModel}
        onClose={() => setAddTaskModel(false)}
        data={data}
      />


      <div className="bg-[#212C47] rounded-md w-[18rem] h-[85vh]  py-2">
        <h2 className="text-2xl mb-2 px-2 font-bold">Resources</h2>
        {/* Officers section */}
        <div className='card-scroll px-2 w-[100%] h-[78vh]' >
          <div className="flex my-1 justify-between ">
            <h2 className="text  text-base font-bold ">Officers On Duty</h2>
            <h2 className="text  text-base font-bold">30/54</h2>
          </div>
          <div>
            {officerData.map((rank, rankIndex) => {
              const sortedOfficers = rank.officers.sort((a, b) => {
                const order = { Available: 1, Assigned: 2, Leave: 3 };
                return order[a.availability] - order[b.availability];
              });

              return (
                <div key={rankIndex} className="my-3">
                  <div
                    className={`cursor-pointer select-none flex flex-col justify-between gap-[.2rem] w-[100%] px-[.8rem] py-[.5rem] border-[1px] border-[#2f3241] bg-[#141d35] rounded-md text-[1rem] shadow-xl shadow-[#20263b] overflow-hidden`}
                    onClick={() => handleToggle(rankIndex)}
                  >
                    <div className="flex gap-[1rem] w-[100%]">
                      <div className="w-[100%] flex justify-between">
                        <h4 className="line-clamp-3">{rank.rank}</h4>
                        <h4 className="line-clamp-3">{`${sortedOfficers.filter(
                          (officer) =>
                            officer.availability === "Available"
                        ).length
                          }/${sortedOfficers.length}`}</h4>
                      </div>
                    </div>
                    <div
                      className={`gap-[1rem] w-[100%] ${expandedOfficers[rankIndex] ? "" : "hidden"
                        }`}
                    >
                      {sortedOfficers.map((officer, officerIndex) => (
                        <div key={officerIndex} className="my-2 mb-2">
                          <div
                            className={`p-1 flex justify-between w-[100%] `}
                          >
                            <h2>{officer.name}</h2>
                            <h2
                              className={`w-[5rem] text-center ${officer.availability === "Assigned"
                                ? "text-[#FFAE11] stage-2"
                                : officer.availability === "Available"
                                  ? "text-[#2c9b32] stage-4"
                                  : officer.availability === "Leave"
                                    ? "text-[#ff7a7a] stage-3"
                                    : ""
                                }`}
                            >
                              {officer.availability}
                            </h2>
                          </div>

                          <div className="flex justify-between gap-[.5rem] w-[100%]">
                            {officer.availability === "Assigned" && (
                              <>
                                <div onClick={() => setAddTaskModel(true)} className="cursor-pointer flex gap-[.2rem] items-center w-[100%] opacity-[.5] hover:opacity-[.9] duration-300">
                                  <MdAssignmentAdd />
                                  <h2>Add Subtask</h2>
                                </div>
                                <div className="cursor-pointer text-right  flex justify-end gap-[2rem] items-center w-[100%] opacity-[.5] hover:opacity-[.9] duration-300">
                                  <h2>ID: {officer.caseId}</h2>
                                </div>
                              </>
                            )}
                            {officer.availability === "Available" && (
                              <div  className="cursor-pointer flex gap-[.2rem] items-center w-[30%] opacity-[.5] hover:opacity-[.9] duration-300">
                                <MdGroupAdd />
                                <h2>Assign</h2>
                              </div>
                            )}
                          </div>

                          <div className="flex-grow border my-2 border-[#505979] pl-2" />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>


          {/* Arsenal Section */}
          <div className="flex my-1 justify-between">
            <h2 className="text text-base font-bold ">Arsenal</h2>
            <h2 className="text text-base font-bold"></h2>
          </div>
          <div>
            {Object.keys(arsenalData).map((category, index) => {
              const weapons = arsenalData[category];

              weapons.sort((a, b) => {
                const order = { Available: 1, Assigned: 2, Service: 3 };
                return order[a.availability] - order[b.availability];
              });

              return (
                <div key={index} className="my-3">
                  <div
                    className={`cursor-pointer select-none flex flex-col justify-between gap-[.2rem] w-[100%] px-[.8rem] py-[.5rem] border-[1px] border-[#2f3241] bg-[#141d35] rounded-md text-[1rem] shadow-xl shadow-[#20263b] overflow-hidden`}
                    onClick={() => handleToggleArsenal(index)}
                  >
                    <div className="flex gap-[1rem] w-[100%]">
                      <div className="w-[100%] flex justify-between">
                        <h4 className="line-clamp-3">{category}</h4>
                        <h4 className="line-clamp-3">{`${weapons.filter((weapon) => weapon.availability === "Available").length}/${weapons.length}`}</h4>
                      </div>
                    </div>
                    <div className={`gap-[1rem] w-[100%] ${expandedArsenal[index] ? "" : "hidden"}`}>
                      {weapons.map((weapon, weaponIndex) => (
                        <div key={weaponIndex} className="my-2 mb-2">
                          <div className={`p-1 flex justify-between w-[100%]`}>
                            <h2>{weapon.type}</h2>
                            <h2 className={`w-[5rem] text-center ${weapon.availability === "Assigned" ? "text-[#FFAE11] stage-2" : weapon.availability === "Available" ? "text-[#2c9b32] stage-4" : weapon.availability === "Service" ? "text-[#ff7a7a] stage-3" : ""}`}>
                              {weapon.availability}
                            </h2>
                          </div>
                          <div className="flex justify-between gap-[.5rem] w-[100%]">
                            {weapon.availability === "Assigned" && (

                              <div className="cursor-pointer flex gap-[.2rem] items-center w-[100%] opacity-[.5] hover:opacity-[.9] duration-300">
                                <h2>{weapon.assigned}</h2>
                              </div>

                            )}
                            {weapon.availability === "Available" && (
                              <div className="cursor-pointer flex gap-[.2rem] items-center w-[30%] opacity-[.5] hover:opacity-[.9] duration-300">
                                <MdGroupAdd />
                                <h2>Assign</h2>
                              </div>
                            )}
                            <div className="cursor-pointer text-right flex justify-end gap-[2rem] items-center w-[100%] opacity-[.5] hover:opacity-[.9] duration-300">
                              <h2>WID: {weapon.id}</h2>
                            </div>
                          </div>
                          <div className="flex-grow border my-2 border-[#505979] pl-2" />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>


          {/* Carries Section */}
          <div className="flex my-1 justify-between">
            <h2 className="text  text-base font-bold ">Carriers</h2>
            <h2 className="text  text-base font-bold"></h2>
          </div>
          <div>
            {Object.keys(carrierData).map((category, index) => {
              const carriers = carrierData[category];

              carriers.sort((a, b) => {
                const order = { Available: 1, Assigned: 2, Service: 3 };
                return order[a.availability] - order[b.availability];
              });

              return (
                <div key={index} className="my-3">
                  <div
                    className={`cursor-pointer select-none flex flex-col justify-between gap-[.2rem] w-[100%] px-[.8rem] py-[.5rem] border-[1px] border-[#2f3241] bg-[#141d35] rounded-md text-[1rem] shadow-xl shadow-[#20263b] overflow-hidden`}
                    onClick={() => handleToggleCarrier(index)}
                  >
                    <div className="flex gap-[1rem] w-[100%]">
                      <div className="w-[100%] flex justify-between">
                        <h4 className="line-clamp-3">{category}</h4>
                        <h4 className="line-clamp-3">{`${carriers.filter((carrier) => carrier.availability === "Available").length}/${carriers.length}`}</h4>
                      </div>
                    </div>
                    <div className={`gap-[1rem] w-[100%] ${expandedCarriers[index] ? "" : "hidden"}`}>
                      {carriers.map((carrier, carrierIndex) => (
                        <div key={carrierIndex} className="my-2 mb-2">
                          <div className={`p-1 flex justify-between w-[100%]`}>
                            <h2>{carrier.name}</h2>
                            <h2 className={`w-[5rem] text-center ${carrier.availability === "Assigned" ? "text-[#FFAE11] stage-2" : carrier.availability === "Available" ? "text-[#2c9b32] stage-4" : carrier.availability === "Service" ? "text-[#ff7a7a] stage-3" : ""}`}>
                              {carrier.availability}
                            </h2>
                          </div>
                          <div className="flex justify-between gap-[.5rem] w-[100%]">
                            {carrier.availability === "Assigned" && (

                              <div className="cursor-pointer flex gap-[.2rem] items-center w-[100%] opacity-[.5] hover:opacity-[.9] duration-300">
                                <h2>{carrier.assignedTo}</h2>
                              </div>

                            )}
                            {carrier.availability === "Available" && (
                              <div className="cursor-pointer flex gap-[.2rem] items-center w-[30%] opacity-[.5] hover:opacity-[.9] duration-300">
                                <MdGroupAdd />
                                <h2>Assign</h2>
                              </div>
                            )}
                            <div className="cursor-pointer text-right flex justify-end gap-[2rem] items-center w-[100%] opacity-[.5] hover:opacity-[.9] duration-300">
                              <h2>{carrier.id}</h2>
                            </div>
                          </div>
                          <div className="flex-grow border my-2 border-[#505979] pl-2" />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>


      </div>
    </div>
  )
}
