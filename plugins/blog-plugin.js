const blogPluginExports = require('@docusaurus/plugin-content-blog');
const defaultBlogPlugin = blogPluginExports.default;

async function blogPluginExtended(...pluginArgs) {
	const blogPluginInstance = await defaultBlogPlugin(...pluginArgs);

	return {
		...blogPluginInstance,
		contentLoaded: async function (data) {
			const posts = [...data.content.blogPosts].splice(0, 4);
			data.actions.addRoute({
				path: pluginArgs[0]?.siteConfig?.baseUrl,
				exact: 'true',
				component: '@site/src/components/Home.tsx',
				modules: {
					posts: posts.map((post) => ({
						content: {
							__import: true,
							path: post.metadata?.source,
							query: {
								truncated: true,
							},
						},
					})),
				},
			});

			// const translateContent =
			// 	await blogPluginInstance.getTranslationFiles({
			// 		content: data.content
			// 	});
			// const translateInstance = blogPluginInstance.translateContent({
			// 	content: data.content,
			// 	translationFiles: translateContent,
			// });
			// const translatedPosts = [translateInstance.blogPosts].splice(0, 4);
			// data.actions.addRoute({
			// 	path: '/pt-BR',
			// 	exact: 'true',
			// 	component: '@site/src/components/Home.tsx',
			// 	modules: {
			// 		posts: translatedPosts.map((post) => ({
			// 			content: {
			// 				__import: true,
			// 				path: post.metadata?.source,
			// 				query: {
			// 					truncated: true,
			// 				},
			// 			},
			// 		})),
			// 	},
			// });
			return blogPluginInstance.contentLoaded(data);
		},
	};
}

module.exports = {
	...blogPluginExports,
	default: blogPluginExtended,
};
