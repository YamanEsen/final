import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homescreen from './screens/Homescreen';
import Bookingscreen from './screens/Bookingscreen';
import LoginScreen from './screens/LoginScreen';
import Registerscreen from './screens/Registerscreen';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/home" element={<Homescreen />} />
          <Route path='/book/:roomid' element={<Bookingscreen />} />
          <Route path='/register' element={<Registerscreen />}/>
          <Route path='/login' element={<LoginScreen />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
