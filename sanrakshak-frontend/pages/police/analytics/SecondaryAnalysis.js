import React, { useState } from 'react'

import BeatWiseCrime from './graphs/BeatWiseCrime'
import ResourceGraph from './graphs/ResourceGraph'

export default function SecondaryAnalysis() {

  const [graphType, setGraphType] = useState('officers');

  return (
    <div>
      <div className=" w-[18rem] h-[85vh]  ">

        <div className="bg-[#212C47] rounded-md w-[18rem] mb-3 h-[54.4vh] ">

          <h2 className="text-lg px-4 py-1 font-bold">Police Resource</h2>
          <div className='h-[41vh]'>
          {graphType==='officers' && <ResourceGraph graphType={graphType} />}
    </div>
          <div className='flex justify-center p-1 mt-3 gap-2'>
            <button onClick={()=>{setGraphType('officers')}} class=" bg-[#141D35] text-[#FFF] text-xs  justify-center items-center px-[.5rem] py-[.5rem] rounded-md gap-[.5rem] ">Officers</button>
            <button onClick={()=>{setGraphType('Vehicles')}} class=" bg-[#141D35] text-[#FFF] text-xs  justify-center items-center px-[.5rem] py-[.5rem] rounded-md gap-[.5rem] ">Button 2</button>
            <button onClick={()=>{setGraphType('Guns')}} class=" bg-[#141D35] text-[#FFF] text-xs  justify-center items-center px-[.5rem] py-[.5rem] rounded-md gap-[.5rem] ">Button 3</button>
            <button onClick={()=>{setGraphType('Equipment')}} class=" bg-[#141D35] text-[#FFF] text-xs  justify-center items-center px-[.5rem] py-[.5rem] rounded-md gap-[.5rem] ">Button 4</button>
          </div>
        </div>

        <div className="bg-[#212C47] rounded-md w-[18rem] mb-3 h-[32%] ">
          <h2 className="text-lg px-4 pt-1 font-bold">Beat wise Crime </h2>
          <BeatWiseCrime />
        </div>

      </div>
    </div>
  )
}
