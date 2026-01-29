import axios from 'axios'
import React, { useState } from 'react'

export default function Login() {
  const [state, setState] = useState({
    email: "",
    password: ""
  })




  function userlogin() {
    if (!state.email || !state.password) {
      return alert("Email and password are required");
    }

    if (!state.email.includes("@")) {
      return alert("Enter a valid email");
    }

    if (state.password.length < 6) {
      return alert("Password must be at least 6 characters");
    }

    axios
      .post("https://booking-project-backend-1.onrender.com/user/login", {
        email: state.email,
        password: state.password,
        
      })
      .then((res) => {
        alert("Login successful");
        console.log(res.data.token);
        setState({
          email:"",
          password:""
        })

      })
      .catch((err) => {
        alert(err.response?.data?.message || "Login failed");
      });
  }


  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg">

        <h2 className="text-3xl font-serif text-center mb-6">
          Login
        </h2>

        <div className="space-y-4">

          <input
            type="email"
            placeholder="Email"
            value={state.email}
            onChange={(e) =>
              setState({ ...state, email: e.target.value })
            }
            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />

          <input
            type="password"
            placeholder="Password"
            value={state.password}
            onChange={(e) =>
              setState({ ...state, password: e.target.value })
            }
            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />

          <button
            onClick={userlogin}
            className="w-full bg-yellow-500 text-black font-semibold py-3 rounded-lg hover:bg-yellow-400 transition duration-300"
          >
            Login
          </button>
        </div>


      </div>
    </div>
  );

}
