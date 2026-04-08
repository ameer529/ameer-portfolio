import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { FaArrowUp } from 'react-icons/fa';

function App() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 400);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <div className="min-h-screen bg-[#0f0f0f] text-gray-200">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Contact />
      <Footer />

      {/* Scroll to top */}
      {showTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 w-11 h-11 bg-rose-600 hover:bg-rose-700 text-white rounded-full flex items-center justify-center shadow-lg shadow-rose-500/30 transition-all duration-200 hover:-translate-y-1 z-50"
          aria-label="Scroll to top"
        >
          <FaArrowUp />
        </button>
      )}
    </div>
  );
}

export default App;
