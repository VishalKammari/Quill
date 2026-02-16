import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { CiEdit } from "react-icons/ci";
import { IoSend } from "react-icons/io5";
import { MdDeleteForever } from "react-icons/md";
import { UserContext } from "../context/UserContent";
import { useContext } from "react";
import Loader from "../components/Loader";
import { ImageFolder, URL } from "../url";
import { useNavigate } from "react-router-dom";
import Comment from "../components/Comments";
import Comments from "../components/Comments";

function Postdetails() {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const {user}=useContext(UserContext);
  const[loader,setloader]=useState(false);
  const navigate=useNavigate();
  const [comments,setComments]=useState([]);
  const [comment,setComment]=useState("");

  useEffect(() => {
    setloader(true);
    const fetchpost = async () => {
      try {
        const res = await axios.get(
          `${URL}api/posts/${id}`
        );
        // console.log(res.data);
        setPost(res.data);
        setloader(false);
      } catch (err) {
        console.error(err);
      }
    };

    fetchpost();
  }, [id]);


  const fetchPostComments=async()=>{
    setloader(true)
    try{
      const res=await axios.get(URL+"api/comments/posts/"+id ,{withCredentials:true})
      setComments(res.data)
      setloader(false)
    }
    catch(err){
      setloader(false)
      console.log(err)
    }
  }

  useEffect(()=>{
    fetchPostComments()

  },[id])

  if (!post)
    return (
      <div className="flex justify-center items-center h-[60vh] text-gray-500">
        Loading post...
      </div>
    );


    const handleDeletepost=async()=>{
      try{
        const res=await axios.delete(`${URL}api/posts/${id}`,{withCredentials:true})
        //console.log(res.data)
        navigate("/")
      }
      catch(err){
        console.log(err)
      }
    }

    const deleteComment = async (id) => {
      try {
        await axios.delete(`${URL}api/comments/${id}`, {
        withCredentials: true
      });

      setComments(prev =>
        prev.filter(comment => comment._id !== id)
      );

      } catch (err) {
      console.log(err);
      }
      };

    const postComment=async(e)=>{
    e.preventDefault()
    try{
      const res=await axios.post(URL+"api/comments/create",
      {comment:comment,author:user.username,postId:id,userId:user.id},
      {withCredentials:true})
      setComments((prevComments) => [res.data,...prevComments]);
      setComment("");
    }
    catch(err){
         console.log(err)
    }

    }

  return (
    <div className="w-full px-4 sm:px-6 md:w-[65%] mx-auto my-6 md:my-10">

  {loader ? (
    <Loader />
  ) : (
    <div className="p-5 md:p-8 shadow-xl rounded-2xl bg-white">

      <div className="flex  sm:flex-row items-center justify-between gap-3">
        
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800 leading-snug">
          {post.title}
        </h1>

        {user?.id === post.userId && (
          <div className="flex items-center gap-4 text-2xl">
            <CiEdit
              onClick={() => navigate("/edit/" + id)}
              className="cursor-pointer hover:text-blue-600 transition"
            />
            <MdDeleteForever
              onClick={handleDeletepost}
              className="cursor-pointer hover:text-red-600 transition"
            />
          </div>
        )}

      </div>

      <p className="text-xs md:text-sm text-gray-500 mt-2">
        @{post.username} ·{" "}
        {new Date(post.createdAt).toLocaleDateString("en-IN", {
          day: "2-digit",
          month: "short",
          year: "numeric",
        })}
      </p>

      {post.photo && (
        <img
          src={ImageFolder + post.photo}
          alt="post"
          className="w-full max-h-[500px] object-cover rounded-xl my-6 shadow-md"
        />
      )}

      <p className="mt-4 md:mt-6 text-sm md:text-lg text-gray-700 leading-relaxed text-justify">
        {post.desc}
      </p>

      {post.categories && post.categories.length > 0 && (
        <div className="flex flex-col mt-6 gap-3">
          <p className="font-semibold text-sm md:text-base">
            Categories:
          </p>

          <div className="flex flex-wrap gap-3">
            {post.categories.map((cat) => (
              <div
                key={cat}
                className="bg-gray-100 text-sm md:text-base rounded-full px-4 py-1.5"
              >
                {cat}
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="mt-8">
        <h3 className="font-semibold mb-4 text-lg">Comments</h3>

        {comments && comments.length > 0 ? (
          comments.map((c) => (
            <Comments
              key={c._id}
              c={c}
              post={post}
              onDelete={deleteComment}
            />
          ))
        ) : (
          <p className="text-gray-500 text-sm">No comments yet.</p>
        )}
      </div>

    </div>
  )}

  <div className="w-full flex flex-col sm:flex-row gap-3 mt-6">
    
    <input
      value={comment}
      onChange={(e) => setComment(e.target.value)}
      type="text"
      placeholder="Write a comment..."
      className="flex-1 border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-black focus:outline-none"
    />

    <button
      onClick={postComment}
      className="bg-black text-white px-6 py-3 rounded-xl hover:bg-gray-800 transition"
    >
      Add Comment
    </button>

  </div>

</div>

  );
}

export default Postdetails;