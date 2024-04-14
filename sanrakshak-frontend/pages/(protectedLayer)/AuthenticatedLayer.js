'use client'
import React, { useEffect, useContext, useState } from 'react';
import Cookies from 'js-cookie';
import { DataLayer } from '@/context/UserDataProvider';
import Login from '../login';
import { useRouter } from 'next/router';

const AuthenticatedLayer = ({ children }) => {
  const router = useRouter()
  const [userToken, setUserToken] = useState("")
  const { isAuthenticated } = useContext(DataLayer);

  useEffect(() => {
    const token = Cookies.get('accessToken');
    setUserToken(token)
    if (!token) {
      router.push('/login')
    }
  }, [isAuthenticated, router]);
  return (
    <div className='font-nunito' >
      {userToken && children}
    </div>
  );
}

export default AuthenticatedLayer;
