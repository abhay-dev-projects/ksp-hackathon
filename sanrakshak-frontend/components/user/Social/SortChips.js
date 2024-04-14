import { RxCross1 } from "react-icons/rx";
import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { ApiUrl } from "@/utils/BaseUrl.js";
const SortChips = ({ text }) => {
  return (
    <div className="flex items-center bg-second p-1 rounded-lg w-24 text-xl hover:cursor-pointer">
    <RxCross1 className="w-5 h-5 mr-2 mt-[0.5]" />
    {text}
  </div>
  );
};

export default SortChips;