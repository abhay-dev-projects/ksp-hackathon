'use client'
import React, { useEffect, useState } from 'react'
import RoleTypeInput from '@/components/userType/roleTypeInput';
import { FaUserTie } from "react-icons/fa";
import { GiPoliceOfficerHead } from "react-icons/gi";
import { RiAdminFill } from "react-icons/ri";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import IntialUserNavbar from '@/components/navbar/intialUserNavbar';
import Loader from './loader';
import { useRouter } from 'next/router';

const Home = () => {
  const router = useRouter();
  useEffect(() => {
    router.push('/login');
  }, [])

  return (
    <>
      <Loader />
    </>
  )
}

export default Home