/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import Layout from '@theme/Layout';
import AlumniTimeline from "../components/AlumniTimeline";
import styles from "./alumni.module.css"

const alumni = [
  {
    classOf: 2020,
    members: [
      {
        infoLink: 'https://github.com/yechs',
        image: 'https://avatars3.githubusercontent.com/u/49149993',
        name: 'Ye Shu'
      },
      {
        infoLink: 'https://github.com/yechs',
        image: 'https://avatars3.githubusercontent.com/u/49149993',
        name: 'Ye Shu'
      },
    ]
  },
  {
    classOf: 2017,
    members: [
      {
        infoLink: 'https://developersam.com',
        image: 'https://avatars3.githubusercontent.com/u/4290500',
        name: 'Sam Zhou'
      },
      {
        infoLink: 'https://developersam.com',
        image: 'https://avatars3.githubusercontent.com/u/4290500',
        name: 'Sam Zhou'
      },
      {
        infoLink: 'https://developersam.com',
        image: 'https://avatars3.githubusercontent.com/u/4290500',
        name: 'Sam Zhou'
      },
      {
        infoLink: 'https://developersam.com',
        image: 'https://avatars3.githubusercontent.com/u/4290500',
        name: 'Sam Zhou'
      },
      {
        infoLink: 'https://developersam.com',
        image: 'https://avatars3.githubusercontent.com/u/4290500',
        name: 'Sam Zhou'
      },
      {
        infoLink: 'https://developersam.com',
        image: 'https://avatars3.githubusercontent.com/u/4290500',
        name: 'Sam Zhou'
      },
      {
        infoLink: 'https://developersam.com',
        image: 'https://avatars3.githubusercontent.com/u/4290500',
        name: 'Sam Zhou'
      },
      {
        infoLink: 'https://developersam.com',
        image: 'https://avatars3.githubusercontent.com/u/4290500',
        name: 'Sam Zhou'
      },
      {
        infoLink: 'https://developersam.com',
        image: 'https://avatars3.githubusercontent.com/u/4290500',
        name: 'Sam Zhou'
      },
      {
        infoLink: 'https://developersam.com',
        image: 'https://avatars3.githubusercontent.com/u/4290500',
        name: 'Sam Zhou'
      },
      {
        infoLink: 'https://developersam.com',
        image: 'https://avatars3.githubusercontent.com/u/4290500',
        name: 'Sam Zhou'
      },
      {
        infoLink: 'https://developersam.com',
        image: 'https://avatars3.githubusercontent.com/u/4290500',
        name: 'Sam Zhou'
      }
    ]
  }
];

export default () => {
  return (
    <Layout
      title="Our Alumni"
      description="The alumni directory of Computerization club"
    >
      <main>
        <div className="container margin-vert--lg">
          <div className={styles.content}>
            <h1>Our Alumni</h1>
            <p className="text--large">
              If you are an alumnus or an alumna of the Computerization club and would like us to update your listing or link to your homepage, please open an issue or pull request at the <a href="https://github.com/Computerization/docusaurus/issues">Computerization/docusaurus</a> repository, or drop us a WeChat message.
            </p>
          </div>
          <AlumniTimeline alumni={alumni} />
        </div>
      </main>
    </Layout>
  );
}
