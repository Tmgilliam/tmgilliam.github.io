import type {ReactElement} from 'react';
import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';
import {missionControlTiles} from '@site/src/data/missionControl';
import styles from './styles.module.css';

export default function MissionControl(): ReactElement {
  return (
    <section className={styles.section} aria-labelledby="mission-control-title">
      <div className="container">
        <p className={styles.eyebrow}>Living engineering platform</p>
        <Heading as="h2" id="mission-control-title">
          Engineering Mission Control
        </Heading>
        <p className={styles.lead}>
          Everything below is evidence-backed and links somewhere real. No vanity
          counters. No fluff.
        </p>
        <div className={styles.grid}>
          {missionControlTiles.map((tile) => (
            <Link
              key={tile.label}
              className={styles.tile}
              href={tile.href}
              aria-label={`${tile.label}: ${tile.detail}`}
            >
              <span className={styles.tileLabel}>{tile.label}</span>
              <span className={styles.tileDetail}>{tile.detail}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
