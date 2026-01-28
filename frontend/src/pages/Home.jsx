import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Link, useLocation } from "react-router-dom";
import { URL } from "../url";
import HomePosts from "../components/HomePosts";
import Loader from "../components/Loader";
import { UserContext } from "../context/UserContent";

function Home() {
  const [posts, setPosts] = useState([]);
  const [noresults, setNoresults] = useState(false);
  const { search } = useLocation();
  const [loader,setloader]=useState(false);
  const {user}=useContext(UserContext);

  useEffect(() => {
    const fetchPosts = async () => {
      setloader(true);
      try {
        const endpoint = search
          ? `${URL}api/posts/${search}`
          : `${URL}api/posts`;

        const res = await axios.get(endpoint, {
          withCredentials: true,
        });

        setPosts(res.data);
        setNoresults(res.data.length === 0);
      } catch (err) {
        console.log(err);
      }
      setloader(false);
    };

    fetchPosts();
  }, [search]);

  return (
    <div>
      {loader? <div className="h-screen flex justify-center items-center mt-9"> <Loader></Loader> </div>:noresults ? (
        <h3 className="w-full text-center font-bold mt-6">No results found</h3>
      ) : (
        posts.map((post) => (
          posts.map((post) => (
          <Link key={post._id} to={user ? `/post/${post._id}` : `/login`} className="block">
            <HomePosts post={post} />
           </Link>
          ))
        ))
      )}
    </div>
  );
}

export default Home;
