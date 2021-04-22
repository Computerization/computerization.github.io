import React, { ReactElement } from 'react';
import Translate from '@docusaurus/Translate';
import styles from './AlumniTimeline.module.css';
import MemberList from './Members';

import type { alumniData } from '../data/alumniData';

type AlumniProps = {
  readonly alumni: alumniData;
};

const AlumniTimeline = ({ alumni }: AlumniProps): ReactElement => (
  <div className={styles.container}>
    <ul className={styles.timeline}>
      {alumni.map(
        ({ classOf, members }): ReactElement => (
          <li className={styles.event} key={classOf}>
            <div className={styles.iconWrap}>
              <span className={styles.icon} />
            </div>
            <div className={styles.body}>
              <p className={styles.date}>
                <Translate id="alumni.classOf" values={{ classOf }}>
                  {'{classOf} 届'}
                </Translate>
              </p>
              <MemberList members={members} />
            </div>
          </li>
        )
      )}
    </ul>
  </div>
);

export default AlumniTimeline;
