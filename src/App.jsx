import React, { useEffect, useState } from 'react'
import Home from './components/Home'
import Navbar from './components/Navbar'
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import { Context } from './context/Context';
import Animation from './components/Animation';
import Footer from './components/Footer';


const App = () => {
  const [timer, setTimer] = useState(true);
  useEffect(() => {
    const timer2 = setTimeout(() => {
      setTimer(false)
    }, 2000)
    return () => clearTimeout(timer2)
  }, [])
  return (
    <Context>
      <BrowserRouter>
        {timer ? (<Animation />) : (
          <>
            <Navbar />
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/about' element={<About />} />
              <Route path='/skills' element={<Skills />} />
              <Route path='/projects' element={<Projects />} />
              <Route path='/contact' element={<Contact />} />
            </Routes>
            
            {/* <Navbar /> */}
            <Footer/>
          </>
        )}
      </BrowserRouter>
    </Context>
  );
};

export default App
