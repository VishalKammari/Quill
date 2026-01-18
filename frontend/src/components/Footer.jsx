import React from 'react'

const Footer = () => {
  return (
    <div className='flex flex-col items-center  bg-[#d4d4d4]'>
        <div className='mt-8 w-full px-5 flex justify-between text-sm md:text-md md:px-50'>
            <div className='flex flex-col '>
            <p>Featured Blogs</p>
            <p>Most viewed</p>
            <p>Popular Tags</p>
        </div>
        <div className='flex flex-col '>
            <p>Featured Blogs</p>
            <p>Most viewed</p>
            <p>Popular Tags</p>
        </div>
        <div className='flex flex-col '>
            <p>Featured Blogs</p>
            <p>Most viewed</p>
            <p>Popular Tags</p>
        </div>
        </div>
        <p className='py-4'>@all rights reserved</p>
    </div>
  )
}

export default Footer