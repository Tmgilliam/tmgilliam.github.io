import type {ReactElement} from 'react';
import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';
import Layout from '@theme/Layout';
import clsx from 'clsx';
import {
  audienceTranslations,
  bbiEngagementLinks,
  engagementFormats,
  engagementTopics,
  type EngagementAvailability,
} from '@site/src/data/engagements';
import styles from './speaking.module.css';

function availabilityClass(availability: EngagementAvailability): string {
  if (availability === 'Limited') {
    return styles.badgeLimited;
  }
  if (availability === 'Planned') {
    return styles.badgePlanned;
  }
  return '';
}

function SpeakingHero(): ReactElement {
  return (
    <header className={styles.hero}>
      <div className={clsx('container', styles.heroInner)}>
        <p className={styles.eyebrow}>Public engagements</p>
        <Heading as="h1" className={styles.heroTitle}>
          Speaking, Workshops &amp; Advisory
        </Heading>
        <p className={styles.heroLead}>
          Dr. Tatianna Gilliam translates enterprise AI, ERP transformation, data
          architecture, and governed systems into decisions that technical teams and
          executive leaders can act on.
        </p>
        <p className={styles.heroSupport}>
          Engagements are designed around evidence, operating reality, human authority,
          implementation risk, and the practical work required to move from technology
          ambition to deployable systems.
        </p>
        <p className={styles.bbiBridge}>
          Through Brilliant Brainstorm Intelligence, LLC, selected public engagements
          connect enterprise strategy with architecture, data, governance, and operational
          execution.
        </p>
      </div>
    </header>
  );
}

function EngagementFormats(): ReactElement {
  return (
    <section className={styles.section} aria-labelledby="engagement-formats-heading">
      <div className="container">
        <Heading as="h2" id="engagement-formats-heading">
          Engagement formats
        </Heading>
        <p className={styles.sectionIntro}>
          Formats below reflect offer-readiness review. Limited means selected public
          engagements may be discussed through approved channels. Planned means the topic
          catalog is ready, but open booking is not published here.
        </p>
        <div className={styles.grid2}>
          {engagementFormats.map((format) => (
            <article key={format.id} className={styles.card}>
              <div className={styles.cardHeader}>
                <Heading as="h3">{format.title}</Heading>
                <span
                  className={clsx(styles.badge, availabilityClass(format.availability))}
                >
                  {format.availability}
                </span>
              </div>
              <p className={styles.summary}>{format.summary}</p>
              <p className={styles.listLabel}>Audience</p>
              <ul>
                {format.audience.map((item) => (
                  <li key={`${format.id}-audience-${item}`}>{item}</li>
                ))}
              </ul>
              <p className={styles.listLabel}>Outcomes</p>
              <ul>
                {format.outcomes.map((item) => (
                  <li key={`${format.id}-outcome-${item}`}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function TopicCatalog(): ReactElement {
  return (
    <section
      className={clsx(styles.section, styles.alt)}
      aria-labelledby="topic-catalog-heading"
    >
      <div className="container">
        <Heading as="h2" id="topic-catalog-heading">
          Verified topic catalog
        </Heading>
        <p className={styles.sectionIntro}>
          Each topic links only to existing public proof — released repositories,
          published documentation, or published writing.
        </p>
        <div className={styles.grid2}>
          {engagementTopics.map((topic) => (
            <article key={topic.id} className={styles.topicCard}>
              <div className={styles.cardHeader}>
                <Heading as="h3">{topic.title}</Heading>
                <span
                  className={clsx(styles.badge, availabilityClass(topic.availability))}
                >
                  {topic.availability}
                </span>
              </div>
              <p className={styles.listLabel}>Audience</p>
              <ul>
                {topic.audience.map((item) => (
                  <li key={`${topic.id}-audience-${item}`}>{item}</li>
                ))}
              </ul>
              <p className={styles.listLabel}>Core question</p>
              <p className={styles.coreQuestion}>{topic.coreQuestion}</p>
              <p className={styles.listLabel}>Takeaways</p>
              <ul>
                {topic.takeaways.map((item) => (
                  <li key={`${topic.id}-takeaway-${item}`}>{item}</li>
                ))}
              </ul>
              <p className={styles.listLabel}>Related public proof</p>
              <nav className={styles.proofNav} aria-label={`${topic.title} proof links`}>
                {topic.relatedProof.map((proof) => (
                  <Link key={`${topic.id}-${proof.url}`} href={proof.url}>
                    {proof.label}
                  </Link>
                ))}
              </nav>
              <div className={styles.metaRow}>
                <span>Formats: {topic.formatSuitability.join(' · ')}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function AudienceTranslation(): ReactElement {
  return (
    <section className={styles.section} aria-labelledby="audience-translation-heading">
      <div className="container">
        <Heading as="h2" id="audience-translation-heading">
          Communication Across the Organization
        </Heading>
        <p className={styles.sectionIntro}>
          The same system can be explained differently without changing the underlying
          architecture — so executives, engineers, and operators can act from a shared
          evidence base.
        </p>
        <div className={styles.grid3}>
          {audienceTranslations.map((item, index) => (
            <article key={item.id} className={styles.audienceCard}>
              <span className={styles.iconMark} aria-hidden="true">
                {index + 1}
              </span>
              <Heading as="h3">{item.audience}</Heading>
              <p>{item.focus}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function BBIInstitutionalSection(): ReactElement {
  return (
    <section
      className={clsx(styles.section, styles.alt)}
      aria-labelledby="bbi-institutional-heading"
    >
      <div className="container">
        <article className={styles.bbiPanel}>
          <Heading as="h2" id="bbi-institutional-heading">
            Brilliant Brainstorm Intelligence, LLC
          </Heading>
          <p>
            Brilliant Brainstorm Intelligence develops governed AI, enterprise
            architecture, ERP transformation, and evidence-first operating tools.
          </p>
          <p>
            Public engagements connect technical systems to business decisions,
            implementation controls, and measurable operational work.
          </p>
          <div className={styles.ctaRow}>
            {bbiEngagementLinks.map((link) => (
              <Link
                key={link.href}
                className="button button--secondary button--lg"
                href={link.href}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </article>
      </div>
    </section>
  );
}

function EngagementCallToAction(): ReactElement {
  return (
    <section className={styles.section} aria-labelledby="engagement-cta-heading">
      <div className="container">
        <footer className={styles.ctaPanel}>
          <Heading as="h2" id="engagement-cta-heading">
            Discuss an Engagement
          </Heading>
          <p>
            For speaking, workshop, advisory, or technical-review inquiries, use the
            approved BBI contact channel or connect with Dr. Gilliam professionally on
            LinkedIn.
          </p>
          <p className={styles.note}>
            This page does not accept form submissions. No inactive or deceptive form is
            present. Inquiry delivery remains on approved external channels until a
            privacy-reviewed flow is implemented.
          </p>
          <div className={styles.ctaRow}>
            <Link
              className="button button--primary button--lg"
              href="https://www.bbiedge.com/#contact"
            >
              Visit BBI Edge
            </Link>
            <Link
              className="button button--secondary button--lg"
              href="https://www.linkedin.com/in/drtatianna-dba"
            >
              Connect on LinkedIn
            </Link>
            <Link className="button button--secondary button--lg" to="/projects">
              Explore Technical Work
            </Link>
          </div>
        </footer>
      </div>
    </section>
  );
}

export default function SpeakingPage(): ReactElement {
  return (
    <Layout
      title="Speaking, Workshops & Advisory"
      description="Executive briefings, technical workshops, and public engagements on enterprise AI, ERP transformation, governed systems, data readiness, and human-in-the-loop architecture."
    >
      <main>
        <SpeakingHero />
        <EngagementFormats />
        <TopicCatalog />
        <AudienceTranslation />
        <BBIInstitutionalSection />
        <EngagementCallToAction />
      </main>
    </Layout>
  );
}
