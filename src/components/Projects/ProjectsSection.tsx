'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import ProjectCard from './ProjectCard';

import { projects } from '../../../projectData';

export function ProjectsSection() {
  return (
    <section
      id="projects"
      className="py-24 px-4 bg-slate-50/50 dark:bg-white/[0.02]"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl"
          >
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mb-4">
              Featured Projects
            </h2>
            <p className="text-slate-600 dark:text-slate-400">
              A selection of my best work, demonstrating my ability to ship
              high-quality products.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Link
              href="/projects"
              className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold hover:opacity-90 transition-opacity whitespace-nowrap"
            >
              See All Projects
              <span className="material-symbols-outlined ml-2">
                arrow_right_alt
              </span>
            </Link>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} {...project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
