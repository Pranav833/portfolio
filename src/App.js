import React from 'react';
import "./App.css";
import Header from './components/header/Header';
import Home from './components/home/Home';
import Skills from './components/skills/Skills';
import Footer from './components/footer/Footer';
import Education from './components/education/Education';
import Experience from './components/experience/Experience';
import Project from "./components/projects/Project";
import Achievements from './components/achievements/Achievements';
import Certification from './components/certifications/Certifications';
import Contact from './components/contact/Contact';
const App = () => {
    return (
        <>
            <Header />
            <main className='main'>
                <Home />
                <Skills />
                <Education />
                <Experience />
                <Project />
                <Achievements />
                <Certification />
                <Contact />

            </main>
            <Footer />


        </>
    )
}

export default App