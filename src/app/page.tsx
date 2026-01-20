import { Hero } from "@/components/Hero";
import { Skills } from "@/components/Skills";
import { ProjectsSection } from "@/components/ProjectsSection";
import { ContactSection } from "@/components/ContactSection";

export default function Home() {
  return (
    <>
      <Hero />
      <Skills />
      <ProjectsSection />
      <ContactSection />
    </>
  );
}
