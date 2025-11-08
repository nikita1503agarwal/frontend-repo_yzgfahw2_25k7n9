import React from 'react';
import Navbar from './components/Navbar';
import AnimatedHero from './components/AnimatedHero';
import ProjectsAdvanced from './components/ProjectsAdvanced';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="pt-14">
        <AnimatedHero />
        <ProjectsAdvanced />
        <Contact />
        <footer className="py-10 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Rohit • SAP ABAP Developer
        </footer>
      </main>
    </div>
  );
}

export default App;
