import React from 'react'

const Profilepost = () => {
  return (
    <div className="mt-20 w-full md:w-[65%] mx-auto px-4">
      <div className="flex flex-col md:flex-row gap-5 shadow-md hover:shadow-lg transition-shadow rounded-lg p-4">

        {/* Left div (Image) */}
        <div className="flex justify-center items-center overflow-hidden rounded-md">
          <img
            // src={data}
            alt="post"
            className="w-full sm:w-[80%] md:w-[85%] aspect-[16/9]"
          />
        </div>

        {/* Right div (Content) */}
        <div className="flex flex-col w-full md:w-[65%] px-1">
          <h1 className="text-base md:text-2xl font-bold mb-1 md:mb-2">
            Lorem ipsum dolor sit amet
          </h1>

          <div className="flex flex-wrap items-center gap-3 text-xs md:text-sm font-semibold text-gray-500 mb-2 md:mb-4">
            <p>@vishal</p>
            <p>15/01/2026</p>
            <p>16:45</p>
          </div>

          <p className="text-sm md:text-base leading-relaxed p text-gray-700">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati,
            libero.
          </p>
        </div>

      </div>
    </div>
  )
}

export default Profilepost