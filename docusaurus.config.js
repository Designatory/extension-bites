// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/nightOwl');
const darkCodeTheme = require('prism-react-renderer/themes/nightOwl');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Extension Bites',
  tagline: 'Awesome vscode extensions',
  url: 'https://designatory.github.io',
  baseUrl: '/extension-bites/',
  // trailingSlash: false,
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'designatory', // Usually your GitHub org/user name.
  projectName: 'extension-bites', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/designatory/extension-bites/edit/main/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/designatory/extension-bites/edit/main/',

        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Extension Bites',
        logo: {
          alt: 'Extension Bites logo',
          src: '../img/logo.png',
        },
        items: [
          // {
          //   type: 'doc',
          //   docId: 'intro',
          //   position: 'left',
          //   label: 'Tutorial',
          // },
          {
            type: 'dropdown',
            label: 'Extensions',
            position: 'left',
            items: [
              {
                type: 'doc',
                label: 'Code Companion',
                docId: 'Code Companion/installation',
              },
              {
                type: 'doc',
                label: 'Bootstrap5 Snippets',
                docId: 'Bootstrap5 Snippets/installation',
              },
            ],
          },
          { to: '/blog', label: 'Blog', position: 'left' },

          {
            href: 'https://github.com/facebook/docusaurus',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Extensions',
            items: [
              {
                label: 'Code Companion',
                to: 'extensions/code-companion',
              },
              {
                label: 'Bootstrap5 Snippets',
                to: 'extensions/bootstrap5-snippets',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/users/18066992/naman-garg',
              },
              {
                label: 'YouTube',
                href: 'https://www.youtube.com/channel/UCf-yo1pLRh7mNuuuDMZIETA',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/namangarg2075',
              },
            ],
          },
          {
            title: 'More',
            items: [
              // {
              //   label: 'Blog',
              //   to: '/blog',
              // },
              {
                label: 'GitHub',
                href: 'https://github.com/designatory/',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Extension Bites | All Right Reserved`,
      },
      docs: {
        sidebar: {
          autoCollapseCategories: true,
        },
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
