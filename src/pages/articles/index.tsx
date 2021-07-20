import { GetStaticPropsContext, GetStaticProps } from 'next';
import IArticle from '../../interfaces/IArticle'
import axios from 'axios';
import Link from 'next/link';
import * as CSS from 'csstype';
import styled from 'styled-components';
import useUser from '../../Hooks/useUser';

const text = {
	news: {
		title: "Toutes les actualités Dosimex",
		p: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras viverra magna nunc, quis ultrices diam consectetur ut. Nullam blandit aliquam mauris, sed posuere tortor viverra at. Donec sagittis quis dui et viverra. Pellentesque interdum accumsan urna a posuere. Etiam efficitur leo sed ante ornare consequat. Duis euismod cursus congue",
	}
}

const PartImage = styled.div`
	width: 15vw;
	height: 18vh;
	flex-shrink: 0;
	margin-right: 1.5vw;
	background: url(${(props: {imageUrl: string}) => props.imageUrl});
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;
`;

interface IStyles {
	button: CSS.Properties,
	buttonEdit: CSS.Properties,
	li: CSS.Properties,
	title: CSS.Properties,
	description: CSS.Properties,
	header: CSS.Properties,
}

const renderButtonEdit = () => {
		return (
			<div style={{marginTop: "3vh", textAlign: "center"}}>
				<Link href="/articles/edit/">
					<button style={styles.buttonEdit}>Ajouter un nouvel article</button>
				</Link>
			</div>
		)
	}

const Articles = (props: any) => {

	const user = useUser();

	return (
		<div className="container" style={{marginBottom: "10vh"}}>
			<div style={styles.header}>
				<h2>{text.news.title}</h2>
			</div>
			{ user ? renderButtonEdit() : null}
			<ul style={{padding: "10vh 10vw"}}>
				{props.articles.map((e: IArticle) => {
					return (
						<li style={styles.li}>
							<div style={{display: "flex", alignItems: "center"}}>
								<PartImage imageUrl={e.urlImage || "https://www.dosimex.fr/static/media/BackGroundHague2_compressed.477d1c3a.png"} />
								<div>
									<h3 style={styles.title}>{e.title}</h3>
									<p style={styles.description}>{e.description}</p>
									<Link href={`/articles/${e.slug}`}>
										<button style={styles.button}>Voir plus   →</button>
									</Link>
								</div>
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
		const res = await axios.get('/api/articles');

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

export const styles: IStyles =  {
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
	header: {
		textAlign: "center",
		padding: "20vh auto",
		marginTop: "15vh",
		marginBottom: "15vh",
	},
}