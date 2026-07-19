import type {ReactElement} from 'react';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type Props = {
  eyebrow?: string;
  title: string;
  description?: string;
  id?: string;
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
  id,
}: Props): ReactElement {
  return (
    <header className={styles.heading}>
      {eyebrow ? <p className={styles.eyebrow}>{eyebrow}</p> : null}
      <Heading as="h2" id={id}>
        {title}
      </Heading>
      {description ? <p className={styles.description}>{description}</p> : null}
    </header>
  );
}
