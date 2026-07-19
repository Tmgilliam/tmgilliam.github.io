import type {ReactElement} from 'react';
import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';
import clsx from 'clsx';
import type {Project} from '@site/src/data/projects';
import styles from './styles.module.css';

type Props = {
  project: Project;
  compact?: boolean;
};

export default function ProjectCard({project, compact = false}: Props): ReactElement {
  return (
    <article id={project.id} className={clsx(styles.card, compact && styles.compact)}>
      <div className={styles.meta}>
        <span className={styles.status}>{project.status}</span>
        <span className={styles.gate}>Proof Gate: {project.publicProofGate}</span>
      </div>
      <Heading as="h3" className={styles.title}>
        {project.name}
      </Heading>
      <p className={styles.summary}>{project.summary}</p>
      {project.boundaryNote ? (
        <p className={styles.boundaryNote}>
          <strong>Boundary:</strong> {project.boundaryNote}
        </p>
      ) : null}
      {!compact && (
        <>
          <p>
            <strong>Problem:</strong> {project.problem}
          </p>
          <p>
            <strong>Role:</strong> {project.role}
          </p>
          <ul className={styles.signals}>
            {project.recruiterSignals.map((signal) => (
              <li key={signal}>{signal}</li>
            ))}
          </ul>
          <div className={styles.tech}>
            {project.technologies.map((tech) => (
              <span key={tech}>{tech}</span>
            ))}
          </div>
        </>
      )}
      <div className={styles.links}>
        {project.evidence.map((item) => (
          <Link key={`${project.id}-${item.label}`} href={item.url}>
            {item.label}
          </Link>
        ))}
      </div>
    </article>
  );
}
