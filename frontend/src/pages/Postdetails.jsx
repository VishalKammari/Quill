import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { CiEdit } from "react-icons/ci";
import { IoSend } from "react-icons/io5";
import { MdDeleteForever } from "react-icons/md";
import { UserContext } from "../context/UserContent";
import { useContext } from "react";
import Loader from "../components/Loader";

function Postdetails() {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const {user}=useContext(UserContext);
  const[loader,setloader]=useState(false);

  useEffect(() => {
    setloader(true);
    const fetchpost = async () => {
      try {
        const res = await axios.get(
          `http://localhost:5000/api/posts/${id}`
        );
        console.log(res.data);
        setPost(res.data);
        setloader(false);
      } catch (err) {
        console.error(err.response?.data || err.message);
      }
    };

    fetchpost();
  }, [id]);

  if (!post)
    return (
      <div className="flex justify-center items-center h-[60vh] text-gray-500">
        Loading post...
      </div>
    );

  return (
    <div className="px-4 md:px-6 md:w-[65%] mx-auto my-8">
      {loader?<Loader></Loader>:<div className="p-4 md:p-6 shadow-lg rounded-2xl bg-white">

        {/* Title */}
        <div className="flex items-center justify-between">
          <h1 className="text-xl md:text-3xl font-bold text-gray-800 leading-snug">
          {post.title}
        </h1>
        {user._id === post.userId &&
        <div className='flex items-center justify-between space-x-4'>
           <CiEdit className='text-2xl cursor-pointer hover:text-blue-600 ' />
            <MdDeleteForever className='text-2xl cursor-pointer hover:text-red-600 ' /> 
        </div>
        }
        

        </div>
        


        {/* Author + Date */}
        <p className="text-xs md:text-sm text-gray-500 mt-2">
          @{post.username} ·{" "}
          {new Date(post.createdAt).toLocaleDateString("en-IN", {
            day: "2-digit",
            month: "short",
            year: "numeric",
          })}
        </p>

        {/* Image */}
        {post.photo && (
          <img
            src={post.photo}
            alt="post"
            className="w-full rounded-xl mx-auto my-6 shadow-md"
          />
        )}

        {/* Description */}
        <p className="mt-4 md:mt-6 text-sm md:text-lg text-gray-700 leading-relaxed text-justify">
          {post.desc}
        </p>

        <div className='flex items-center md:w-[65%]  mt-2 justify-start space-x-4 font-semibold'>
            <p className='md:text-lg text-sm'>Categories:</p>
            <div className='flex justify-center items-center space-x-2 '>
              {post.categories?post.categories.map((cat) => (
                <div key={cat} className='bg-gray-200 md:text-lg text-sm rounded-lg px-3 py-1 '>{cat}</div>
              )):null}
            </div>
        </div>



      </div>}
    </div>
  );
}

export default Postdetails;



























// import { useParams } from "react-router-dom";
// import { useEffect, useState } from "react";


// import Comments from '../components/Comments.jsx';
// import axios from 'axios';
// import{URL} from '../url.js';

// const data = '';
// function Postdetails() {
//   const postid=useParams().id;
//   console.log(postid);
  
//   useEffect(() => {
//     const fetchpost = async () => {
//   try {
//     const res = await axios.get(
//       "http://localhost:5000/api/posts/post/69778c5ff131f0a0b607745c"
//     );
//     console.log(res);
//   } catch (err) {
//     console.log(err);
//   }
// };import { useParams } from "react-router-dom";
// import { useEffect, useState } from "react";
// import axios from "axios";

// function Postdetails() {
//   const { id } = useParams();
//   const [post, setPost] = useState(null);

//   useEffect(() => {
//     const fetchpost = async () => {
//       try {
//         const res = await axios.get(
//           `http://localhost:5000/api/posts/${id}`
//         );
//         setPost(res.data);
//       } catch (err) {
//         console.error(err.response?.data || err.message);
//       }
//     };

//     fetchpost();
//   }, [id]);

//   if (!post)
//     return (
//       <div className="flex justify-center items-center h-[60vh] text-gray-500">
//         Loading post...
//       </div>
//     );

//   return (
//     <div className="px-4 md:px-6 md:w-[75%] mx-auto my-8">
//       <div className="p-4 md:p-6 shadow-lg rounded-2xl bg-white">

//         {/* Title */}
//         <h1 className="text-xl md:text-3xl font-bold text-gray-800 leading-snug">
//           {post.title}
//         </h1>

//         {/* Author + Date */}
//         <p className="text-xs md:text-sm text-gray-500 mt-2">
//           @{post.username} ·{" "}
//           {new Date(post.createdAt).toLocaleDateString("en-IN", {
//             day: "2-digit",
//             month: "short",
//             year: "numeric",
//           })}
//         </p>

//         {/* Image */}
//         {post.photo && (
//           <img
//             src={post.photo}
//             alt="post"
//             className="w-full  rounded-xl mx-auto my-6 shadow-md"
//           />
//         )}

//         {/* Description */}
//         <p className="mt-4 md:mt-6 text-sm md:text-lg text-gray-700 leading-relaxed text-justify">
//           {post.desc}
//         </p>

//       </div>
//     </div>
//   );
// }

// export default Postdetails;


//   }, [postid]);
  
//   return (
//     <div className='px-5  md:w-[82%]  mx-auto m-8 '>
//       <div className='p-2 shadow-lg rounded-2xl'>
//         <div className="flex text-xs md:w-[65%] mx-auto justify-between items-center ">
//           <h1 className='text-xs font-bold md:text-2xl '>Lorem ipsum dolor sit amet consectetur.</h1>
//           
//         </div>
//         <div className='flex text-xs md:text-lg items-center font-semibold gap-3 mx-auto md:w-[65%] justify-start m-2 md:mt-4'>
//           <p>@Vishal</p>
//           <div className='flex gap-3'>
//             <p>15/01/2026</p>
//             <p>16:45</p>
//           </div>
//         </div>
//         <img
//             src={data}
//             alt="post"
//             className="w-full sm:w-[80%] md:w-[65%] rounded-lg mx-auto aspect-[16/9]"
//           />
//           <div className='mx-auto md:w-[67%] flex justify-center'>
//             <p className='md:px-3 md:text-lg text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea ab rem veritatis.Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus rem libero, similique labore adipisci eos.</p>
//           </div>
          
//           {/* comments */}
//           <div className='flex flex-col mt-4 md:w-[65%] w-full mx-auto space-y-2'>
//             <h1 className='md:text-lg text-sm'>Comments:</h1>
//             {/* start */}
//             <Comments />
//             <Comments />
//             <Comments />
//             <Comments />
//             <Comments />
//             {/* end */}
//           </div>

//           <div className='flex mt-4 md:w-[65%] gap-2 mx-auto justify-between'>
//             <input type="text" className='w-full rounded-lg px-4 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 mx-auto' placeholder='Add a comment...' />
//             <button className='bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600'><IoSend /></button>
//           </div>
          
//       </div>
//     </div>
//   )
// }

// export default Postdetails