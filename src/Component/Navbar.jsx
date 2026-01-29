// import React from "react";
// import { Link } from "react-router-dom";

// export default function Navbar() {
//   return (
//     <nav className="bg-black text-white px-6 py-4">
//       <ul
//         className="
//           flex flex-col items-center gap-4
//           md:flex-row md:justify-between md:gap-6
//           font-medium
//         "
//       >
//         <div className="flex flex-col md:flex-row gap-4 md:gap-6 items-center">
//           <li>
//             <Link to="/" className="hover:text-yellow-400 transition">
//               Home
//             </Link>
//           </li>

//           {/* <li>
//             <Link to="/about" className="hover:text-yellow-400 transition">
//               About
//             </Link>
//           </li> */}

//           <li>
//             <Link to="/signup" className="hover:text-yellow-400 transition">
//               Sign Up
//             </Link>
//           </li>

//           {/* <li>
//             <Link to="/login" className="hover:text-yellow-400 transition">
//               Login
//             </Link>
//           </li> */}
//         </div>

//         <li>
//           <Link
//             to="/booking"
//             className="bg-yellow-500 text-black px-4 py-2 rounded hover:bg-yellow-400 transition"
//           >
//             BOOK NOW
//           </Link>
//         </li>
//       </ul>
//     </nav>
      
//   );
// }

import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const isLoggedIn = localStorage.getItem("isLoggedIn");

  return (
    <nav className="bg-black text-white px-6 py-4">
      <ul className="flex flex-col md:flex-row md:justify-between items-center gap-4 font-medium">
        
        <div className="flex flex-col md:flex-row gap-4 items-center">
          <li>
            <Link to="/" className="hover:text-yellow-400 transition">
              Home
            </Link>
          </li>

          {!isLoggedIn && (
            <li>
              <Link to="/signup" className="hover:text-yellow-400 transition">
                Sign Up
              </Link>
            </li>
          )}
        </div>

        {isLoggedIn && (
          <li>
            <Link
              to="/booking"
              className="bg-yellow-500 text-black px-4 py-2 rounded hover:bg-yellow-400 transition"
            >
              BOOK NOW
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
}
