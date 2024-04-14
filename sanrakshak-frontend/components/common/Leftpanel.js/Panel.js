import React from 'react'
import PanelFooter from './PanelFooter'
import PanelHeader from './PanelHeader'
import SingleLinks from './SingleLinks'
import MultipleLinks from './MultipleLinks'
import { GoHomeFill } from "react-icons/go";
import { MdAssignmentAdd } from "react-icons/md";
import { IoAnalytics } from "react-icons/io5";
import { IoIosCloudUpload } from "react-icons/io";
import { GrResources } from "react-icons/gr";
import { FaClipboardList } from "react-icons/fa";
import { BsSendFill } from "react-icons/bs";
import { HiUserGroup } from "react-icons/hi2";
import { MdCall } from "react-icons/md";

const Panel = () => {

  const firLinkData = [
    {
      name: "Complaint",
      href: "/police/fir/complaint"
    },
    {
      name: "Registered",
      href: "/police/fir/registered"
    },
    {
      name: "Investigation",
      href: "/police/fir/investigation"
    },
    {
      name: "Action taken",
      href: "/police/fir/action"
    },
    {
      name: "Case closed",
      href: "/police/fir/closed"
    },
  ]

  const socialLinkData = [
    {
      name: "Investigation",
      href: "/police/social/investigate"
    },

  ]

  const Dash = [
    {
      name : "Board",
      href : "/police/task",
      icon : <FaClipboardList />
    },
    {
      name : "Analytics",
      href : "/police/analytics",
      icon : <IoAnalytics />
    },

  ]

  return (
    <>
      <div className=' bg-[#080F25] panel-shadow border-r-[1px] border-[#1F2A4A] w-[18rem] h-[100vh] flex flex-col flex-shrink-0  ' >
        <PanelHeader />
        <div className=' scrollbar-hide  flex flex-col gap-[.5rem] px-[1.5rem] py-[1.5rem] h-[61.4vh] overflow-y-scroll  ' >
          <MultipleLinks name={"Dashboard"} link={"/police/task"} id={0} icon={<GoHomeFill />} data={Dash} />
          {/* <SingleLinks name={"Assign Task "} icon={<MdMarkUnreadChatAlt />} href={'/police/task'} /> */}
          <SingleLinks name={"FIR Reports"} icon={<MdAssignmentAdd />} href={'/police/fir'} />
          <SingleLinks name={"Chat"} icon={<BsSendFill />} href={'/police/chat'} />
          <SingleLinks name={"Resources"} icon={<GrResources />} href={'/police/resources'} />
          <SingleLinks name={"Upload"} icon={<IoIosCloudUpload />} href={'/police/upload'} />
          <SingleLinks name={"Our Teams"} icon={<HiUserGroup />} href={'/police/teams'} />
          <SingleLinks name={"Contact Admin"} icon={<MdCall />} href={'/police/contact'} />
        </div>
        <div className='' >
          <PanelFooter />
        </div>
      </div>
    </>
  )
}

export default Panel
