'use client'

import React from 'react';
import {useState, useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import { IoApps } from "react-icons/io5";
import { FaBell } from "react-icons/fa";
import { SlGraph } from "react-icons/sl";
import { GrPlan } from "react-icons/gr";
import { CiSaveDown1 } from "react-icons/ci";
import { IoFastFood } from "react-icons/io5";

export default function Nav() {

  const pathname = usePathname();

  return (
    <nav className='h-screen flex flex-col border-r w-64 px-4 overflow-hidden' style={{ borderColor: '#1d2939' }}>
      <div className='py-4 mb-4'>Logo</div>
      <div>
        <div className='text-gray-500 mb-4 text-sm'>MENU</div>
        <div className='flex flex-col gap-x-1.5'>
          <div className={`h-10 pl-1 cursor-pointer hover:bg-gray-800 rounded-lg text-center flex items-center gap-x-4 ${pathname == '/' ? 'bg-gray-800 text-blue-600' : ''}`}><IoApps />
            <span>Dashboard</span>
          </div>
          <div className={`h-10 pl-1 cursor-pointer hover:bg-gray-800 rounded-lg text-center flex items-center gap-x-4 ${pathname == '/remainder' ? 'bg-gray-800 text-blue-600' : ''}`}>
            <FaBell />
            <span>Remainder</span>
          </div>
          <div className={`h-10 pl-1 cursor-pointer hover:bg-gray-800 rounded-lg text-center flex items-center gap-x-4 ${pathname == '/streak' ? 'bg-gray-800 text-blue-600' : ''}`}>
          <SlGraph />
          <span>Streak</span>
          </div>
          <div className={`h-10 pl-1 cursor-pointer hover:bg-gray-800 rounded-lg text-center flex items-center gap-x-4 ${pathname == '/workout-planning' ? 'bg-gray-800 text-blue-600' : ''}`}>
          <GrPlan />
          <span>Workout Planning</span>
          </div>
          <div className={`h-10 pl-1 cursor-pointer hover:bg-gray-800 rounded-lg text-center flex items-center gap-x-4 ${pathname == '/calorie-tracker' ? 'bg-gray-800 text-blue-600' : ''}`}>
          <CiSaveDown1 />
          <span>Calorie Tracker</span>
          </div>
          <div className={`h-10 pl-1 cursor-pointer hover:bg-gray-800 rounded-lg text-center flex items-center gap-x-4 ${pathname == '/food-nutrition' ? 'bg-gray-800 text-blue-600' : ''}`}>
          <IoFastFood />
          <span>Food Nutrition</span></div>
        </div>
      </div>
    </nav>
  )
}