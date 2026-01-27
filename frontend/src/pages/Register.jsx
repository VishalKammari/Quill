import React from 'react'
import logo from '../assets/logo.png'
import { MdEmail, MdPerson } from "react-icons/md"
import { RiLockPasswordLine } from "react-icons/ri"
import { useState } from 'react'
import { useNavigate } from "react-router-dom";
import axios from 'axios'
import {URL} from '../url'
const Register = () => {
  const[username, setUsername] = useState("");
  const[email, setEmail] = useState("");
  const[password, setPassword] = useState("");
  const[confirmPassword, setConfirmPassword] = useState("");
  const[error, setError] = useState(false);
  const navigate=useNavigate();


  const handleRegister = async () => {
  try {
    const res = await axios.post(`${URL}api/auth/register`, {
      username,
      email,
      password,
    });
    console.log(res.data);
    setError(false); // clear error on success
    navigate('/login');
  } catch (err) {
    setError(true);
    console.error(err);
  }
};

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
              placeholder='Enter User Name'
              className='outline-none px-2 py-1 bg-transparent'
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          {/* Email */}
          <div className='flex items-center rounded-md p-2 mb-4 gap-1'>
            <MdEmail />
            <input
              type="email"
              placeholder='Enter Email'
              className='outline-none px-2 py-1 bg-transparent'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          {/* Password */}
          <div className='flex items-center rounded-md p-2 mb-4 gap-1'>
            <RiLockPasswordLine />
            <input
              type="password"
              placeholder='Enter Password'
              className='outline-none px-2 py-1 bg-transparent'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {/* Confirm Password */}
          <div className='flex items-center rounded-md p-2 mb-4 gap-1'>
            <RiLockPasswordLine />
            <input
              type="password"
              placeholder='Confirm Password'
              className='outline-none px-2 py-1 bg-transparent'
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>

          <button onClick={handleRegister} className='bg-[#000000] mb-1 cursor-pointer w-fit font-medium rounded-lg flex justify-center items-center active:scale-95 active:bg-gray-600 hover:bg-gray-800'>
            <p className='p-2 text-white'>Register</p>
          </button>
          {error && <span className='text-red-500 mt-2'>Something went wrong! Please try again.</span>}
          already have an account? <span onClick={() => navigate('/login')} className='text-blue-500 cursor-pointer'>Login</span>
        </div>
      </div>
    </div>
  )
}

export default Register
