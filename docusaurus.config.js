/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

module.exports = {
  title: 'Computerization',
  tagline: 'C社 << Computerization << 世外信息化社',
  url: 'https://computerization.github.io',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'Computerization', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Computerization',
      logo: {
        alt: 'Computerization Logo',
        src: 'img/logo.svg',
      },
      links: [
        {to: 'docs/about-us', label: 'Docs', position: 'left'},
        {to: 'blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/Computerization',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Docs',
              to: 'docs/about-us',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/Computerization',
            },
          ],
        },
        {
          title: 'Social',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            },
          ],
        },
      ],
      logo: {
        alt: 'Facebook Open Source Logo',
        src: 'img/logo.svg',
      },
      copyright: `Copyright © ${new Date().getFullYear()} Computerization. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
