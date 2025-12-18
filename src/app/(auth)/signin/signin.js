'use client';

import React, { use } from 'react';
import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { IoIosArrowBack } from "react-icons/io";
import TopRightPopup from '@/utils/popup';

export default function Signin() {
  const router = useRouter();
  const [visible, setVisible] = useState(false);
  const [title, setTitle] = useState(null);
  const [message, setMessage] = useState(null);

  const displayPopup = (title, message, duration = 10000) => {
    setTitle(title);
    setMessage(message);
    setVisible(true);
    setTimeout(() => {
      setVisible(false);
    }, duration);
  }

  const submitForm = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    if (data.username === '' || data.password === '') {
      displayPopup("Alert Message!", "One or more field is empty!");
      return;
    }

    try {
      const res = await fetch('http://localhost:8080/api/signin', {
        method: 'GET',
        headers: {
          username: data.username,
          password: data.password,
        },
      });
      const resData = await res.json();
      displayPopup("Signin Message", resData?.response);
      if(resData?.response === 'Invalid username or password!'){
        return;
      }
      localStorage.setItem('token',resData?.token);
      setTimeout(()=>{
        router.push('/');
      },2000)
    }
    catch (err) {
      displayPopup("Error Message!", "Server is down");
    }
  }

  return (
    <div className='flex w-screen h-screen relative'>
      <TopRightPopup
        title={title}
        message={message}
        visible={visible}
      />
      <div className='flex flex-col flex-1 h-screen gap-y-30 lg:gap-y-10 pt-10'>
        <div className='flex gap-x-1 ml-8 text-gray-400 text-sm cursor-pointer' onClick={() => { router.push('/') }}>
          <IoIosArrowBack className='text-lg' />
          <div>Back to dashboard</div>
        </div>
        <div className='flex flex-col gap-y-14 items-center'>
          <div className='flex flex-col items-center gap-y-1'>
            <div className='text-3xl font-bold'>Sign In</div>
            <div className='text-sm text-gray-400'>Enter your details to sign in!</div>
          </div>
          <form className='flex flex-col gap-y-6 w-screen md:w-lg pl-2 pr-2' onSubmit={submitForm}>
            <div className='flex flex-col'>
              <label>Username<span className='text-red-400'>*</span></label>
              <input type='text' placeholder='Enter your username' autoComplete='off' name='username' className='rounded-lg overflow-hidden p-2' style={{ border: '1px solid #696969' }} />
            </div>
            <div className='flex flex-col'>
              <label>Password<span className='text-red-400'>*</span></label>
              <input type='password' placeholder='Enter your password' autoComplete='off' name='password' className='rounded-lg overflow-hidden p-2' style={{ border: '1px solid #696969' }} />
            </div>
            <button className='bg-blue-700 p-2 rounded-lg cursor-pointer hover:bg-blue-800'>Sign In</button>
            <div className='text-sm text-gray-500'>Don't have an account? <span className='text-blue-500 cursor-pointer' onClick={()=>router.push('/signup')}>Sign Up</span></div>
          </form>
        </div>
      </div>
      <div className='flex-1 hidden ll:block h-screen relative overflow-hidden '>
        <Image src={'https://i.postimg.cc/ZntND0x2/ken-kaneki-tokyo-ghoul-3840x2160.jpg'} alt='background' fill style={{ objectFit: 'cover' }}></Image>
        <div className='absolute flex flex-col items-center top-[46%] left-[45%] gap-y-2'>
          <div className='text-3xl font-bold text-fuchsia-700'>Project Name</div>
          <div className='text-gray-400' style={{ fontSize: '12px' }}>Project Description</div>
        </div>
      </div>
    </div>
  )
}
