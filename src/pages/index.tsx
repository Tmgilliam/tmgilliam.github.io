import type {ReactElement} from 'react';
import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';
import Layout from '@theme/Layout';
import clsx from 'clsx';
import MissionControl from '@site/src/components/MissionControl';
import ProjectCard from '@site/src/components/ProjectCard';
import SectionHeading from '@site/src/components/SectionHeading';
import {
  momentumInProgress,
  momentumInReview,
  momentumPlanned,
  momentumReleased,
  recentShipments,
} from '@site/src/data/homeShipments';
import {featuredProjects} from '@site/src/data/projects';
import styles from './index.module.css';

type ProofCard = {
  title: string;
  value: string;
  href: string;
  cta: string;
};

type EvidenceLane = {
  title: string;
  destination: string;
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
    value: 'Released tools, case studies, and public engineering systems.',
    href: '/projects',
    cta: 'Inspect projects',
  },
  {
    title: 'Architecture Hub',
    value: 'System boundaries, data flows, ADRs, security models, and tradeoffs.',
    href: '/architecture',
    cta: 'Inspect architecture',
  },
  {
    title: 'Systems Map',
    value: 'Interactive architecture explorer—responsibilities, tradeoffs, and evidence.',
    href: '/architecture-explorer',
    cta: 'Explore systems',
  },
  {
    title: 'Recent Shipments',
    value: 'Releases, public milestones, and completed engineering controls.',
    href: '#recent-shipments',
    cta: 'Review shipments',
  },
  {
    title: 'BBI Engineering',
    value: 'Company tools, governance, roadmap, Discussions, and releases.',
    href: 'https://github.com/Brilliant-Brainstorm-Intelligence-LLC',
    cta: 'Open BBI engineering',
  },
  {
    title: 'GitHub Profile',
    value: 'Repositories, contribution activity, pull requests, and open-source work.',
    href: 'https://github.com/Tmgilliam',
    cta: 'View GitHub activity',
  },
];

const evidenceLanes: EvidenceLane[] = [
  {
    title: 'ERP Transformation',
    destination: 'Sanitized ERP architecture and case studies',
    href: '/docs/erp-transformation/',
  },
  {
    title: 'Enterprise AI',
    destination: 'AI Readiness Diagnostic documentation',
    href: '/docs/enterprise-ai/ai-readiness-diagnostic',
  },
  {
    title: 'Cloud Architecture',
    destination: 'Azure Landing Zone Reference',
    href: 'https://github.com/Tmgilliam/azure-landing-zone-reference',
  },
  {
    title: 'Governed Systems',
    destination: 'Human-authority and agent-execution architecture',
    href: '/docs/enterprise-ai/governed-agent-systems',
  },
];

const durableProof = [
  'Public release shipped',
  'Protected delivery workflow',
  'Passing CI and security controls',
  'Published architecture case studies',
  'Public engineering roadmap',
  'Active open-source discussions',
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

function PublicProofDiagram(): ReactElement {
  const stages = [
    {label: 'Approved facts', x: 24},
    {label: 'Registry', x: 148},
    {label: 'Privacy check', x: 272},
    {label: 'Proof Gate', x: 396},
    {label: 'Human merge', x: 520},
    {label: 'Live verify', x: 644},
  ];
  return (
    <figure className={styles.diagram} aria-labelledby="diagram-public-proof">
      <figcaption id="diagram-public-proof" className={styles.diagramCaption}>
        Public-proof publishing boundary
      </figcaption>
      <svg
        viewBox="0 0 780 200"
        role="img"
        aria-label="Approved facts flow through registry, privacy checks, proof gate, human merge, and deployment"
      >
        <rect width="780" height="200" rx="12" fill="#141A24" />
        {stages.map((stage, index) => (
          <g key={stage.label}>
            <rect
              x={stage.x}
              y="64"
              width="112"
              height="52"
              rx="8"
              fill="#1A2740"
              stroke="#E0BE68"
            />
            <text
              x={stage.x + 56}
              y="95"
              textAnchor="middle"
              fill="#F4F4F0"
              fontSize="12"
              fontFamily="Segoe UI, Arial, sans-serif"
            >
              {stage.label}
            </text>
            {index < stages.length - 1 ? (
              <path
                d={`M ${stage.x + 114} 90 H ${stage.x + 122}`}
                stroke="#6F86A8"
                strokeWidth="2"
              />
            ) : null}
          </g>
        ))}
        <text
          x="390"
          y="160"
          textAnchor="middle"
          fill="#A6B2C4"
          fontSize="12"
          fontFamily="Segoe UI, Arial, sans-serif"
        >
          Private systems and unapproved claims stay outside the boundary
        </text>
      </svg>
    </figure>
  );
}

function BbiosLoopDiagram(): ReactElement {
  return (
    <figure className={styles.diagram} aria-labelledby="diagram-bbios-loop">
      <figcaption id="diagram-bbios-loop" className={styles.diagramCaption}>
        BBIOS sanitized operating loop
      </figcaption>
      <svg
        viewBox="0 0 720 160"
        role="img"
        aria-label="Capture Route Prioritize Execute Verify Update Continue"
      >
        <rect width="720" height="160" rx="12" fill="#141A24" />
        {[
          'Capture',
          'Route',
          'Prioritize',
          'Execute',
          'Verify',
          'Update',
          'Continue',
        ].map((label, index) => {
          const x = 18 + index * 100;
          return (
            <g key={label}>
              <rect
                x={x}
                y="48"
                width="88"
                height="48"
                rx="8"
                fill="#1A2740"
                stroke="#E0BE68"
              />
              <text
                x={x + 44}
                y="77"
                textAnchor="middle"
                fill="#F4F4F0"
                fontSize="12"
                fontFamily="Segoe UI, Arial, sans-serif"
              >
                {label}
              </text>
              {index < 6 ? (
                <path d={`M ${x + 90} 72 H ${x + 98}`} stroke="#6F86A8" strokeWidth="2" />
              ) : null}
            </g>
          );
        })}
        <text
          x="360"
          y="130"
          textAnchor="middle"
          fill="#A6B2C4"
          fontSize="12"
          fontFamily="Segoe UI, Arial, sans-serif"
        >
          Architecture summary only — private system, repository not public
        </text>
      </svg>
    </figure>
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
              ERP Transformation · Governed Agents · Human-in-the-Loop Systems
            </p>
            <p className={styles.heroLead}>
              I turn enterprise complexity into governed, evidence-first AI, cloud, and
              ERP systems that can be inspected, shipped, and trusted.
            </p>
            <p className={styles.heroSecondary}>
              Building BBIOS, a private human-governed operating system for evidence,
              decision control, authorized execution, and verification.
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
            <p className={styles.heroSupport}>
              Public releases · Inspectable architecture · Governed delivery
            </p>
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

        <section
          className={styles.researchFoundation}
          aria-labelledby="research-foundation-title"
        >
          <div className="container">
            <div className={styles.researchInner}>
              <div className={styles.researchIcon} aria-hidden="true">
                <svg
                  width="36"
                  height="36"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M8 7h8M8 11h6"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              <div className={styles.researchCopy}>
                <p className={styles.researchEyebrow}>Doctoral foundation</p>
                <Heading as="h2" id="research-foundation-title">
                  Research Foundation
                </Heading>
                <p className={styles.researchLead}>
                  This portfolio is informed by doctoral research into ERP implementation
                  strategies in manufacturing organizations. That inquiry now extends into
                  enterprise architecture, AI governance, cloud transformation, and
                  evidence-first operational systems.
                </p>
                <div className={styles.researchActions}>
                  <Link
                    className="button button--primary"
                    href="https://scholarworks.waldenu.edu/dissertations/12693"
                  >
                    Read the Doctoral Research
                  </Link>
                  <Link
                    className="button button--secondary"
                    href="/docs/research/research-overview"
                  >
                    Portfolio research summary
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <MissionControl />

        <section className={styles.section}>
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

        <section className={clsx(styles.section, styles.alt)}>
          <div className="container">
            <SectionHeading
              id="recent-shipments"
              eyebrow="Recent Shipments"
              title="Released and verified public work"
              description="Only items with live evidence. No hard-coded contribution totals."
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
            <p className={styles.roadmapNote}>
              <Link href="https://github.com/orgs/Brilliant-Brainstorm-Intelligence-LLC/projects/1">
                Follow BBI public engineering
              </Link>
            </p>
          </div>
        </section>

        <section className={styles.section}>
          <div className="container">
            <SectionHeading
              eyebrow="Evidence lanes"
              title="Explore substantial destinations"
              description="Every Explore link lands on documentation or a public repository—not a vanity page."
            />
            <div className={styles.proofGrid}>
              {evidenceLanes.map((lane) => (
                <Link
                  key={lane.title}
                  className={styles.proofCard}
                  href={lane.href}
                  aria-label={`Explore ${lane.title}`}
                >
                  <Heading as="h3">{lane.title}</Heading>
                  <p>{lane.destination}</p>
                  <span className={styles.proofCta}>Explore</span>
                </Link>
              ))}
            </div>
            <ul className={styles.durableList} aria-label="Durable proof signals">
              {durableProof.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </section>

        <section className={clsx(styles.section, styles.alt)}>
          <div className="container">
            <SectionHeading
              eyebrow="Featured technical systems"
              title="Released and active public proof"
              description="Status, proof gate, problem, role, and evidence—without decorative badges or fake completion percentages."
            />
            <div className={styles.featuredGrid}>
              {featuredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
            <p className="margin-top--md">
              <Link href="/projects">Browse the curated project catalog</Link>
            </p>
          </div>
        </section>

        <section className={styles.section}>
          <div className="container">
            <SectionHeading
              eyebrow="Architecture visuals"
              title="Boundaries and operating flow"
              description="Diagrams for understanding—not decorative command-center wallpaper."
            />
            <div className={styles.diagramStack}>
              <PublicProofDiagram />
              <BbiosLoopDiagram />
            </div>
          </div>
        </section>

        <section className={clsx(styles.section, styles.alt)}>
          <div className="container">
            <SectionHeading
              eyebrow="Public Engineering Momentum"
              title="Milestone-backed states"
              description="Planned, in review, in progress, released—or clearly labeled private."
            />
            <div className={styles.grid4}>
              <div className={styles.statusColumn}>
                <Heading as="h3">Released</Heading>
                <MomentumList items={momentumReleased} />
              </div>
              <div className={styles.statusColumn}>
                <Heading as="h3">In Review</Heading>
                <MomentumList items={momentumInReview} />
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
                A local-first operating architecture for capturing work, routing
                decisions, controlling execution, verifying outcomes, and preserving
                evidence.
              </p>
              <ul className={styles.boundaryList}>
                <li>Private system</li>
                <li>Source repository not public</li>
                <li>No proprietary implementation details disclosed</li>
              </ul>
              <Link
                className="button button--secondary button--lg"
                to="/architecture#bbios-private-architecture"
              >
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
              description="Governed AI, enterprise architecture, and ERP transformation tools that connect evidence, human authority, execution, and measurable operational outcomes."
            />
            <div className={styles.ctaRow}>
              <Link
                className="button button--primary button--lg"
                href="https://github.com/Brilliant-Brainstorm-Intelligence-LLC"
              >
                Visit BBI Engineering
              </Link>
              <Link
                className="button button--secondary button--lg"
                href="https://github.com/orgs/Brilliant-Brainstorm-Intelligence-LLC/projects/1"
              >
                Follow BBI public engineering
              </Link>
              <Link
                className="button button--secondary button--lg"
                href="https://bbiedge.com"
              >
                Visit BBI Edge
              </Link>
            </div>
          </div>
        </section>

        <section className={clsx(styles.section, styles.closing)}>
          <div className="container">
            <Heading as="h2">
              Explore the work.
              <br />
              Inspect the decisions.
              <br />
              Follow the evidence.
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
