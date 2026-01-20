"use client";

import React from "react";
import Image from "next/image";

export default function Projects() {
    const projects = [
        {
            title: "E-Commerce Platform",
            description: "A full-featured online store with payment processing and dashboard.",
            tech: ["Next.js", "Stripe", "PostgreSQL"],
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBYYXIYXqs1Cn8PNCMcssxWMRo6mAbAU-Hs0bCGyPJ9YkymvKoMqFQ2m7LzrT690xTVzPoUo7pk8Ri4GHzjOA9ZbBPLquU-EMcDQ6kiHva6v99kYCXjSPyohxFMXh-l6KLmrkPcy6-3KSDPz2c4Gs6loHerKX9Mas2OZsNqrumzl6vOlWkjgdrKl_E8ONDa2Wvl2baW6cO-TdAaFNFhwZEPQmHXikM--e0g4UhHd5JOqze1DPNe-xxk4FZJMYloZMVXbxp6NJPJhGg"
        },
        {
            title: "Task Management App",
            description: "Collaborative project management tool with real-time updates.",
            tech: ["React", "Firebase", "Tailwind"],
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBYYXIYXqs1Cn8PNCMcssxWMRo6mAbAU-Hs0bCGyPJ9YkymvKoMqFQ2m7LzrT690xTVzPoUo7pk8Ri4GHzjOA9ZbBPLquU-EMcDQ6kiHva6v99kYCXjSPyohxFMXh-l6KLmrkPcy6-3KSDPz2c4Gs6loHerKX9Mas2OZsNqrumzl6vOlWkjgdrKl_E8ONDa2Wvl2baW6cO-TdAaFNFhwZEPQmHXikM--e0g4UhHd5JOqze1DPNe-xxk4FZJMYloZMVXbxp6NJPJhGg"
        },
        {
            title: "AI Dashboard",
            description: "Analytics dashboard powered by machine learning algorithms.",
            tech: ["Python", "Next.js", "Chart.js"],
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBYYXIYXqs1Cn8PNCMcssxWMRo6mAbAU-Hs0bCGyPJ9YkymvKoMqFQ2m7LzrT690xTVzPoUo7pk8Ri4GHzjOA9ZbBPLquU-EMcDQ6kiHva6v99kYCXjSPyohxFMXh-l6KLmrkPcy6-3KSDPz2c4Gs6loHerKX9Mas2OZsNqrumzl6vOlWkjgdrKl_E8ONDa2Wvl2baW6cO-TdAaFNFhwZEPQmHXikM--e0g4UhHd5JOqze1DPNe-xxk4FZJMYloZMVXbxp6NJPJhGg"
        }
    ];

    return (
        <main className="min-h-screen pt-24 px-4 pb-12">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-4xl font-extrabold mb-8 text-slate-900 dark:text-white">Featured Projects</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <div key={index} className="group relative rounded-3xl overflow-hidden bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 hover:border-primary/50 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/10">
                            <div className="aspect-video relative overflow-hidden bg-slate-100 dark:bg-black/20">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                                    unoptimized
                                />
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold mb-2 text-slate-900 dark:text-white group-hover:text-primary transition-colors">{project.title}</h3>
                                <p className="text-slate-600 dark:text-slate-400 mb-4 line-clamp-2">{project.description}</p>
                                <div className="flex flex-wrap gap-2">
                                    {project.tech.map((t) => (
                                        <span key={t} className="px-3 py-1 text-xs font-bold rounded-full bg-slate-100 dark:bg-white/10 text-slate-700 dark:text-slate-300">
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
}
