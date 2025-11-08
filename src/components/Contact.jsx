import React from 'react';
import { Mail, Linkedin, Github } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex items-center gap-3 mb-6">
          <Mail className="text-primary" />
          <h2 className="text-2xl md:text-3xl font-bold">Get in touch</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <a
            href="mailto:rohit@example.com"
            className="rounded-xl border bg-card p-5 hover:shadow-lg transition"
          >
            <div className="font-semibold">Email</div>
            <div className="mt-1 text-sm text-muted-foreground">rohit@example.com</div>
          </a>
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noreferrer"
            className="rounded-xl border bg-card p-5 hover:shadow-lg transition"
          >
            <div className="flex items-center gap-2 font-semibold">
              <Linkedin size={18} /> LinkedIn
            </div>
            <div className="mt-1 text-sm text-muted-foreground">Connect professionally</div>
          </a>
          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            className="rounded-xl border bg-card p-5 hover:shadow-lg transition"
          >
            <div className="flex items-center gap-2 font-semibold">
              <Github size={18} /> GitHub
            </div>
            <div className="mt-1 text-sm text-muted-foreground">View code and experiments</div>
          </a>
        </div>
      </div>
    </section>
  );
}
