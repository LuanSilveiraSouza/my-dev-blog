import React from 'react';
import Layout from '@theme/Layout';
import BlogPostItem from '@theme/BlogPostItem';
import { Content } from '@theme/BlogPostPage';
import { BlogPostProvider } from '@docusaurus/theme-common/internal';
import PaginatorNavLink from '@theme/PaginatorNavLink';
import BackgroundImage from '@site/static/img/background.jpg';

interface Props {
	readonly posts: readonly { readonly content: Content }[];
}

export default function Home({ posts }: Props) {
	return (
		<Layout>
			<img
				src={BackgroundImage}
				style={{
					zIndex: 0,
					position: 'absolute',
					top: 0,
					left: 0,
					height: '50vh',
					width: '100vw',
					transform: 'scaleX(-1)',
					WebkitMaskImage:
						'-webkit-gradient(linear, left top, left bottom, from(rgba(0,0,0,1)), to(rgba(0,0,0,0)))',
					maskImage:
						'-webkit-gradient(linear, left top, left bottom, from(rgba(0,0,0,1)), to(rgba(0,0,0,0)))',
				}}
			/>
			<div className='container margin-top--xl margin-bottom--xl' style={{ zIndex: 1 }}>
				<div className='row'>
					<div className='col col--9 col--offset-1'>
						<h1 className='hero__title'>Luan Souza</h1>
						<p className='hero__subtitle'>
							Desenvolvimento de Software e Tecnologia
						</p>
					</div>
				</div>
			</div>
			<div className='container margin-top--xl' style={{ zIndex: 1 }}>
				<h1>Posts mais recentes</h1>
			</div>
			<div className='container margin-top--md margin-bottom--lg' style={{ zIndex: 1 }}>
				<div className='row'>
					<div className='col col--9 col--offset-1'>
						{posts.map(({ content: BlogPostContent }) => (
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
							permalink='/blog'
							title='Ver todos'
						/>
					</div>
				</div>
			</div>
		</Layout>
	);
}
