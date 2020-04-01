import React from 'react';
import styles from './AlumniTimeline.module.css';
import Members from "./Members";

const AlumniTimeline = ({ alumni }) => {
  return (
    <div className={styles.container}>
      <ul className={styles.timeline}>
        {
          alumni.map(({ classOf, members }) => (
            <li className={styles.event} key={classOf}>
              <label className={styles.icon}></label>
              <div className={styles.body}>
                <p className={styles.date}>Class of {classOf}</p>
                <Members members={members} />
              </div>
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default AlumniTimeline;
