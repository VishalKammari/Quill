import React from 'react'
import Navbar from './components/navbar'
import Footer from './components/Footer'
import {Routes} from 'react-router-dom'
import Home from './pages/home'
import {Route} from 'react-router-dom'
import Login from './pages/Login'
import Register from './pages/Register'
import Postdetails from './pages/Postdetails'
function App() {
  return (
    <div className="min-h-screen flex flex-col bg-[#fdfdfd]">
      <Navbar />
      <main className="flex-grow pt-20">
        <Routes>
        <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/posts/post/:id" element={<Postdetails />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App