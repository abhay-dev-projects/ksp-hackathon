import React from 'react'
import Lottie from 'lottie-react';
import { policeLoadingAnimation } from '@/public/assetsManager';
import { dotLoadingAnimation } from '@/public/assetsManager';



const LoadingAnimation = () => {
  return (
    <div id={'globalLoader'} className='  flex flex-col gap-[1rem] h-[100vh] mx-auto my-auto justify-center w-[38rem] '>
      <Lottie
        animationData={policeLoadingAnimation}
        autoplay={true}
        loop={true}
        className=" mt-[-3rem] " />
      <div className=' flex items-start justify-center gap-[.4rem]  text-[1.4rem] mt-[-8rem] text-center font-dm_sans tracking-wider ' >
        <h2>Loading</h2>
        <Lottie
          animationData={dotLoadingAnimation}
          autoplay={true}
          loop={true}
          className=" w-[1.5rem] mt-[.8rem] " />
      </div>
    </div>
  )
}

export default LoadingAnimation
