import React from 'react'
import Profilepost from '../components/Profilepost'
const Profile = () => {
  return (
    <div className='px-8 mx-auto md:[px-200px] mt-8 flex md:flex-row flex-col-reverse'>
        <div className='flex flex-col md:w-[70%] w-full '>
            <h1 className='text-xl px-[19%] font-bold mb-4'>Your Post:</h1>
            <Profilepost />
        </div>
        <div className='flex flex-col space-y-4 md:w-[30%] w-full md:'>
            <h1 className='text-xl font-bold mb-4'>Profile</h1>
            <input type="text" className='outline-none px-4 py-2 text-grey-500' placeholder='Your username' />
            <input type="email" className='outline-none px-4 py-2 text-grey-500' placeholder='Your email' />
            <input type="password" className='outline-none px-4 py-2 text-grey-500' placeholder='Password' />
            <div className='flex items-center space-x-4 mt-8'>
              <button className='text-white bg-black font-semibold px-4 py-2 hover:text-black hover:bg-white'>Update</button>
              <button className='text-white bg-black font-semibold px-4 py-2 hover:text-black hover:bg-white'>Delete</button>
            </div>
        </div>
    </div>
  )
}

export default Profile