import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'SAP–AI Integration Project',
    tag: ['ABAP', 'REST APIs', 'Oracle AI'],
    desc: 'Integrated Oracle AI/ChatGPT with SAP to automate report generation and validation.',
    details: {
      problem: 'Manual report generation and validation was time-consuming and error-prone.',
      solution: 'Built ABAP services calling AI endpoints to summarize and validate data.',
      tech: 'ABAP, REST, JSON, Oracle AI',
      achievements: 'Reduced turnaround time by 60% and improved data accuracy.',
      link: '#',
    },
  },
  {
    title: 'Custom OData Service Development',
    tag: ['ABAP', 'OData', 'JSON'],
    desc: 'Developed RESTful OData services for SAP data exposure with mobile integration.',
    details: {
      problem: 'Limited accessibility of SAP data for external apps.',
      solution: 'Designed and implemented OData services with proper authorizations.',
      tech: 'ABAP, SAP Gateway, OData',
      achievements: 'Enabled mobile app usage by 200+ users.',
      link: '#',
    },
  },
  {
    title: 'SQL Performance Optimization',
    tag: ['ABAP', 'SQL', 'HANA'],
    desc: 'Optimized database queries in SAP reports to reduce runtime significantly.',
    details: {
      problem: 'Reports running for minutes affecting productivity.',
      solution: 'Refactored SELECTs, added indexes, leveraged HANA features.',
      tech: 'ABAP, Open SQL, HANA',
      achievements: 'Cut processing time by 70%.',
      link: '#',
    },
  },
];

export default function ProjectsAdvanced() {
  const [open, setOpen] = React.useState(null);
  return (
    <section id="projects" className="py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <h2 className="text-2xl md:text-3xl font-extrabold bg-gradient-to-r from-sky-400 via-fuchsia-400 to-emerald-400 bg-clip-text text-transparent">
            Case Studies
          </h2>
          <p className="mt-2 text-sm md:text-base text-muted-foreground">
            Selected projects with <span className="text-emerald-500 font-medium">outcomes</span> and <span className="text-sky-500 font-medium">approaches</span>.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((p, idx) => (
            <motion.article
              key={p.title}
              className="group rounded-xl border bg-card/60 backdrop-blur p-6 hover:shadow-xl transition"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
            >
              <div className="text-lg font-semibold text-foreground">
                {p.title}
              </div>
              <div className="mt-2 flex flex-wrap gap-2 text-xs">
                {p.tag.map((t, i) => (
                  <span
                    key={t}
                    className={
                      'rounded-full px-2 py-0.5 text-gray-900 font-medium ' +
                      (i === 0
                        ? 'bg-gradient-to-r from-sky-400 to-cyan-300'
                        : i === 1
                        ? 'bg-gradient-to-r from-fuchsia-400 to-pink-300'
                        : 'bg-gradient-to-r from-emerald-400 to-lime-300')
                    }
                  >
                    {t}
                  </span>
                ))}
              </div>
              <p className="mt-3 text-sm text-muted-foreground">{p.desc}</p>
              <button
                onClick={() => setOpen(open === idx ? null : idx)}
                className="mt-4 text-sm font-semibold text-sky-400 hover:text-sky-300 hover:underline"
              >
                {open === idx ? 'Hide Details' : 'View Details'}
              </button>

              {open === idx && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  transition={{ duration: 0.35 }}
                  className="mt-4 space-y-2 text-sm"
                >
                  <div>
                    <span className="font-semibold text-fuchsia-400">Problem:</span>{' '}
                    <span className="text-foreground/90">{p.details.problem}</span>
                  </div>
                  <div>
                    <span className="font-semibold text-emerald-400">Solution:</span>{' '}
                    <span className="text-foreground/90">{p.details.solution}</span>
                  </div>
                  <div>
                    <span className="font-semibold text-sky-400">Tech:</span>{' '}
                    <span className="text-foreground/90">{p.details.tech}</span>
                  </div>
                  <div>
                    <span className="font-semibold text-yellow-400">Key Results:</span>{' '}
                    <span className="text-foreground/90">{p.details.achievements}</span>
                  </div>
                  <a
                    className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-fuchsia-400 to-emerald-400 font-semibold hover:opacity-80"
                    href={p.details.link}
                    target="_blank"
                    rel="noreferrer"
                  >
                    GitHub / Demo →
                  </a>
                </motion.div>
              )}
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
