// 'use client'
import React, { createContext, useEffect, useState } from 'react'
import { useRouter } from 'next/router';
import LoadingAnimation from '@/components/animation/LoadingAnimation';
import Cookies from 'js-cookie';

export const DataLayer = createContext(null)



const UserDataProvider = ({ children }) => {

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState([]);
  const [refresh, setRefresh] = useState(false);
  const [loginInit, setLoginInit] = useState(false)
  const [roleInit, setRoleInit] = useState(false)
  const [role, setRole] = useState("");
  const [city, setCity] = useState("")
  const router = useRouter()
  console.log(isAuthenticated)
  console.log(router.asPath)
  console.log("role-->", role)
  const token = Cookies.get('accessToken');
  const userRole = Cookies.get('userRole');
  console.log("access token", token, " lenght")
  console.log("role token", userRole)
  console.log("Refresh: ", refresh)





  useEffect(() => {
    if (token) {
      setIsAuthenticated(true);
    }
    if (userRole) {
      setRole(userRole)
    }

  }, [isAuthenticated, loading, role])

  useEffect(() => {
    if (typeof window !== 'undefined' && loading === false) {
      const loader = document.getElementById('globalLoader');
      if (loader)
        loader.style.display = 'none';
    } else if (loading === true) {
      const loader = document.getElementById('globalLoader');
      if (loader)
        loader.style.display = 'flex';
    }
  }, []);

  useEffect(() => {
    if (loading) {
      // Disable scrolling on the body when the modal is open
      document.body.style.overflow = 'hidden';
    } else {
      // Enable scrolling on the body when the modal is closed
      document.body.style.overflow = 'auto';
    }

    // Cleanup: Enable scrolling when the component is unmounted
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [loading]);
  return (
    <DataLayer.Provider value={{ setRefresh, refresh, isAuthenticated, setIsAuthenticated, loading, setLoading, user, setUser, role, setRole, roleInit, setRoleInit, city, setCity, loginInit, setLoginInit }} >
      <LoadingAnimation />
      {children}
    </DataLayer.Provider>
  )
}

export default UserDataProvider
