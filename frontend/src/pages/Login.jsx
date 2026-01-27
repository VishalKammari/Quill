import React from 'react'
import logo from '../assets/logo.png'
import { RiLockPasswordLine } from "react-icons/ri";
import { MdEmail } from "react-icons/md";
import {URL} from "../url";
import{useState,useContext} from 'react';
import{useNavigate} from "react-router-dom";
import axios from 'axios';
import{ UserContext } from '../context/UserContent';
const Login = () => {
    const navigate=useNavigate();
    const[email,setEmail]=useState("");
    const[password,setPassword]=useState("");
    const[error,setError]=useState(false);
    const {setUser} = useContext(UserContext);
    const handlelogin=async()=>{
        try{
            const res=await axios.post(`${URL}api/auth/login`,{email,password},{withCredentials:true});
            if(res.data){
                console.log("Login Successful");
                localStorage.setItem("token",res.data.token);
                navigate("/");
                setUser(res.data);
            }
        }
        catch(err){
            setError(true);
            console.log(err);
        }
    }
  return (
    <div className='w-full flex flex-col justify-center items-center h-[85vh]'>
        <div className='mx-auto bg-[#FFFFFF] md:text-xl flex flex-col justify-center items-center p-10 rounded-lg shadow-lg gap-3'>
            <div className='flex flex-col items-center'>
                <img src={logo} alt="logo" className='h-20' />
                <h3 className='text-lg md:text-2xl'>Sign in</h3> 
            </div>
           
           <div className='flex flex-col items-center bg-white p-5 rounded-lg shadow-md'>
            <div className='flex items-center rounded-md p-2 mb-4 justify-around mx-auto gap-1'>
                <MdEmail />
                <input onChange={(e)=>setEmail(e.target.value)} type="text" placeholder='Enter Email' className='outline-none px-2 py-1 bg-transparent'/>
            </div>
            <div className='flex items-center rounded-md p-2 mb-4 justify-around mx-auto gap-1'>
                <RiLockPasswordLine />
                <input onChange={(e)=>{setPassword(e.target.value)}} type="password" placeholder='Enter Password' className='outline-none px-2 py-1 bg-transparent' />
            </div>

            <button onClick={handlelogin} className='bg-[#000000] mb-1 cursor-pointer w-fit font-medium rounded-lg flex justify-center items-center active:scale-95 active:bg-gray-600 hover:bg-gray-800'><p className='p-2 text-white'>Login</p></button>
            {error && <span className='text-red-500 mt-2'>Invalid Credentials! Please try again.</span>}
            don't have an account? <span onClick={() => navigate('/register')} className='text-blue-500 cursor-pointer'>Register</span>
           </div>
        </div>
    </div>
  )
}

export default Login