import { GetStaticPropsContext, GetStaticProps } from 'next';
import IArticle from '../../interfaces/IArticle'
import * as axios from 'axios';
import Link from 'next/link';
import * as CSS from 'csstype';

const text = {
	news: {
		title: "Retrouvez les dernières nouveautés",
		p: "Lorem ipsuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuum",
	}
}

interface IStyles {
	button: CSS.Properties,
	li: CSS.Properties,
	title: CSS.Properties,
	description: CSS.Properties,
	header: CSS.Properties,
	headerSubtitle: CSS.Properties,
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
							<ul>
								<li><h3 style={styles.title}>{e.title}</h3></li>
								<li style={styles.description}>{e.description}</li>
							</ul>
							<Link href={`/articles/${e.slug}`}>
								<button style={styles.button}>Voir plus   →</button>
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

export const styles: IStyles =  {
	button: {
		textAlign: "center",
		backgroundColor: "white",
		color: "var(--main)",
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
		color: "var(--flash)",
		marginBottom: "0",
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
}