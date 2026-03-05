'use client';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { Project } from '../../../projectData';
import ProjectGallery from './ProjectGallery';

interface Props {
  project: Project;
}

export default function ProjectDetailClient({ project }: Props) {
  return (
    <div className="min-h-screen bg-background px-4 md:px-10 py-10">
      <div className="max-w-6xl mx-auto space-y-10">
        {/* 1️⃣ Project Overview */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="space-y-4"
        >
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
            {project.title}
          </h1>

          <p className="text-muted-foreground text-base md:text-lg max-w-3xl">
            {project.shortDescription}
          </p>

          <div className="flex flex-wrap gap-3">
            {project.liveLink && (
              <Button asChild>
                <a href={project.liveLink} target="_blank">
                  <ExternalLink className="w-4 h-4 mr-2" /> Live Demo
                </a>
              </Button>
            )}

            {project.frontendRepo && (
              <Button variant="outline" asChild>
                <a href={project.frontendRepo} target="_blank">
                  <Github className="w-4 h-4 mr-2" /> Frontend GitHub
                </a>
              </Button>
            )}

            {project.backendRepo && (
              <Button variant="outline" asChild>
                <a href={project.backendRepo} target="_blank">
                  <Github className="w-4 h-4 mr-2" /> Backend GitHub
                </a>
              </Button>
            )}
          </div>
        </motion.section>

        <Separator />

        {/* 2️⃣ Screenshots */}
        {project.images?.length > 0 && (
          <>
            <section className="space-y-6">
              <h2 className="text-2xl font-semibold">Screenshots</h2>
              <ProjectGallery images={project.images} />
            </section>
            <Separator />
          </>
        )}

        {/* 3️⃣ Key Features */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold">Key Features</h2>

          <div className="grid md:grid-cols-2 gap-6">
            {project.features.tourist && (
              <Card className="rounded-2xl">
                <CardHeader>
                  <CardTitle>Tourist Features</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 text-sm">
                  {project.features.tourist.map((feature, i) => (
                    <p key={i}>• {feature}</p>
                  ))}
                </CardContent>
              </Card>
            )}

            {project.features.guide && (
              <Card className="rounded-2xl">
                <CardHeader>
                  <CardTitle>Guide Features</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 text-sm">
                  {project.features.guide.map((feature, i) => (
                    <p key={i}>• {feature}</p>
                  ))}
                </CardContent>
              </Card>
            )}

            {project.features.admin && (
              <Card className="rounded-2xl md:col-span-2">
                <CardHeader>
                  <CardTitle>Admin Features</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 text-sm">
                  {project.features.admin.map((feature, i) => (
                    <p key={i}>• {feature}</p>
                  ))}
                </CardContent>
              </Card>
            )}
          </div>
        </section>

        <Separator />

        {/* 4️⃣ Tech Stack */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold">Tech Stack</h2>
          <div className="flex flex-wrap gap-3">
            {project.techStack.map((tech, i) => (
              <Badge key={i} variant="secondary" className="text-sm">
                {tech}
              </Badge>
            ))}
          </div>
        </section>

        <Separator />

        {/* 5️⃣ Architecture */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">
            Architecture & Backend Design
          </h2>
          <p className="text-muted-foreground max-w-4xl text-sm md:text-base">
            {project.architecture}
          </p>
        </section>

        <Separator />

        {/* 6️⃣ Challenges */}
        {project.challenges?.length > 0 && (
          <>
            <section className="space-y-6">
              <h2 className="text-2xl font-semibold">Challenges & Solutions</h2>

              <div className="space-y-4">
                {project.challenges.map((challenge, i) => (
                  <Card key={i} className="rounded-2xl">
                    <CardContent className="text-sm py-6">
                      {challenge}
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>
            <Separator />
          </>
        )}

        {/* 7️⃣ Performance */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Performance Optimization</h2>
          <p className="text-muted-foreground text-sm md:text-base">
            {project.performance}
          </p>
        </section>

        <Separator />

        {/* 8️⃣ Security */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Security Considerations</h2>
          <p className="text-muted-foreground text-sm md:text-base">
            {project.security}
          </p>
        </section>

        <Separator />

        {/* 9️⃣ Learning */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">What I Learned</h2>
          <p className="text-muted-foreground text-sm md:text-base">
            {project.learning}
          </p>
        </section>

        <Separator />

        {/* 🔟 Future Improvements */}
        {project.futureImprovements?.length > 0 && (
          <section className="space-y-4 pb-10">
            <h2 className="text-2xl font-semibold">Future Improvements</h2>
            <ul className="text-muted-foreground text-sm md:text-base space-y-2">
              {project.futureImprovements.map((item, i) => (
                <li key={i}>• {item}</li>
              ))}
            </ul>
          </section>
        )}
      </div>
    </div>
  );
}
