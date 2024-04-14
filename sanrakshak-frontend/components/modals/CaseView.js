"use client";
import React, { useState, useContext, useEffect } from "react";
import Image from "next/image";
import { TestProfileImage } from "../../public/assetsManager";
import { DataLayer } from "@/context/UserDataProvider";


const userData = [
    { name: 'Ayush Nandi', profileImage: 'path/to/profile1.jpg' },
    { name: 'Vikalp Sharma', profileImage: 'path/to/profile2.jpg' },
    { name: 'Abhay Dev', profileImage: 'path/to/profile2.jpg' },
    { name: 'Nandi Nax', profileImage: 'path/to/profile1.jpg' },
    { name: 'Vikalp Run', profileImage: 'path/to/profile2.jpg' },
    { name: 'Abhay Dev', profileImage: 'path/to/profile2.jpg' },
];


// const { setRefresh } = useContext(DataLayer);



const CaseView = ({
    visible,
    onClose,
    callback = () => { },
    data,
}) => {

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
    if (!visible) return null

    return (

        <><div
            id="background"
            className="fixed inset-0 flex justify-center items-center z-50 bg-black bg-opacity-50"
            onClick={(e) => {
                if (e.target.id == "background") onClose();
            }}
        >
            <div className=" flex justify-center items-center">
                <div className="w-[60rem] rounded-2xl h-[40rem] flex flex-col  bg-[#1A2852] border-3 border-[#6c71ff37] px-[2.0rem] pt-[1.0rem] pb-[2.0rem]">
                    <div className="flex justify-between p-0 items-center">
                        <h2 className="text-[#D3DCFF]  font-bold text-2xl my-[-1.5rem]">Case Name</h2>
                        <button
                            className="p-2 focus:outline-none text-[#D3DCFF] text-base font-medium hover:text-[#9badff] rounded-md border border-[#D3DCFF]"
                            onClick={() => { onClose() }}
                        >
                            Close
                        </button>
                    </div>
                    <div className="px-0 mt-0 pb-0 pt-4">
                        <h3 className="text-lg font-medium text-[#D3DCFF]">Duties Assign</h3>


                        <div className="grid grid-cols-1   md:grid-cols-3 gap-4">
                            <div className=" bg-[#334066] h-[75vh] card-scroll shadow-lg p-0 rounded-2xl ">

                                <div className="bg-[#101935] px-3 border  border-[#505979]  pt-5 pb-3 rounded-2xl ">
                                    <div className=" bg-[#334066] border border-[#505979] px-1 pt-2 pb-1 rounded-xl ">
                                        <h3 className="text-base font-normal px-1 text-[#D3DCFF] ">Crime Branch</h3>
                                        <div className="bg-[#101935]   px-4 pb-4  rounded-md ">
                                            {userData.map((user) => (
                                                <div key={user.name} className="pt-2">
                                                    <div className="flex h-[2rem] right-0 items-center">
                                                        <Image
                                                            src={TestProfileImage}
                                                            alt={`Profile picture of ${user.name}`}
                                                            className="w-6 h-6 rounded-full mr-2"
                                                            height={150}
                                                            width={150}
                                                        />
                                                        <span className="text-sm text-[#D3DCFF] font-normal">{user.name}</span>
                                                    </div>
                                                    <div className="flex-grow ml-2 border mt-1 border-[#505979] pl-2" />
                                                </div>
                                            ))}

                                        </div>
                                    </div>
                                    <div className=" bg-[#334066] border border-[#505979] mt-3 px-1 pt-2 pb-1 rounded-xl ">
                                        <h3 className="text-base px-1 font-normal text-[#D3DCFF] ">Investigation Branch</h3>
                                        <div className="bg-[#101935] px-4 pb-4  rounded-md ">
                                            {userData.map((user) => (
                                                <div key={user.name} className="pt-2">
                                                    <div className="flex h-[2rem] right-0 items-center">
                                                        <Image
                                                            src={TestProfileImage}
                                                            alt={`Profile picture of ${user.name}`}
                                                            className="w-6 h-6 rounded-full mr-2"
                                                            height={150}
                                                            width={150}
                                                        />
                                                        <span className="text-sm text-[#D3DCFF] font-normal">{user.name}</span>
                                                    </div>
                                                    <div className="flex-grow ml-2 border mt-1 border-[#505979] pl-2" />
                                                </div>
                                            ))}

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className=" bg-[#101935] h-[75vh] border border-[#505979] card-scroll shadow-lg p-0 rounded-2xl ">
                                <div className="bg-[#334066] p-4">
                                    <h2 className="text-sm font-bold text-[#D3DCFF]">Report:</h2>
                                </div>

                            </div>

                        </div>
                    </div>

                </div>

            </div>
        </div>
        </>

    )
}
export default CaseView;
