import React, { ReactElement } from 'react';
import styles from './Members.module.css';

import MemberCard from './MemberCard';

export type Member = {
  readonly name: string;
  readonly bio?: string; // ideally ≤ 120 characters
  // URL of profile image ("src" attribute in <img>);
  // if null/undefined, a default image will be shown
  readonly image?: string;
  // Below 4 are contact methods; Each should be a link ("href" attribute in <a>)
  readonly website?: string;
  readonly github?: string;
  readonly linkedin?: string;
  readonly email?: string;
  // Below is the preferred contact method;
  // clicking the profile image leads to this type of link
  readonly favoredLink: 'website' | 'github' | 'linkedin' | 'email';
};

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
