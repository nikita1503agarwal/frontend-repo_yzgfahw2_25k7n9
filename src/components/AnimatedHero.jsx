import React from 'react';
import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function AnimatedHero() {
  return (
    <section id="home" className="relative w-full">
      <div className="relative h-[76vh] md:h-[86vh] w-full">
        <Spline
          scene="https://prod.spline.design/4Zh-Q6DWWp5yPnQf/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/50 via-black/10 to-background/95" />

        <div className="absolute inset-0 flex items-center justify-center px-6">
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl"
          >
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-fuchsia-400 via-sky-400 to-emerald-400 bg-clip-text text-transparent drop-shadow-sm">
              Rohit • SAP ABAP Developer
            </h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="mt-3 text-base md:text-lg text-white/90"
            >
              <span className="text-sky-300 font-semibold">ABAP</span> |{' '}
              <span className="text-emerald-300 font-semibold">OData & Integrations</span> |{' '}
              <span className="text-fuchsia-300 font-semibold">AI/LLM</span>
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.6 }}
              className="mt-6 flex items-center justify-center gap-3"
            >
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-sky-400 to-emerald-400 text-gray-900 px-4 py-2 font-semibold shadow hover:brightness-110 transition"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-lg border border-white/40 text-white px-4 py-2 font-semibold hover:bg-white/10"
              >
                Contact Me
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
