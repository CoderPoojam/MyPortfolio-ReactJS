import React from 'react'
import {Route, Routes} from "react-router-dom"
import About from '../AboutPage/About'
import Contact from '../ContactPage/Contact'
import Home from '../../Home/Home';
import Projects from '../ProjectsPage/Projects'
import Certificate from '../Certifications/Certificate';
import MySkills from '../Skills/MySkills';


export default function Navbar() {
 
  return (
    <>
     <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/projects" element={<Projects/>}/>
        <Route path="/certificate" element={<Certificate/>}/>
        <Route path="/skills" element={<MySkills/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
     </Routes>
    </>
  )
}
