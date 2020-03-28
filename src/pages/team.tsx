/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import Layout from '@theme/Layout';
import Members from '../components/Members';

const members = [
  {
    infoLink: 'https://developersam.com',
    image: 'https://avatars3.githubusercontent.com/u/4290500',
    caption: 'Sam Zhou'
  },
  {
    infoLink: 'https://developersam.com',
    image: 'https://avatars3.githubusercontent.com/u/4290500',
    caption: 'Sam Zhou'
  },
  {
    infoLink: 'https://developersam.com',
    image: 'https://avatars3.githubusercontent.com/u/4290500',
    caption: 'Sam Zhou'
  },
  {
    infoLink: 'https://developersam.com',
    image: 'https://avatars3.githubusercontent.com/u/4290500',
    caption: 'Sam Zhou'
  },
  {
    infoLink: 'https://developersam.com',
    image: 'https://avatars3.githubusercontent.com/u/4290500',
    caption: 'Sam Zhou'
  },
  {
    infoLink: 'https://developersam.com',
    image: 'https://avatars3.githubusercontent.com/u/4290500',
    caption: 'Sam Zhou'
  },
  {
    infoLink: 'https://developersam.com',
    image: 'https://avatars3.githubusercontent.com/u/4290500',
    caption: 'Sam Zhou'
  },
  {
    infoLink: 'https://developersam.com',
    image: 'https://avatars3.githubusercontent.com/u/4290500',
    caption: 'Sam Zhou'
  },
  {
    infoLink: 'https://developersam.com',
    image: 'https://avatars3.githubusercontent.com/u/4290500',
    caption: 'Sam Zhou'
  },
  {
    infoLink: 'https://developersam.com',
    image: 'https://avatars3.githubusercontent.com/u/4290500',
    caption: 'Sam Zhou'
  },
  {
    infoLink: 'https://developersam.com',
    image: 'https://avatars3.githubusercontent.com/u/4290500',
    caption: 'Sam Zhou'
  },
  {
    infoLink: 'https://developersam.com',
    image: 'https://avatars3.githubusercontent.com/u/4290500',
    caption: 'Sam Zhou'
  },
];

const alumnus = members;

export default () => {
  return (
    <Layout
      title="Team Members"
      description="Description will go into a meta tag in <head />">
      <main>
        <div className="container margin-vert--lg">
          <div className="text--center">
            <h2>Our Members</h2>
          </div>
          <Members members={members} />
        </div>
        <div className="container margin-vert--lg">
          <div className="text--center">
            <h2>Our Alumnus</h2>
          </div>
          <Members members={alumnus} />
        </div>
      </main>
    </Layout>
  );
}
