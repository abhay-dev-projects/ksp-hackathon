import React from 'react'
import Lottie from 'lottie-react';
// import deleteAnimation from "../../public/assets/animation/delete.json"
import { updateAnimation } from '@/public/assetsManager';

const UpdateAnimation = () => {
  return (
    <div className='  flex mx-auto justify-center w-[30rem] '>
      <Lottie
        animationData={updateAnimation}
        autoplay={true}
        loop={true}
      />
    </div>

  )
}

export default UpdateAnimation
