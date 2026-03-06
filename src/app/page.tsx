import { ContactSection } from '@/components/ContactSection';
import { Hero } from '@/components/Hero';
import { ProjectsSection } from '@/components/Projects/ProjectsSection';
import { Skills } from '@/components/Skills';

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
