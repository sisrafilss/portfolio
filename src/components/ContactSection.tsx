"use client";

import React from "react";
import { motion } from "framer-motion";

export function ContactSection() {
    return (
        <section className="py-24 px-4 relative overflow-hidden">
            {/* Decorative Background */}
            <motion.div
                animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-0 left-[20%] w-72 h-72 bg-primary/5 blur-[100px] rounded-full pointer-events-none"
            ></motion.div>

            <div className="max-w-4xl mx-auto text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mb-6">
                        Get In <span className="text-primary">Touch</span>
                    </h2>
                    <p className="text-slate-600 dark:text-slate-400 text-lg mb-12 max-w-2xl mx-auto">
                        Interested in working together? Feel free to reach out for collaborations or just a friendly hello.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {[
                        {
                            title: "Email",
                            value: "israfilhossen3@gmail.com",
                            link: "mailto:israfilhossen3@gmail.com",
                            icon: "mail",
                        },
                        {
                            title: "Phone",
                            value: "+880 1521-410415",
                            link: "tel:+8801521410415",
                            icon: "call",
                        },
                        {
                            title: "WhatsApp",
                            value: "+880 1521-410415",
                            link: "https://wa.me/8801521410415",
                            icon: "chat",
                        },
                    ].map((item, index) => (
                        <motion.a
                            key={item.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ y: -5, boxShadow: "0 10px 30px -10px rgba(0,0,0,0.1)" }}
                            href={item.link}
                            className="flex flex-col items-center gap-4 p-8 rounded-3xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 hover:border-primary/50 transition-colors group"
                        >
                            <div className="size-16 rounded-2xl bg-slate-100 dark:bg-white/10 group-hover:bg-primary/20 text-slate-900 dark:text-white group-hover:text-primary flex items-center justify-center transition-colors">
                                <span className="material-symbols-outlined text-3xl">
                                    {item.icon}
                                </span>
                            </div>
                            <div>
                                <h3 className="font-bold text-slate-900 dark:text-white mb-1">
                                    {item.title}
                                </h3>
                                <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">
                                    {item.value}
                                </p>
                            </div>
                        </motion.a>
                    ))}
                </div>
            </div>
        </section>
    );
}
