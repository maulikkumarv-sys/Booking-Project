
import { Routes,Route} from 'react-router-dom';
import './App.css';
import Navbar from './Component/Navbar';
import Booking from './Component/Booking';
import Home from './Component/Home';

function App() {
  return (
    <div className="App">
      <Navbar/>


      <Routes>
        
       <Route path='/' element={<Home/>}/>
       <Route path='/book' element={<Booking/>}/>

      </Routes>
    </div>
  );
}

export default App;
