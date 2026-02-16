import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import {Routes} from 'react-router-dom'
import Home from './pages/Home'
import {Route} from 'react-router-dom'
import Login from './pages/Login'
import Register from './pages/Register'
import Postdetails from './pages/Postdetails'
import Createpost from './pages/Createpost'
import Editpost from './pages/editPost'
// import Profile from './pages/Profile'
import Myblogs from './pages/Myblogs'
import { UserContextProvider } from './context/UserContent'

function App() {
  return (
    <UserContextProvider className="min-h-screen flex flex-col bg-[#fdfdfd]">
      <Navbar />
      <main className="flex-grow pt-20">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/posts/post/:id" element={<Postdetails />} />
          <Route path="/write" element={<Createpost />} />
          <Route path="/edit/:id" element={<Editpost />} />
          <Route path="/Myblogs/:id" element={<Myblogs />} />
          {/* <Route path="/profile/:id" element={<Profile />} /> */}
        </Routes>
      </main>
      <Footer />
    </UserContextProvider>
  )
}

export default App