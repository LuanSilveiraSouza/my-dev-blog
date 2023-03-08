import React from 'react';
import Layout from '@theme/Layout';
import BlogPostItem from '@theme/BlogPostItem';
import { Content } from '@theme/BlogPostPage';
import { BlogPostProvider } from '@docusaurus/theme-common/internal';
import PaginatorNavLink from '@theme/PaginatorNavLink';

interface Props {
	readonly posts: readonly { readonly content: Content }[];
}

export default function Home({ recentPosts }) {
	console.log(recentPosts);
	return (
		<Layout>
			<div className='container margin-top--xl margin-bottom--lg'>
				<div className='row'>
					<div className='col col--9 col--offset-1'>
						{recentPosts.map(({ content: BlogPostContent }) => (
							<BlogPostProvider
								key={BlogPostContent.metadata.permalink}
								content={BlogPostContent}
							>
								<BlogPostItem>
									<BlogPostContent />
								</BlogPostItem>
							</BlogPostProvider>
						))}
					</div>
				</div>
				<div className='row'>
					<div className='col col--5 col--offset-5'>
						<PaginatorNavLink
							isNext
							permalink='/blog/page/2'
							title='Older Entries'
						/>
					</div>
				</div>
			</div>
		</Layout>
	);
}
