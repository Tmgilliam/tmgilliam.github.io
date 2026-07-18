import type {ReactElement} from 'react';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import Link from '@docusaurus/Link';

export default function BbiPage(): ReactElement {
  return (
    <Layout
      title="Brilliant Brainstorm Intelligence"
      description="Public-safe Brilliant Brainstorm Intelligence positioning and engineering links."
    >
      <main className="container margin-vert--lg">
        <Heading as="h1">Brilliant Brainstorm Intelligence, LLC</Heading>
        <p>
          Brilliant Brainstorm Intelligence builds governed AI, enterprise architecture,
          and ERP transformation tools that connect evidence, human authority, execution,
          and measurable operational outcomes.
        </p>
        <p>
          This portfolio is an engineering and professional-proof hub. It is not a
          commercial checkout, intake, or private consulting portal.
        </p>
        <ul>
          <li>
            <Link href="https://github.com/Brilliant-Brainstorm-Intelligence-LLC">
              BBI Engineering on GitHub
            </Link>
          </li>
          <li>
            <Link href="https://github.com/Brilliant-Brainstorm-Intelligence-LLC/bbi-ai-readiness-diagnostic-kit">
              AI Readiness Diagnostic Kit
            </Link>
          </li>
          <li>
            <Link href="https://github.com/orgs/Brilliant-Brainstorm-Intelligence-LLC/projects/1">
              Public Engineering Roadmap
            </Link>
          </li>
          <li>
            <Link href="https://bbiedge.com">BBI Edge</Link>
          </li>
        </ul>
      </main>
    </Layout>
  );
}
