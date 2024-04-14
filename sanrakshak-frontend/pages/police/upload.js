"use client";
import React, { useState } from 'react';
import axios from 'axios';
import PoliceLayout from '../layout/PoliceLayout'
import Panel from '@/components/common/Leftpanel.js/Panel'

const upload = () => {
    const [file, setFile] = useState(null);
    const [alert, setAlert] = useState(false);

    const handleFileChange = (e) => {
        const selectedFile = e.target.files[0];
        setFile(selectedFile);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (file) {
            setAlert(false);
            try {
                const formData = new FormData();
                formData.append('file', file);

                const response = await axios.post('http://127.0.0.1:5000/upload', formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                });

                console.log(response.data);
                // Handle response from server as needed
            } catch (error) {
                console.error('Error uploading file:', error);
            }
        } else {
            setAlert(true);
        }
    }
    return (
        <PoliceLayout>
            <div className=" bg-[#080F25] w-[100%] h-[100vh] flex flex-row relative flex-shrink ">
                <Panel />
                <div className=" w-[100%] flex  flex-col  px-[2.5rem] pt-[1rem] text-[#AEB9E1] text-[2rem] ">
                <h2 className='text-[#AEB9E1] font-semibold'>Update Police Resource Information</h2>
                    <div className=" w-[100%] items-center h-[100vh]">
                        <div className=" w-[100%] h-[90vh] flex justify-center items-center">
                            <div className=" flex flex-col w-[30rem]   bg-[#101935] border-[1px] border-[#6c71ff37] rounded-lg px-[2.5rem] py-[2.5rem] ">
                                <h2 className='my-5 text-2xl text-white font-semibold'>Upload CSV File</h2>
                                <form onSubmit={handleSubmit}>
                                    <label class="block">
                                        <span class="sr-only">Upload CSV File</span>
                                        <input type="file" accept='text/csv' onChange={handleFileChange} class="block w-full text-sm text-slate-500
                            file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0
                            file:text-sm file:font-semibold file:bg-violet-50 file:text-violet-700 hover:file:bg-violet-100"/>
                                    </label>
                                    {alert && <p class="text-sm text-[#b93a3a] my-[0.5rem] font-normal">Select a .csv file</p> 
                                    }
                                    <button type="submit" className='text-white active:scale-95 duration-300 bg-[#6d72fe] flex justify-center items-center gap-[.5rem] px-[.5rem] py-[.25rem] rounded font-nunito font-[400] text-[1.02rem] my-[1rem]   '>Submit</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </PoliceLayout>
    );
}

export default upload;