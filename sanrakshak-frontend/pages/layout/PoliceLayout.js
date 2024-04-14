import React from 'react'
import { useContext } from 'react'
import { DataLayer } from '@/context/UserDataProvider'
import { useRouter } from 'next/router'
import axios from 'axios'
import Panel from '@/components/common/Leftpanel.js/Panel'



const PoliceLayout = ({ children }) => {
  const { setIsAuthenticated } = useContext(DataLayer);
  console.log("i am in police layout")
  const router = useRouter()
  const handleLogout = async () => {
    console.log('logout clicked')
    try {
      const reponse = await axios.get('http://localhost:4000/api/logout', {
        withCredentials: true
      });
      console.log(reponse)
      if (reponse.data.success == true) {
        console.log('response sucess');
        router.push('/login')
      }

    } catch (error) {
      console.log(error)
    }
  }
  return (
    <>
      <div className=' w-[100%] ' >
        {children}
      </div>
    </>
  )
}

export default PoliceLayout
