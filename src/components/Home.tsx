import React from 'react';
import Layout from '@theme/Layout';
import BlogPostItem from '@theme/BlogPostItem';
import { Content } from '@theme/BlogPostPage';
import { BlogPostProvider } from '@docusaurus/theme-common/internal';

interface Props {
	readonly recentPosts: readonly { readonly content: Content }[];
}

export default function Home({ recentPosts }: Props) {
	console.log(recentPosts);
	return (
		<Layout>
			<div className='container'>
				<div className='row'>
					{recentPosts.map(({ content: BlogPostContent }) => (
						<BlogPostProvider
							content={BlogPostContent}
						>
							<BlogPostItem>
								<BlogPostContent />
							</BlogPostItem>
						</BlogPostProvider>
					))}
				</div>
			</div>
		</Layout>
	);
}
