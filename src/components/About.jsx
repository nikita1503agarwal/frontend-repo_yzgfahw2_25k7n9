import React from 'react';
import { User, BadgeCheck } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="relative py-16 md:py-24 bg-background text-foreground">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex items-center gap-3 mb-6">
          <User className="text-primary" />
          <h2 className="text-2xl md:text-3xl font-bold">About Rohit</h2>
        </div>
        <p className="text-muted-foreground leading-relaxed">
          I am a SAP ABAP developer with 1 year of hands-on experience building reports, interfaces, conversions, enhancements and forms (RICEF). I focus on clean, performant code and collaborative delivery with functional teams. I love solving real business problems and continuously explore AI-assisted development and modern integration patterns.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
          {[
            { title: 'ABAP', desc: 'Reports, ALV, BAPIs, BADIs, Enhancements' },
            { title: 'AI', desc: 'Prompting, code assist, automation ideas' },
            { title: 'JavaScript & SQL', desc: 'Integration and data manipulation' },
          ].map((item) => (
            <div key={item.title} className="rounded-xl border bg-card p-5">
              <div className="flex items-center gap-2 font-semibold">
                <BadgeCheck className="text-primary" size={18} /> {item.title}
              </div>
              <p className="mt-2 text-sm text-muted-foreground">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
