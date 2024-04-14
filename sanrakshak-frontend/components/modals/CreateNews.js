
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router';
import { useContext } from 'react';
import { DataLayer } from '@/context/UserDataProvider';
import axios from "axios";
import { ApiUrl } from '@/utils/BaseUrl';
import TextFields from '../common/InputFields/TextFields';
import Cookies from 'js-cookie';

const CreateNews = ({ visible, onClose = () => { }, callback = () => { } }) => {
  const [deletingCard, setDeletingCard] = useState(false)
  const router = useRouter();
  const [selectedImage, setSelectedImage] = useState(null);
  const [caption, setCaption] = useState("");
  const [city, setCity] = useState("")
  const { setLoading, setRefresh } = useContext(DataLayer);
  useEffect(() => {
    if (visible) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [visible]);


  const submitHandler = async (e) => {
    e.preventDefault();

    setLoading(true);
    console.log("Creating")
    try {
      console.log("Calling");
      console.log(selectedImage);
      const token = Cookies.get('accessToken');
      const { data } = await axios.post(
        `${ApiUrl}/api/createNewsChips?token=${token}`,
        {
          content: caption,
        },
        {
          withCredentials: true,
        }
      );

      console.log("After Call");
      setCaption("");
      onClose();
      callback();
      // setRefresh((prev) => !prev);
      setLoading(false);
      toast.success(data.message, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } catch (error) {
      console.error("Error:", error);
      setLoading(false);
    }
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setSelectedImage(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };
  if (!visible) return null;
  return (
    <div
      id="background"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
      onClick={(e) => {
        if (e.target.id == "background") onClose();
      }}
    >
      <div className=' register-fir-bg flex flex-col items-center w-[30rem]  px-[2rem] py-[2rem] register-fir-bg  ' >
        <form onSubmit={submitHandler} className=' flex flex-col w-[100%] gap-[1rem] text-[#AEB9E180] ' >
          <TextFields value={caption} setValue={setCaption} label="News" placeholder="Enter News" required={true} />
          <TextFields value={city} setValue={setCity} label="City" placeholder="Enter City" required={true} />
          {/* <div className="flex items-center justify-center w-full mt-4">
            <label
              htmlFor="dropzone-file"
              className="flex flex-col items-center justify-center w-full h-40 border-2 border-dashed border-[#8C8C9A1F]  t rounded-md "
            >
              <div className="flex flex-col items-center justify-center w-full h-full pt-5 pb-6">
                {selectedImage ? (
                  <img
                    src={selectedImage}
                    alt="Selected"
                    className="object-cover w-full h-full mb-4"
                  />
                ) : (
                  <div className="flex flex-col items-center">
                    <svg
                      className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 20 16"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                      />
                    </svg>
                    <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                      <span className="font-bold">Click to upload</span> or drag
                      and drop
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      SVG, PNG, JPG or GIF (MAX. 800x400px)
                    </p>
                  </div>
                )}
              </div>
              <input
                id="dropzone-file"
                accept=".gif, .png, .jpg, .jpeg, .webp"
                type="file"
                className="hidden"
                onChange={handleFileChange}
              />
            </label>
          </div> */}
          <button
            type="submit"
            className="bg-[#6C72FF] mt-[1.2rem] text-white rounded-md flex justify-center items-center w-[100%] h-[2.8rem] "
          >
            Create News
          </button>
        </form>
      </div>


    </div>


  )
}

export default CreateNews
