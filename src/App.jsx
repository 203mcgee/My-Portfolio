import React from 'react'
import { BrowserRouter, useParams } from 'react-router-dom';
import { Routes, Route, } from 'react-router-dom'
import { useState } from 'react'
import './App.css'
import HomePage from './pages/HomePage';
import Projects from './pages/Projects';
import ExperienceSkills from './pages/ExperienceSkills';
import Contact from './pages/Contact';
import Navbar from './components/Navbar';

function App() {
  let { id } = useParams();
  return (
    <>
      <h1>Zoe McGee's Portfolio</h1>
      <header>
        <div>
          <BrowserRouter>
            <Navbar />
            <Routes>
              <Route path='/' element={<HomePage />} />
              <Route path='/projects' element={<Projects />} />
              <Route path='/experienceskills' element={<ExperienceSkills />} />
              <Route path='/contact' element={<Contact />} />
            </Routes>

          </BrowserRouter>
        </div>
      </header>
    </>
  )
}

export default App
