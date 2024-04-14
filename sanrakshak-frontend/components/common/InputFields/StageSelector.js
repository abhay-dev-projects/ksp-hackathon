import React from 'react'

const StageSelector = ({ data, stage, setStage }) => {
  return (
    <div className=' flex justify-start gap-[1rem] w-[100%]  ' >
      {
        data && data.map((data, index) => {
          return (
            <div onClick={() => setStage(data.id)} key={index} className={` ${data.id === stage ? "stage-select text-[#BB800C] " : "stage-no-select text-[#AEB9E1] "} cursor-pointer flex justify-center items-center gap-[.3rem] px-[.6rem] py-[.3rem]  `}  >
              <div className={` ${data.id === stage ? "  " : " bg-transparent "} w-[.5rem] h-[.5rem] rounded-full bg-[#FFAE11]  `} >

              </div>
              {data.name}
            </div>
          )
        })
      }
    </div>
  )
}

export default StageSelector
