import type {ReactElement} from 'react';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import Link from '@docusaurus/Link';

export default function ContactPage(): ReactElement {
  return (
    <Layout
      title="Contact"
      description="Public contact paths for professional and engineering outreach."
    >
      <main className="container margin-vert--lg">
        <Heading as="h1">Contact</Heading>
        <p>
          For professional outreach, use public channels only. Do not send secrets,
          credentials, client data, or confidential materials through public GitHub
          issues.
        </p>
        <ul>
          <li>
            <Link href="https://www.linkedin.com/in/drtatianna-dba">LinkedIn</Link>
          </li>
          <li>
            <Link href="https://github.com/Tmgilliam">GitHub</Link>
          </li>
          <li>
            <Link href="https://bbiedge.com">BBI Edge</Link>
          </li>
        </ul>
      </main>
    </Layout>
  );
}
