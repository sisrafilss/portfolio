"use client";

import React from "react";

export default function Contact() {
    return (
        <main className="min-h-screen pt-24 px-4 pb-12">
            <div className="max-w-2xl mx-auto">
                <h1 className="text-4xl font-extrabold mb-8 text-slate-900 dark:text-white">Get in Touch</h1>

                <div className="grid gap-8">
                    <div className="p-8 rounded-3xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10">
                        <h2 className="text-2xl font-bold mb-6 text-slate-900 dark:text-white">Send a Message</h2>
                        <form className="space-y-4">
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-slate-700 dark:text-slate-300">Name</label>
                                    <input type="text" className="w-full h-12 rounded-xl bg-slate-50 dark:bg-black/20 border border-slate-200 dark:border-white/10 px-4 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-slate-700 dark:text-slate-300">Email</label>
                                    <input type="email" className="w-full h-12 rounded-xl bg-slate-50 dark:bg-black/20 border border-slate-200 dark:border-white/10 px-4 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all" />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-slate-700 dark:text-slate-300">Subject</label>
                                <select className="w-full h-12 rounded-xl bg-slate-50 dark:bg-black/20 border border-slate-200 dark:border-white/10 px-4 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all">
                                    <option>Project Inquiry</option>
                                    <option>Job Opportunity</option>
                                    <option>General Question</option>
                                </select>
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-slate-700 dark:text-slate-300">Message</label>
                                <textarea className="w-full h-32 rounded-xl bg-slate-50 dark:bg-black/20 border border-slate-200 dark:border-white/10 p-4 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none"></textarea>
                            </div>
                            <button type="submit" className="w-full h-14 rounded-full bg-primary text-background-dark font-extrabold text-lg hover:shadow-lg hover:shadow-primary/20 hover:scale-[1.02] active:scale-[0.98] transition-all">
                                Send Message
                            </button>
                        </form>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <a href="mailto:hello@example.com" className="p-6 rounded-2xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 flex flex-col items-center gap-3 hover:border-primary/50 transition-colors group">
                            <span className="material-symbols-outlined text-3xl text-primary group-hover:scale-110 transition-transform">mail</span>
                            <p className="font-bold text-slate-900 dark:text-white">Email</p>
                            <p className="text-sm text-slate-500 text-center">hello@example.com</p>
                        </a>
                        <a href="#" className="p-6 rounded-2xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 flex flex-col items-center gap-3 hover:border-primary/50 transition-colors group">
                            <span className="material-symbols-outlined text-3xl text-primary group-hover:scale-110 transition-transform">call</span>
                            <p className="font-bold text-slate-900 dark:text-white">Phone</p>
                            <p className="text-sm text-slate-500 text-center">+1 (555) 123-4567</p>
                        </a>
                        <a href="#" className="p-6 rounded-2xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 flex flex-col items-center gap-3 hover:border-primary/50 transition-colors group">
                            <span className="material-symbols-outlined text-3xl text-primary group-hover:scale-110 transition-transform">location_on</span>
                            <p className="font-bold text-slate-900 dark:text-white">Location</p>
                            <p className="text-sm text-slate-500 text-center">San Francisco, CA</p>
                        </a>
                    </div>
                </div>
            </div>
        </main>
    );
}
