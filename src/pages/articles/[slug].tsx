import * as React from 'react';
import { GetStaticPropsContext, GetStaticProps, GetStaticPaths } from 'next';
import IArticle from '../../interfaces/IArticle'
import axios from 'axios';
import useUser from '../../Hooks/useUser'
import Link from 'next/link';
import { useRouter } from 'next/router';
import * as CSS from 'csstype';
import MDEditor from '@uiw/react-md-editor';
import '@uiw/react-md-editor/dist/markdown-editor.css'
import '@uiw/react-markdown-preview/dist/markdown.css';
import moment from 'moment';

export interface IProps {
	article?: IArticle,
}

interface IStyles {
	button: CSS.Properties,
	buttonEdit: CSS.Properties,
	global: CSS.Properties,
	title: CSS.Properties,
	date: CSS.Properties,
}

const Article = (props : IProps) => {

	const router = useRouter();
	const user = useUser();
	moment.locale('fr');

	if (!props.article)
		return null;

	const renderButtonDeleteEdit = () => {
		return (
			<div style={{textAlign: "center", marginTop: "5vh"}}>
				<Link href={`/articles/edit/${props.article?.slug}`}>
					<button style={styles.buttonEdit}>Modifier</button>
				</Link>
				<button style={styles.button} onClick={async () => {

						try {
							await axios.delete(`/api/articles/${props.article?.slug}`,
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
		<div className="container" style={styles.global}>
			<h2 style={styles.title}>{props.article.title}</h2>
			<p style={styles.date}>{moment(props.article.updatedAt).format('ll')}</p>
			<MDEditor.Markdown source={props.article.markdown} />

			{ user ? renderButtonDeleteEdit() : null}
		</div>
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
			article: undefined,
		},
		revalidate: 1,
	}

}

export const getStaticPaths: GetStaticPaths = async () => {

	const res = await axios.get('/api/articles');
	const paths : {params: {slug: string}, locale ?: string}[] = [];

	res.data.data.forEach((article: IArticle) => {
		paths.push({params: { slug: article.slug as string }, locale: 'en-US'});
		paths.push({params: { slug: article.slug as string }, locale: 'fr'});
		paths.push({params: { slug: article.slug as string }});
	});

	return {
		paths,
		fallback: true,
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
	global: {
		paddingTop: "12vh",
		paddingBottom: "20vh",
	},
	title: {
		color: "var(--main)",
		fontSize: "4rem",
		textTransform: "uppercase",
		marginBottom: "0",
	},
	date: {
		textTransform: "uppercase",
		fontWeight: "bold",
		marginBottom: "5vh",
		marginTop: "0vh",
	},
}