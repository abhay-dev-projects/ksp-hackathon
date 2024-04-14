import React from "react";

const TextFields = ({ value, setValue, label, placeholder, required, disabled=false }) => {
  return (
    <div className=" flex flex-col gap-[.5rem] w-[100%] text-[#AEB9E180] ">
      <label htmlFor={label}>
        {label}{" "}
        <span className={` ${required ? "text-red-600" : "hidden"} `}>*</span>
      </label>
      <input
        onChange={(e) => setValue(e.target.value)}
        disabled={disabled}
        value={value}
        type="text"
        className=" bg-[#8C8C9A1F] text-[#bcc8f080] px-[1rem] py-[.5rem] rounded-md outline-none focus:outline-[#6c71ff5c]"
        placeholder={placeholder}
      />
    </div>
  );
};

export default TextFields;
