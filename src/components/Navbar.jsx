import React from 'react';

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/70 border-b">
      <nav className="mx-auto max-w-6xl px-6 h-14 flex items-center justify-between">
        <a href="#home" className="font-extrabold tracking-tight">ROHIT</a>
        <div className="hidden md:flex items-center gap-6 text-sm">
          <a href="#about" className="hover:text-primary">About</a>
          <a href="#projects" className="hover:text-primary">Projects</a>
          <a href="#contact" className="hover:text-primary">Contact</a>
        </div>
        <a href="#contact" className="inline-flex md:hidden text-sm font-medium px-3 py-1.5 rounded-lg bg-primary text-primary-foreground">Contact</a>
      </nav>
    </header>
  );
}
