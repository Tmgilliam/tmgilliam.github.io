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
      </main>
    </Layout>
  );
}
