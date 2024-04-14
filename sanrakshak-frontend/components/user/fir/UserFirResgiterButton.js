import React, { useState } from 'react'
import RegisterFir from '@/components/modals/RegisterFir'
import { MdOutlineAddCircle } from "react-icons/md";

const UserFirResgiterButton = () => {
  const [registerFir, setRegisterFir] = useState(false)

  return (
    <div>
      <RegisterFir
        visible={registerFir}
        onClose={() => setRegisterFir(false)}
        callback={() => fetchRecentFirData()}
      />
      <button onClick={() => setRegisterFir(true)} className=' active:scale-95 duration-300 register-fir-button  w-[12rem] h-[2.5rem] text-white flex justify-center items-center gap-[1rem]  ' >
        <MdOutlineAddCircle className=' text-[1.12rem] ' />
        Report FIR
      </button>

    </div>
  )
}

export default UserFirResgiterButton
