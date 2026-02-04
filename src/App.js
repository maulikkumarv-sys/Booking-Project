import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import Navbar from "./Component/Navbar";
import Booking from "./Component/Booking";
import Home from "./Component/Home";
import Signup from "./Component/Signup";
import Login from "./Component/Login";
import Adminpanel from "./Panel/Adminpanel";

function App() {
  
  const isAuth = !!localStorage.getItem("token");

  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/home" element={isAuth ? <Home /> : <Navigate to="/login" />}/>

        <Route path="/signup" element={!isAuth ? <Signup /> : <Navigate to="/home" />} />

        <Route path="/login" element={!isAuth ? <Login /> : <Navigate to="/home" />}/>

        <Route path="/booking/:id" element={isAuth ? <Booking /> : <Navigate to="/login" />}/>

        <Route path="/dashboard" element={isAuth ? <Adminpanel /> : <Navigate to="/login" />}/>
      </Routes>
    </div>
  );
}

export default App;


