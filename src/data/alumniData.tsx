/**
 * This file keeps track of all alumni listed in the alumni page.
 *
 * It is used strictly for building the alumni network for WFLA Computerization Club
 * and has received consent for publishing these information on our website.
 *
 * However, we do appreciate if you ask for consent from these people
 * first, before re-using their personal information elsewhere.
 */

import type { Member } from '../components/Members';

type alumniOfYear = {
  readonly classOf: number;
  readonly members: readonly Member[];
};

export type alumniData = alumniOfYear[];

const alumni: alumniData = [
  {
    classOf: 2020,
    members: [
      {
        name: 'Ye Shu',
        image: 'https://avatars3.githubusercontent.com/u/49149993',
        website: 'https://blog.shuye.dev/',
        github: 'https://github.com/yechs',
        linkedin: 'https://www.linkedin.com/in/yechs/',
        bio:
          "Williams College '24, Interested in information security, network, and Linux kernel",
        favoredLink: 'github',
      },
    ],
  },
  {
    classOf: 2019,
    members: [
      {
        name: 'Yuchen Zhong',
        image: '/img/alumni/Yuchen_Zhong.jpg',
        website: 'https://davidzyc.github.io/',
        github: 'https://github.com/davidzyc',
        bio: "ex-OIer / UTSG Math+CS 23'",
        favoredLink: 'github',
      },
      {
        name: 'Jimmy Gan',
        image: '/img/alumni/Jimmy_Gan.jpg',
        bio:
          'Rochester 2023 | Intended ECE & CS double major | Currently working on Hardware Security, Side-channel Attack',
        email: 'mailto:jimmygan1012@gmail.com',
        favoredLink: 'email',
      },
    ],
  },
  {
    classOf: 2018,
    members: [
      {
        name: 'Yudi Yang',
        image: '/img/alumni/Yudi_Yang.jpg',
        bio: "UR MATH+CS 22'",
        github: 'https://github.com/2000jedi',
        favoredLink: 'github',
      },
      {
        name: 'Rachel Gu',
        image: '/img/alumni/Rachel_Gu.png',
        bio:
          "UPenn Engineering '2022, Digital Media Design, Interest: Computer Graphics, Interactive Technologies, CG generalist",
        email: 'mailto:gubeini@seas.upenn.edu',
        favoredLink: 'email',
      },
      {
        name: 'Eric Zhang',
        image: '/img/alumni/Eric_Zhang.jpg',
        bio: 'NYU, Math & CS double major',
        email: 'mailto:yz4801@nyu.edu',
        favoredLink: 'email',
      },
    ],
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
        bio: "Facebook SWE Intern | Cornell Engineering '21",
        favoredLink: 'website',
      },
      {
        name: '张秦子',
        image: '/img/alumni/Qinzi_Zhang.jpg',
        email: 'mailto:zhangbcu@bc.edu',
        bio:
          'Boston College, Math (+CS Phys minor) | Interest: Applied Math, Analysis; Distributed System, Machine Learning',
        favoredLink: 'email',
      },
      {
        name: 'Sam Hu',
        email: 'mailto:huruiyangsam@gmail.com',
        bio: 'Brandeis / CoSi & Math Major',
        favoredLink: 'email',
      },
      {
        name: 'Tim Zhu H.Maru',
        image: '/img/alumni/Tim_Zhu.jpg',
        bio:
          'Psychology / Philosophy | Interest: Positive Psychology; Self-help (and its discontents); Piano Performing and Arrangement',
        email: 'mailto:hmaru8088@gmail.com',
        favoredLink: 'email',
      },
    ],
  },
  {
    classOf: 2016,
    members: [
      {
        name: '杜佳梦',
        image: '/img/alumni/Jiameng_Du.jpg',
        linkedin: 'https://www.linkedin.com/in/jiameng-lily-du/',
        bio: 'CMU ECE+CS Class of 2020',
        favoredLink: 'linkedin',
      },
      {
        name: '昂国昊',
        image: '/img/alumni/Guohao_Ang.jpg',
        linkedin: 'https://www.linkedin.com/in/guohao-ang-b35a32118/',
        bio: 'UCB CS+Applied Math Class of 2020 / Googler',
        favoredLink: 'linkedin',
      },
      {
        name: '杨霁初',
        image: '/img/alumni/Jichu_Yang.jpg',
        website: 'https://benjester.github.io/',
        bio: "Duke 2020'",
        favoredLink: 'website',
      },
    ],
  },
];

export default alumni;
