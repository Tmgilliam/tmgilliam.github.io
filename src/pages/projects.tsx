import {useMemo, useState, type ReactElement} from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import ProjectCard from '@site/src/components/ProjectCard';
import {
  filterProjects,
  getCatalogSummary,
  plannedProjects,
  projects,
  projectsInSection,
  type CatalogFilter,
  type Project,
} from '@site/src/data/projects';
import styles from './projects.module.css';

const FILTERS: CatalogFilter[] = [
  'All',
  'AI',
  'ERP',
  'Architecture',
  'Governance',
  'Cloud',
  'Released',
  'Active',
  'Planned',
];

function ProjectGrid({items}: {items: Project[]}): ReactElement | null {
  if (!items.length) {
    return null;
  }
  return (
    <div className={styles.grid}>
      {items.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
}

export default function ProjectsPage(): ReactElement {
  const [filter, setFilter] = useState<CatalogFilter>('All');
  const summary = getCatalogSummary();

  const featured = useMemo(
    () =>
      filterProjects(
        projects.filter((p) => p.featured),
        filter,
      ),
    [filter],
  );
  const engineering = useMemo(
    () => filterProjects(projectsInSection('engineering-governance'), filter),
    [filter],
  );
  const enterprise = useMemo(
    () => filterProjects(projectsInSection('enterprise-transformation'), filter),
    [filter],
  );
  const aiGoverned = useMemo(
    () => filterProjects(projectsInSection('ai-governed'), filter),
    [filter],
  );
  const planned = useMemo(() => filterProjects(plannedProjects, filter), [filter]);

  const empty =
    !featured.length &&
    !engineering.length &&
    !enterprise.length &&
    !aiGoverned.length &&
    !planned.length;

  return (
    <Layout
      title="Projects"
      description="Curated public engineering proof — inspectable systems for Staff/Principal engineers, directors, CTOs, and FAANG recruiters."
    >
      <main>
        <header className={styles.hero}>
          <div className="container">
            <p className={styles.eyebrow}>Technical catalog</p>
            <Heading as="h1">Curated public engineering proof</Heading>
            <p className={styles.lead}>
              Every project on this page is backed by inspectable code, documentation,
              architecture, testing, and public evidence.
            </p>
            <p className={styles.secondary}>
              Private systems are clearly identified and never represented as public work.
              The objective is not follower counts—it is to convince a Staff/Principal
              engineer, Engineering Director, CTO, or FAANG recruiter in under five
              minutes that these systems are built, governed, and shipped with enterprise
              discipline.
            </p>
          </div>
        </header>

        <section className={styles.summarySection} aria-label="Recruiter summary">
          <div className="container">
            <div className={styles.summaryGrid}>
              <div>
                <strong>{summary.released}</strong>
                <span>Released</span>
              </div>
              <div>
                <strong>{summary.active}</strong>
                <span>Active</span>
              </div>
              <div>
                <strong>{summary.planned}</strong>
                <span>Planned</span>
              </div>
              <div>
                <strong>{summary.caseStudies}</strong>
                <span>Case studies</span>
              </div>
              <div>
                <strong>{summary.architectureDecisions}</strong>
                <span>Architecture decisions</span>
              </div>
              <div>
                <strong>{summary.gateCoverage}%</strong>
                <span>Proof gates passed*</span>
              </div>
            </div>
            <p className={styles.summaryNote}>
              *Among non-planned catalog entries with Public Proof Gate = Passed.
              Engineering metrics only—no star counts or follower asks.
            </p>
          </div>
        </section>

        <section className={styles.filtersSection} aria-label="Catalog filters">
          <div className="container">
            <div className={styles.filters} role="toolbar" aria-label="Filter projects">
              {FILTERS.map((item) => (
                <button
                  key={item}
                  type="button"
                  className={filter === item ? styles.filterActive : styles.filterChip}
                  aria-pressed={filter === item}
                  onClick={() => setFilter(item)}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </section>

        <div className={`container ${styles.catalog}`}>
          {empty ? (
            <p className={styles.empty}>
              No projects match this filter. Choose <strong>All</strong> or another chip.
            </p>
          ) : null}

          {featured.length ? (
            <section className={styles.section}>
              <Heading as="h2">Featured Systems</Heading>
              <p>
                Strongest inspectable proof surfaces—product-catalog cards with evidence
                actions, quality gates, and engineering review.
              </p>
              <ProjectGrid items={featured} />
            </section>
          ) : null}

          {engineering.length ? (
            <section className={styles.section}>
              <Heading as="h2">Engineering Platforms &amp; Governance</Heading>
              <p>
                Organization controls, publishing supply chain, reusable workflows, and
                roadmap artifacts.
              </p>
              <ProjectGrid items={engineering} />
            </section>
          ) : null}

          {enterprise.length ? (
            <section className={styles.section}>
              <Heading as="h2">Enterprise Transformation Case Studies</Heading>
              <p>
                Architecture and operating judgment for ERP and cloud
                transformation—sanitized and evidence-bounded.
              </p>
              <ProjectGrid items={enterprise} />
            </section>
          ) : null}

          {aiGoverned.length ? (
            <section className={styles.section}>
              <Heading as="h2">AI &amp; Governed Systems</Heading>
              <p>Additional AI and governance systems beyond the featured cards.</p>
              <ProjectGrid items={aiGoverned} />
            </section>
          ) : null}

          {planned.length ? (
            <section className={styles.section}>
              <Heading as="h2">Planned</Heading>
              <p>
                Explicitly not complete. Sequenced for public release—do not read as
                finished products.
              </p>
              <ProjectGrid items={planned} />
            </section>
          ) : null}
        </div>

        <section className={styles.inspectCta} aria-labelledby="inspect-work-title">
          <div className="container">
            <Heading as="h2" id="inspect-work-title">
              Inspect the work
            </Heading>
            <p>
              Evaluate evidence. Challenge assumptions. Discuss architecture. Followers
              are a byproduct—not the goal.
            </p>
            <div className={styles.inspectLinks}>
              <Link
                className="button button--primary"
                href="https://github.com/Tmgilliam"
              >
                GitHub
              </Link>
              <Link className="button button--secondary" href="/architecture">
                Architecture
              </Link>
              <Link
                className="button button--secondary"
                href="https://github.com/orgs/Brilliant-Brainstorm-Intelligence-LLC/projects/1"
              >
                Roadmap
              </Link>
              <Link
                className="button button--secondary"
                href="https://github.com/Brilliant-Brainstorm-Intelligence-LLC/bbi-ai-readiness-diagnostic-kit/discussions"
              >
                Engineering Discussions
              </Link>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
