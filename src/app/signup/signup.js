import React from 'react';
import Image from 'next/image';
import { IoIosArrowBack } from "react-icons/io";

export default function Signup() {
  return (
    <div className='flex w-screen h-screen'>
      <div className='flex flex-col flex-1 h-screen gap-y-30 lg:gap-y-10 pt-10'>
        <div className='flex gap-x-1 ml-8 text-gray-400 text-sm'>
          <IoIosArrowBack className='text-lg' />
          <div>Back to dashboard</div>
        </div>
        <div className='flex flex-col gap-y-14 items-center'>
          <div className='flex flex-col items-center gap-y-1'>
            <div className='text-3xl font-bold'>Sign Up</div>
            <div className='text-sm text-gray-400'>Enter your details to sign up!</div>
          </div>
          <form className='flex flex-col gap-y-6 w-screen md:w-lg pl-2 pr-2'>
            <div className='flex gap-x-2 xs:flex-row flex-col gap-y-4'>
              <div className='flex flex-col flex-1'>
                <label>First Name<span className='text-red-400'>*</span></label>
                <input type='text' placeholder='Enter your first name'autoComplete='off' name='firstName' className='rounded-lg overflow-hidden p-2' style={{border: '1px solid #696969'}}/>
              </div>
              <div className='flex flex-col flex-1'>
                <label>Last Name<span className='text-red-400'>*</span></label>
                <input type='text' placeholder='Enter your last name' autoComplete='off' name='lastName' className='rounded-lg overflow-hidden p-2' style={{border: '1px solid #696969'}}/>
              </div>
            </div>
            <div className='flex flex-col'>
              <label>Email<span className='text-red-400'>*</span></label>
              <input type='text' placeholder='Enter your email' autoComplete='off' name='email' className='rounded-lg overflow-hidden p-2' style={{border: '1px solid #696969'}}/>
            </div>
            <div className='flex flex-col'>
              <label>Password<span className='text-red-400'>*</span></label>
              <input type='password' placeholder='Enter your password' autoComplete='off' name='password' className='rounded-lg overflow-hidden p-2' style={{border: '1px solid #696969'}}/>
            </div>
            <button className='bg-blue-700 p-2 rounded-lg cursor-pointer hover:bg-blue-800'>Sign Up</button>
            <div className='text-sm text-gray-500'>Already have an account? <span className='text-blue-500 cursor-pointer'>Sign In</span></div>
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
