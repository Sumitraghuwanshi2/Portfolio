import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./Components/Home"
import Qualification from "./Components/Qualification"
import Skills from "./Components/Skills"
import Projects from './Components/Projects';
import Contact from "./Components/Contact"
import Aos from 'aos';
import { useEffect } from 'react';
import "aos/dist/aos.css"

function App() {
  useEffect(() => {
    Aos.init();
  }, [])

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='home' element={<Home />} />
            <Route path='contact' element={<Contact />} />
            <Route path='project' element={<Projects />} />
            <Route path='skill' element={<Skills />} />
            <Route path='Qualification' element={<Qualification/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;

