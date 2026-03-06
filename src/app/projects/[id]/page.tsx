import ProjectDetailClient from '@/components/Projects/ProjectDetail';
import { Project, projects } from '../../../../projectData';

interface PageProps {
  params: {
    id: string;
  };
}

const ProjectDetailPage = async ({ params }: PageProps) => {
  const { id } = await params;

  const project: Project | undefined = projects.find((p) => p.id === id);

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div>
      <ProjectDetailClient project={project} />
    </div>
  );
};

export default ProjectDetailPage;
