"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { usePathname } from "next/navigation";

export function Navbar() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const pathname = usePathname();

    // Prevent hydration mismatch
    useEffect(() => {
        setMounted(true);
    }, []);

    const toggleTheme = () => {
        setTheme(theme === "dark" ? "light" : "dark");
    };

    const navLinks = [
        { name: "Home", href: "/" },
        { name: "Projects", href: "/projects" },
        { name: "About", href: "/about" },
        { name: "Contact", href: "/contact" },
    ];

    const isActive = (path: string) => pathname === path;

    return (
        <nav className="sticky top-0 z-50 glass-nav bg-background-light/80 dark:bg-background-dark/80 border-b border-black/5 dark:border-white/5">
            <div className="flex items-center p-4 justify-between max-w-7xl mx-auto">
                <Link href="/" className="flex items-center gap-2 group">
                    <div className="bg-primary p-1.5 rounded-lg flex items-center justify-center transition-transform group-hover:scale-110">
                        <span className="material-symbols-outlined text-background-dark font-bold">
                            terminal
                        </span>
                    </div>
                    <h2 className="text-xl font-extrabold tracking-tight">PH</h2>
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-1 bg-slate-100 dark:bg-white/5 p-1 rounded-full border border-black/5 dark:border-white/5">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${isActive(link.href)
                                    ? "bg-white dark:bg-white/10 text-slate-900 dark:text-white shadow-sm"
                                    : "text-slate-500 hover:text-slate-900 dark:hover:text-white"
                                }`}
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>

                <div className="flex items-center gap-2">
                    {/* Theme Toggle */}
                    <button
                        onClick={toggleTheme}
                        className="flex items-center justify-center size-10 rounded-full bg-primary/10 dark:bg-primary/20 text-primary cursor-pointer hover:bg-primary/20 transition-colors active:scale-95"
                        aria-label="Toggle Theme"
                    >
                        {mounted && (
                            <span className="material-symbols-outlined text-2xl">
                                {theme === "dark" ? "light_mode" : "dark_mode"}
                            </span>
                        )}
                    </button>

                    {/* Mobile Menu Button - Hidden on Desktop */}
                    <button
                        className="flex md:hidden items-center justify-center size-10 rounded-full hover:bg-black/5 dark:hover:bg-white/5 cursor-pointer active:scale-95 transition-transform"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        <span className="material-symbols-outlined text-2xl">
                            {isMobileMenuOpen ? "close" : "menu"}
                        </span>
                    </button>
                </div>
            </div>

            {/* Mobile Menu Dropdown */}
            {isMobileMenuOpen && (
                <div className="md:hidden absolute top-[72px] left-0 right-0 bg-background-light dark:bg-background-dark border-b border-black/5 dark:border-white/5 p-4 flex flex-col gap-2 shadow-2xl glass-nav animate-in slide-in-from-top-5">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className={`p-4 rounded-xl font-bold flex items-center justify-between ${isActive(link.href)
                                    ? "bg-primary/10 text-primary"
                                    : "hover:bg-black/5 dark:hover:bg-white/5"
                                }`}
                        >
                            {link.name}
                            {isActive(link.href) && <span className="material-symbols-outlined">check</span>}
                        </Link>
                    ))}
                </div>
            )}
        </nav>
    );
}
