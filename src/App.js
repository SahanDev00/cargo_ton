import React from 'react'
import {BrowserRouter as Router, Route , Routes} from 'react-router-dom'
import Footer from './Components/Footer';
import Blog from './Pages/Blog';
import Home from './Pages/Home';
import Pages from './Pages/Pages';
import Services from './Pages/Services';
import Tracking from './Pages/Tracking';

const { default: Navbar } = require("./Components/Navbar");

function App() {
  return (
    <div className="App dark:bg-[#030637] duration-300">
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/pages' element={<Pages/>}/>
          <Route path='/tracking' element={<Tracking/>}/>
          <Route path='/services' element={<Services/>}/>
          <Route path='/blog' element={<Blog/>}/>
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
