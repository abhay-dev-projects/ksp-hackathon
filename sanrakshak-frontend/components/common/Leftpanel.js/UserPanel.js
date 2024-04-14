import React from 'react'
import PanelFooter from './PanelFooter'
import PanelHeader from './PanelHeader'
import SingleLinks from './SingleLinks'
import MultipleLinks from './MultipleLinks'
import { GoHomeFill } from "react-icons/go";
import { MdAssignmentAdd } from "react-icons/md";
import { MdMarkUnreadChatAlt } from "react-icons/md";
import { BsSendFill } from "react-icons/bs";
import { HiUserGroup } from "react-icons/hi2";
import { MdCall } from "react-icons/md";
import { FaCommentSms } from "react-icons/fa6";

const UserPanel = () => {
  return (
    <>
      <div className=' bg-[#080F25] panel-shadow border-r-[1px] border-[#1F2A4A] w-[18rem] h-[100vh] flex flex-col flex-shrink-0  ' >
        <PanelHeader user={"Public"} />
        <div className=' scrollbar-hide flex flex-col gap-[.5rem] px-[1.5rem] py-[1.5rem] h-[61.4vh] overflow-y-scroll  ' >
          <SingleLinks name={"Dashboard"} icon={<GoHomeFill />} href={'/user'} />
          <SingleLinks name={"File Fir"} icon={<MdAssignmentAdd />} href={'/user/fir'} />
          <SingleLinks name={"Feedback"} icon={<MdMarkUnreadChatAlt />} href={'/user/feedback'} />
          <SingleLinks name={"Assistant"} icon={<FaCommentSms />} href={'/user/assistant'} />
          <SingleLinks name={"Contact Admin"} icon={<MdCall />} href={'/user/contact'} />
        </div>
        <div className='   ' >
          <PanelFooter />
        </div>
      </div>

    </>
  )
}

export default UserPanel
