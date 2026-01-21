import React from 'react'
import { MdDeleteForever } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
import { IoSend } from "react-icons/io5";

const data = 'data:image/jpeg;base64,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' // image URL

function Postdetails() {
  return (
    <div className='px-5  md:w-[82%]  mx-auto m-8 '>
      <div className='p-2 shadow-lg rounded-2xl'>
        <div className="flex text-xs md:w-[65%] mx-auto justify-between items-center ">
          <h1 className='text-xs font-bold md:text-2xl '>Lorem ipsum dolor sit amet consectetur.</h1>
          <div className='flex items-center justify-between space-x-5'>
            <CiEdit className='text-2xl cursor-pointer hover:text-blue-600 ' />
            <MdDeleteForever className='text-2xl cursor-pointer hover:text-red-600 ' /> 
          </div>
        </div>
        <div className='flex text-xs md:text-lg items-center font-semibold gap-3 mx-auto md:w-[65%] justify-start m-2 md:mt-4'>
          <p>@Vishal</p>
          <div className='flex gap-3'>
            <p>15/01/2026</p>
            <p>16:45</p>
          </div>
        </div>
        <img
            src={data}
            alt="post"
            className="w-full sm:w-[80%] md:w-[65%] rounded-lg mx-auto aspect-[16/9]"
          />
          <div className='mx-auto md:w-[67%] flex justify-center'>
            <p className='md:px-3 md:text-lg text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea ab rem veritatis.Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus rem libero, similique labore adipisci eos.</p>
          </div>
          <div className='flex items-center md:w-[65%] mx-auto  mt-2 justify-start space-x-4 font-semibold'>
            <p className='md:text-lg text-sm'>Categories:</p>
            <div className='flex justify-center items-center space-x-2 '>
              <div className='bg-gray-200 md:text-lg text-sm rounded-lg px-3 py-1 '>Tech</div>
              <div className='bg-gray-200 md:text-lg text-sm rounded-lg px-3 py-1 '>AI</div>
            </div>
          </div>
          {/* comments */}
          <div className='flex flex-col mt-4 md:w-[65%] w-full mx-auto space-y-2'>
            <h1 className='md:text-lg text-sm'>Comments:</h1>
            {/* start */}
            <div className='px-2 py-2 bg-gray-300 rounded-lg'>
              <div className='flex items-center justify-between gap-2.5 rounded-lg bg-gray-100 px-2  text-xs md:text-sm'>
                
                <div className='flex gap-2.5'>
                  <p className='text-gray-600 text-[12px] md:text-[15px]'>@vishal</p>
                <div className='flex gap-3 text-gray-600 text-[10px] md:text-[15px]'>
                  <p>15/01/2026</p>
                  <p>16:45</p>
                </div>
                </div>
                <div className='flex items-center justify-between space-x-2'>
                  <CiEdit className='text-xs md:text-xl cursor-pointer hover:text-blue-600 ' />
                  <MdDeleteForever className='text-xs md:text-xl cursor-pointer hover:text-red-600 ' /> 
                </div>
              </div>
              <p className='text-s mt-2'>nice information</p>
            </div>
             <div className='px-2 py-2 bg-gray-300 rounded-lg'>
              <div className='flex items-center justify-between gap-2.5 rounded-lg bg-gray-100 px-2  text-xs md:text-sm'>
                
                <div className='flex gap-2.5'>
                  <p className='text-gray-600 text-[12px] md:text-[15px]'>@vishal</p>
                <div className='flex gap-3 text-gray-600 text-[10px] md:text-[15px]'>
                  <p>15/01/2026</p>
                  <p>16:45</p>
                </div>
                </div>
                <div className='flex items-center justify-between space-x-2'>
                  <CiEdit className='text-xs md:text-xl cursor-pointer hover:text-blue-600 ' />
                  <MdDeleteForever className='text-xs md:text-xl cursor-pointer hover:text-red-600 ' /> 
                </div>
              </div>
              <p className='text-s mt-2'>nice information</p>
            </div>
          </div>

          <div className='flex mt-4 md:w-[65%] gap-2 mx-auto justify-between'>
            <input type="text" className='w-full rounded-lg px-4 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 mx-auto' placeholder='Add a comment...' />
            <button className='bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600'><IoSend /></button>
          </div>
          
      </div>
    </div>
  )
}

export default Postdetails