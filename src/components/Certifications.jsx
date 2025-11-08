import React from 'react';
import { motion } from 'framer-motion';
import { BadgeCheck } from 'lucide-react';

const items = [
  {
    name: 'Oracle AI Certification',
    org: 'Oracle',
    date: '2024',
    credential: 'ID-ORCL-AI-12345',
    link: '#',
  },
  {
    name: 'SAP Certified Development Associate - ABAP',
    org: 'SAP',
    date: '2023',
    credential: 'SAP-ABAP-98765',
    link: '#',
  },
  {
    name: 'REST API Design',
    org: 'Coursera',
    date: '2022',
    credential: 'CRS-REST-54321',
    link: '#',
  },
];

export default function Certifications() {
  return (
    <section id="certifications" className="py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <h2 className="text-2xl md:text-3xl font-bold">Certifications</h2>
          <p className="mt-2 text-muted-foreground">Key credentials that validate my expertise.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map((c, idx) => (
            <motion.a
              key={c.name}
              href={c.link}
              target="_blank"
              rel="noreferrer"
              className="rounded-xl border bg-card p-6 hover:shadow-xl transition will-change-transform"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
            >
              <div className="flex items-center gap-2 text-primary mb-2">
                <BadgeCheck size={18} /> Verified Certification
              </div>
              <div className="font-semibold">{c.name}</div>
              <div className="mt-1 text-sm text-muted-foreground">{c.org} • {c.date}</div>
              <div className="mt-3 text-xs text-muted-foreground">Credential: {c.credential}</div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
