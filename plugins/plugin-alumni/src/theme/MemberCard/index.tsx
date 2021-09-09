import React from 'react';
import { Website, GitHub, LinkedIn, Email } from '@theme/logos';
import type { Props } from '@theme/MemberCard';

import styles from './styles.module.css';

export default function MemberCard({
  name,
  image,
  bio,
  links,
  favoredLink,
}: Props): JSX.Element {
  const icons = {
    website: <Website />,
    github: <GitHub />,
    linkedin: <LinkedIn />,
    email: <Email />,
  };
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <a href={links[favoredLink]}>
          <img
            src={image ?? '/img/alumni/Default.svg'}
            alt={name}
            title={name}
          />
        </a>
        <h3 className={styles.name}>{name}</h3>
      </div>

      {
        // If `bio` exists
        bio && (
          <div className={styles.bio}>
            <p>{bio}</p>
          </div>
        )
      }

      <ul className={styles.links}>
        {Object.keys(links).map((key) => (
          <li key={key}>
            <a href={links[key]} key={links[key]}>
              {icons[key]}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
