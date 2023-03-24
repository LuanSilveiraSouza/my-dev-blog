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

	staticDirectories: ['public', 'static'],

	// GitHub pages deployment config.
	// If you aren't using GitHub pages, you don't need these.
	organizationName: 'LuanSilveiraSouza', // Usually your GitHub org/user name.
	projectName: 'my-dev-blog', // Usually your repo name.

	// Even if you don't use internalization, you can use this field to set useful
	// metadata like html lang. For example, if your site is Chinese, you may want
	// to replace "en" with "zh-Hans".
	i18n: {
		defaultLocale: 'en',
		locales: ['en', 'pt-BR'],
	},

	presets: [
		[
			'classic',
			/** @type {import('@docusaurus/preset-classic').Options} */
			({
				docs: false,
				blog: false,
				theme: {
					customCss: require.resolve('./src/css/custom.css'),
				},
			}),
		],
	],

	plugins: [
		[
			'./plugins/blog-plugin',
			{
				id: 'blog-home',
				routeBasePath: 'blog',
				path: './blog',
				showReadingTime: true,
				blogSidebarTitle: 'Posts',
				blogSidebarCount: 'ALL',
			},
		],
	],

	themeConfig:
		/** @type {import('@docusaurus/preset-classic').ThemeConfig} */
		({
			colorMode: {
				defaultMode: 'dark',
			},
			navbar: {
				title: 'Luan Souza Dev',
				logo: {
					alt: 'Site Logo',
					src: 'img/icon.png',
				},
				items: [
					{ type: 'localeDropdown', position: 'right' },
					{ to: '/blog', label: 'Blog', position: 'right' },
					{ to: '/about', label: 'About', position: 'right' },
				],
			},
			footer: {
				style: 'dark',
				links: [
					{
						title: 'Contact',
						items: [
							{
								label: 'GitHub',
								href: 'https://github.com/LuanSilveiraSouza',
							},
							{
								label: 'LinkedIn',
								href: 'https://www.linkedin.com/in/luan-souza-s/',
							},
						],
					},
					{
						title: 'Sections',
						items: [
							{
								label: 'Blog',
								to: '/blog',
							},
							{
								label: 'About',
								to: '/about',
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
