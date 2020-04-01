import React from 'react';
import styles from './AlumniTimeline.module.css';
import Members from "./Members";

const AlumniOfClass = ({classOf, alumni}) => {
  return (
    <li>
      <div>
        <p>{classOf}</p>
        <div>
          <Members members={alumni} />
        </div>
      </div>
    </li>
  )
}

const AlumniTimeline = ({alumni}) => {
  // JSX elements for all alumni
  const listItems = [];
  // All alumni of a certain graduating class
  let alumniOfClass = [];
  let lastClassOf = null;

  alumni.forEach((alumnus) => {
    if (alumnus.classOf !== lastClassOf && lastClassOf !== null) {
      // Adding JSX Elements for class of `lastClassOf`
      listItems.push(
        <AlumniOfClass
          classOf={lastClassOf}
          alumni={alumniOfClass}
          key={lastClassOf} />
      );
      // Emptying the alumniOfClass list to accept new ones
      alumniOfClass = [];
    }
    alumniOfClass.push(alumnus);
    lastClassOf = alumnus.classOf;
  });

  // the last class
  listItems.push(
    <AlumniOfClass
      classOf={lastClassOf}
      alumni={alumniOfClass}
      key={lastClassOf} />
  );

  return (
    <div>
      <ul>
        {listItems}
      </ul>
    </div>
  )
}

export default AlumniTimeline;
