import React, { useContext } from 'react'
import { MdDeleteForever } from "react-icons/md";
import { UserContext } from "../context/UserContent";

const Comments = ({ c, onDelete }) => {

  const { user } = useContext(UserContext);

  return (
    <div className='flex flex-col mt-4 md:w-[95%] w-full mx-auto space-y-2'>
      <div className='px-2 py-2 bg-gray-300 rounded-lg'>
        <div className='flex items-center justify-between gap-2.5 rounded-lg bg-gray-100 px-2 text-xs md:text-sm'>

          <div className='flex gap-5'>
            <p className='text-gray-600 text-[12px] md:text-[15px]'>
              @{c.author}
            </p>

            <div className='flex gap-3 text-gray-600 text-[10px] md:text-[15px]'>
              {new Date(c.createdAt).toLocaleDateString("en-IN", {
                day: "2-digit",
                month: "short",
                year: "numeric",
              })}
            </div>
          </div>

          {user?.id === c.userId && (
            <MdDeleteForever
              onClick={() => onDelete(c._id)}
              className='text-xs md:text-xl cursor-pointer hover:text-red-600'
            />
          )}

        </div>

        <p className='text-s mt-2'>{c.comment}</p>
      </div>
    </div>
  );
};

export default Comments;
