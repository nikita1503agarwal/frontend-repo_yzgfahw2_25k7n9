import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="pt-14">
        <Hero />
        <About />
        <Projects />
        <Contact />
        <footer className="py-10 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Rohit • SAP ABAP Developer
        </footer>
      </main>
    </div>
  );
}

export default App;
