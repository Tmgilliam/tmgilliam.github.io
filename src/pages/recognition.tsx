import type {ReactElement} from 'react';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import Link from '@docusaurus/Link';
import {
  activeAwardCandidates,
  awardsWon,
  communityPrograms,
  finalistNomineeHonoree,
  professionalRecognition,
  type RecognitionItem,
} from '@site/src/data/recognition';

function RecognitionTable({
  title,
  items,
  empty,
}: {
  title: string;
  items: RecognitionItem[];
  empty: string;
}): ReactElement {
  return (
    <section className="margin-bottom--lg">
      <Heading as="h2">{title}</Heading>
      {items.length === 0 ? (
        <p>{empty}</p>
      ) : (
        <div className="table-responsive">
          <table>
            <thead>
              <tr>
                <th>Awarding body</th>
                <th>Recognition</th>
                <th>Category</th>
                <th>Year</th>
                <th>Status</th>
                <th>Subject</th>
                <th>Verification</th>
              </tr>
            </thead>
            <tbody>
              {items.map((item) => (
                <tr key={item.id}>
                  <td>{item.awardingBody}</td>
                  <td>
                    {item.awardOrRecognition}
                    {item.notes ? (
                      <div>
                        <small>{item.notes}</small>
                      </div>
                    ) : null}
                  </td>
                  <td>{item.category || '—'}</td>
                  <td>{item.year}</td>
                  <td>{item.status}</td>
                  <td>{item.subject}</td>
                  <td>
                    {item.verificationUrl ? (
                      <Link href={item.verificationUrl}>Verify</Link>
                    ) : (
                      '—'
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </section>
  );
}

export default function RecognitionPage(): ReactElement {
  return (
    <Layout
      title="Recognition"
      description="Honest awards, certifications, and recognition for Dr. Tatianna Gilliam and Brilliant Brainstorm Intelligence — no unverified claims."
    >
      <main className="container margin-vert--lg">
        <Heading as="h1">Recognition</Heading>
        <p>
          Recognition is displayed accurately. Preparing or submitted entries are not
          described as award-winning. Private systems are never implied to be publicly
          inspectable.
        </p>
        <p>
          Strategy priority: become known for <strong>evidence-first enterprise AI</strong>
          —governed systems where consequential actions are authorized, traceable, and
          supported by evidence. Prestige awards are entered only when the Award Readiness
          Matrix scores 85 or higher.
        </p>
        <p>
          Awards pipeline and evidence pack:{' '}
          <Link href="https://github.com/Tmgilliam/tmgilliam.github.io/tree/main/awards">
            awards/
          </Link>
          {' · '}
          <Link href="https://github.com/Tmgilliam/tmgilliam.github.io/blob/main/awards/recognition-strategy.md">
            Recognition strategy
          </Link>
        </p>

        <RecognitionTable
          title="Awards Won"
          items={awardsWon}
          empty="No awards recorded yet."
        />
        <RecognitionTable
          title="Finalist / Nominee / Honoree"
          items={finalistNomineeHonoree}
          empty="No finalist, nominee, or honoree results recorded yet."
        />
        <RecognitionTable
          title="Active award candidates"
          items={activeAwardCandidates}
          empty="No active candidates."
        />
        <RecognitionTable
          title="Professional Recognition"
          items={professionalRecognition}
          empty="No professional recognition recorded."
        />
        <RecognitionTable
          title="Community Programs"
          items={communityPrograms}
          empty="No community programs listed."
        />

        <Heading as="h2">Speaking and Publications</Heading>
        <ul>
          <li>
            <Link href="/speaking">Speaking and workshops</Link>
          </li>
          <li>
            <Link href="/writing">Writing and public decisions</Link>
          </li>
          <li>
            <Link href="/blog">Blog</Link>
          </li>
        </ul>

        <Heading as="h2">Certifications</Heading>
        <p>
          <Link href="/docs/certifications/">Certification documentation</Link>
        </p>
      </main>
    </Layout>
  );
}
