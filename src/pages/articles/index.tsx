import { GetStaticPropsContext, GetStaticProps } from 'next';
import IArticle from '../../interfaces/IArticle'
import * as axios from 'axios';
import Link from 'next/link';
import * as CSS from 'csstype';

const text = {
	news: {
		title: "Toutes les actualités Dosimex",
		p: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras viverra magna nunc, quis ultrices diam consectetur ut. Nullam blandit aliquam mauris, sed posuere tortor viverra at. Donec sagittis quis dui et viverra. Pellentesque interdum accumsan urna a posuere. Etiam efficitur leo sed ante ornare consequat. Duis euismod cursus congue",
	}
}

interface IStyles {
	button: CSS.Properties,
	li: CSS.Properties,
	title: CSS.Properties,
	description: CSS.Properties,
	header: CSS.Properties,
	headerSubtitle: CSS.Properties,
	image: CSS.Properties,
}


const Articles = (props: any) => {

	return (
		<div className="container" style={{marginBottom: "10vh"}}>
			<div style={styles.header}>
				<h2>{text.news.title}</h2>
				<p style={styles.headerSubtitle}>{text.news.p}</p>
			</div>
			<ul>
				{props.articles.map((e: IArticle) => {

					return (
						<li style={styles.li}>
							<div style={{display: "flex", alignItems: "center"}}>
								<div style={styles.image}></div>
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

export const styles: IStyles =  {
	button: {
		textAlign: "center",
		backgroundColor: "white",
		color: "var(--flash)",
		borderRadius: "50px",
		textTransform: "uppercase",
	},
	li: {
		marginBottom: "5vh",
	},
	title: {
		fontSize: "3rem",
		fontFamily: "var(--lato)",
		fontWeight: "bold",
		marginBottom: "0",
		color: "var(--main)",
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
	headerSubtitle: {
		padding: "2vh 15vw",
		color: "var(--grey)",
		fontSize: "1.8rem",
	},
	image: {
		content: "",
		backgroundImage: `url(${e.urlImage})`,
		width: "12vw",
		height: "12vh",
	},
}