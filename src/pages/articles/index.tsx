import { GetStaticPropsContext, GetStaticProps } from 'next';
import IArticle from '../../interfaces/IArticle'
import * as axios from 'axios';
import Link from 'next/link';


const Articles = (props: any) => {

	return (
		<div>
			<ul>
				{props.articles.map((e: IArticle) => {

					return (
						<li>
							<ul>
								<li>{e.title}</li>
								<li>{e.updatedAt}</li>
								<li>{e.description}</li>
								<li>{e.markdown}</li>
							</ul>
							<Link href={`/articles/${e.slug}`}>
								<button>Voir plus</button>
							</Link>
						</li>
					)}
				)}
			</ul>
		</div>
	)
}

export const getStaticProps: GetStaticProps = async (context : GetStaticPropsContext) => {

	try {
		const res = await axios.get('http://localhost:3000/api/articles');

		return {
			props: {
				articles: res.data.data,
			},
			revalidate: 1,
		}
	} catch (e) {
	}
	return {
		props: {
			articles: [],
		},
		revalidate: 1,
	}
}

export default Articles;