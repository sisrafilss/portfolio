"use client";

import React from "react";
import Image from "next/image";

export function Hero() {
    return (
        <main className="relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute top-[-10%] right-[-20%] w-72 h-72 bg-primary/20 blur-[100px] rounded-full pointer-events-none"></div>
            <div className="absolute bottom-[-10%] left-[-10%] w-64 h-64 bg-primary/10 blur-[80px] rounded-full pointer-events-none"></div>

            <div className="@container max-w-7xl mx-auto px-4 py-8 @[480px]:py-16">
                <div className="flex flex-col items-center gap-8 text-center">
                    {/* Visual Element / Profile */}
                    <div className="relative">
                        <div className="size-48 @[480px]:size-64 rounded-full border-4 border-primary/30 p-2 neon-glow">
                            <div className="w-full h-full rounded-full overflow-hidden bg-background-dark/20 dark:bg-white/5 relative">
                                <Image
                                    alt="Professional Portrait of a Developer"
                                    src="/hero-image.jpg"
                                    fill
                                    className="object-cover hover:scale-105 transition-all duration-500"
                                />
                            </div>
                        </div>
                        <div className="absolute bottom-4 right-4 bg-primary text-background-dark size-10 rounded-full flex items-center justify-center border-4 border-background-light dark:border-background-dark">
                            <span className="material-symbols-outlined text-xl font-bold">
                                code
                            </span>
                        </div>
                    </div>

                    {/* Text Content */}
                    <div className="flex flex-col gap-4 max-w-2xl">
                        <div className="inline-flex items-center justify-center self-center px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold tracking-widest uppercase">
                            Available for projects
                        </div>
                        <h1 className="text-4xl font-extrabold leading-tight tracking-[-0.033em] @[480px]:text-6xl text-slate-900 dark:text-white">
                            Full Stack <span className="text-primary">MERN</span> Developer
                        </h1>
                        <p className="text-slate-600 dark:text-slate-400 text-base @[480px]:text-lg leading-relaxed px-2">
                            Building scalable web applications with Next.js, React, Express, and
                            modern databases. I turn complex problems into elegant, user-centric
                            solutions.
                        </p>
                    </div>

                    {/* Skills Chips */}
                    <div className="flex gap-2 flex-wrap justify-center max-w-md">
                        {[
                            { name: "Next.js", icon: "check_circle" },
                            { name: "React", icon: "atm" },
                            { name: "Express", icon: "data_object" },
                            { name: "MongoDB", icon: "database" },
                        ].map((skill) => (
                            <div
                                key={skill.name}
                                className="flex h-9 items-center justify-center gap-x-2 rounded-full bg-slate-200 dark:bg-white/5 border border-slate-300/50 dark:border-white/10 pl-2 pr-4"
                            >
                                <span className="material-symbols-outlined text-primary text-lg">
                                    {skill.icon}
                                </span>
                                <p className="text-sm font-semibold">{skill.name}</p>
                            </div>
                        ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-col @[480px]:flex-row gap-4 w-full @[480px]:w-auto px-4">
                        <a
                            href="/projects"
                            className="flex min-w-[200px] cursor-pointer items-center justify-center rounded-full h-14 px-8 bg-primary text-background-dark text-base font-extrabold shadow-lg shadow-primary/20 active:scale-95 transition-transform hover:brightness-110"
                        >
                            <span>View My Work</span>
                            <span className="material-symbols-outlined ml-2">
                                arrow_forward
                            </span>
                        </a>
                        <a
                            href="/contact"
                            className="flex min-w-[200px] cursor-pointer items-center justify-center rounded-full h-14 px-8 border-2 border-slate-300 dark:border-white/10 text-slate-900 dark:text-white text-base font-extrabold hover:bg-slate-100 dark:hover:bg-white/5 active:scale-95 transition-transform"
                        >
                            <span>Get In Touch</span>
                        </a>
                    </div>

                    {/* Social Actions Bar */}
                    <div className="pt-8 w-full">
                        <div className="flex justify-center gap-6 max-w-md mx-auto">
                            {[
                                { name: "GitHub", icon: "hub", url: "https://github.com/sisrafilss/" },
                                { name: "LinkedIn", icon: "work", url: "https://www.linkedin.com/in/sisrafilss/" },
                                { name: "Facebook", icon: "facebook", url: "https://www.facebook.com/sisrafilss/" },
                            ].map((social) => (
                                <a
                                    key={social.name}
                                    className="flex flex-col items-center gap-2 group"
                                    href={social.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <div className="rounded-full bg-slate-200 dark:bg-white/5 p-3 group-hover:text-primary group-hover:bg-primary/10 transition-colors">
                                        <span className="material-symbols-outlined">
                                            {social.icon}
                                        </span>
                                    </div>
                                    <p className="text-xs font-bold opacity-70">{social.name}</p>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
