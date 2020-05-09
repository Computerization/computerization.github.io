import React, { ReactElement } from 'react';
import styles from './Members.module.css';

import MemberCard from "./MemberCard";

export type Member = {
  // should implement a few custom types later
  readonly name: string;
  readonly bio?: string; // should be shorter than 120 characters
  readonly image?: string;
  readonly website?: string;
  readonly github?: string;
  readonly linkedin?: string;
  readonly email?: string; // should begin with "mailto:"
  readonly favoredLink?: "website" | "github" | "linkedin" | "email";
};

type MembersProps = { readonly members: readonly Member[] };

const MemberList = ({ members }: MembersProps): ReactElement => (
  <div className={styles.alumnusContainer}>
    {members.map(member => (
      // Assume "name" will be unique here
      <MemberCard key={member.name} {...member} />
    ))}
  </div>
);

export default MemberList;
