import React from "react";

export function ContactSection() {
    return (
        <section className="py-24 px-4 relative overflow-hidden">
            {/* Decorative Background */}
            <div className="absolute top-0 left-[20%] w-72 h-72 bg-primary/5 blur-[100px] rounded-full pointer-events-none"></div>

            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mb-6">
                    Get In <span className="text-primary">Touch</span>
                </h2>
                <p className="text-slate-600 dark:text-slate-400 text-lg mb-12 max-w-2xl mx-auto">
                    Interested in working together? Feel free to reach out for collaborations or just a friendly hello.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {[
                        {
                            title: "Email",
                            value: "hello@sisrafilss.dev",
                            link: "mailto:hello@sisrafilss.dev",
                            icon: "mail",
                        },
                        {
                            title: "Phone",
                            value: "+1 (555) 123-4567",
                            link: "tel:+15551234567",
                            icon: "call",
                        },
                        {
                            title: "WhatsApp",
                            value: "Chat on WhatsApp",
                            link: "https://wa.me/15551234567",
                            icon: "chat",
                        },
                    ].map((item) => (
                        <a
                            key={item.title}
                            href={item.link}
                            className="flex flex-col items-center gap-4 p-8 rounded-3xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 transition-all group"
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
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}
