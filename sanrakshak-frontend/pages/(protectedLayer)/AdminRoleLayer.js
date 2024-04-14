import { useContext, useState, useEffect } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import { ApiUrl } from "@/utils/BaseUrl";
import Cookies from "js-cookie";
import { DataLayer } from "@/context/UserDataProvider";
import AdminLayout from '../layout/AdminLayout';
import Loader from "../loader"; // Import your AdminLayout component

const AdminRoleLayer = ({ children }) => {
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
        const isUserAdmin = userRole === 'super';
      } catch (error) {
        console.log(error);
      }
    };

    checkUserRole();
  }, [isAuthenticated, userRole, router]);

  return isAuthenticated && userRole === 'super' ? (
    <AdminLayout>{children}</AdminLayout>
  ) : <Loader />;
};

export default AdminRoleLayer;
