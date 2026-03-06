import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Project } from '../../../projectData';

export default function ProjectCard({
  id,
  title,
  shortDescription,
  techStack,
  images,
  liveLink,
  frontendRepo,
  index,
}: Project & { index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative bg-white dark:bg-white/5 rounded-3xl overflow-hidden border border-slate-200 dark:border-white/10 hover:border-primary/50 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/5 flex flex-col h-full"
    >
      <div className="aspect-video relative overflow-hidden bg-slate-100 dark:bg-black/20">
        <Image
          src={images[0]}
          alt={title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          unoptimized
        />
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4 p-4">
          <motion.a
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            href={liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary text-background-dark font-bold hover:brightness-110 transition-all"
          >
            <span className="material-symbols-outlined text-lg">
              visibility
            </span>
            Live Demo
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            href={frontendRepo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-slate-900 font-bold hover:bg-slate-100 transition-all"
          >
            <span className="material-symbols-outlined text-lg">code</span>
            Code
          </motion.a>
        </div>
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="text-slate-600 dark:text-slate-400 mb-6 text-sm flex-grow">
          {shortDescription}
        </p>

        <div className="flex flex-wrap gap-2 mb-6">
          {techStack.map((stack) => (
            <span
              key={stack}
              className="px-3 py-1 text-xs font-bold rounded-full bg-slate-100 dark:bg-white/10 text-slate-700 dark:text-slate-300"
            >
              {stack}
            </span>
          ))}
        </div>

        <Link
          href={`/projects/${id}`}
          className="inline-flex items-center justify-center w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-white/10 text-slate-600 dark:text-slate-300 font-semibold text-sm hover:bg-slate-50 dark:hover:bg-white/5 transition-colors group/btn"
        >
          View Detail
          <span className="material-symbols-outlined ml-2 text-lg group-hover/btn:translate-x-1 transition-transform">
            arrow_forward
          </span>
        </Link>
      </div>
    </motion.div>
  );
}
