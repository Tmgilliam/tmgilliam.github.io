import type {ReactElement} from 'react';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import Link from '@docusaurus/Link';

export default function AboutPage(): ReactElement {
  return (
    <Layout
      title="About"
      description="About Dr. Tatianna Gilliam — enterprise AI, cloud architecture, ERP transformation, and governed systems."
    >
      <main className="container margin-vert--lg">
        <Heading as="h1">About Dr. Tatianna Gilliam</Heading>
        <p>
          Dr. Tatianna Gilliam, DBA, is an enterprise AI and cloud architect focused on
          ERP transformation, evidence-first AI readiness, human-in-the-loop systems, and
          public technical proof.
        </p>
        <p>
          She founds and leads{' '}
          <Link href="https://github.com/Brilliant-Brainstorm-Intelligence-LLC">
            Brilliant Brainstorm Intelligence, LLC
          </Link>
          , building governed AI and operational intelligence tools that connect evidence,
          human authority, execution, and measurable outcomes.
        </p>
        <Heading as="h2">What senior problems she solves</Heading>
        <ul>
          <li>AI initiatives that begin without readiness evidence</li>
          <li>ERP and warehouse systems with fragmented data and unclear ownership</li>
          <li>Architecture decisions disconnected from adoption and operational risk</li>
          <li>Agent and automation designs without explicit human authority</li>
        </ul>
        <Heading as="h2">Where to inspect the work</Heading>
        <ul>
          <li>
            <Link to="/projects">Technical projects</Link>
          </li>
          <li>
            <Link to="/architecture">Architecture hub</Link>
          </li>
          <li>
            <Link href="https://github.com/Tmgilliam">GitHub</Link>
          </li>
          <li>
            <Link href="https://www.linkedin.com/in/drtatianna-dba">LinkedIn</Link>
          </li>
        </ul>
      </main>
    </Layout>
  );
}
