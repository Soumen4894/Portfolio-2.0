import React, { useEffect, useRef, useState } from 'react'
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
import PopupDemo from './components/PopupDemo';
import Message from './components/Message';
import MessageToast from './components/MessageToast';


const App = () => {
  const [timer, setTimer] = useState(true);
  const audioRef = useRef(null); 
  useEffect(() => {
    const timer2 = setTimeout(() => {
      setTimer(false)
    }, 2000)
    return () => clearTimeout(timer2)
    // const timer1 = setTimeout(() => {
    //     audioRef.current?.play();
    //     console.log("played");
    // }, 5000); // 3000ms = 3 seconds

    // return () => clearTimeout(timer1); // Cleanup on unmount
  }, [])
  return (
    <Context>
      <BrowserRouter>
        {timer ? (<Animation />) : (
          <>
            <Navbar />
            {/* <audio ref={audioRef} src='../assets/ding.mp3' /> */}
            {/* <PopupDemo/> */}
            {/* <Message/> */}
            <MessageToast/>
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
