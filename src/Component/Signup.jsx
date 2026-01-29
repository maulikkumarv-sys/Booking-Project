
// import axios from 'axios'
// import React, { useEffect, useState } from 'react'

// export default function Signup() {
//     const[state,setState]=useState({
//         username:"",
//         email:"",
//         password:""
//     })
    

//       useEffect(()=>{
//         usersignup()
//       },[])

//            function usersignup(){
//             const res=axios.post("http://localhost:8002/user/signup",state)
//             .then((res)=>{
//                 setState({
//                     username:"",
//                     email:"",
//                     password:""
//                 })
//             }).catch((error)=>{
//                 console.log(error)
//             })
//            }
//   return (
//     <>
    
//     <div>
//       <input type="text" placeholder='username' value={state.username} onChange={(e)=>setState({
//         ...state,
//         username:e.target.value
//       })} />

//       <input type="text" placeholder='email' value={state.email} onChange={(e)=>setState({
//         ...state,
//         email:e.target.value
//       })} />

//       <input type="text" placeholder='password' value={state.password} onChange={(e)=>setState({
//         ...state,
//         password:e.target.value
//       })} />
//       <button type='submit'>submit</button>

        
//     </div>
    
    
//     </>
//   )
// }

import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Signup() {
  const [state, setState] = useState({
    username: "",
    email: "",
    password: "",
  });


  function usersignup () {
    if (!state.username || !state.email || !state.password) {
      return alert("All fields are required");
    }

    if (!state.email.includes("@")) {
      return alert("Enter a valid email");
    }

    if (state.password.length < 6) {
      return alert("Password must be at least 6 characters");
    }

    try {

       axios.post("/user/signup", state);

      alert("Signup successful");

      setState({
        username: "",
        email: "",
        password: "",
      });
    } catch (err) {
      alert(err.response?.data?.message || "Signup failed");
    } 
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-lg">
        <h2 className="text-3xl font-serif text-center mb-6">
          Create Account
        </h2>

        

        <div className="space-y-4">
          <input
            type="text"
            placeholder="Username"
            value={state.username}
            onChange={(e) =>
              setState({ ...state, username: e.target.value })
            }
            className="w-full border p-3 rounded focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />

          <input
            type="email"
            placeholder="Email"
            value={state.email}
            onChange={(e) =>
              setState({ ...state, email: e.target.value })
            }
            className="w-full border p-3 rounded focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />

          <input
            type="password"
            placeholder="Password"
            value={state.password}
            onChange={(e) =>
              setState({ ...state, password: e.target.value })
            }
            className="w-full border p-3 rounded focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
        </div>

        <button
          onClick={usersignup}
          className="mt-6 w-full bg-yellow-500 py-3 rounded font-semibold hover:bg-yellow-400 transition disabled:opacity-50"
          
        >
            Sign up
        </button>

        <p className="text-center text-sm text-gray-600 mt-4">
          Already have an account?{" "}
          <Link to={"/login"}><span className="text-yellow-500 cursor-pointer hover:underline">
            Login
          </span></Link>
        </p>
      </div>
    </div>
  );
}
