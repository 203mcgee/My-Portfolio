import React from 'react'
import { BrowserRouter, useParams, Routes, Route } from 'react-router-dom';
import { useState } from 'react'
import './App.css'
import './index.css'
import HomePage from './pages/HomePage';
import Projects from './pages/Projects';
import ExperienceSkills from './pages/ExperienceSkills';
import Contact from './pages/Contact';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './components/Hero';

function App() {
  let { id } = useParams();
  return (
    <>
      <h1>Portfolio</h1>
      <header>
        <div>
          <BrowserRouter>
            <Navbar />
            <Hero />
            <Routes>
              <Route path='/' element={<HomePage />} />
              <Route path='/projects' element={<Projects />} />
              <Route path='/projects/:id' element={<Projects />} />
              <Route path='/experienceskills' element={<ExperienceSkills />} />
              <Route path='/contact' element={<Contact />} />
            </Routes>
            <Footer />
          </BrowserRouter>
        </div>
      </header>

      <main>
        
      </main>
    </>
  )
}

export default App
