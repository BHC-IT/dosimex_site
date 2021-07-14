import * as React from 'react';
import { GetStaticPropsContext, GetStaticProps, GetStaticPaths } from 'next';
import IArticle from '../../interfaces/IArticle'
import * as axios from 'axios';
import useUser from '../../Hooks/useUser'
import Link from 'next/link';
import { useRouter } from 'next/router';
import * as CSS from 'csstype';


export interface IProps {
	article: IArticle,
}

interface IStyles {
	button: CSS.Properties,
	buttonEdit: CSS.Properties,
}

const Article = (props : IProps) => {

	const router = useRouter();
	const user = useUser()

	const renderButtonDeleteEdit = () => {
		return (
			<div style={{textAlign: "center"}}>
				<Link href={`/articles/edit/${props.article.slug}`}>
					<button style={styles.buttonEdit}>Modifier</button>
				</Link>
				<button style={styles.button} onClick={async () => {

						try {
							await axios.delete(`http://localhost:3000/api/articles/${props.article.slug}`,
								{headers: {authorization : `Bearer ${user}`}});
							router.push('/articles')
						} catch (e) {
							console.error(e.response)
						}
				}} >
				Supprimer
				</button>
			</div>
		)
	}

	return (
		<>
			<ul>
				<li>{props.article.title}</li>
				<li>{props.article.updatedAt}</li>
				<li>{props.article.description}</li>
				<li>{props.article.markdown}</li>
			</ul>

			{ user ? renderButtonDeleteEdit() : null}
		</>
	)
}

export const getStaticProps: GetStaticProps = async (context : GetStaticPropsContext) => {

	try {
		const res = await axios.get('http://localhost:3000/api/articles');
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
		const res = await axios.get('http://localhost:3000/api/articles');
		const paths = res.data.data.map((article: IArticle) => ({
			params: { slug: article.slug },
		}))

		return {
			paths,
			fallback: false,
		};
	} catch (e) {
	}
	const paths = null
	return {
		paths,
		fallback: false,
	};
}


export default Article;

export const styles: IStyles =  {
	buttonEdit: {
		padding: "8px 25px",
		textAlign: "center",
		backgroundColor: "var(--main)",
		borderRadius: "50px",
		color: "white",
		textTransform: "uppercase",
		marginRight: "3vw",
	},
	button: {
		padding: "8px 25px",
		textAlign: "center",
		backgroundColor: "white",
		border: "solid 2px var(--main)",
		color: "var(--main)",
		borderRadius: "50px",
		textTransform: "uppercase",
	},
}