import React from 'react'
import MyNavbar from '../src/components/Navbar/Navbar'
import Home from '../src/components/Home/Home'
import About from '../src/components/About/About'
import Resume from '../src/components/Resume/Resume'
import Skills from '../src/components/Skills/Skills'
import Works from '../src/components/Works/Works'
import Services from '../src/components/Services/Services'
import Freelance from '../src/components/Freelance/Freelance'
import Contact from '../src/components/Contact/Contact'
import Footer from '../src/components/Footer/Footer'


const Pages = () => {
  return (
    <div>
        <MyNavbar/>
        <Home/>
        <About/>
        <Resume/>
        <Services/>
        <Skills/>
        <Works/>
        <Freelance/>
        <Contact/>
        <Footer/>
    </div>
  )
}

export default Pages
