const githubTheme = require("prism-react-renderer/themes/github");
const draculaTheme = require("prism-react-renderer/themes/dracula");

module.exports = async function createConfigAsync() {
  return {
    title: "Computerization",
    tagline: "C社 << Computerization << 世外信息化社",
    url: "https://computerization.io",
    baseUrl: "/",
    favicon: "img/favicon/favicon.ico",
    trailingSlash: true,
    i18n: {
      defaultLocale: "zh-Hans",
      locales: ["zh-Hans", "en"],
      localeConfigs: {
        "zh-Hans": {
          label: "中文（简体）",
        },
        en: {
          label: "English",
        },
      },
    },
    plugins: ["alumni"],
    themeConfig: {
      announcementBar: {
        id: "join_us",
        content:
          '<b>🎉 C 社 2025-26 届开始招新啦</b>！ <a target="_blank" rel="noopener noreferrer" href="https://mp.weixin.qq.com/s/K-qGy7XPybCxq0WBl9DV0A"></a>',
        backgroundColor: "#22292f",
        textColor: "#FFFFFF",
        isCloseable: false,
      },
      navbar: {
        title: "世外信息化社",
        logo: {
          alt: "Computerization Logo",
          src: "img/logo.svg",
          srcDark: "img/logo.svg",
        },

        items: [
          { to: "alumni", label: "往届成员", position: "left" },
          { to: "docs/about-us", label: "文档", position: "left" },
          { to: "blog", label: "博客", position: "left" },
          {
            type: "localeDropdown",
            position: "right",
          },
          {
            href: "https://github.com/Computerization",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "文档",
            items: [
              {
                label: "文档",
                to: "docs/about-us",
              },
            ],
          },
          {
            title: "社区",
            items: [
              {
                label: "GitHub",
                href: "https://github.com/Computerization",
              },
            ],
          },
          {
            title: "社交",
            items: [
              {
                label: "博客",
                to: "blog",
              },
            ],
          },
        ],
        logo: {
          alt: "Computerization Logo",
          src: "img/logo.svg",
        },
        copyright: `世外信息化社 © ${new Date().getFullYear()} 版权所有. 使用 Docusaurus 搭建.`,
      },
      prism: {
        theme: githubTheme,
        darkTheme: draculaTheme,
      },
    },
    stylesheets: [
      {
        href: "https://cdn.jsdelivr.net/npm/katex@0.12.0/dist/katex.min.css",
        type: "text/css",
        integrity:
          "sha384-AfEj0r4/OFrOo5t7NnNe46zW/tFgW6x/bCJG8FqQCEo3+Aro6EYUG4+cU+KJWu/X",
        crossorigin: "anonymous",
      },
    ],
    presets: [
      [
        "classic",
        {
          docs: {
            sidebarPath: require.resolve("./sidebars.js"),
            remarkPlugins: [(await import("remark-math")).default],
            rehypePlugins: [
              (await import("rehype-katex")).default,
              { strict: false },
            ],
          },
          blog: {
            remarkPlugins: [(await import("remark-math")).default],
            rehypePlugins: [
              (await import("rehype-katex")).default,
              { strict: false },
            ],
          },
          theme: {
            customCss: require.resolve("./src/css/custom.css"),
          },
        },
      ],
    ],
  };
};
