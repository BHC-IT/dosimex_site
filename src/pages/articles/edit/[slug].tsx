import * as React from 'react';
import { GetStaticPropsContext, GetStaticProps, GetStaticPaths } from 'next';

import useUser from '../../../Hooks/useUser'
import ArticleForm from '../../../Components/ArticleForm'
import IArticle from '../../../interfaces/IArticle'
import Article from '../../../models/Article'
import dbConnect from '../../../utils/dbConnect';

export interface IProps {
    article: string,
}

const ArticleComp = (props : IProps) => {

    const user = useUser()

	if (!props.article || props.article === undefined)
		return null;

	return (
		<>
			<ArticleForm user={user} article={JSON.parse(props.article)} method='PATCH'/>
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
				article: JSON.stringify(article),
			},
			revalidate: 1,
		}
	} catch (e) {
	}
	return {
		props: {
			article: null,
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