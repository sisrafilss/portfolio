import ProjectDetail from '@/components/Projects/ProjectDetail';

interface PageProps {
  params: {
    id: string;
  };
}

const ProjectDetailPage = async ({ params }: PageProps) => {
  const { id } = await params;

  console.log('ID', id);

  return (
    <div>
      <ProjectDetail />
    </div>
  );
};

export default ProjectDetailPage;
