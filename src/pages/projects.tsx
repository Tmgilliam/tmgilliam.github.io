import type {ReactElement} from 'react';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import ProjectCard from '@site/src/components/ProjectCard';
import {projects} from '@site/src/data/projects';

export default function ProjectsPage(): ReactElement {
  const visible = projects.filter((project) => project.status !== 'Planned');
  const planned = projects.filter((project) => project.status === 'Planned');

  return (
    <Layout
      title="Projects"
      description="Verified public technical projects from Dr. Tatianna Gilliam and Brilliant Brainstorm Intelligence."
    >
      <main className="container margin-vert--lg">
        <Heading as="h1">Technical Projects</Heading>
        <p>
          Featured and supporting public repositories. Planned work is labeled separately
          and is not presented as complete.
        </p>
        <div className="row">
          {visible.map((project) => (
            <div key={project.id} className="col col--6 margin-bottom--lg">
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
        <Heading as="h2">Planned</Heading>
        <div className="row">
          {planned.map((project) => (
            <div key={project.id} className="col col--6 margin-bottom--lg">
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </main>
    </Layout>
  );
}
