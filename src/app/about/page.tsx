"use client";

import React from "react";

export default function About() {
    return (
        <main className="min-h-screen pt-24 px-4 pb-12">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl font-extrabold mb-8 text-slate-900 dark:text-white">About Me</h1>
                <div className="prose prose-lg dark:prose-invert">
                    <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed mb-6">
                        I'm a passionate Full Stack Developer with over 5 years of experience building modern web applications.
                        I specialize in the MERN stack and love exploring new technologies to solve real-world problems.
                    </p>
                    <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed mb-8">
                        When I'm not coding, you can find me contributing to open-source projects, writing tech blogs,
                        or exploring the outdoors. I believe in continuous learning and sharing knowledge with the community.
                    </p>

                    <h2 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white">Experience</h2>
                    <div className="space-y-6">
                        <div className="p-6 rounded-2xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10">
                            <h3 className="font-bold text-lg text-slate-900 dark:text-white">Senior Frontend Engineer</h3>
                            <p className="text-primary font-medium text-sm mb-2">Tech Corp • 2021 - Present</p>
                            <p className="text-slate-600 dark:text-slate-400">Leading the frontend migration to Next.js and establishing the design system.</p>
                        </div>
                        <div className="p-6 rounded-2xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10">
                            <h3 className="font-bold text-lg text-slate-900 dark:text-white">Full Stack Developer</h3>
                            <p className="text-primary font-medium text-sm mb-2">Creative Agency • 2019 - 2021</p>
                            <p className="text-slate-600 dark:text-slate-400">Developed custom e-commerce solutions and interactive landing pages for high-profile clients.</p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
