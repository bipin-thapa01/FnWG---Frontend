'use client';

import React from 'react';
import Image from 'next/image';
import { FiAlignLeft } from "react-icons/fi";
import { FiBell } from "react-icons/fi";
import { MdArrowDropDown } from "react-icons/md";

export default function Uppernav({ fetchData, isLogin }) {
  return (
    <nav className='w-full flex justify-between pl-8 pr-8 pt-4 pb-4 items-center' style={{ borderBottom: '2px solid #1d2939' }}>
      <div className='text-2xl cursor-pointer'>
        <FiAlignLeft />
      </div>
      <div className='flex gap-x-10 items-center'>
        <div className='text-2xl'><FiBell /></div>
        {
          isLogin ? <div className='flex items-center gap-4'>
            <div className='w-10 h-10 rounded-[50%] relative overflow-hidden'>
              <Image src={'https://i.postimg.cc/0yHkKstG/icon-7797704-640.png'} alt='logo' fill className='object-cover' />
            </div>
            <div className='flex items-center gap-1'>
              <span>User</span>
              <MdArrowDropDown />
            </div>
          </div> : <div className='bg-blue-700 pl-2 pr-2 pt-1 pb-1 rounded-xl'>
            Singin
          </div>
        }
      </div>
    </nav>
  )
}
