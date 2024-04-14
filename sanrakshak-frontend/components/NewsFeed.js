import React, { useState, useEffect, useContext } from "react";
import { ApiUrl } from "@/utils/BaseUrl";
import { DataLayer } from "../context/UserDataProvider.js";
import axios from "axios";
import Cookies from 'js-cookie';

const NewsFeed = () => {
  const [newsData, setNewsData] = useState([]);
  const { refresh } = useContext(DataLayer);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = Cookies.get('accessToken');
        const { data } = await axios.get(`${ApiUrl}/api/fetchNewsChips?token=${token}`);
        console.log(data);
        setNewsData(data.news);
      } catch (error) {
        console.error("Error fetching news data:", error);
      }
    };

    fetchData();
  }, [refresh]);

  return (
    <div className="p-4">
      <div className="bg-second w-full px-4 py-2 text-btn text-2xl h-[48vh] border-borderBg border-[0.2vh] rounded-xl">
        <span className="p-2">News around you</span>
        <Divider />
        <div className="py-4 overflow-y-auto overflow-hidden h-[40vh]">
          {newsData.map((news) => (
            <NewsChip key={news._id} name={news.name} content={news.News} />
          ))}
        </div>
      </div>
    </div>
  );
};

const Divider = () => <hr className="sidebar-hr bg-[#4E546B] mt-2" />;
const Divider2 = () => <div className="h-[0.1vh] rounded-xl mx-4 bg-[#4E546B] mt-2" />;

const NewsChip = ({ name, content }) => {
  return (
    <div className=" w-full my-2 bg-second2 rounded-xl border-borderBg border-[0.2vh]">
      <div className="flex px-4 py-2 font-semibold text-fontCol2 font-roboto">
        <div className="w-12 h-12 rounded-full bg-second"></div>
        <div className="ml-2 ">
          <div className="text-lg">{name}</div>
          <div className=" text-fontSec -mt-2 text-[1.8vh]">24-12-23</div>
        </div>
      </div>
      <Divider2 />
      <div className=" text-[2vh] font-nunito text-fontSec px-5 py-2">
        {content}
      </div>
    </div>
  );
};
export default NewsFeed;
