import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { CiSearch } from "react-icons/ci"
import { HiOutlineMenu, HiX } from "react-icons/hi"

const Navbar = () => {
  const user = false
  const [open, setOpen] = useState(false)

  return (
    <div className="fixed top-5 left-2 right-2 z-10">
      <div className="flex items-center justify-between md:w-[70%] mx-auto px-4 py-2 bg-white/10 backdrop-blur-sm rounded-4xl shadow-md">

        {/* Logo */}
        <h1 className="text-lg md:text-3xl font-bold F">
          <Link to="/">Quill</Link>
        </h1>

        {/* Search (hidden on very small screens) */}
        <div className="hidden md:flex items-center space-x-1 px-2 py-1 bg-neutral-100/60 backdrop-blur-sm rounded-3xl shadow-sm">
          <CiSearch className='h-10' />
          <input
            type="text"
            className="outline-none px-2 py-1 bg-transparent"
            placeholder="Search"
          />
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-6 items-center">
          {user ? (
            <Link to="/write">Write</Link>
          ) : (
            <Link to="/login">Login</Link>
          )}
          {user ? (
            <Link to="/profile">Profile</Link>
          ) : (
            <Link to="/register">Register</Link>
          )}
        </div>

        {/* Hamburger (mobile only) */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setOpen(!open)}
        >
          {open ? <HiX /> : <HiOutlineMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden mt-2 mx-2 bg-white/90 backdrop-blur-sm rounded-2xl shadow-md p-4 flex flex-col gap-4">
          {user ? (
            <Link to="/write" onClick={() => setOpen(false)}>Write</Link>
          ) : (
            <Link to="/login" onClick={() => setOpen(false)}>Login</Link>
          )}
          {user ? (
            <Link to="/profile" onClick={() => setOpen(false)}>Profile</Link>
          ) : (
            <Link to="/register" onClick={() => setOpen(false)}>Register</Link>
          )}
        </div>
      )}
    </div>
  )
}

export default Navbar
