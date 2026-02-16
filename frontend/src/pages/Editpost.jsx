import React, { useEffect } from 'react'
import { useState } from 'react'
import { FaUpload } from "react-icons/fa";
import {ImCross} from "react-icons/im"
import axios from 'axios';
import {URL} from '../url.js';
import { useParams } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from '../context/UserContent.jsx';
import { useNavigate } from 'react-router-dom';
const editPost = () => {
    const{user}=useContext(UserContext)
    const postId= useParams().id;
    const[title,setTitle]=useState("");
    const[desc,setDesc]=useState("");
    const[file,setFile]=useState(null);
    const[cat,setCat]=useState(""); 
    const[cats,setCats]=useState([]); 
    const [photo, setPhoto] = useState("");

    const navigate=useNavigate();

    const addCategory = () => {
        let updatedCats = [...cats];
        if(cat!== "") updatedCats.push(cat);
        setCats(updatedCats);
            setCat("");
        }
    const deleteCategory = (i) => {
        setCats(cats.filter((_, idx) => idx !== i));
    }

    const fetchPost = async () => {
  try {
    const res = await axios.get(`${URL}api/posts/${postId}`);
    setTitle(res.data.title);
    setDesc(res.data.desc);
    setCats(res.data.categories);
    setPhoto(res.data.photo);   // store old image here
  } catch (err) {
    console.error(err);
  }
};


    const handleUpdate = async (e) => {
  e.preventDefault();

  if (!user) {
    navigate("/login");
    return;
  }

  const post = {
    title,
    desc,
    username: user.username,
    userId: user.id,
    categories: cats,
    photo: photo   // default to old image
  };

  // If new file selected
  if (file) {
    const data = new FormData();
    const filename = Date.now() + file.name;

    data.append("img", filename);
    data.append("file", file);

    post.photo = filename;  // override with new image

    try {
      await axios.post(URL + "api/upload", data);
    } catch (err) {
      console.log(err);
    }
  }

  try {
    const res = await axios.put(
      URL + "api/posts/" + postId,
      post,
      { withCredentials: true }
    );

    navigate("/posts/post/" + res.data._id);
  } catch (err) {
    console.log(err);
  }
};




    useEffect(() => {
        fetchPost();
    }, [postId])

    
  return (
    <div className="w-full px-4 sm:px-6 md:max-w-[70%] md:mx-auto mt-6 md:mt-10">
  <h1 className="font-bold text-2xl md:text-3xl text-center md:text-left mb-6">
    Update Post
  </h1>

  <form className="w-full flex flex-col gap-5 md:gap-8">
    
    {/* Title */}
    <input
      onChange={(e) => setTitle(e.target.value)}
      value={title}
      type="text"
      placeholder="Enter Post Title"
      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-black focus:outline-none"
    />

    {/* File Upload */}
    <div>
      <input
        onChange={(e) => setFile(e.target.files[0])}
        type="file"
        className="w-full text-sm text-gray-500
        file:mr-4 file:rounded-lg file:border-0
        file:bg-black file:text-white
        file:px-4 file:py-2
        hover:file:bg-gray-800"
      />
    </div>

    {/* Category Section */}
    <div className="flex flex-col gap-4">

      {/* Input + Add Button */}
      <div className="flex flex-col sm:flex-row gap-3">
        <input
          type="text"
          value={cat}
          onChange={(e) => setCat(e.target.value)}
          placeholder="Enter Post Category"
          className="flex-1 px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-black focus:outline-none"
        />

        <button
          type="button"
          onClick={addCategory}
          className="bg-black text-white px-4 py-3 rounded-xl hover:bg-gray-700 transition"
        >
          Add
        </button>
      </div>

      {/* Category Chips */}
      <div className="flex flex-wrap gap-3">
        {cats?.map((c, i) => (
          <div
            key={i}
            className="flex items-center gap-2 bg-gray-100 px-3 py-1.5 rounded-full"
          >
            <p className="text-sm">{c}</p>
            <button
              type="button"
              onClick={() => deleteCategory(i)}
              className="bg-black text-white rounded-full p-1 text-xs hover:bg-gray-700"
            >
              <ImCross />
            </button>
          </div>
        ))}
      </div>

    </div>

    {/* Description */}
    <textarea
      onChange={(e) => setDesc(e.target.value)}
      value={desc}
      rows={8}
      placeholder="Enter Post Description"
      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-black focus:outline-none"
    />

    {/* Update Button */}
    <button
      type="button"
      onClick={handleUpdate}
      className="w-full bg-black text-white py-3 rounded-xl hover:bg-gray-800 transition"
    >
      Update Post
    </button>

  </form>
</div>
  )
}

export default editPost