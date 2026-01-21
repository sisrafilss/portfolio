"use client";

import React from "react";
import { motion } from "framer-motion";

const skillCategories = [
    {
        title: "Frontend",
        skills: ["React", "Next.js", "Tailwind CSS", "TypeScript", "HTML5", "CSS3"],
        icon: "code_blocks",
    },
    {
        title: "Backend",
        skills: ["Node.js", "Express", "MongoDB", "PostgreSQL", "Firebase", "REST API"],
        icon: "dns",
    },
    {
        title: "Tools & Others",
        skills: ["Git", "Docker", "VS Code", "Figma", "Postman", "Jest"],
        icon: "build",
    },
];

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2
        }
    }
};

const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1 }
};

export function Skills() {
    return (
        <section className="py-20 px-4">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mb-4"
                    >
                        Technical Proficiency
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto"
                    >
                        A comprehensive overview of the technologies and tools I master to build scalable applications.
                    </motion.p>
                </div>

                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-8"
                >
                    {skillCategories.map((category) => (
                        <motion.div
                            key={category.title}
                            variants={item}
                            whileHover={{ y: -5 }}
                            className="bg-slate-50 dark:bg-white/5 rounded-3xl p-8 border border-slate-200 dark:border-white/10 hover:border-primary/50 transition-colors group"
                        >
                            <div className="flex items-center gap-4 mb-8">
                                <div className="size-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                                    <span className="material-symbols-outlined text-2xl">
                                        {category.icon}
                                    </span>
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                                    {category.title}
                                </h3>
                            </div>

                            <div className="flex flex-wrap gap-3">
                                {category.skills.map((skill) => (
                                    <span
                                        key={skill}
                                        className="px-4 py-2 rounded-full text-sm font-semibold bg-white dark:bg-white/10 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-white/5 group-hover:border-primary/20 transition-colors"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
