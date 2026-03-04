'use client';

import { ProjectsSection } from '@/components/ProjectsSection';
import { motion } from 'framer-motion';

export default function Projects() {
  const projects = [
    {
      id: 'local-guide',
      title: 'Local Guide',
      description:
        'A platform connecting travelers with local guides. Features comprehensive guides and real-time interactions.',
      tech: ['React', 'Node.js', 'Express', 'MongoDB'],
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuBYYXIYXqs1Cn8PNCMcssxWMRo6mAbAU-Hs0bCGyPJ9YkymvKoMqFQ2m7LzrT690xTVzPoUo7pk8Ri4GHzjOA9ZbBPLquU-EMcDQ6kiHva6v99kYCXjSPyohxFMXh-l6KLmrkPcy6-3KSDPz2c4Gs6loHerKX9Mas2OZsNqrumzl6vOlWkjgdrKl_E8ONDa2Wvl2baW6cO-TdAaFNFhwZEPQmHXikM--e0g4UhHd5JOqze1DPNe-xxk4FZJMYloZMVXbxp6NJPJhGg',
    },
    {
      id: 'delivraze-parcel',
      title: 'Delivraze Parcel Delivery',
      description:
        'Efficient parcel delivery management system streamlining logistics for both users and administrators.',
      tech: ['React', 'Express', 'MongoDB'],
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuBYYXIYXqs1Cn8PNCMcssxWMRo6mAbAU-Hs0bCGyPJ9YkymvKoMqFQ2m7LzrT690xTVzPoUo7pk8Ri4GHzjOA9ZbBPLquU-EMcDQ6kiHva6v99kYCXjSPyohxFMXh-l6KLmrkPcy6-3KSDPz2c4Gs6loHerKX9Mas2OZsNqrumzl6vOlWkjgdrKl_E8ONDa2Wvl2baW6cO-TdAaFNFhwZEPQmHXikM--e0g4UhHd5JOqze1DPNe-xxk4FZJMYloZMVXbxp6NJPJhGg',
    },
  ];

  return (
    <main className="min-h-screen pt-24 px-4 pb-12">
      <div className="max-w-7xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-extrabold mb-8 text-slate-900 dark:text-white"
        >
          Projects
        </motion.h1>

        <ProjectsSection />
      </div>
    </main>
  );
}
