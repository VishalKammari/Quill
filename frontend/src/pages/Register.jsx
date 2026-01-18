import React from 'react'
import logo from '../assets/logo.png'
import { MdEmail, MdPerson } from "react-icons/md"
import { RiLockPasswordLine } from "react-icons/ri"

const Register = () => {
  return (
    <div className='w-full flex flex-col justify-center items-center h-[85vh]'>
      <div className='mx-auto bg-[#FFFFFF] md:text-xl flex flex-col justify-center items-center p-10 rounded-lg shadow-lg gap-3'>
        
        <div className='flex flex-col items-center'>
          <img src={logo} alt="logo" className='h-20' />
          <h3 className='text-lg md:text-2xl'>Create Account</h3> 
        </div>

        <div className='flex flex-col items-center bg-white p-5 rounded-lg shadow-md'>
          
          {/* Name */}
          <div className='flex items-center rounded-md p-2 mb-4 gap-1'>
            <MdPerson />
            <input
              type="text"
              placeholder='Enter Name'
              className='outline-none px-2 py-1 bg-transparent'
            />
          </div>

          {/* Email */}
          <div className='flex items-center rounded-md p-2 mb-4 gap-1'>
            <MdEmail />
            <input
              type="email"
              placeholder='Enter Email'
              className='outline-none px-2 py-1 bg-transparent'
            />
          </div>

          {/* Password */}
          <div className='flex items-center rounded-md p-2 mb-4 gap-1'>
            <RiLockPasswordLine />
            <input
              type="password"
              placeholder='Enter Password'
              className='outline-none px-2 py-1 bg-transparent'
            />
          </div>

          {/* Confirm Password */}
          <div className='flex items-center rounded-md p-2 mb-4 gap-1'>
            <RiLockPasswordLine />
            <input
              type="password"
              placeholder='Confirm Password'
              className='outline-none px-2 py-1 bg-transparent'
            />
          </div>

          <button className='bg-[#000000] w-fit font-medium rounded-lg flex justify-center items-center'>
            <p className='p-2 text-white'>Register</p>
          </button>

        </div>
      </div>
    </div>
  )
}

export default Register
