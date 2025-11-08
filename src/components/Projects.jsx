import React from 'react';
import { Code, Database, Puzzle } from 'lucide-react';

const projects = [
  {
    title: 'Sales Report Automation',
    tag: 'ABAP',
    description:
      'Automated monthly sales report using ALV with performance optimizations and smart filtering. Reduced manual effort by 80%.',
  },
  {
    title: 'AI-assisted Code Review',
    tag: 'AI',
    description:
      'Experimented with AI prompts to generate test data and catch syntax/performance issues in ABAP routines.',
  },
  {
    title: 'JS + OData Integration',
    tag: 'Integration',
    description:
      'Built a lightweight JS front-end that consumes SAP OData services and persists data via SQL views.',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-16 md:py-24 bg-muted/30">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex items-center gap-3 mb-6">
          <Puzzle className="text-primary" />
          <h2 className="text-2xl md:text-3xl font-bold">Highlighted Work</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((p) => (
            <article key={p.title} className="group rounded-xl border bg-card p-6 transition hover:shadow-lg">
              <div className="mb-3 inline-flex items-center gap-2 text-xs font-medium text-primary/90">
                <Code size={16} /> {p.tag}
              </div>
              <h3 className="text-lg font-semibold">{p.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{p.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
