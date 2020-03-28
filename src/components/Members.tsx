import React, { ReactElement } from 'react';
import styles from './Members.module.css';

type Member = {
  readonly infoLink: string;
  readonly image: string;
  readonly caption: string;
};

const UserLink = ({infoLink, image, caption}: Member): ReactElement => (
  <a className={styles.link} href={infoLink} key={infoLink}>
    <img src={image} alt={caption} title={caption} />
    <span className={styles.caption}>{caption}</span>
  </a>
);

const MemberList = ({members}: { readonly members: readonly Member[] }): ReactElement => (
  <div className={styles.alumnusContainer}>
    {members.map(member => (
      <UserLink key={member.infoLink} {...member} />
    ))}
  </div>
);

export default MemberList;
