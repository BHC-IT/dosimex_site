import * as React from 'react';
import { GetStaticPropsContext, GetStaticProps, GetStaticPaths } from 'next';

import useUser from '../../../Hooks/useUser'
import ArticleForm from '../../../Components/ArticleForm'
import IArticle from '../../../interfaces/IArticle'
import Article from '../../../models/Article'
import dbConnect from '../../../utils/dbConnect';

export interface IProps {
	article: IArticle,
}

const ArticleComp = (props : IProps) => {

	const user = useUser()

	return (
		<>
			<ArticleForm user={user} article={props.article} method='PATCH'/>
		</>
	)
}

export const getStaticProps: GetStaticProps = async (context : GetStaticPropsContext) => {

	try {
		await dbConnect();

		const articles : IArticle[] = await Article.find({}).exec();
		const article = articles.find((e : IArticle) => e.slug === context?.params?.slug);
		return {
			props: {
				article,
			},
			revalidate: 1,
		}
	} catch (e) {
	}
	return {
		props: {
			article: undefined,
		},
		revalidate: 1,
	}

}

export const getStaticPaths: GetStaticPaths = async () => {

	await dbConnect();

	const articles : IArticle[] = await Article.find({}).exec();
	const paths : {params: {slug: string}, locale ?: string}[] = [];

	articles.forEach((article: IArticle) => {
		paths.push({params: { slug: article.slug as string }, locale: 'en-US'});
		paths.push({params: { slug: article.slug as string }, locale: 'fr'});
		paths.push({params: { slug: article.slug as string }});
	});

	return {
		paths,
		fallback: true,
	};
}



export default ArticleComp;