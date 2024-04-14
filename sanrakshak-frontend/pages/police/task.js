import React from 'react'
import PoliceLayout from '../layout/PoliceLayout'
import Panel from '@/components/common/Leftpanel.js/Panel'
import Board from '@/components/Board/Board'

const PoliceTask = () => {
  return (
    <PoliceLayout>
      <div className=" bg-[#080F25] w-[100%] h-[100vh] flex flex-row relative flex-shrink ">
        <Panel />
        <div className=" w-[100%] h-[100vh] flex  flex-col  pl-[1.2rem] pt-[2.1rem] text-[#AEB9E1] text-[2rem] ">
          <Board />
        </div>
      </div>
    </PoliceLayout>
  )
}

export default PoliceTask
