import { GetStaticPropsContext, GetStaticProps } from 'next';
import Link from 'next/link';
import * as CSS from 'csstype';
import styled from 'styled-components';
import { withOrientationChange } from 'react-device-detect';

import { useIsMobile } from '../../Hooks/useIsMobile';
import useUser from '../../Hooks/useUser';
import IArticle from '../../interfaces/IArticle'
import Article from '../../models/Article'
import dbConnect from '../../utils/dbConnect';


const text = {
	news: {
		title: "Toutes les actualités Dosimex",
		p: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras viverra magna nunc, quis ultrices diam consectetur ut. Nullam blandit aliquam mauris, sed posuere tortor viverra at. Donec sagittis quis dui et viverra. Pellentesque interdum accumsan urna a posuere. Etiam efficitur leo sed ante ornare consequat. Duis euismod cursus congue",
	}
}

const PartImage = styled.div`
	width: 20vw;
	height: 25vh;
	flex-shrink: 0;
	margin-right: 1.5vw;
	background: url(${(props: {imageUrl: string}) => props.imageUrl});
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;
`;

const PartImagePortrait = styled.div`
	width: 50vw;
	height: 22vh;
	flex-shrink: 0;
	margin-right: 1.5vw;
	background: url(${(props: {imageUrl: string}) => props.imageUrl});
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;
`;

interface IStyles {
	[key: string] : CSS.Properties | undefined
}

const renderButtonEdit = (style: IStyles) => {
		return (
			<div style={{marginTop: "3vh", textAlign: "center"}}>
				<Link href="/articles/edit/">
					<button style={style.buttonEdit}>Ajouter un nouvel article</button>
				</Link>
			</div>
		)
	}

const Articles = (props: any) => {

	const user = useUser();
	const style = useIsMobile(styles);

	if (style === null)
		return null

	return (
		<div className="container" style={{marginBottom: "10vh"}}>
			<div style={style.header}>
				<h2>{text.news.title}</h2>
			</div>
			{ user ? renderButtonEdit(style) : null}
			<ul style={style.ul}>
				{props.articles.map((e: IArticle) => {
					return (
						<li style={style.li}>
							{props.isPortrait ?
								<PartImagePortrait imageUrl={e.urlImage || "https://www.dosimex.fr/static/media/BackGroundHague2_compressed.477d1c3a.png"} />
							:
								<PartImage imageUrl={e.urlImage || "https://www.dosimex.fr/static/media/BackGroundHague2_compressed.477d1c3a.png"} />
							}
							<div style={style.divDescrip}>
								<h3 style={style.title}>{e.title}</h3>
								<p style={style.description}>{e.description}</p>
								<Link href={`/articles/${e.slug}`}>
									<button style={style.button}>Voir plus  →</button>
								</Link>
							</div>
						</li>
					)}
				)}
			</ul>
		</div>
	)
}

export const getStaticProps: GetStaticProps = async (context : GetStaticPropsContext) => {
	try {
		await dbConnect();

		let articles = await Article.find({}).exec();

		articles = articles.map(e => {
			const ret = {
				title: e.title,
				description: e.description ?? "",
				markdown: e.markdown,
				slug: e.slug,
				urlImage: e.urlImage ?? "",
				id: String(e.id),
				author: String(e.author),
				createdAt: e.createdAt as Date,
				updatedAt: e.updatedAt as Date,
			}

			return ret;
		});

		return {
			props: {
				articles: articles,
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

export default withOrientationChange(Articles);

export const styles = (mobile: boolean): IStyles => ({
	button: {
		textAlign: "center",
		backgroundColor: "white",
		color: "var(--flash)",
		borderRadius: "50px",
		textTransform: "uppercase",
	},
	buttonEdit: {
		padding: "8px 25px",
		backgroundColor: "var(--main)",
		borderRadius: "50px",
		color: "white",
		textTransform: "uppercase",
		marginRight: "3vw",
	},
	li: {
		marginBottom: "7vh",
		display: "flex",
		alignItems: mobile ? "flex-start" :"center",
		flexDirection: mobile ? "column" : undefined,
	},
	title: {
		fontSize: "2.5rem",
		fontFamily: "var(--lato)",
		fontWeight: "bold",
		marginBottom: "0",
		color: "var(--main)",
		textTransform: "uppercase",
	},
	description: {
		marginBottom: "1vh",
	},
	divDescrip: mobile ? {
		width: "90%",
	}
	:
	undefined,
	header: {
		textAlign: "center",
		padding: "20vh auto",
		marginTop: "15vh",
		marginBottom: "15vh",
	},
	ul: {
		padding: mobile ? "10vh 0" : "10vh 10vw",
	}
})