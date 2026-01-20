import Link from "next/link";
import React from "react";

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-slate-50 dark:bg-black/20 border-t border-slate-200 dark:border-white/5 py-12 px-4">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex items-center gap-2">
                    <div className="bg-primary p-1 rounded-lg flex items-center justify-center">
                        <span className="material-symbols-outlined text-background-dark font-bold text-lg">
                            terminal
                        </span>
                    </div>
                    <span className="font-bold text-lg tracking-tight text-slate-900 dark:text-white">
                        Sisrafilss
                    </span>
                </div>

                <div className="flex gap-8 text-sm font-medium text-slate-600 dark:text-slate-400">
                    <Link href="/" className="hover:text-primary transition-colors">Home</Link>
                    <Link href="/projects" className="hover:text-primary transition-colors">Projects</Link>
                    <Link href="/about" className="hover:text-primary transition-colors">About</Link>
                    <Link href="/contact" className="hover:text-primary transition-colors">Contact</Link>
                </div>

                <p className="text-slate-500 dark:text-slate-500 text-sm">
                    © {currentYear}. All rights reserved.
                </p>
            </div>
        </footer>
    );
}
