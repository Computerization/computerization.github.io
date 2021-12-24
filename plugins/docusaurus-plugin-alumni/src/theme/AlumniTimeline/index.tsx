import React from 'react';
import Translate from '@docusaurus/Translate';
import type { Props } from '@theme/AlumniTimeline';
import MemberList from '@theme/Members';

import styles from './styles.module.css';

export default function AlumniTimeline({ alumni }: Props): JSX.Element {
  return (
    <div className={styles.container}>
      <ul className={styles.timeline}>
        {alumni.map(({ classOf, members }) => (
          <li className={styles.event} key={classOf}>
            <div className={styles.iconWrap}>
              <span className={styles.icon} />
            </div>
            <section className={styles.body}>
              <a
                id={String(classOf)}
                href={`#${classOf}`}
                className={styles.date}>
                <Translate
                  id="alumni.classOf"
                  description="The section label for each class"
                  values={{ classOf }}>
                  {'{classOf} 届'}
                </Translate>
              </a>
              <MemberList members={members} />
            </section>
          </li>
        ))}
      </ul>
    </div>
  );
}
