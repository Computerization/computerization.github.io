/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import Layout from '@theme/Layout';
import AlumniTimeline from "../components/AlumniTimeline";

const alumni = [
  {
    classOf: 2020,
    infoLink: 'https://github.com/yechs',
    image: 'https://avatars3.githubusercontent.com/u/49149993',
    name: 'Ye Shu'
  },
  {
    classOf: 2020,
    infoLink: 'https://github.com/yechs',
    image: 'https://avatars3.githubusercontent.com/u/49149993',
    name: 'Ye Shu'
  },
  {
    classOf: 2017,
    infoLink: 'https://developersam.com',
    image: 'https://avatars3.githubusercontent.com/u/4290500',
    name: 'Sam Zhou'
  },
  {
    classOf: 2017,
    infoLink: 'https://developersam.com',
    image: 'https://avatars3.githubusercontent.com/u/4290500',
    name: 'Sam Zhou'
  },
  {
    classOf: 2017,
    infoLink: 'https://developersam.com',
    image: 'https://avatars3.githubusercontent.com/u/4290500',
    name: 'Sam Zhou'
  },
  {
    classOf: 2017,
    infoLink: 'https://developersam.com',
    image: 'https://avatars3.githubusercontent.com/u/4290500',
    name: 'Sam Zhou'
  },
  {
    classOf: 2017,
    infoLink: 'https://developersam.com',
    image: 'https://avatars3.githubusercontent.com/u/4290500',
    name: 'Sam Zhou'
  },
  {
    classOf: 2017,
    infoLink: 'https://developersam.com',
    image: 'https://avatars3.githubusercontent.com/u/4290500',
    name: 'Sam Zhou'
  },
  {
    classOf: 2017,
    infoLink: 'https://developersam.com',
    image: 'https://avatars3.githubusercontent.com/u/4290500',
    name: 'Sam Zhou'
  },
  {
    classOf: 2017,
    infoLink: 'https://developersam.com',
    image: 'https://avatars3.githubusercontent.com/u/4290500',
    name: 'Sam Zhou'
  },
  {
    classOf: 2017,
    infoLink: 'https://developersam.com',
    image: 'https://avatars3.githubusercontent.com/u/4290500',
    name: 'Sam Zhou'
  },
  {
    classOf: 2017,
    infoLink: 'https://developersam.com',
    image: 'https://avatars3.githubusercontent.com/u/4290500',
    name: 'Sam Zhou'
  },
  {
    classOf: 2017,
    infoLink: 'https://developersam.com',
    image: 'https://avatars3.githubusercontent.com/u/4290500',
    name: 'Sam Zhou'
  },
  {
    classOf: 2017,
    infoLink: 'https://developersam.com',
    image: 'https://avatars3.githubusercontent.com/u/4290500',
    name: 'Sam Zhou'
  },
];

export default () => {
  return (
    <Layout
      title="Team Members"
      description="Description will go into a meta tag in <head />"
    >
      <main>
        <div className="container margin-vert--lg">
          <div className="text--center">
            <h2>Our Alumni</h2>
          </div>
          <AlumniTimeline alumni={alumni} />
        </div>
      </main>
    </Layout>
  );
}
