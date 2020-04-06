import React, { ReactElement } from 'react';
import styles from './Members.module.css';

import MemberCard from "./MemberCard";

type Member = {
  readonly name: string;
  readonly image: string;
  readonly website: string;
  readonly github: string;
  readonly linkedin: string;
  readonly bio: string;
  readonly favoredLink: string;
};

const MemberList = ({members}: { readonly members: readonly Member[] }): ReactElement => (
  <div className={styles.alumnusContainer}>
    {members.map(member => (
      // Assume "name" will be unique here
      <MemberCard key={member.name} {...member} />
    ))}
  </div>
);

export default MemberList;
