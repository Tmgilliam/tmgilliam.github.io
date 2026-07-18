import type {ReactElement} from 'react';
import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';
import Layout from '@theme/Layout';
import clsx from 'clsx';
import ProjectCard from '@site/src/components/ProjectCard';
import SectionHeading from '@site/src/components/SectionHeading';
import {
  momentumInProgress,
  momentumPlanned,
  momentumReleased,
  recentShipments,
} from '@site/src/data/homeShipments';
import {featuredProjects} from '@site/src/data/projects';
import {skillGroups} from '@site/src/data/skills';
import styles from './index.module.css';

type ProofCard = {
  title: string;
  value: string;
  href: string;
  cta: string;
};

type SeniorProblem = {
  title: string;
  outcome: string;
  href: string;
};

type MomentumItem = {
  id: string;
  title: string;
  href?: string;
  privateLabel?: string;
};

const proofCards: ProofCard[] = [
  {
    title: 'Technical Projects',
    value: 'Curated public systems with honest status and proof-gate labels.',
    href: '/projects',
    cta: 'Inspect projects',
  },
  {
    title: 'Architecture Hub',
    value: 'Decisions, strengths, and public-safe enterprise patterns.',
    href: '/architecture',
    cta: 'Inspect architecture',
  },
  {
    title: 'GitHub Profile',
    value: 'Active public engineering across AI, ERP, docs, releases, and governance.',
    href: 'https://github.com/Tmgilliam',
    cta: 'View GitHub activity',
  },
  {
    title: 'BBI Engineering',
    value: 'Organization controls, public tools, and engineering roadmap.',
    href: 'https://github.com/Brilliant-Brainstorm-Intelligence-LLC',
    cta: 'Open BBI engineering',
  },
  {
    title: 'LinkedIn',
    value: 'Professional context and conversation — not a substitute for code proof.',
    href: 'https://www.linkedin.com/in/drtatianna-dba',
    cta: 'Connect on LinkedIn',
  },
];

const seniorProblems: SeniorProblem[] = [
  {
    title: 'AI readiness and governance',
    outcome:
      'Helps organizations identify decision, data, authority, evidence, and implementation gaps before committing to an AI build.',
    href: '/docs/enterprise-ai/ai-readiness-diagnostic',
  },
  {
    title: 'ERP and operational transformation',
    outcome:
      'Turns fragmented inventory, warehouse, costing, and reporting workflows into controlled, decision-ready enterprise systems.',
    href: '/docs/erp-transformation/',
  },
  {
    title: 'Human-governed agent systems',
    outcome:
      'Defines authorization, escalation, evidence, and verification boundaries before automated actions can create consequences.',
    href: '/docs/enterprise-ai/governed-agent-systems',
  },
];

const companyLinks = [
  {
    label: 'Visit BBI Engineering',
    href: 'https://github.com/Brilliant-Brainstorm-Intelligence-LLC',
  },
  {
    label: 'Explore the AI Readiness Kit',
    href: 'https://github.com/Brilliant-Brainstorm-Intelligence-LLC/bbi-ai-readiness-diagnostic-kit',
  },
  {label: 'Visit BBI Edge', href: 'https://bbiedge.com'},
  {
    label: 'Follow BBI public engineering',
    href: 'https://github.com/orgs/Brilliant-Brainstorm-Intelligence-LLC/projects/1',
  },
];

const domains = [
  'Enterprise AI and human-in-the-loop systems',
  'AI readiness and AI governance',
  'ERP transformation and data quality',
  'Enterprise architecture and systems integration',
  'Operational intelligence and warehouse / inventory systems',
  'Azure architecture and cloud integration patterns',
  'Governed agents and evidence-first delivery',
];

function MomentumList({items}: {items: MomentumItem[]}): ReactElement {
  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>
          {item.href ? <Link href={item.href}>{item.title}</Link> : item.title}
          {item.privateLabel ? (
            <span className={styles.privateLabel}> — {item.privateLabel}</span>
          ) : null}
        </li>
      ))}
    </ul>
  );
}

export default function Home(): ReactElement {
  return (
    <Layout
      title="Enterprise AI & Cloud Architect"
      description="Executive technical portfolio for Dr. Tatianna Gilliam — enterprise AI, human-in-the-loop systems, ERP transformation, AI governance, and Azure architecture with public technical proof."
    >
      <header className={styles.hero}>
        <div className={clsx('container', styles.heroInner)}>
          <div className={styles.heroCopy}>
            <p className={styles.eyebrow}>Master Tech Portfolio</p>
            <Heading as="h1" className={styles.heroTitle}>
              Dr. Tatianna Gilliam, DBA
            </Heading>
            <p className={styles.heroRole}>
              Enterprise AI &amp; Cloud Architect
              <br />
              ERP Transformation · AI Governance · Human-in-the-Loop Systems
            </p>
            <p className={styles.heroLead}>
              Turning enterprise complexity into governed, evidence-first AI and cloud
              systems that ship.
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
                href="https://github.com/Tmgilliam"
              >
                View GitHub Activity
              </Link>
            </div>
          </div>
          <div className={styles.heroPortraitWrap}>
            <img
              className={styles.heroPortrait}
              src="/img/profile/dr-gilliam.jpg"
              alt="Professional portrait of Dr. Tatianna Gilliam"
              width={320}
              height={320}
            />
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
              eyebrow="Senior problems"
              title="Outcomes, not slogans"
              description="Qualitative outcomes only — no invented metrics."
            />
            <div className={styles.grid3}>
              {seniorProblems.map((problem) => (
                <article key={problem.title} className={styles.pillarCard}>
                  <Heading as="h3">{problem.title}</Heading>
                  <p>{problem.outcome}</p>
                  <Link href={problem.href}>Read the evidence</Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className={clsx(styles.section, styles.alt)}>
          <div className="container">
            <SectionHeading
              eyebrow="Proof in one click"
              title="Where to inspect the work"
              description="Direct destinations for recruiters who want verifiable technical confidence."
            />
            <div className={styles.proofGrid}>
              {proofCards.map((card) => (
                <Link
                  key={card.title}
                  className={styles.proofCard}
                  href={card.href}
                  aria-label={`${card.title}: ${card.cta}`}
                >
                  <Heading as="h3">{card.title}</Heading>
                  <p>{card.value}</p>
                  <span className={styles.proofCta}>{card.cta}</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <div className="container">
            <SectionHeading
              eyebrow="Featured technical systems"
              title="Released and active public proof"
              description="Five strongest public systems. Full curated catalog lives on Projects."
            />
            <div className={styles.grid3}>
              {featuredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} compact />
              ))}
            </div>
            <p className="margin-top--md">
              <Link href="/projects">Browse the curated project catalog</Link>
            </p>
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
              eyebrow="Recent Shipments"
              title="Released and verified public work"
              description="Evidence links only — no hard-coded contribution counts or stars."
            />
            <div className={styles.shipmentGrid}>
              {recentShipments.map((shipment) => (
                <article key={shipment.id} className={styles.shipmentCard}>
                  <Heading as="h3">{shipment.title}</Heading>
                  <p>{shipment.summary}</p>
                  <div className={styles.shipmentLinks}>
                    {shipment.evidence.map((item) => (
                      <Link key={`${shipment.id}-${item.label}`} href={item.url}>
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className={clsx(styles.section, styles.alt)}>
          <div className="container">
            <SectionHeading
              eyebrow="Public Engineering Momentum"
              title="Honest status with public evidence"
              description="Every item links to public proof or is clearly labeled private or planned."
            />
            <div className={styles.grid3}>
              <div className={styles.statusColumn}>
                <Heading as="h3">Released</Heading>
                <MomentumList items={momentumReleased} />
              </div>
              <div className={styles.statusColumn}>
                <Heading as="h3">In Progress</Heading>
                <MomentumList items={momentumInProgress} />
              </div>
              <div className={styles.statusColumn}>
                <Heading as="h3">Planned</Heading>
                <MomentumList items={momentumPlanned} />
              </div>
            </div>
            <p className={styles.roadmapNote}>
              <Link href="https://github.com/orgs/Brilliant-Brainstorm-Intelligence-LLC/projects/1">
                Follow BBI public engineering
              </Link>
              {' · '}
              <Link href="https://github.com/Tmgilliam">View GitHub activity</Link>
            </p>
          </div>
        </section>

        <section className={styles.section} id="bbios-teaser">
          <div className="container">
            <SectionHeading
              eyebrow="Private system case study"
              title="BBIOS"
              description="Private human-governed AI operating system — architecture summary only."
            />
            <article className={styles.bbiosCard}>
              <p>
                A local-first operating architecture for capturing work, routing decisions,
                controlling execution, verifying outcomes, and preserving evidence.
              </p>
              <p className={styles.bbiosDefinition}>
                BBIOS is a private, human-governed operating system for evidence, decision
                control, authorized execution, and operational verification.
              </p>
              <ul className={styles.boundaryList}>
                <li>Private system</li>
                <li>Source repository not public</li>
                <li>No proprietary implementation details disclosed</li>
              </ul>
              <Link className="button button--secondary button--lg" to="/architecture#bbios-private-architecture">
                Explore the sanitized architecture
              </Link>
            </article>
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
              patterns, architecture standards, and sanitized enterprise transformation case
              studies.
            </p>
            <Heading as="h3" className={styles.domainsTitle}>
              Enterprise environments and technical domains
            </Heading>
            <ul className={styles.domainList}>
              {domains.map((domain) => (
                <li key={domain}>{domain}</li>
              ))}
            </ul>
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
              eyebrow="Writing and public decisions"
              title="Inspect the reasoning"
              description="Architecture articles and ADRs — public decisions you can read."
            />
            <div className={styles.ctaRow}>
              <Link className="button button--secondary button--lg" to="/writing">
                Writing
              </Link>
              <Link
                className="button button--secondary button--lg"
                to="/docs/architecture-decisions/"
              >
                Architecture decisions
              </Link>
              <Link
                className="button button--secondary button--lg"
                to="/blog/evidence-before-implementation"
              >
                Latest article
              </Link>
            </div>
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
