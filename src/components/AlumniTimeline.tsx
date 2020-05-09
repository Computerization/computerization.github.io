import React, { ReactElement } from 'react';
import styles from './AlumniTimeline.module.css';
import MemberList from "./Members";

import type { alumniData, alumniOfYear } from "../data/alumniData";

type AlumniProps = {
  readonly alumni: alumniData;
};

const AlumniTimeline = ({ alumni }: AlumniProps): ReactElement => {
  return (
    <div className={styles.container}>
      <ul className={styles.timeline}>
        {
          alumni.map(({ classOf, members }: alumniOfYear): ReactElement => (
            <li className={styles.event} key={classOf}>
              <label className={styles.icon}></label>
              <div className={styles.body}>
                <p className={styles.date}>Class of {classOf}</p>
                <MemberList members={members} />
              </div>
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default AlumniTimeline;
