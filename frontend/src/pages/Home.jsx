import React, { useEffect } from 'react'
import {URL} from "../url";
import HomePosts from '../components/HomePosts.jsx'
import axios from 'axios';
function home() {
  const[posts,setPosts]=React.useState([]);

  const fetchposts=async()=>{
   try{
    const res=await axios.get(`${URL}api/posts/`,{withCredentials:true});
    const data=res.data;
    console.log("All posts:",data);
     setPosts(data);
   }
   catch(err){
    console.log(err);
   } 
  }
  useEffect(()=>{
    fetchposts();
  },[]);

  return (
    <div>
        {posts.map((post)=>(<HomePosts post={post} key={post._id}></HomePosts>))}
    </div>
  )
}

export default home