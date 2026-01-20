import React from "react";

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

export function Skills() {
    return (
        <section className="py-20 px-4">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mb-4">
                        Technical Proficiency
                    </h2>
                    <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                        A comprehensive overview of the technologies and tools I master to build scalable applications.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {skillCategories.map((category) => (
                        <div
                            key={category.title}
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
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
