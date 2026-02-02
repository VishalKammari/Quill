import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { HiOutlineMenu, HiX } from "react-icons/hi";
import axios from "axios";

import { UserContext } from "../context/UserContent";
import { URL } from "../url";


const Navbar = () => {
  const { user, getUser, setUser } = useContext(UserContext);
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const[prompt,setPrompt]=useState("");
  const handleLogout = async () => {
    try {
      const res=await axios.get(`${URL}api/auth/logout`, { withCredentials: true });
      setUser(null);
      setOpen(false);
      navigate("/login");
      console.log("Logged out successfully");
    } catch (err) {
      console.log(err);
    }
  };

  const handleUrl = () => {
  if (!prompt.trim()) {
    navigate("/");
  } else {
    navigate(`/?search=${prompt}`);
  }
};

  return (
    <div className="fixed top-5 left-2 right-2 z-10">
      <div className="flex items-center justify-between md:w-[70%] mx-auto px-4 py-2 bg-white/10 backdrop-blur-sm rounded-4xl shadow-md">

        {/* Logo */}
        <h1 className="F text-lg md:text-3xl font-bold">
          <Link to="/">Quill</Link>
        </h1>

        {/* Search */}
        <div className="hidden md:flex items-center space-x-1 px-2 py-1 bg-neutral-100/60 backdrop-blur-sm rounded-3xl shadow-sm">
  
        <CiSearch
          className="h-6 w-6 cursor-pointer"
          onClick={handleUrl}
        />

        <input
          type="text"
          className="outline-none px-2 py-1 bg-transparent"
          placeholder="Search"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleUrl();
          }
          }}
          />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6 items-center">
          {user ? (
            <>
              <Link to="/write">Write</Link>
              <Link to="/profile">Profile</Link>
              <button
                onClick={handleLogout}
                className="text-red-500 hover:text-red-600 cursor-pointer"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login">Login</Link>
              <Link to="/register">Register</Link>
            </>
          )}
        </div>

        {/* Mobile Toggle */}
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
            <>
              <Link to="/write" onClick={() => setOpen(false)}>Write</Link>
              <Link to="/profile" onClick={() => setOpen(false)}>Profile</Link>
              <button
                onClick={handleLogout}
                className="text-red-500 text-left"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login" onClick={() => setOpen(false)}>Login</Link>
              <Link to="/register" onClick={() => setOpen(false)}>Register</Link>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default Navbar;
