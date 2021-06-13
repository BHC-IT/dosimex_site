import * as React from 'react';
import { GetStaticPropsContext, GetStaticProps, GetStaticPaths } from 'next';
import IArticle from '../../../interfaces/IArticle'

export interface IProps {
	article: IArticle,
}

const Article = (props : IProps) => {

	return <p>Article: {props.article.title}</p>
}

export const getStaticProps: GetStaticProps = async (context : GetStaticPropsContext) => {

	const res = await fetch('http://localhost:3000/api/articles');

	const json = await res.json()

	const article = json.data.find((e : IArticle) => e._id === context?.params?.id);

	return {
		props: {
			article,
		},
		revalidate: 1,
	}
}

export const getStaticPaths: GetStaticPaths = async () => {

	const res = await fetch('http://localhost:3000/api/articles');

	const json = await res.json()
	console.log(json)

	const paths = json.data.map((article: IArticle) => ({
		params: { slug: article.slug },
	}))

	return {
		paths,
		fallback: false,
	};
}


export default Article;