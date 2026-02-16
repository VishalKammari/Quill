import { Link } from "react-router-dom"
import { useContext, useEffect, useState } from "react"
import { UserContext } from "../context/UserContent"
import axios from "axios"
import { URL } from "../url"
import HomePosts from "../components/HomePosts"
import Loader from "../components/Loader"

const MyBlogs = () => {

  const [posts, setPosts] = useState([])
  const [noResults, setNoResults] = useState(false)
  const [loader, setLoader] = useState(false)

  const { user } = useContext(UserContext)

  const fetchPosts = async () => {

    if (!user?.id) return   // 🔐 guard

    setLoader(true)

    try {
      const res = await axios.get(
        `${URL}api/posts/user/${user.id}`,
        { withCredentials: true }
      )

      setPosts(res.data)
      setNoResults(res.data.length === 0)

    } catch (err) {
      console.log(err)
    } finally {
      setLoader(false)
    }
  }

  useEffect(() => {
    fetchPosts()
  }, [user?.id])

  return (
    <div className="w-full px-4 md:w-[65%] mx-auto mt-8">

      {loader ? (
        <div className="h-[60vh] flex justify-center items-center">
          <Loader />
        </div>
      ) : noResults ? (
        <h3 className="w-full text-center font-bold mt-6">
          You haven't posted anything yet.
        </h3>
      ) : (
        posts.map((post) => (
          <Link
            key={post._id}
            to={`/posts/post/${post._id}`}
            className="block mb-6"
          >
            <HomePosts post={post} />
          </Link>
        ))
      )}

    </div>
  )
}

export default MyBlogs
