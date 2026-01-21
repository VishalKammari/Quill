import React from 'react'

const Comments = () => {
  return (
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
  )
}

export default Comments