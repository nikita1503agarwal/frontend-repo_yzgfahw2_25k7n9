import React from 'react';
import { motion } from 'framer-motion';

const timeline = [
  {
    company: 'TechNova Consulting',
    role: 'ABAP Developer',
    period: '2023 — Present',
    details: [
      'Delivered RICEF objects across SD/MM',
      'Optimized critical reports using SQL/HANA',
      'Built REST/OData integrations for mobile apps',
    ],
  },
  {
    company: 'Internship',
    role: 'Developer Intern',
    period: '2022 — 2023',
    details: [
      'Learned ABAP fundamentals and best practices',
      'Contributed to internal tooling with JavaScript',
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-16 md:py-24 bg-muted/30">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <h2 className="text-2xl md:text-3xl font-bold">Experience</h2>
          <p className="mt-2 text-muted-foreground">A quick snapshot of my journey.</p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-1/2 -ml-px h-full w-px bg-border" />
          <div className="space-y-10">
            {timeline.map((item, idx) => (
              <motion.div
                key={item.company}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className={`grid grid-cols-1 md:grid-cols-2 gap-6 items-start ${idx % 2 === 0 ? '' : 'md:[&>*:first-child]:order-2'}`}
              >
                <div className="md:text-right">
                  <div className="text-sm text-muted-foreground">{item.period}</div>
                  <div className="text-lg font-semibold">{item.company}</div>
                </div>
                <div className="rounded-xl border bg-card p-5">
                  <div className="font-medium">{item.role}</div>
                  <ul className="mt-2 list-disc pl-5 text-sm text-muted-foreground space-y-1">
                    {item.details.map((d) => (
                      <li key={d}>{d}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
