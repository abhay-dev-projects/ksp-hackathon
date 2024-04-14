import React, { useEffect, useContext, useState } from 'react';
import Cookies from 'js-cookie';
import { DataLayer } from '@/context/UserDataProvider';
import Login from '../login';
import UserLayout from '../layout/UserLayout';
import { useRouter } from 'next/router';
import axios from 'axios';
import { ApiUrl } from '@/utils/BaseUrl';
import Loader from '../loader';

const PublicRoleLayer = ({ children }) => {
  const { isAuthenticated } = useContext(DataLayer);
  const [userRole, setUserRole] = useState("");
  const [userToken, setUserToken] = useState("");
  const router = useRouter();

  const getData = async () => {
    try {
      const token = Cookies.get('accessToken');
      const res = await axios.get(`${ApiUrl}/api/auth/user?token=${token}`, {
        withCredentials: true
      });
      console.log(res.data.user);
      setUserRole(res.data.user.role);
      return res;
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const token = Cookies.get('accessToken');
    setUserToken(token);

    const checkUserRole = async () => {
      if (!isAuthenticated) {
        router.push('/login');
        return;
      }

      try {
        await getData();
        const isUserPublic = userRole === 'general';
      } catch (error) {
        console.log(error);
      }
    };

    checkUserRole();
  }, [isAuthenticated, userRole, router]);

  return userToken && userRole === 'general' ? (
    <UserLayout>{children}</UserLayout>
  ) : <Loader />;
}

export default PublicRoleLayer;
