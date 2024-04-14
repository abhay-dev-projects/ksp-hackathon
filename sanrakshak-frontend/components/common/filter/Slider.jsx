import React, {useContext} from 'react';
import { DataLayer } from "@/context/UserDataProvider";

const Slider = ({ switchOn, setSwitchOn }) => {
  const { setRefresh, refresh } = useContext(DataLayer);

  const handleChange = () => {
    setRefresh(!refresh);
  }

  return (
    <>

      <label class="relative inline-flex items-center cursor-pointer">
        <input onClick={() => setRefresh(!refresh)} type="checkbox" value="" class="sr-only peer" />
        <div class="w-9 h-5 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-[#16E738]"></div>
        <span class="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">Small toggle</span>
      </label>

    </>
  );
};

export default Slider;
