
import { Routes,Route} from 'react-router-dom';
import './App.css';
import Navbar from './Component/Navbar';
import Booking from './Component/Booking';
import Home from './Component/Home';
import Signup from './Component/Signup';
import Login from './Component/Login';

function App() {
  return (
    <div className="App">
      <Navbar/>
        

      <Routes>
        
       <Route path='/' element={<Home/>}/>
       <Route path='/signup' element={<Signup/>}/>
       <Route path='/login' element={<Login/>}/>
       <Route path='/book' element={<Booking/>}/>

      </Routes>
    </div>
  );
}

export default App;
