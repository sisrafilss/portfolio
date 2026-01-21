"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

interface ProjectCardProps {
    title: string;
    description: string;
    tags: string[];
    image: string;
    liveLink: string;
    repoLink: string;
    detailLink: string;
    index: number;
}

function ProjectCard({
    title,
    description,
    tags,
    image,
    liveLink,
    repoLink,
    detailLink,
    index,
}: ProjectCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group relative bg-white dark:bg-white/5 rounded-3xl overflow-hidden border border-slate-200 dark:border-white/10 hover:border-primary/50 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/5 flex flex-col h-full"
        >
            <div className="aspect-video relative overflow-hidden bg-slate-100 dark:bg-black/20">
                <Image
                    src={image}
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
                        <span className="material-symbols-outlined text-lg">visibility</span>
                        Live Demo
                    </motion.a>
                    <motion.a
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        href={repoLink}
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
                    {description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                    {tags.map((tag) => (
                        <span
                            key={tag}
                            className="px-3 py-1 text-xs font-bold rounded-full bg-slate-100 dark:bg-white/10 text-slate-700 dark:text-slate-300"
                        >
                            {tag}
                        </span>
                    ))}
                </div>

                <Link
                    href={detailLink}
                    className="inline-flex items-center justify-center w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-white/10 text-slate-600 dark:text-slate-300 font-semibold text-sm hover:bg-slate-50 dark:hover:bg-white/5 transition-colors group/btn"
                >
                    View Case Study
                    <span className="material-symbols-outlined ml-2 text-lg group-hover/btn:translate-x-1 transition-transform">
                        arrow_forward
                    </span>
                </Link>
            </div>
        </motion.div>
    );
}

export function ProjectsSection() {
    const projects = [
        {
            title: "Local Guide",
            description: "A platform connecting travelers with local guides. Features comprehensive guides and real-time interactions.",
            tags: ["React", "Node.js", "Express", "MongoDB"],
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBYYXIYXqs1Cn8PNCMcssxWMRo6mAbAU-Hs0bCGyPJ9YkymvKoMqFQ2m7LzrT690xTVzPoUo7pk8Ri4GHzjOA9ZbBPLquU-EMcDQ6kiHva6v99kYCXjSPyohxFMXh-l6KLmrkPcy6-3KSDPz2c4Gs6loHerKX9Mas2OZsNqrumzl6vOlWkjgdrKl_E8ONDa2Wvl2baW6cO-TdAaFNFhwZEPQmHXikM--e0g4UhHd5JOqze1DPNe-xxk4FZJMYloZMVXbxp6NJPJhGg",
            liveLink: "https://local-guide-frontend-alpha.vercel.app/",
            repoLink: "https://github.com/sisrafilss/local-guide-frontend",
            detailLink: "/projects#localguide"
        },
        {
            title: "Delivraze Parcel Delivery",
            description: "Efficient parcel delivery management system streamlining logistics for both users and administrators.",
            tags: ["React", "Express", "MongoDB"],
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBYYXIYXqs1Cn8PNCMcssxWMRo6mAbAU-Hs0bCGyPJ9YkymvKoMqFQ2m7LzrT690xTVzPoUo7pk8Ri4GHzjOA9ZbBPLquU-EMcDQ6kiHva6v99kYCXjSPyohxFMXh-l6KLmrkPcy6-3KSDPz2c4Gs6loHerKX9Mas2OZsNqrumzl6vOlWkjgdrKl_E8ONDa2Wvl2baW6cO-TdAaFNFhwZEPQmHXikM--e0g4UhHd5JOqze1DPNe-xxk4FZJMYloZMVXbxp6NJPJhGg",
            liveLink: "https://delivraze-percel-delivery-frontend.vercel.app/",
            repoLink: "https://github.com/sisrafilss/Delivraze-percel-delivery-frontend/",
            detailLink: "/projects#delivraze"
        }
    ];

    return (
        <section id="projects" className="py-24 px-4 bg-slate-50/50 dark:bg-white/[0.02]">
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
                            A selection of my best work, demonstrating my ability to ship high-quality products.
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
                            <span className="material-symbols-outlined ml-2">arrow_right_alt</span>
                        </Link>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <ProjectCard key={project.title} {...project} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}
