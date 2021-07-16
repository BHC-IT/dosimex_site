import * as React from 'react';
import { GetStaticPropsContext, GetStaticProps, GetStaticPaths } from 'next';
import IArticle from '../../../interfaces/IArticle'
import axios from 'axios';
import useUser from '../../../Hooks/useUser'
import ArticleForm from '../../../Components/ArticleForm'

export interface IProps {
	article: IArticle,
}

const Article = (props : IProps) => {

	const user = useUser()

	return (
		<>
			<ArticleForm user={user} article={props.article} method='PATCH'/>
		</>
	)
}

export const getStaticProps: GetStaticProps = async (context : GetStaticPropsContext) => {

	try {
		const res = await axios.get('/api/articles');
		const article = res.data.data.find((e : IArticle) => e.slug === context?.params?.slug);
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
			article: null,
		},
		revalidate: 1,
	}

}

export const getStaticPaths: GetStaticPaths = async () => {

	try {
		const res = await axios.get('/api/articles');
		const paths = res.data.data.map((article: IArticle) => ({
			params: { slug: article.slug },
		}))

		return {
			paths,
			fallback: false,
		};
	} catch (e) {
	}
	const paths = {}
	return {
		paths,
		fallback: false,
	};
}


export default Article;