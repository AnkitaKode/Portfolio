import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import AnimatedBackground from './components/AnimatedBackground';
import './App.css';

export default function App() {
  useEffect(() => {
    // Smooth scrolling for anchor links
    const links = document.querySelectorAll('a[href^="#"]');
    
    const handleClick = (e) => {
      e.preventDefault();
      const target = document.querySelector(e.target.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    };

    links.forEach(link => {
      link.addEventListener('click', handleClick);
    });

    return () => {
      links.forEach(link => {
        link.removeEventListener('click', handleClick);
      });
    };
  }, []);

  return (
    <div className="bg-gradient-to-br from-gray-900 via-gray-900 to-gray-900/60 min-h-screen font-inter relative overflow-hidden">
      <AnimatedBackground />
      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}
