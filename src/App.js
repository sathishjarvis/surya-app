import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Landing from './Components/Landing';
import Antdesign from './Components/AntDesign';
import Home from './Pages/Home';
function App() {

  return (
    <div className='app'>
      <nav>
        <ul>
          <Link to="/"><li>Home</li></Link>
        </ul>
      </nav>
    <Routes>
      <Route path='/' element={<Antdesign />} /> 
      <Route path="Antdesign" element={<Home/>} />
      <Route path='Landing' element={<Landing/>}></Route>
      </Routes>
    </div>

  );
}

export default App;

