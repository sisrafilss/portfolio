import Link from "next/link";
import React from "react";

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-slate-50 dark:bg-black/20 border-t border-slate-200 dark:border-white/5 py-12 px-4">
            <div className="max-w-7xl mx-auto flex flex-col items-center gap-8">
                <div className="flex flex-col md:flex-row items-center justify-between w-full gap-6">
                    <div className="flex items-center gap-2">
                        <div className="bg-primary p-1 rounded-lg flex items-center justify-center">
                            <span className="material-symbols-outlined text-background-dark font-bold text-lg">
                                terminal
                            </span>
                        </div>
                        <span className="font-bold text-lg tracking-tight text-slate-900 dark:text-white">
                            Israfil Hossen
                        </span>
                    </div>

                    <div className="flex gap-8 text-sm font-medium text-slate-600 dark:text-slate-400">
                        <Link href="/" className="hover:text-primary transition-colors">Home</Link>
                        <Link href="/projects" className="hover:text-primary transition-colors">Projects</Link>
                        <Link href="/about" className="hover:text-primary transition-colors">About</Link>
                        <Link href="/contact" className="hover:text-primary transition-colors">Contact</Link>
                    </div>
                </div>

                <div className="w-full h-px bg-slate-200 dark:bg-white/5"></div>

                <div className="flex flex-col md:flex-row items-center justify-between w-full gap-4">
                    <p className="text-slate-500 dark:text-slate-500 text-sm order-2 md:order-1">
                        © {currentYear}. All rights reserved.
                    </p>

                    <div className="flex gap-4 order-1 md:order-2">
                        {[
                            { name: "GitHub", icon: "hub", url: "https://github.com/sisrafilss/" },
                            { name: "LinkedIn", icon: "work", url: "https://www.linkedin.com/in/sisrafilss/" },
                            { name: "Facebook", icon: "facebook", url: "https://www.facebook.com/sisrafilss/" },
                        ].map((social) => (
                            <a
                                key={social.name}
                                href={social.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-slate-400 hover:text-primary transition-colors"
                            >
                                <span className="material-symbols-outlined text-xl">
                                    {social.icon}
                                </span>
                                <span className="sr-only">{social.name}</span>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
}
