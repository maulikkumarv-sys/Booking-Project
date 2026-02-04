import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <nav className="bg-black text-white px-6 py-4">
      <ul
        className="
          flex flex-col items-center gap-4
          md:flex-row md:justify-between md:gap-6
          font-medium
        "
      >
        <div className="flex flex-col md:flex-row gap-4 md:gap-6 items-center">
          <li>
            <Link to="/home" className="hover:text-yellow-400 transition">
              Home
            </Link>
          </li>

          {!token && (
            <li>
              <Link to="/signup" className="hover:text-yellow-400 transition">
                Sign Up
              </Link>
            </li>
          )}
        </div>

        <div>
          {token ? (
            <button
              onClick={handleLogout}
              className="hover:text-red-400 transition"
            >
              Logout
            </button>
          ) : (
            <Link to="/login" className="hover:text-yellow-400 transition">
              Login
            </Link>
          )}
        </div>
      </ul>
    </nav>
  );
}
