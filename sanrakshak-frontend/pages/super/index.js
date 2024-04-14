import React from 'react'
import { useRouter } from 'next/router'
import axios from 'axios'
import Cookies from 'js-cookie'

const SuperDashboard = () => {
  const router = useRouter()
  const handleLogout = async () => {
    console.log('logout clicked')
    try {
      const reponse = await axios.get('http://localhost:4000/api/auth/logout', {
        withCredentials: true
      });
      console.log(reponse)
      if (reponse.data.success == true) {
        console.log('response sucess');
        Cookies.remove('accessToken')
        router.push('/login')
      }

    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div className=' w-[100%] h-[100vh] flex flex-col justify-center items-center gap-[2rem] ' >
      <h1>Hello from Super dashboard</h1>
      <button onClick={handleLogout} className=' bg-purple-500 text-white w-[10rem] h-[2.5rem] flex justify-center items-center ' >Log out</button>
    </div>
  )
}

export default SuperDashboard
