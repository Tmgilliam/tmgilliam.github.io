import {useId, useState, type ReactElement} from 'react';
import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';
import clsx from 'clsx';
import type {Project, QualityGateStatus} from '@site/src/data/projects';
import styles from './styles.module.css';

type Props = {
  project: Project;
  compact?: boolean;
};

function gateMark(status: QualityGateStatus): string {
  switch (status) {
    case 'pass':
      return '✓';
    case 'partial':
      return '~';
    case 'pending':
      return '○';
    default:
      return '–';
  }
}

function ActionButtons({project}: {project: Project}): ReactElement {
  const actions = [
    {label: 'Repository', href: project.repositoryUrl},
    {label: 'Documentation', href: project.documentationUrl},
    {label: 'Architecture', href: project.architectureUrl},
    {label: 'Release', href: project.releaseUrl},
    {label: 'Roadmap', href: project.roadmapUrl},
    {label: 'Demo', href: project.demoUrl},
  ].filter((action): action is {label: string; href: string} => Boolean(action.href));

  if (!actions.length) {
    return (
      <div className={styles.actions}>
        {project.evidence.slice(0, 4).map((item) => (
          <Link
            key={`${project.id}-${item.label}`}
            className={styles.action}
            href={item.url}
          >
            {item.label}
          </Link>
        ))}
      </div>
    );
  }

  return (
    <div className={styles.actions}>
      {actions.map((action) => (
        <Link
          key={`${project.id}-${action.label}`}
          className={styles.action}
          href={action.href}
        >
          {action.label}
        </Link>
      ))}
    </div>
  );
}

export default function ProjectCard({project, compact = false}: Props): ReactElement {
  const reviewId = useId();
  const [reviewOpen, setReviewOpen] = useState(false);

  return (
    <article id={project.id} className={clsx(styles.card, compact && styles.compact)}>
      <div className={styles.meta}>
        <span className={styles.status}>{project.status}</span>
        {project.releaseUrl ? (
          <span className={styles.releaseChip}>
            {project.releaseUrl.includes('v0.1.0') ? 'v0.1.0' : 'Release'}
          </span>
        ) : null}
        <span className={styles.gate}>Proof Gate: {project.publicProofGate}</span>
      </div>

      <Heading as="h3" className={styles.title}>
        {project.name}
      </Heading>
      <p className={styles.summary}>{project.summary}</p>

      {project.whyExists ? (
        <p className={styles.whyExists}>
          <span className={styles.whyLabel}>Why this exists</span>
          {project.whyExists}
        </p>
      ) : null}

      {project.whatMakesDifferent && !compact ? (
        <p className={styles.different}>
          <span className={styles.whyLabel}>What makes this different</span>
          {project.whatMakesDifferent}
        </p>
      ) : null}

      {project.boundaryNote ? (
        <p className={styles.boundaryNote}>
          <strong>Boundary:</strong> {project.boundaryNote}
        </p>
      ) : null}

      <div className={styles.tech}>
        {project.technologies.map((tech) => (
          <span key={tech}>{tech}</span>
        ))}
      </div>

      <ActionButtons project={project} />

      {!compact && project.architectureThumb ? (
        <pre className={styles.archThumb} aria-label="Architecture thumbnail">
          {project.architectureThumb}
        </pre>
      ) : null}

      {!compact ? (
        <div className={styles.proofSignals}>
          {project.proofSignals.map((signal) => (
            <span key={signal} className={styles.proofChip}>
              {signal}
            </span>
          ))}
        </div>
      ) : null}

      {!compact && project.problem ? (
        <p className={styles.problem}>
          <strong>Problem solved:</strong> {project.problem}
        </p>
      ) : null}

      {!compact && project.qualityGates?.length ? (
        <div className={styles.qualityBlock}>
          <p className={styles.blockTitle}>Quality Gate</p>
          <ul className={styles.qualityList}>
            {project.qualityGates.map((item) => (
              <li key={item.label} data-status={item.status}>
                <span aria-hidden="true">{gateMark(item.status)}</span>
                {item.label}
                <span className={styles.srOnly}>{item.status}</span>
              </li>
            ))}
          </ul>
        </div>
      ) : null}

      {!compact && (project.keyDecisions?.length || project.tradeoffs?.length) ? (
        <div className={styles.decisionBlock}>
          <p className={styles.blockTitle}>Key Decisions</p>
          {project.keyDecisions?.length ? (
            <ul>
              {project.keyDecisions.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          ) : null}
          {project.tradeoffs?.length ? (
            <>
              <p className={styles.blockTitle}>Tradeoffs</p>
              <ul>
                {project.tradeoffs.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </>
          ) : null}
        </div>
      ) : null}

      {!compact && project.evolution?.length ? (
        <div className={styles.evolution} aria-label="Evolution timeline">
          {project.evolution.map((step, index) => (
            <div
              key={step.stage}
              className={clsx(styles.evoStep, step.active && styles.evoActive)}
            >
              <span className={styles.evoStage}>{step.stage}</span>
              <span className={styles.evoLabel}>{step.label}</span>
              {index < project.evolution!.length - 1 ? (
                <span className={styles.evoArrow} aria-hidden="true">
                  ↓
                </span>
              ) : null}
            </div>
          ))}
        </div>
      ) : null}

      {!compact && project.engineeringReview ? (
        <div className={styles.review}>
          <button
            type="button"
            className={styles.reviewToggle}
            aria-expanded={reviewOpen}
            aria-controls={reviewId}
            onClick={() => setReviewOpen((open) => !open)}
          >
            Engineering Review {reviewOpen ? '▴' : '▾'}
          </button>
          {reviewOpen ? (
            <div id={reviewId} className={styles.reviewBody}>
              <p>
                <strong>Why built:</strong> {project.engineeringReview.whyBuilt}
              </p>
              <p>
                <strong>What succeeded:</strong> {project.engineeringReview.whatSucceeded}
              </p>
              <p>
                <strong>What I&apos;d redesign:</strong>{' '}
                {project.engineeringReview.whatIdRedesign}
              </p>
              <p>
                <strong>Technical debt:</strong> {project.engineeringReview.technicalDebt}
              </p>
              <p>
                <strong>Lessons:</strong> {project.engineeringReview.lessons}
              </p>
              <p>
                <strong>Next release:</strong> {project.engineeringReview.nextRelease}
              </p>
            </div>
          ) : null}
        </div>
      ) : null}
    </article>
  );
}
