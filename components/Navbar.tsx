
import React, { useState, useEffect } from 'react';
import { NAV_LINKS } from '../constants';
import ThemeToggle from './ThemeToggle';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-secondary/80 backdrop-blur-sm shadow-lg' : 'bg-transparent'}`}>
      <div className="container mx-auto flex items-center justify-between p-4">
        <div className="text-2xl font-bold text-accent font-mono transition-transform duration-300 hover:scale-105">
          <a href="#home">MS</a>
        </div>
        <nav className="hidden md:flex items-center space-x-6">
          {NAV_LINKS.map((link, index) => (
            <a key={link.name} href={link.href} className="font-mono text-slate-light hover:text-accent transition-colors duration-300 text-sm">
               {link.name}
            </a>
          ))}
           <a href="/assets/pdf.pdf" target="_blank" rel="noopener noreferrer" className="font-mono text-sm text-accent border border-accent rounded px-4 py-2 hover:bg-accent/10 transition-colors duration-300">
            Resume
          </a>
          <ThemeToggle />
        </nav>
        <div className="md:hidden flex items-center">
          <ThemeToggle />
          <button onClick={toggleMenu} className="text-accent focus:outline-none z-50 ml-2">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
              )}
            </svg>
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <div className={`fixed inset-0 bg-primary/95 backdrop-blur-sm transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out md:hidden z-40`}>
        <div className="flex flex-col items-center justify-center h-full">
            <nav className="flex flex-col items-center space-y-8">
            {NAV_LINKS.map((link, index) => (
                <a key={link.name} href={link.href} onClick={toggleMenu} className="font-mono text-2xl text-slate-light hover:text-accent transition-colors duration-300">
                 {link.name}
                </a>
            ))}
            </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;