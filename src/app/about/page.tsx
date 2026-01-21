"use client";

import React from "react";
import { motion } from "framer-motion";

export default function About() {
    return (
        <main className="min-h-screen pt-24 px-4 pb-12">
            <div className="max-w-4xl mx-auto">
                <motion.h1
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-4xl font-extrabold mb-8 text-slate-900 dark:text-white"
                >
                    About Me
                </motion.h1>
                <div className="prose prose-lg dark:prose-invert">
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed mb-6"
                    >
                        I'm a passionate Full Stack Developer with over 5 years of experience building modern web applications.
                        I specialize in the MERN stack and love exploring new technologies to solve real-world problems.
                    </motion.p>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.5 }}
                        className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed mb-8"
                    >
                        When I'm not coding, you can find me contributing to open-source projects, writing tech blogs,
                        or exploring the outdoors. I believe in continuous learning and sharing knowledge with the community.
                    </motion.p>

                    <motion.h2
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4, duration: 0.5 }}
                        className="text-2xl font-bold mb-4 text-slate-900 dark:text-white"
                    >
                        Experience
                    </motion.h2>
                    <div className="space-y-6">
                        {[
                            { title: "Senior Frontend Engineer", company: "Tech Corp • 2021 - Present", desc: "Leading the frontend migration to Next.js and establishing the design system." },
                            { title: "Full Stack Developer", company: "Creative Agency • 2019 - 2021", desc: "Developed custom e-commerce solutions and interactive landing pages for high-profile clients." }
                        ].map((job, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
                                whileHover={{ scale: 1.02 }}
                                className="p-6 rounded-2xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 shadow-sm hover:shadow-md transition-all"
                            >
                                <h3 className="font-bold text-lg text-slate-900 dark:text-white">{job.title}</h3>
                                <p className="text-primary font-medium text-sm mb-2">{job.company}</p>
                                <p className="text-slate-600 dark:text-slate-400">{job.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </main>
    );
}
