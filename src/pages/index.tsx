import Button from '../Components/Button';
import CardHome from '../Components/CardHome';
import OpinionHome from '../Components/OpinionHome';
import Image from 'next/image';
import * as CSS from 'csstype';
import { useText } from '../Hooks/useText';

export interface IStyles {
	header: {[idx: string]: CSS.Properties},
	partners: {[idx: string]: CSS.Properties},
	offers: {[idx: string]: CSS.Properties},
	numbers: {[idx: string]: CSS.Properties},
	opinion: {[idx: string]: CSS.Properties},
	videos: {[idx: string]: CSS.Properties},
	callToAction: {[idx: string]: CSS.Properties},
}

export default function Home() {

	const text = useText('Home');

	return (
		<>
			<header className="container" style={styles.header.header}>
				<div style={styles.header.headerText}>
					<h1>{text.header.title}</h1>
					<p style={styles.header.headerSubtitle}>{text.header.p}</p>
					<Button style={styles.header.button} name={text.header.button} route="Software"/>
				</div>
				<div style={styles.header.headerImage}>
					<div style={styles.header.image}>
						<Image
							src="/Images/home_header_carousel.png"
							alt="logiciel dosimex"
							width={1006*0.7}
							height={634*0.7}
						/>
					</div>
					<div style={styles.header.motif}>
						<Image
							src="/Images/motif_rect.svg"
							alt="motif abstrait filigrane"
							width={343*1.3}
							height={334*1.3}
						/>
					</div>
					<p style={styles.header.legendImage}>{text.header.textImage[0]}</p>
				</div>
			</header>

			<section>
				<h3 style={styles.partners.title}>{text.partners.title}</h3>
				<div className="container" style={styles.partners.banner}>
					<div>Map component Partners</div>
					{/*<Carousel />*/}
				</div>
			</section>

			<section style={styles.offers.global}>
				<h2 style={styles.offers.title}>{text.offers.title}</h2>
				<p style={styles.offers.subtitle}>{text.offers.p}</p>
				<div className="container" style={{display: "flex", justifyContent: "space-between"}}>
					<CardHome icon="/Images/icon_excel.png" title={text.offers.card1.title} content={text.offers.card1.p} route="Software"/>
					<CardHome icon="/Images/icon_book.png" title={text.offers.card2.title} content={text.offers.card2.p} route="Software"/>
					<CardHome icon="/Images/icon_formation.png" title={text.offers.card3.title} content={text.offers.card3.p} route="Software"/>
				</div>
			</section>

			<section>
				<div style={styles.numbers.background}>
					<div style={styles.numbers.card}>
						<div>
							<h2 style={styles.numbers.number}>{text.numbers.number1}</h2>
							<p style={styles.numbers.p}>{text.numbers.p1}</p>
						</div>
						<div>
							<h2 style={styles.numbers.number}>{text.numbers.number2}</h2>
							<p style={styles.numbers.p}>{text.numbers.p2}</p>
						</div>
						<div>
							<h2 style={styles.numbers.number}>{text.numbers.number3}</h2>
							<p style={styles.numbers.p}>{text.numbers.p3}</p>
						</div>
					</div>
				</div>
			</section>

			<section style={styles.videos.global}>
				<div style={styles.videos.motif}>
					<Image
						src="/Images/motif_rect.svg"
						alt="motif abstrait filigrane"
						width={343*1.3}
						height={334*1.3}
					/>
				</div>
				<div style={styles.videos.text}>
					<h2 style={{marginTop: "0"}}>{text.videos.title}</h2>
					<p style={styles.videos.p}>{text.videos.p}</p>
					<Button name={text.videos.button} route="Videos"/>
				</div>
				<iframe
					title='video'
					style={{width:'25vw', height:'34vh'}}
					src="https://www.youtube.com/embed/E5eWKTJaNxQ"
					frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
					allowFullScreen>
				</iframe>
			</section>

			<section>
				<OpinionHome text={text.opinion}/>
			</section>

			<div style={styles.callToAction.global}>
				<h2>{text.callToAction.title}</h2>
				<Button name={text.callToAction.button} route="Product"/>
			</div>
		</>
	);
}

export const styles: IStyles =  {
	header: {
		header: {
			display: "flex",
			alignItems: "center",
			justifyContent: "space-between",
			marginTop: "0",
			marginBottom: "0",
			height: "90vh",
		},
		headerSubtitle: {
			color: "var(--grey)",
			fontSize: "1.8rem",
			marginBottom: "4vh",
		},
		headerImage: {
			width: "40%",
		},
		headerText: {
			width: "45%",
		},
		motif: {
			position: "relative",
			right: "-21vw",
			top: "-120px",
			zIndex: 1,
		},
		image: {
			position: "absolute",
			zIndex: 100,
			marginRight: "10vw",
		},
		legendImage: {
			color: "var(--grey)",
			fontSize: "1.8rem",
			marginBottom: "4vh",
			fontStyle: "italic",
			right: "10vw",
			position: "absolute",
			marginTop: "0",
		},
		button: {
			border: "2px solid var(--main)",
			backgroundColor: "white",
			color: "var(--main)",
		}
	},
	partners: {
		title: {
			color: "var(--flash)",
			fontSize: "4rem",
			fontFamily: "var(--lato)",
			fontWeight: 900,
			marginLeft: "10vw",
			marginBottom: "4vh",
		},
		banner: {
			backgroundColor: "var(--main)",
			height: "100%",
			color: "var(--light)",
		},
	},
	offers: {
		global: {
			display: "flex",
			justifyContent: "center",
			flexDirection: "column",
			alignItems: "center",
		},
		title: {
			textAlign: "center",
			marginTop: "17vh",
			marginBottom: "0",
		},
		subtitle: {
			color: "var(--grey)",
			fontSize: "1.8rem",
			marginBottom: "4vh",
			textAlign: "center",
			width: "50%",
		},
	},
	numbers: {
		background: {
			marginTop: "20vh",
			backgroundColor: "var(--flash)",
			width: "100vw",
			height: "20vh",
			paddingTop: '8vh',
			marginBottom: '35vh',
		},
		card: {
			display: "flex",
			alignContent: "center",
			justifyContent: "space-around",
			borderRadius: "20px",
			boxShadow: "0px 5px 5px rgba(0, 0, 0, 0.1)",
			width: "80%",
			marginLeft: "auto",
			marginRight: "auto",
			position: "relative",
			zIndex: 100,
			paddingBottom: "4vh",
			paddingTop: "4vh",
			zIndex: 2,
			backgroundColor: 'white',
		},
		number: {
			color: "var(--main)",
			marginBottom: "0px",
			lineHeight: "1",
		},
		p: {
			color: "var(--grey)",
			fontSize: "1.8rem",
		},
	},
	videos: {
		global: {
			display: "flex",
			alignItems: "center",
			marginTop: "20vh",
			marginBottom: "20vh",
		},
		text: {
			marginLeft: "6vw",
			marginRight: "5vw",
			width: "30%",
		},
		p: {
			color: "var(--grey)",
			fontSize: "1.8rem",
			marginBottom: "5vh",
		},
	},
	callToAction: {
		global: {
			textAlign: "center",
			paddingBottom: "30vh",
			paddingTop: "20vh",
		}
	},
	opinion: {},
}
