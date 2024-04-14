import React, { useState } from 'react'

import PoliceLayout from '../layout/PoliceLayout'
import Panel from '@/components/common/Leftpanel.js/Panel'
import CaseView from '@/components/modals/CaseView'


const PoliceDashboard = () => {
  const [visible, setVisible] = useState(false)
  const onClose = () => {
    setVisible(false)
  }
  const onCall = () => {
    setVisible(true)
  }
  const data = {
    
  }
  return (
    <PoliceLayout>
      <div className=" bg-[#080F25] w-[100%] h-[100vh] flex flex-row relative flex-shrink ">
        <Panel />
        <div className=" w-[100%] h-[81vh] flex  flex-col  px-[2.5rem] pt-[1rem] text-[#AEB9E1] text-[2rem] ">
          <h1 className='font-semibold'>Dashboard</h1>
          <div className='items-center'>
            <button className="p-2 focus:outline-none text-[#D3DCFF] text-base font-medium hover:text-[#9badff] rounded-md border border-[#D3DCFF]" onClick={onCall}>View Case</button>
            <CaseView visible={visible} data={data} onClose={onClose} />
          </div>
        </div>
      </div>
    </PoliceLayout>
  )
}

export default PoliceDashboard
