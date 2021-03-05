import React, { ReactElement } from 'react';
import styles from './Members.module.css';

import type { Member } from './MemberCard';
import MemberCard from './MemberCard';

type MembersProps = { readonly members: readonly Member[] };

const MemberList = ({ members }: MembersProps): ReactElement => (
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
