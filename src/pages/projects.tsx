import type {ReactElement} from 'react';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import ProjectCard from '@site/src/components/ProjectCard';
import {
  featuredProjects,
  plannedProjects,
  projectsInSection,
  type Project,
} from '@site/src/data/projects';

function ProjectGrid({items}: {items: Project[]}): ReactElement | null {
  if (!items.length) {
    return null;
  }
  return (
    <div className="row">
      {items.map((project) => (
        <div key={project.id} className="col col--6 margin-bottom--lg">
          <ProjectCard project={project} />
        </div>
      ))}
    </div>
  );
}

export default function ProjectsPage(): ReactElement {
  const engineering = projectsInSection('engineering-governance');
  const enterprise = projectsInSection('enterprise-transformation');
  const aiGoverned = projectsInSection('ai-governed');

  return (
    <Layout
      title="Projects"
      description="Curated public technical catalog from Dr. Tatianna Gilliam and Brilliant Brainstorm Intelligence — verified work, honest maturity labels."
    >
      <main className="container margin-vert--lg">
        <Heading as="h1">Technical Projects</Heading>
        <p>
          Curated catalog—not an exhaustive repository dump. Each card appears once.
          Status and Public Proof Gate labels are intentional: verified work is promoted;
          planned work is labeled planned.
        </p>
        <p>
          Older repositories (for example SafeSignal or additional MLOps repos) are added
          only after public verification. Private systems such as BBIOS are not listed as
          inspectable public repositories.
        </p>

        <Heading as="h2">Featured Systems</Heading>
        <p>
          Strongest recruiter-facing proof surfaces. Approximately five systems—breadth
          with signal.
        </p>
        <ProjectGrid items={featuredProjects} />

        <Heading as="h2">Engineering Platforms &amp; Governance</Heading>
        <p>
          Organization controls, publishing supply chain, reusable workflows, and roadmap
          artifacts. Distinct from product applications.
        </p>
        <ProjectGrid items={engineering} />

        <Heading as="h2">Enterprise Transformation Case Studies</Heading>
        <p>
          Architecture and operating judgment. Featured ERP/cloud cards live above; this
          section holds supporting or forthcoming case studies without duplicating those
          cards.
        </p>
        <ProjectGrid items={enterprise} />
        {!enterprise.length ? (
          <p>
            Supporting ERP themes are documented under{' '}
            <a href="/docs/erp-transformation/">ERP Transformation</a>. The Enterprise ERP
            Transformation Casebook is listed under Planned.
          </p>
        ) : null}

        <Heading as="h2">AI &amp; Governed Systems</Heading>
        <p>
          Released and active AI artifacts appear in Featured. This section holds
          additional non-featured AI/governance systems when present.
        </p>
        <ProjectGrid items={aiGoverned} />
        {!aiGoverned.length ? (
          <p>
            Featured AI systems: AI Readiness Diagnostic Kit and ERP AI Delay Risk.
            Planned companions (interactive assessment, governed agent patterns) are
            below.
          </p>
        ) : null}

        <Heading as="h2">Planned</Heading>
        <p>
          Explicitly not complete. These initiatives are sequenced for public release and
          must not be read as finished products.
        </p>
        <ProjectGrid items={plannedProjects} />
      </main>
    </Layout>
  );
}
