import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackgroundEffect from './components/BackgroundEffect';
import { ThemeProvider } from './contexts/ThemeContext';
import ScrollToTopButton from './components/ScrollToTopButton';
import ChatAssistant from './components/ChatAssistant';

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <div className="bg-primary text-slate-light font-sans leading-relaxed antialiased selection:bg-accent selection:text-primary overflow-x-hidden">
        <BackgroundEffect />
        <div className="relative z-10">
          <Navbar />
          <main className="container mx-auto px-6 md:px-12 lg:px-24">
            <Home />
            <About />
            <Experience />
            <Skills />
            <Projects />
            <Contact />
          </main>
          <Footer />
          <ScrollToTopButton />
          <ChatAssistant />
        </div>
      </div>
    </ThemeProvider>
  );
};

export default App;