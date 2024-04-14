import React, { useEffect } from 'react';
import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FaAngleRight } from "react-icons/fa6";

const MultipleLinks = ({ name, icon, data, id, link }) => {
  const [linkActive, setLinkActive] = useState(true);
  const router = useRouter();

  // const activeLinkHandler = (id) => {
  //   if (linkActive === id) {
  //     setLinkActive(-1);
  //   } else {
  //     setLinkActive(id);
  //   }
  // }

  // useEffect(() => {
  //   // Any side effects you want to perform on mount or update can be placed here
  // }, []);
  const isLinkActive = (id) => {
    console.log(linkActive, "linkActive value")
    if (linkActive === id) {
      setLinkActive(-1)
    }
    else {
      setLinkActive(id);
    }
  }

  const isActive = (href) => {
    console.log(href, "in multipellinks")
    if (router.pathname === href || router.pathname.includes(href)) {
      console.log(href, "in multipellinks if statemety")
      return true;
    }
  }

  return (
    <div className={`flex flex-col  gap-[.5rem]  w-[100%]  cursor-pointer `}>
      <Link onClick={(id) => isLinkActive(id)} href={link} className={` relative duration-300 flex items-center gap-[1rem] px-[.7rem]  w-[100%] h-[2.2rem] ${isActive(link) ? "bg-[#212C4D]  border-[#6C72FF]  text-[#F1F1F3] " : " text-[#AEB9E1] border-[#080F25] "} border-l-4 rounded-[.25rem]   `} >
        <div className={` text-[1.2rem] `} >
          {icon}
        </div>
        <h2 className=' text-[1rem] font-nunito ' >{name}</h2>
        <FaAngleRight className={`absolute right-[.8rem] ${isActive(link) ? "rotate-90 text-[#AEB9E1]" : "rotate-0 text-[#1F2A4A]"} duration-300 text-[.7rem]  `} />
      </Link>
      <div className={` ${isActive(link) ? "flex h-auto " : "hidden h-0 "} flex-col pl-[3rem] duration-300 gap-[.5rem] `}>
        {data && data.map((link, index) => (
          <Link key={index} href={link.href} className={` ${isActive(link.href) ? "text-[#6C72FF]  " : "text-[#AEB9E1] opacity-75 "} flex text-right text-[1.1rem] p-2 `} >
            <div className="pr-2 mt-1 ">
              {link.icon}
            </div>
            {link.name}

          </Link>
        ))}

      </div>
    </div>
  );
}

export default MultipleLinks;