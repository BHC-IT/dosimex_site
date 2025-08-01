import * as React from 'react';
import { GetStaticPropsContext, GetStaticProps, GetStaticPaths } from 'next';
import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/router';
import * as CSS from 'csstype';

import ReactMarkdown from 'react-markdown'

import moment from 'moment';

import IArticle from '../../interfaces/IArticle'
import useUser from '../../Hooks/useUser'
import Article from '../../models/Article'
import dbConnect from '../../utils/dbConnect';

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

const ArticleComp = (props : IProps) => {

	const router = useRouter();
	const user = useUser();
	moment.locale('fr');

	if (!props.article || props.article === undefined)
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
							console.error(e)
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
			<ReactMarkdown children={props.article.markdown} />

			{ user ? renderButtonDeleteEdit() : null}
		</div>
	)
}

export const getStaticProps: GetStaticProps = async (context : GetStaticPropsContext) => {

	try {
		await dbConnect();

		let article = await Article.findOne({slug : context?.params?.slug}).exec();

		article = {
				title: article?.title,
				description: article?.description ?? "",
				markdown: article?.markdown,
				slug: article?.slug,
				urlImage: article?.urlImage ?? "",
				id: JSON.parse(JSON.stringify(article.id)),				//must find a better solution but seems to work like this
				author: JSON.parse(JSON.stringify(article.author)),
				createdAt: JSON.parse(JSON.stringify(article.createdAt)),
				updatedAt: JSON.parse(JSON.stringify(article.updatedAt)),
		}

		return {
			props: {
				article,
			},
			revalidate: 1,
		}
	}catch (e) {
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
