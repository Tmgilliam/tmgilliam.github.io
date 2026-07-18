import type {ReactElement} from 'react';
import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';
import Layout from '@theme/Layout';
import clsx from 'clsx';
import ProjectCard from '@site/src/components/ProjectCard';
import SectionHeading from '@site/src/components/SectionHeading';
import {featuredProjects, projects} from '@site/src/data/projects';
import {skillGroups} from '@site/src/data/skills';
import styles from './index.module.css';

type Pillar = {
  title: string;
  description: string;
  href: string;
};

type ImpactSignal = {
  label: string;
  evidenceHref?: string;
};

type CompanyLink = {
  label: string;
  href: string;
};

const pillars: Pillar[] = [
  {
    title: 'Enterprise Systems and ERP Transformation',
    description:
      'Designing and improving ERP, warehouse, inventory, costing, and operational data systems. Translating fragmented workflows into controlled enterprise processes and decision-ready information.',
    href: '/docs/erp-transformation/',
  },
  {
    title: 'AI, Data, and Cloud Architecture',
    description:
      'Building evidence-first AI and data systems with explicit human authority, clear operating boundaries, testable architecture, and production-minded delivery patterns.',
    href: '/docs/enterprise-ai/',
  },
  {
    title: 'Executive Technology Leadership',
    description:
      'Connecting architecture decisions to business value, implementation risk, organizational adoption, and measurable operational outcomes.',
    href: '/architecture',
  },
];

const impactSignals: ImpactSignal[] = [
  {label: 'Enterprise AI and ERP architecture', evidenceHref: '/architecture'},
  {label: 'Cross-functional transformation leadership', evidenceHref: '/about'},
  {
    label: 'Warehouse, inventory, data-quality, and costing systems',
    evidenceHref: '/docs/erp-transformation/',
  },
  {
    label: 'Human-in-the-loop AI governance',
    evidenceHref: '/docs/enterprise-ai/',
  },
  {
    label: 'Public release and open-source engineering',
    evidenceHref: '/projects',
  },
  {
    label: 'Azure Solutions Architect Expert — AZ-305',
    evidenceHref: '/docs/certifications/azure-architect',
  },
];

const erpProof = [
  {
    title: 'Warehouse and barcode transformation',
    href: '/docs/erp-transformation/supply-chain-and-warehouse',
  },
  {
    title: 'Inventory and costing architecture',
    href: '/docs/erp-transformation/fifo-and-inventory-costing',
  },
  {title: 'ERP data-quality controls', href: '/docs/erp-transformation/erp-data-quality'},
  {title: 'Stakeholder and adoption decisions', href: '/docs/erp-transformation/'},
  {
    title: 'Operational reporting and decision support',
    href: '/docs/erp-transformation/',
  },
];

const companyLinks: CompanyLink[] = [
  {
    label: 'Visit BBI Engineering',
    href: 'https://github.com/Brilliant-Brainstorm-Intelligence-LLC',
  },
  {
    label: 'Explore the AI Readiness Kit',
    href: 'https://github.com/Brilliant-Brainstorm-Intelligence-LLC/bbi-ai-readiness-diagnostic-kit',
  },
  {label: 'Visit BBI Edge', href: 'https://bbiedge.com'},
];

const legacyThemes = [
  'Long-horizon systems',
  'Technical authorship',
  'Responsible AI',
  'Enterprise transformation',
  'Public proof',
  'Durable intellectual assets',
];

const released = projects.filter((project) => project.status === 'Released');
const inProgress = projects.filter(
  (project) => project.status === 'Active' || project.status === 'Case Study',
);
const planned = projects.filter((project) => project.status === 'Planned');

export default function Home(): ReactElement {
  return (
    <Layout
      title="Enterprise AI & Cloud Architect"
      description="Executive technical portfolio for Dr. Tatianna Gilliam — enterprise AI, cloud architecture, ERP transformation, and governed systems."
    >
      <header className={styles.hero}>
        <div className={clsx('container', styles.heroInner)}>
          <p className={styles.eyebrow}>Master Tech Portfolio</p>
          <Heading as="h1" className={styles.heroTitle}>
            Dr. Tatianna Gilliam, DBA
          </Heading>
          <p className={styles.heroRole}>
            Enterprise AI &amp; Cloud Architect
            <br />
            ERP Transformation · Governed Agents · Human-in-the-Loop Systems
          </p>
          <p className={styles.heroLead}>
            I turn complex enterprise operations into governed AI and cloud systems that
            can be inspected, shipped, and trusted.
          </p>
          <div className={styles.ctaRow}>
            <Link className="button button--primary button--lg" to="/projects">
              View Technical Projects
            </Link>
            <Link className="button button--secondary button--lg" to="/architecture">
              Explore Architecture
            </Link>
            <Link
              className="button button--secondary button--lg"
              href="https://github.com/Brilliant-Brainstorm-Intelligence-LLC"
            >
              Visit BBI Engineering
            </Link>
            <Link
              className="button button--secondary button--lg"
              href="https://www.linkedin.com/in/drtatianna-dba"
            >
              Connect on LinkedIn
            </Link>
          </div>
        </div>
      </header>

      <main>
        <section className={styles.authority} aria-label="Executive authority">
          <div className="container">
            <p className={styles.authorityLine}>
              Enterprise systems. Governed intelligence. Operational proof.
            </p>
          </div>
        </section>

        <section className={styles.section}>
          <div className="container">
            <SectionHeading
              eyebrow="Core pillars"
              title="Senior problems, system answers"
              description="Three durable practice areas that connect architecture decisions to operational outcomes."
            />
            <div className={styles.grid3}>
              {pillars.map((pillar) => (
                <article key={pillar.title} className={styles.pillarCard}>
                  <Heading as="h3">{pillar.title}</Heading>
                  <p>{pillar.description}</p>
                  <Link href={pillar.href}>Explore</Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className={clsx(styles.section, styles.alt)}>
          <div className="container">
            <SectionHeading
              eyebrow="Impact at a glance"
              title="Verified signals only"
              description="No invented metrics. Each statement links to inspectable evidence."
            />
            <ul className={styles.impactList}>
              {impactSignals.map((signal) => (
                <li key={signal.label}>
                  {signal.evidenceHref ? (
                    <Link href={signal.evidenceHref}>{signal.label}</Link>
                  ) : (
                    signal.label
                  )}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className={styles.section}>
          <div className="container">
            <SectionHeading
              eyebrow="Featured technical systems"
              title="Released and active public proof"
              description="Primary featured work excludes planned items."
            />
            <div className={styles.grid3}>
              {featuredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} compact />
              ))}
            </div>
          </div>
        </section>

        <section className={clsx(styles.section, styles.alt)}>
          <div className="container">
            <SectionHeading
              eyebrow="Architecture strengths"
              title="Where senior judgment shows up"
            />
            <div className={styles.grid3}>
              {skillGroups.map((group) => (
                <article key={group.id} className={styles.pillarCard}>
                  <Heading as="h3">{group.title}</Heading>
                  <ul>
                    {group.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <Link href={group.href}>Read more</Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <div className="container">
            <SectionHeading
              eyebrow="ERP transformation proof"
              title="Sanitized operating patterns"
              description="No employer names, client identities, proprietary screenshots, or confidential procedures."
            />
            <div className={styles.grid3}>
              {erpProof.map((item) => (
                <Link key={item.title} className={styles.proofLink} href={item.href}>
                  {item.title}
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className={clsx(styles.section, styles.alt)}>
          <div className="container">
            <SectionHeading
              eyebrow="Current public engineering work"
              title="Honest status from typed site data"
              description="Roadmap evidence: BBI Public Engineering Roadmap."
            />
            <div className={styles.grid3}>
              <div className={styles.statusColumn}>
                <Heading as="h3">Released</Heading>
                <ul>
                  {released.map((project) => (
                    <li key={project.id}>{project.name}</li>
                  ))}
                </ul>
              </div>
              <div className={styles.statusColumn}>
                <Heading as="h3">In Progress</Heading>
                <ul>
                  {inProgress.map((project) => (
                    <li key={project.id}>{project.name}</li>
                  ))}
                </ul>
              </div>
              <div className={styles.statusColumn}>
                <Heading as="h3">Planned</Heading>
                <ul>
                  {planned.map((project) => (
                    <li key={project.id}>{project.name}</li>
                  ))}
                </ul>
              </div>
            </div>
            <p className={styles.roadmapNote}>
              <Link href="https://github.com/orgs/Brilliant-Brainstorm-Intelligence-LLC/projects/1">
                View the BBI Public Engineering Roadmap
              </Link>
            </p>
          </div>
        </section>

        <section className={styles.bbiSection}>
          <div className="container">
            <SectionHeading
              eyebrow="Company"
              title="Brilliant Brainstorm Intelligence, LLC"
              description="Brilliant Brainstorm Intelligence builds governed AI, enterprise architecture, and ERP transformation tools that connect evidence, human authority, execution, and measurable operational outcomes."
            />
            <p className={styles.bbiSecondary}>
              Public engineering work includes AI readiness diagnostics, governed-agent
              patterns, architecture standards, and sanitized enterprise transformation
              case studies.
            </p>
            <div className={styles.ctaRow}>
              {companyLinks.map((link) => (
                <Link
                  key={link.label}
                  className="button button--primary button--lg"
                  href={link.href}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <div className="container">
            <SectionHeading
              eyebrow="Leadership and Legacy"
              title="Systems intended to last"
              description="I build systems intended to last: technical systems, decision systems, public knowledge, reusable methods, and operating standards that improve the quality of work beyond a single project."
            />
            <ul className={styles.legacyList}>
              {legacyThemes.map((theme) => (
                <li key={theme}>{theme}</li>
              ))}
            </ul>
          </div>
        </section>

        <section className={clsx(styles.section, styles.closing)}>
          <div className="container">
            <Heading as="h2">
              Explore the work. Inspect the decisions. Follow the evidence.
            </Heading>
            <div className={styles.ctaRow}>
              <Link className="button button--primary button--lg" to="/projects">
                Technical Projects
              </Link>
              <Link className="button button--secondary button--lg" to="/architecture">
                Architecture
              </Link>
              <Link
                className="button button--secondary button--lg"
                href="https://github.com/Tmgilliam"
              >
                GitHub
              </Link>
              <Link
                className="button button--secondary button--lg"
                href="https://www.linkedin.com/in/drtatianna-dba"
              >
                LinkedIn
              </Link>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
