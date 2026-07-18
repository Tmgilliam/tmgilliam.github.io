import type {ReactElement} from 'react';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import Link from '@docusaurus/Link';
import {skillGroups} from '@site/src/data/skills';

export default function ArchitecturePage(): ReactElement {
  return (
    <Layout
      title="Architecture"
      description="Architecture strengths, decisions, and public-safe enterprise patterns."
    >
      <main className="container margin-vert--lg">
        <Heading as="h1">Architecture</Heading>
        <p>
          Architecture work spanning enterprise systems, AI governance, cloud delivery,
          and evidence boundaries. Start with strengths, then inspect decisions and case
          documentation.
        </p>
        <div className="row">
          {skillGroups.map((group) => (
            <div key={group.id} className="col col--4 margin-bottom--lg">
              <Heading as="h2">{group.title}</Heading>
              <ul>
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <Link href={group.href}>Open documentation</Link>
            </div>
          ))}
        </div>
        <Heading as="h2">Architecture decisions</Heading>
        <ul>
          <li>
            <Link to="/docs/architecture-decisions/adr-001-portfolio-platform">
              ADR-001 Portfolio platform
            </Link>
          </li>
          <li>
            <Link to="/docs/architecture-decisions/adr-002-public-proof-boundary">
              ADR-002 Public proof boundary
            </Link>
          </li>
          <li>
            <Link to="/docs/architecture-decisions/adr-003-static-deployment">
              ADR-003 Static deployment
            </Link>
          </li>
        </ul>

        <Heading as="h2" id="bbios-private-architecture">
          BBIOS — private architecture summary
        </Heading>
        <p>
          BBIOS is a private, human-governed operating system for evidence, decision
          control, authorized execution, and operational verification.
        </p>
        <p>
          It is a local-first operating architecture for capturing work, routing
          decisions, controlling execution, verifying outcomes, and preserving evidence.
        </p>
        <ul>
          <li>
            <strong>Private system</strong>
          </li>
          <li>
            <strong>Source repository not public</strong>
          </li>
          <li>
            <strong>No proprietary implementation details disclosed</strong>
          </li>
        </ul>
        <p>
          Public proof for related ideas appears in the AI readiness kit, governed-agent
          documentation, and the BBI public engineering roadmap — not via BBIOS source
          access.
        </p>
        <p>
          <Link href="/projects">Browse public projects</Link>
          {' · '}
          <Link href="https://github.com/orgs/Brilliant-Brainstorm-Intelligence-LLC/projects/1">
            Follow BBI public engineering
          </Link>
        </p>
      </main>
    </Layout>
  );
}
