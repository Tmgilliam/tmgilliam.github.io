import {useState, type ReactElement} from 'react';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import Link from '@docusaurus/Link';
import {architectureNodes} from '@site/src/data/ecosystem';
import styles from './explorer.module.css';

export default function ArchitectureExplorerPage(): ReactElement {
  const [activeId, setActiveId] = useState(architectureNodes[0]?.id ?? '');
  const active =
    architectureNodes.find((node) => node.id === activeId) ?? architectureNodes[0];

  return (
    <Layout
      title="Architecture Explorer"
      description="Clickable systems map—responsibilities, technologies, tradeoffs, ADRs, and docs."
    >
      <main className="container margin-vert--lg">
        <Heading as="h1">Architecture Explorer</Heading>
        <p>
          Systems thinking for recruiters and collaborators. Select a node to inspect
          responsibilities, technologies, tradeoffs, and evidence links.
        </p>

        <div className={styles.explorerLayout}>
          <div className={styles.nodeRail} role="list">
            {architectureNodes.map((node) => (
              <button
                key={node.id}
                type="button"
                role="listitem"
                className={
                  node.id === active?.id ? styles.nodeButtonActive : styles.nodeButton
                }
                onClick={() => setActiveId(node.id)}
                aria-pressed={node.id === active?.id}
              >
                {node.name}
              </button>
            ))}
          </div>

          {active ? (
            <article className={styles.detailCard} aria-live="polite">
              <Heading as="h2">{active.name}</Heading>
              <Heading as="h3">Responsibilities</Heading>
              <ul>
                {active.responsibilities.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <Heading as="h3">Technologies</Heading>
              <ul>
                {active.technologies.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <Heading as="h3">Tradeoffs</Heading>
              <ul>
                {active.tradeoffs.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <div className={styles.detailLinks}>
                <Link href={active.docsHref}>Documentation</Link>
                {active.adrHref ? <Link href={active.adrHref}>Related ADR</Link> : null}
                {active.repoHref ? <Link href={active.repoHref}>Repository</Link> : null}
              </div>
            </article>
          ) : null}
        </div>

        <p className="margin-top--lg">
          <Link href="/ecosystem">Ecosystem map</Link>
          {' · '}
          <Link href="/docs/architecture-decisions/">All ADRs</Link>
          {' · '}
          <Link href="/architecture">Architecture hub</Link>
        </p>
      </main>
    </Layout>
  );
}
