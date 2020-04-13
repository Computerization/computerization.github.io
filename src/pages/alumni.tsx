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
        name: 'Ye Shu',
        image: 'https://avatars3.githubusercontent.com/u/49149993',
        website: null,
        github: 'https://github.com/yechs',
        linkedin: 'https://www.linkedin.com/in/yechs/',
        bio: 'Current 12th grade student.',
        favoredLink: 'github'
      },
    ]
  },
  {
    classOf: 2019,
    members: [
      {
        name: 'Yuchen Zhong',
        image: '/img/alumni/Yuchen_Zhong.jpg',
        website: 'https://davidzyc.github.io/',
        github: 'https://github.com/davidzyc',
        linkedin: null,
        bio: 'ex-OIer / UTSG Math+CS 23\'',
        favoredLink: 'github'
      },
      {
        name: 'Jimmy Gan',
        image: '/img/alumni/Jimmy_Gan.jpg',
        bio: 'Rochester 2023 | Intended ECE & CS double major	| Currently working on Hardware Security, Side-channel Attack',
        email: 'jimmygan1012@gmail.com'
      }
    ]
  },
  {
    classOf: 2018,
    members: [
      {
        name: 'Rachel Gu',
        image: '/img/alumni/Rachel_Gu.png',
        website: null,
        linkedin: null,
        bio: 'UPenn Engineering \'2022, Digital Media Design, Interest: Computer Graphics, Interactive Technologies, CG generalist',
        email: 'mailto:gubeini@seas.upenn.edu',
        favoredLink: 'email'
      },
      {
        name: 'Eric Zhang',
        image: '/img/alumni/Eric_Zhang.jpg',
        bio: 'NYU, Math & CS double major',
        email: 'mailto:yz4801@nyu.edu',
        favoredLink: 'email'
      }
    ]
  },
  {
    classOf: 2017,
    members: [
      {
        name: 'Sam Zhou',
        image: 'https://avatars3.githubusercontent.com/u/4290500',
        website: 'https://developersam.com',
        github: 'https://github.com/SamChou19815',
        linkedin: 'https://www.linkedin.com/in/sam-zhou-30b91610b/',
        bio: 'Facebook SWE Intern | Cornell Engineering \'21',
        favoredLink: 'website'
      },
      {
        name: '张秦子',
        image: '/img/alumni/Qinzi_Zhang.jpg',
        email: 'mailto:zhangbcu@bc.edu',
        bio: 'Boston College, Math (+CS Phys minor) | Interest: Applied Math, Analysis; Distributed System, Machine Learning',
        favoredLink: 'email'
      },
      {
        name: 'Sam Hu',
        image: null,
        email: 'mailto:huruiyangsam@gmail.com',
        bio: 'Brandeis / CoSi & Math Major',
        favoredLink: 'email'
      },
      {
        name: 'Tim Zhu H.Maru',
        image: '/img/alumni/Tim_Zhu.jpg',
        bio: 'Psychology / Philosophy | Interest: Positive Psychology; Self-help (and its discontents); Piano Performing and Arrangement',
        email: 'mailto:hmaru8088@gmail.com',
        favoredLink: 'email',
      },
    ]
  },
  {
    classOf: 2016,
    members: [
      {
        name: '杜佳梦',
        image: "/img/alumni/Jiameng_Du.jpg",
        // Planning to implement a useBaseUrl hook on the URL at the component level
        website: null,
        github: null,
        linkedin: 'https://www.linkedin.com/in/jiameng-lily-du/',
        bio: "CMU ECE+CS Class of 2020",
        favoredLink: 'linkedin'
      },
      {
        name: '昂国昊',
        image: "/img/alumni/Guohao_Ang.jpg",
        // Planning to implement a useBaseUrl hook on the URL at the component level
        website: null,
        github: null,
        linkedin: 'https://www.linkedin.com/in/guohao-ang-b35a32118/',
        bio: "UCB CS+Applied Math Class of 2020 / Googler",
        favoredLink: 'linkedin'
      },
      {
        name: '杨霁初',
        image: "/img/alumni/Jichu_Yang.jpg",
        // Planning to implement a useBaseUrl hook on the URL at the component level
        website: 'https://benjester.github.io/',
        bio: "Duke 2020'",
        favoredLink: 'website'
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
