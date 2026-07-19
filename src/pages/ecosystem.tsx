import type {ReactElement} from 'react';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import Link from '@docusaurus/Link';
import {ecosystemRoot} from '@site/src/data/ecosystem';
import styles from './explorer.module.css';

export default function EcosystemPage(): ReactElement {
  return (
    <Layout
      title="Engineering Ecosystem"
      description="Interactive map of BBI public systems and the private BBIOS boundary."
    >
      <main className="container margin-vert--lg">
        <Heading as="h1">Engineering Ecosystem</Heading>
        <p>
          Not a flat project list—an ecosystem. Every node links to public evidence or a
          clearly labeled private architecture summary.
        </p>

        <article className={styles.rootCard}>
          <Heading as="h2">{ecosystemRoot.name}</Heading>
          <p>{ecosystemRoot.summary}</p>
          <p>
            <span className={styles.status}>{ecosystemRoot.status}</span>{' '}
            <Link href={ecosystemRoot.href}>Open organization</Link>
          </p>
        </article>

        <div className={styles.nodeGrid}>
          {ecosystemRoot.children?.map((node) => (
            <Link key={node.id} className={styles.nodeCard} href={node.href}>
              <div className={styles.nodeMeta}>
                <span className={styles.status}>{node.status}</span>
              </div>
              <Heading as="h3">{node.name}</Heading>
              <p>{node.summary}</p>
              <span className={styles.cta}>Inspect</span>
            </Link>
          ))}
        </div>

        <p className="margin-top--lg">
          <Link href="/architecture-explorer">Open Architecture Explorer</Link>
          {' · '}
          <Link href="/docs/engineering-platform/living-platform-roadmap">
            Living platform roadmap
          </Link>
        </p>
      </main>
    </Layout>
  );
}
