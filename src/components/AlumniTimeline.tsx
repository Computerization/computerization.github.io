import React, { ReactElement } from 'react';
import styles from './AlumniTimeline.module.css';
import MemberList from './Members';

import type { alumniData } from '../data/alumniData';

type AlumniProps = {
  readonly alumni: alumniData;
};

const AlumniTimeline = ({ alumni }: AlumniProps): ReactElement => (
  <div className={styles.container}>
    <ul className={styles.timeline}>
      {
        alumni.map(({ classOf, members }): ReactElement => (
          <li className={styles.event} key={classOf}>
            <span className={styles.icon} />
            <div className={styles.body}>
              <p className={styles.date}>Class of {classOf}</p>
              <MemberList members={members} />
            </div>
          </li>
        ))
      }
    </ul>
  </div>
);

export default AlumniTimeline;
