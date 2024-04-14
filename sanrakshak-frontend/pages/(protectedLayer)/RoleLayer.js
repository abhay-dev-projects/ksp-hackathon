// pages/(protectedLayer)/RoleLayer.js
import React, { useEffect, useContext, useState } from 'react';
import Cookies from 'js-cookie';
import { DataLayer } from '@/context/UserDataProvider';
import AdminRoleLayer from './AdminRoleLayer';
import PoliceRoleLayer from './PoliceRoleLayer';
import PublicRoleLayer from './PublicRoleLayer';
import Login from '../login';
import { useRouter } from 'next/router';
import axios from 'axios';
import { ApiUrl } from '@/utils/BaseUrl';
import Loader from '../loader';

const RoleLayer = ({ children }) => {
  const { isAuthenticated } = useContext(DataLayer);
  const [userRole, setUserRole] = useState("Abhay");
  const [userToken, setUserToken] = useState("");
  const router = useRouter();

  const getData = async () => {
    try {
      const token = Cookies.get('accessToken');
      const res = await axios.get(`${ApiUrl}/api/auth/user?token=${token}`, {
        withCredentials: true
      });
      setUserRole(res.data.user.role);
      return res;
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const token = Cookies.get('accessToken');
    setUserToken(token);
    getData();

    if (!isAuthenticated) {
      router.push('/login');
    }

    if (isAuthenticated) {
      if (userRole === 'super' && !router.pathname.startsWith('/super')) {
        router.push('/super');
      } else if (userRole === 'police' && !router.pathname.startsWith('/police')) {
        router.push('/police');
      } else if (userRole === 'general' && !router.pathname.startsWith('/general')) {
        router.push('/general');
      }
    }
  }, [isAuthenticated, userRole, router]);

  if (isAuthenticated && userRole === 'super') {
    return (
      <AdminRoleLayer>
        {children}
      </AdminRoleLayer>
    );
  } else if (isAuthenticated && userRole === 'police') {
    return (
      <PoliceRoleLayer>
        {children}
      </PoliceRoleLayer>
    );
  } else if (isAuthenticated && userRole === 'general') {
    return (
      <PublicRoleLayer>
        {children}
      </PublicRoleLayer>
    );
  } else {

    return <Loader />;
  }
};

export default RoleLayer;
