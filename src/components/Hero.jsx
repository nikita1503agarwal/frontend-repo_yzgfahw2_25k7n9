import React from 'react';
import Spline from '@splinetool/react-spline';
import { Mail, Download } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative w-full">
      <div className="relative h-[72vh] md:h-[82vh] w-full">
        <Spline
          scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-black/10 to-white/95" />

        <div className="absolute inset-0 flex items-center justify-center px-6">
          <div className="pointer-events-none text-center max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white drop-shadow-sm">
              Rohit — SAP ABAP Developer
            </h1>
            <p className="mt-4 text-base md:text-lg text-white/85">
              1 year crafting robust ABAP programs, enhancements and reports. Exploring AI-driven tooling and integrating with JavaScript & SQL.
            </p>
            <div className="pointer-events-auto mt-6 flex items-center justify-center gap-3">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-lg bg-white/90 text-gray-900 px-4 py-2 font-medium shadow hover:bg-white"
              >
                <Mail size={18} /> Contact Me
              </a>
              <a
                href="#resume"
                className="inline-flex items-center gap-2 rounded-lg border border-white/40 text-white px-4 py-2 font-medium hover:bg-white/10"
              >
                <Download size={18} /> Download CV
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
