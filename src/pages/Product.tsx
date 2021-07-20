import Button from '../Components/Button';
import ContactForm from '../Components/ContactForm';
import Image from 'next/image';
import Link from 'next/link';
import * as CSS from 'csstype';
import { useText } from '../Hooks/useText';

interface IStyles {
	[key: string] : CSS.Properties
}

const ratio = 0.7;

export default function Product() {

	const text = useText('Product');

	return <div style={styles.global}>
		<header style={styles.header}>
			<div style={styles.headerImage}>
				<Image
					src="/Images/motif_rect.svg"
					alt="motif abstrait filigrane"
					width={343*1.3}
					height={334*1.3}
				/>
			</div>
			<div style={styles.headerText}>
				<h2>{text.header.title}</h2>
				<p style={styles.headerP}>{text.header.p}</p>
				<Button name={text.header.button} route="Contact"/>
			</div>
		</header>
		<section>
			<h3 style={styles.title}>{text.title}</h3>
			<div style={styles.banner}>
				<div style={styles.banner1}>
					<p style={styles.bannerP}>{text.descrip}</p>
				</div>
				<div style={styles.banner2}>
					<div style={styles.bannerImage}></div>
				</div>
			</div>
		</section>
		<section className="container">
			<h4>Partition E</h4>
			<div style={styles.borderLeft}>
				<div style={styles.flexP}>
					<p>{text.partE.p[0]}</p>
					<div style={styles.buttonKnowMore}><Link href="/Software" replace>{text.buttonKnowMore}</Link></div>

				</div>
				<div style={styles.flexP}>
					<p>{text.partE.p[1]}</p>
					<div style={styles.buttonKnowMore}><Link href="/Manuals" replace>{text.buttonKnowMore}</Link></div>

				</div>
				<p>{text.partE.p[2]}</p>
				<p>{text.partE.p[3]}</p>
			</div>
			<p>{text.partE.p[4]}</p>
			<h4>Partition D</h4>
			<div style={styles.borderLeft}>
				<p>{text.partD.p}</p>
			</div>
			<h4 style={styles.prerequisites}>{text.prerequisites.title}</h4>
			<p>{text.prerequisites.p}</p>

		</section>
		<section style={styles.questions}>
			<p style={styles.questionsTitle}>{text.questions.title}</p>
			<p style={{fontWeight : 600}}>{text.questions.p}<span style={{color: "var(--main)"}}>06 89 70 90 35</span></p>
		</section>
		<div style={styles.contact}>
			<ContactForm />
		</div>
	</div>
}

export const styles: IStyles = {
	global: {
		color: "var(--dark)",
		textAlign: "justify",
		lineHeight: "3.2rem",
	},
	header: {
		display: "flex",
		alignItems: "center",
		marginTop: "0",
		marginBottom: "0",
		height: "90vh",
	},
	headerImage: {
		marginLeft: "15px",
	},
	headerText: {
		paddingLeft: "8vw",
	},
	headerP: {
		marginTop: "5vh",
		marginBottom: "3vh",
		color: "var(--grey)",
		fontSize: "1.8rem",
		width: "85%",
	},
	title: {
		color: "var(--flash)",
		fontSize: "4rem",
		fontFamily: "var(--lato)",
		fontWeight: 900,
		marginLeft: "10vw",
		marginBottom: "4vh",
	},
	banner: {
		display: "flex",
		alignItems: "center",
		height: "30vh",
		justifyContent: "space-between",
	},
	bannerP:  {

	},
	banner1: {
		backgroundColor: "var(--main)",
		height: "100%",
		width: "66%",
		color: "var(--light)",
		display: "flex",
		alignItems: "center",
		paddingLeft: "10vw",
		paddingRight: "10vw",
	},
	banner2: {
		backgroundColor: "var(--main)",
		height: "100%",
		display: "flex",
		alignItems: "center",
	},
	bannerImage: {
		width: `${722 * ratio}px`,
		height: `${405 * ratio}px`,
		backgroundImage: "url('/Images/usbkey.png')",
		backgroundPosition: 'center',
		backgroundRepeat: 'no-repeat',
		backgroundSize: 'cover',
		position: "relative",
		right: "45%",
	},
	borderLeft: {
		borderLeft: "5px solid var(--main)",
		paddingLeft: "3vw",
		marginLeft: "3vw",
		display: "flex",
		flexDirection: "column",
		justifyItems: "center",
		marginBottom: "5vh",
	},
	flexP: {
		display: "flex",
		alignItems: "center",
		marginTop: "0",
		marginBottom: "0",
	},
	buttonKnowMore: {
		color: "var(--main)",
		fontSize: "1.5rem",
		marginLeft: "3vw",
		fontWeight: "bold",
	},
	prerequisites: {
		marginTop: "10vh",
		color: "var(--main)",
	},
	questions: {
		textAlign: "center" as "center",
		backgroundColor: "var(--flash)",
		paddingTop: "10vh",
		paddingBottom: "20vh",
		marginTop: "7vh",
	},
	questionsTitle: {
		fontSize: "3.4rem",
		fontWeight: 900,
		fontFamily: "var(--lato)",
	},
	contact: {
	}
}