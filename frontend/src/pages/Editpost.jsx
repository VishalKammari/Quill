import React from 'react'
import { useState } from 'react'
import { FaUpload } from "react-icons/fa";
import {ImCross} from "react-icons/im"
const editPost = () => {
     const[cat,setCat]=useState(""); 
        const[cats,setCats]=useState([]); 
        const addCategory = () => {
            let updatedCats = [...cats];
            if(cat!== "") updatedCats.push(cat);
            setCats(updatedCats);
            setCat("");
        }
        const deleteCategory = (i) => {
            setCats(cats.filter((_, idx) => idx !== i));
        }
    
  return (
    <div className='md:max-w-[70%] mx-4 md:mx-auto mt-8'>
            <h1 className='font-bold md:text-2xl text-xl mt-8'>Update a Post</h1>
            <form action="" className='w-full flex flex-col space-y-4 md:space-y-8 m-4'>
                <input type="text" placeholder='Enter Post Title' className='px-4 py-2 outline-none' />
                <div>
                    <input type="file" className="file:mr-3 file:rounded-md file:border file:border-gray-600 file:bg-transparent file:px-3 file:py-1.5 file:text-sm hover:file:text-white hover:file:bg-gray-800 text-sm text-gray-500" />
                </div>
                <div className='flex flex-col '>
                    <div className='flex item-center space-x-4 md:space-x-8'>
                        <div className='flex items-center space-x-4 md:space-x-8'>
                            <input type="text" className='px-4 py-2 outline-none ' value={cat} onChange={(e)=>setCat(e.target.value)} placeholder='Enter Post Category' />
                            <div onClick={() => addCategory()} className='bg-black text-white px-2 py-1 cursor-pointer rounded-xl hover:bg-gray-700'>Add</div>
                        </div>
                        {/* categories */}
                        <div className='flex px-4 mt-3 items-center space-x-4 md:space-x-8 overflow-x-auto'>
                            {cats?.map((c,i)=>(
                                <div key={i} className='flex justify-center items-center space-x-2 mr-4 bg-gray-200 px-2 py-1 rounded-md '>
                                <p>{c}</p>
                                <p onClick={() => deleteCategory(i)} className='text-white bg-black rounded-full cursor-pointer p-1 text-sm'><ImCross /></p>
                                </div>
                            ))}
                        </div>
                        
                    </div>
                </div>
    
                <textarea name="" rows={10} cols={30} id="" className='px-4 py-2 outline-none bg-gray-200 rounded-md' placeholder='Enter Post Description'></textarea>
                <button className='bg-black text-white px-4 py-2 rounded-xl hover:bg-gray-700'>Update</button>
            </form>
        </div>
  )
}

export default editPost