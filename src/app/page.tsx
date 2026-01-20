import { Hero } from "@/components/Hero";

export default function Home() {
  return (
    <>
      <Hero />

      {/* Section Divider (Visual Only) */}
      <div className="px-4 py-8">
        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-slate-300 dark:via-white/10 to-transparent"></div>
      </div>

      {/* Mobile Navigation Links Mockup (Hidden functionality) */}
      <section className="px-4 pb-12">
        <h3 className="text-slate-900 dark:text-white text-lg font-bold leading-tight px-4 pb-4">
          Explore More
        </h3>
        <div className="grid grid-cols-2 gap-3 px-4">
          <div className="p-4 rounded-xl bg-slate-200 dark:bg-white/5 border border-slate-300/50 dark:border-white/10">
            <span className="material-symbols-outlined text-primary mb-2">
              person
            </span>
            <p className="font-bold text-sm">About Me</p>
          </div>
          <div className="p-4 rounded-xl bg-slate-200 dark:bg-white/5 border border-slate-300/50 dark:border-white/10">
            <span className="material-symbols-outlined text-primary mb-2">
              construction
            </span>
            <p className="font-bold text-sm">All Skills</p>
          </div>
          <div className="p-4 rounded-xl bg-slate-200 dark:bg-white/5 border border-slate-300/50 dark:border-white/10">
            <span className="material-symbols-outlined text-primary mb-2">
              rocket_launch
            </span>
            <p className="font-bold text-sm">Projects</p>
          </div>
          <div className="p-4 rounded-xl bg-slate-200 dark:bg-white/5 border border-slate-300/50 dark:border-white/10">
            <span className="material-symbols-outlined text-primary mb-2">
              alternate_email
            </span>
            <p className="font-bold text-sm">Contact</p>
          </div>
        </div>
      </section>
    </>
  );
}
