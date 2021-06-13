import { GetStaticPropsContext, GetStaticProps } from 'next';
import IArticle from '../../../interfaces/IArticle'


const Articles = (props: any) => {

	return (
		<div>
			<ul>
				{props.articles.map((e: IArticle) => <li>{e.title}</li>)}
			</ul>
		</div>
	)
}

export const getStaticProps: GetStaticProps = async (context : GetStaticPropsContext) => {

	const res = await fetch('http://localhost:3000/api/articles');

	const data = (await res.json()).data

	return {
		props: {
			articles: data,
		},
		revalidate: 1,
	}
}

export default Articles;