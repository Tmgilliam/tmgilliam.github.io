import type {ReactElement} from 'react';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import Link from '@docusaurus/Link';

export default function WritingPage(): ReactElement {
  return (
    <Layout
      title="Writing"
      description="Public technical writing on AI readiness, governed agents, and ERP transformation."
    >
      <main className="container margin-vert--lg">
        <Heading as="h1">Writing</Heading>
        <p>
          Public technical writing only. No private journals, MLS content, or internal
          logs.
        </p>
        <Heading as="h2">Published</Heading>
        <ul>
          <li>
            <Link to="/blog/evidence-before-implementation">
              Evidence Before Implementation: Six Questions to Ask Before an AI Build
            </Link>
          </li>
        </ul>
        <Heading as="h2">Drafts</Heading>
        <ul>
          <li>Designing Human Approval into Agent Execution</li>
          <li>What ERP Transformations Teach Us About AI Adoption</li>
        </ul>
        <p>
          <Link to="/blog">Open the blog</Link>
        </p>
      </main>
    </Layout>
  );
}
