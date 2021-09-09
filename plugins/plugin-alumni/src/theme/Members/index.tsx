import React, { ReactElement } from 'react';
import MemberCard from '@theme/MemberCard';
import type { Props } from '@theme/Members';

import styles from './styles.module.css';

const MemberList = ({ members }: Props): ReactElement => (
  <div className={styles.alumnusContainer}>
    {members.map((member) => (
      // Assume "name" will be unique here
      // The props spreading syntax seems to be very intuitive here
      // eslint-disable-next-line react/jsx-props-no-spreading
      <MemberCard key={member.name} {...member} />
    ))}
  </div>
);

export default MemberList;
