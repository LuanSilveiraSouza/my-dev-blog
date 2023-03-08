const blogPluginExports = require('@docusaurus/plugin-content-blog');
const defaultBlogPlugin = blogPluginExports.default;

async function blogPluginExtended(...pluginArgs) {
	const blogPluginInstance = await defaultBlogPlugin(...pluginArgs);

	return {
		...blogPluginInstance,
		contentLoaded: async function (data) {
			const recentPosts = [...data.content.blogPosts].splice(0, 5);
			data.actions.addRoute({
				path: '/',
				exact: 'true',
				component: '@site/src/components/Home.tsx',
				modules: {
					recentPosts: recentPosts.map((post) => ({
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

			return blogPluginInstance.contentLoaded(data);
		},
	};
}

module.exports = {
	...blogPluginExports,
	default: blogPluginExtended,
};
