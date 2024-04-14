import React from 'react'

const ContactAdminForm = () => {
  return (
    <div className=' flex flex-col w-[28rem] gap-[1rem] ' >
      <label htmlFor="problem" className=' text-[#AEB9E180] '>Problem</label>
      <textarea className=' bg-[#8C8C9A1F] w-[100%] h-[10rem] outline-none rounded-md px-[1rem] py-[1rem] ' ></textarea>
      <button className=' bg-[#6C72FF] text-white w-[100%] px-[1rem] py-[.5rem] rounded-md  ' >Submit</button>
    </div>
  )
}

export default ContactAdminForm
