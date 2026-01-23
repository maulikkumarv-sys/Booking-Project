import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="  bg-black text-white px-6 py-4 static ">
      
      <ul className="flex justify-evenly gap-6 font-medium w-full">
          
        
        <li>
          <Link to="/" className="hover:text-yellow-400 transition">
            Home
          </Link>
        </li>

        <li>
          <Link to="/about" className="hover:text-yellow-400 transition">
            About
          </Link>
        </li>

        <li>
          <Link to="/signup" className="hover:text-yellow-400 transition">
            Sign Up
          </Link>
        </li>

        <li>
          <Link to="/login" className="hover:text-yellow-400 transition">
            Login
          </Link>
        </li>

        <li className="ml-auto">
          <Link
            to="/book"
            className="bg-yellow-500 text-black px-4 py-2 rounded hover:bg-yellow-400 transition"
          >
            BOOK NOW
          </Link>
        </li>

      </ul>
    </nav>
  );
}
