import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { useState } from 'react'
import './App.css'
import HomePage from './pages/HomePage';
import Projects from './pages/Projects';

function App() {
  // let {id} = useParams();
  return (
    <>
      <h1>Zoe McGee's Portfolio</h1>
      <header>
        <div>
          <BrowserRouter>
            {/*  */}
            <div>
              <nav>
                <Link to="/">Home</Link> |{" "}
                {/* <Link to="/projects">Projects</Link> |{" "}
                <Link to="/experienceskills">Experience & Skills</Link> |{" "}
                <Link to="/contact">Contact</Link> | {" "} */}
              </nav>
            </div>

            <div>
            <Routes>
              <Route path='/' component={<HomePage/>} />
              {/* <Route path='/projects/:id' component={<Projects/>} />
              <Route path='/experienceskills' component={<ExperienceSkills/>} />
              <Route path='/' component={<Contact/>} /> */}
            </Routes>
            </div>
          </BrowserRouter>
        </div>
      </header>
    </>
  )
}

export default App
