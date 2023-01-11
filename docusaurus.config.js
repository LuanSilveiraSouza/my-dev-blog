// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Luan Souza Dev',
  tagline: 'Luan Souza Dev',
  url: 'https://luansouza-dev.com.br/',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.png',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'LuanSilveiraSouza', // Usually your GitHub org/user name.
  projectName: 'my-dev-blog', // Usually your repo name.

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
        docs: false,
        blog: {
          showReadingTime: true
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
        title: 'Luan Souza Dev',
        logo: {
          alt: 'My Site Logo',
          src: 'img/icon.png',
        },
        items: [
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/LuanSilveiraSouza',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Contato',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/LuanSilveiraSouza',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Luan da Silveira de Souza; All Rights Reserved.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
