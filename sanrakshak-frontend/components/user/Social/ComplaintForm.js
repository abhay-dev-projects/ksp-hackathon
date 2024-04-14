import React, {useState} from "react";
import { LuLogOut } from "react-icons/lu";

const ComplaintForm = () => {
  const [anon, setAnon] = useState(false);

  return (
    <div className=" text-fontCol font-nunito justify-center flex flex-grow">
      <div className="flex flex-col w-1/2 items-center border-r-2 border-l-2 border-borderBg ">
        <div className=" p-6 text-4xl border-b-2 w-full text-center border-borderBg">
          Complaint Form
        </div>

        <div className=" gap-2 w-full flex p-4 justify-evenly">
          <div className="flex-col flex">
            <label>Name: </label>
            <input
              disabled={anon}
              width={500}
              className=" p-2 w-56 rounded-lg bg-second"
              placeholder="Enter name"
            />
          </div>
          <div className="flex-col flex">
            <label>Phone No: </label>
            <input
              disabled={anon}
              width={500}
              className=" p-2 w-56 rounded-lg bg-second"
              placeholder="Enter phone no"
            />
          </div>
        </div>
        <div className="gap-2 w-full flex p-2 justify-evenly">
          <div className="flex-col flex">
            <label>Complaint: </label>
            <input
              width={500}
              className=" p-2 w-56 rounded-lg bg-second"
              placeholder="Enter Complaint"
            />
          </div>
          <div className="flex-col flex">
            <label>Complaint Subject: </label>
            <input
              width={500}
              className=" p-2 w-56 rounded-lg bg-second"
              placeholder="Enter Subject"
            />
          </div>
        </div>
        <div className="gap-2 w-full flex-col flex px-12 p-4 justify-evenly">
          <label className=" font-bold">Describe Complaint: </label>
          <textarea
            type="textarea"
            className=" resize-none text-lg px-4 w-full py-2 rounded-md bg-second min-h-32 max-h-32"
            placeholder="Describe your complaint"
            required
          />
        </div>
        <div className="flex w-full justify-evenly px-8">
          <div className="flex-col flex">
            <label>Your Address: </label>
            <textarea
              disabled={anon}
              type="textarea"
              className=" resize-none text-md px-4 w-full py-2 rounded-md bg-second min-h-20 max-h-32"
              placeholder="Enter Address"
              required
            />
          </div>
          <div className="flex-col flex">
            <label>Complaint Address: </label>
            <textarea
              type="textarea"
              className=" resize-none text-sm px-4 w-64 py-2 rounded-md bg-second min-h-20 max-h-32"
              placeholder="Enter Address of where complaint occured"
              required
            />
          </div>
        </div>
        <div className=" flex w-full justify-evenly">
          <div className="flex-col flex">
            <label>Date: </label>
            <input
              width={500}
              className=" p-2 w-56 rounded-lg bg-second"
              placeholder="DD/MM/YYYY"
            />
          </div>
          <div className="flex-col flex pb-12">
            <label>Location: </label>
            <input
              width={500}
              className=" p-2 w-full rounded-lg bg-second"
              placeholder="Enter Location"
            />
          </div>
        </div>
        <div className="flex">
          <div className="flex items-center justify-center">
            <button className="bg-btn rounded-lg text-white p-4 flex items-center justify-center py-4 pr-10 mt-4">
              <LuLogOut className="w-6 h-6 mr-6" /> Submit Complaint
            </button>
          </div>
          <div className="flex text-xl mt-3 items-center">
            <input
              onClick={() => setAnon(!anon)}
              className=" mx-4 w-6 h-6"
              type="checkbox"
            />{" "}
            Anonymous
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComplaintForm;
