
// import { Routes,Route} from 'react-router-dom';
// import './App.css';
// import Navbar from './Component/Navbar';
// import Booking from './Component/Booking';
// import Home from './Component/Home';
// import Signup from './Component/Signup';
// import Login from './Component/Login';
// import { useState } from 'react';

// function App() {
//   const[authinicate,setAuthinicate]=useState(false)
//   return (
//     <div className="App">
//       <Navbar/>
        

//       <Routes>
        
//        <Route path='/' element={<Home/>}/>
//        <Route path='/signup' element={<Signup/>}/>
//        <Route path='/login' element={<Login/>}/>
//        <Route path='/booking' element={<Booking/>}/>


//       </Routes>

//       {authinicate ? (<Booking/>):(<Signup/>)}
//     </div>
//   );
// }

// export default App;

import { Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";
import "./App.css";

import Navbar from "./Component/Navbar";
import Booking from "./Component/Booking";
import Home from "./Component/Home";
import Signup from "./Component/Signup";
import Login from "./Component/Login";

function App() {
  const [authenticated, setAuthenticated] = useState(false);

  return (
    <div className="App">
      <Navbar authenticated={authenticated} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup setAuthenticated={setAuthenticated} />} />
        <Route path="/login" element={<Login setAuthenticated={setAuthenticated} />} />

        {/* ✅ Protected route */}
        <Route
          path="/booking"
          element={authenticated ? <Booking /> : <Navigate to="/signup" />}
        />
      </Routes>
    </div>
  );
}

export default App;
