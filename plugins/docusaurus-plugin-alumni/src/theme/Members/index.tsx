import React from 'react';
import MemberCard from '@theme/MemberCard';
import type { Props } from '@theme/Members';

import styles from './styles.module.css';

export default function MemberList({ members }: Props): JSX.Element {
  return (
    <div className={styles.alumnusContainer}>
      {members.map((member) => (
        <MemberCard key={member.name} {...member} />
      ))}
    </div>
  );
}
