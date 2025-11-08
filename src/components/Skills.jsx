import React from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { Database, Code2, Network, Brain } from 'lucide-react';

const skills = [
  { label: 'ABAP', value: 90, icon: Code2 },
  { label: 'SQL', value: 85, icon: Database },
  { label: 'JavaScript', value: 75, icon: Code2 },
  { label: 'API Development', value: 80, icon: Network },
  { label: 'AI/ML Integration', value: 70, icon: Brain },
];

function SkillBar({ label, value, Icon }) {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const controls = useAnimation();

  React.useEffect(() => {
    if (isInView) controls.start({ width: `${value}%` });
  }, [isInView, controls, value]);

  return (
    <div className="space-y-2" ref={ref}>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 text-sm font-medium">
          <Icon size={16} className="text-primary" /> {label}
        </div>
        <span className="text-xs text-muted-foreground">{value}%</span>
      </div>
      <div className="h-2 w-full rounded-full bg-muted">
        <motion.div
          initial={{ width: 0 }}
          animate={controls}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          className="h-full rounded-full bg-primary"
        />
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="py-16 md:py-24 bg-muted/20">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <h2 className="text-2xl md:text-3xl font-bold">Core Skills</h2>
          <p className="mt-2 text-muted-foreground">
            A blend of SAP ABAP depth and modern integration/AI capabilities.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-5">
            {skills.map((s) => (
              <SkillBar key={s.label} label={s.label} value={s.value} Icon={s.icon} />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="rounded-2xl border bg-card p-6"
          >
            <h3 className="font-semibold">Tools & Technologies</h3>
            <ul className="mt-3 grid grid-cols-2 gap-3 text-sm text-muted-foreground">
              <li>SAP GUI, Eclipse (ADT)</li>
              <li>SAP HANA</li>
              <li>Git/Version Control</li>
              <li>Postman</li>
              <li>Oracle Cloud</li>
              <li>AI Tools (ChatGPT, Claude)</li>
            </ul>
            <div className="mt-6 text-xs text-muted-foreground">
              SAP Modules: SD, MM, FICO and more.
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
