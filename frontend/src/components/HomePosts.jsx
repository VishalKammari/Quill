import React from 'react'
import { ImageFolder } from '../url';

function HomePosts({ post }) {
  return (
    <div className="mt-20 w-full md:w-[65%] lg:w-[75%] xl:w-[70%] mx-auto px-4">
      <div className="flex flex-col md:flex-row gap-6 lg:gap-10 shadow-md hover:shadow-xl transition-all duration-300 rounded-xl p-5 lg:p-7">

        {/* Left div (Image) */}
        <div className="flex justify-center items-center overflow-hidden rounded-lg md:w-[40%]">
          <img
            src={ImageFolder+post.photo}
            alt="post"
            className="w-full h-full object-cover aspect-[16/9] rounded-lg"
          />
        </div>

        {/* Right div (Content) */}
        <div className="flex flex-col w-full md:w-[60%] px-1 lg:px-3">
          <h1 className="text-lg md:text-2xl lg:text-3xl font-bold mb-2 lg:mb-3">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-xs md:text-sm lg:text-base font-medium text-gray-500 mb-3 lg:mb-5">
            <p>@{post.username}</p>
            <p>{(new Date(post.updatedAt)).toLocaleDateString()}</p>
            <p>{(new Date(post.updatedAt)).toLocaleTimeString()}</p>
          </div>

          <p className="text-sm md:text-base lg:text-lg leading-relaxed text-gray-700">
            {post.desc.slice(0, 150)} <button className='text-blue-400 cursor-pointer'>readmore ...</button>
          </p>
        </div>

      </div>
    </div>
  )
}

export default HomePosts
