import Button from '../Components/Button';
import CardHome from '../Components/CardHome';
import OpinionHome from '../Components/OpinionHome';
import PartnersCarousel from '../Components/PartnersCarousel';
import HeroBannerCarousel from '../Components/HeroBannerCarousel';
import Image from 'next/image';
import * as CSS from 'csstype';
import { useText } from '../Hooks/useText';
import { useIsMobile } from '../Hooks/useIsMobile';

import {
	BrowserView,
	MobileView,
	withOrientationChange,
} from "react-device-detect";

export interface IStyles {
	header: {[idx: string]: CSS.Properties},
	partners: {[idx: string]: CSS.Properties},
	offers: {[idx: string]: CSS.Properties},
	numbers: {[idx: string]: CSS.Properties},
	videos: {[idx: string]: CSS.Properties},
	callToAction: {[idx: string]: CSS.Properties},
}

interface IProps {
	isLandscape: boolean,
}

function Home(props: IProps) {

	const text = useText('Home');
	const style = useIsMobile(styles);

	if (style === null)
		return null

	return (
		<>
			<header className="container" style={style.header.header}>
				<div style={style.header.headerText}>
					<h1>{text.header.title}</h1>
					<p style={style.header.headerSubtitle}>{text.header.p}</p>
					<Button style={style.header.button} name={text.header.button} route="Software"/>
				</div>
				<div style={style.header.headerImage}>
					<div style={style.header.image}>
						<HeroBannerCarousel text={text.header.textImage}/>
					</div>
					<div style={style.header.motif}>
						<Image
							src="/Images/motif_rect.svg"
							alt="motif abstrait filigrane"
							width={343*1.3}
							height={334*1.3}
						/>
					</div>
				</div>
			</header>

			<section>
				<h3 style={style.partners.title}>{text.partners.title}</h3>
				<div style={style.partners.banner}>
					<PartnersCarousel />
				</div>
			</section>

			<section style={style.offers.global}>
				<h2 style={style.offers.title}>{text.offers.title}</h2>
				<p style={style.offers.subtitle}>{text.offers.p}</p>
				<div style={props.isLandscape ? {padding: "0 10vw"} : undefined}>
					<div className="container" style={style.offers.divCardHome}>
						<CardHome icon="/Images/icon_excel.png" title={text.offers.card1.title} content={text.offers.card1.p} route="Software"/>
						<CardHome icon="/Images/icon_book.png" title={text.offers.card2.title} content={text.offers.card2.p} route="Manuals"/>
						<CardHome icon="/Images/icon_formation.png" title={text.offers.card3.title} content={text.offers.card3.p} route="Training"/>
					</div>
				</div>
			</section>

			<section>
				<div style={props.isLandscape ? {...style.numbers.background, height: "30vh"} : style.numbers.background}>
					<div style={style.numbers.card}>
						<div>
							<h2 style={style.numbers.number}>{text.numbers.number1}</h2>
							<p style={style.numbers.p}>{text.numbers.p1}</p>
						</div>
						<div style={style.numbers.divNumber}>
							<h2 style={style.numbers.number}>{text.numbers.number2}</h2>
							<p style={style.numbers.p}>{text.numbers.p2}</p>
						</div>
						<div>
							<h2 style={style.numbers.number}>{text.numbers.number3}</h2>
							<p style={style.numbers.p}>{text.numbers.p3}</p>
						</div>
					</div>
				</div>
			</section>

			<section style={style.videos.global}>
				<div style={style.videos.motif}>
					<Image
						src="/Images/motif_rect.svg"
						alt="motif abstrait filigrane"
						width={343*1.3}
						height={334*1.3}
					/>
				</div>
				<div style={style.videos.text}>
					<h2 style={{marginTop: "0"}}>{text.videos.title}</h2>
					<p style={style.videos.p}>{text.videos.p}</p>
					<MobileView>
						<iframe
							title='video'
							style={props.isLandscape ? {...style.videos.iframe, width: "40vw", height: "50vh"} : style.videos.iframe}
							src="https://www.youtube.com/embed/wkuVxTBXc8g"
							frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
							allowFullScreen>
						</iframe>
					</MobileView>
					<Button name={text.videos.button} route="Videos"/>
				</div>
				<BrowserView>
					<iframe
						title='video'
						style={style.videos.iframe}
						src="https://www.youtube.com/embed/wkuVxTBXc8g"
						frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
						allowFullScreen>
					</iframe>
				</BrowserView>
			</section>

			<section>
				<OpinionHome text={text.opinion}/>
			</section>

			<div className="container" style={style.callToAction.global}>
				<h2>{text.callToAction.title}</h2>
				<Button name={text.callToAction.button} route="Product"/>
			</div>
		</>
	);
}

export default withOrientationChange(Home);

export const styles = (mobile: boolean): IStyles => ({
	header: {
		header: mobile ? {
			textAlign: "center",
			marginTop: "7vh",
		}
			:
				{
			display: "flex",
			alignItems: "center",
			justifyContent: "space-between",
			height: "90vh",
		},
		headerSubtitle: {
			color: "var(--grey)",
			fontSize: mobile ? "1.6rem" : "2rem",
			marginBottom: mobile ? "6vh" : "4vh",
			marginTop: mobile ? "4vh" : undefined,
			textAlign: "justify",
			fontWeight: "bold",
		},
		headerImage: {
			display: mobile ? "none" : undefined,
			width: "30vw",
		},
		headerText: {
			width: mobile ? "100%" : "45%",
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
			fontFamily: "var(--lato)",
			fontWeight: 900,
			marginLeft: "10vw",
			marginBottom: "4vh",
		},
		banner: {
			backgroundColor: "rgba(220,70,20,0.1)",
			height: mobile ? "45vh" : "32vh",
			minHeight: "250px",
			paddingTop: "8vh",
			paddingLeft: "5%",
			paddingRight: "5%",
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
			fontSize: mobile ? "1.6rem" : "1.8rem",
			marginBottom: "4vh",
			textAlign: "center",
			width: mobile ? "80%" : "50%",
		},
		divCardHome: {
			display: "flex",
			justifyContent: "space-between",
			flexDirection: mobile ? "column" : undefined,
			width: mobile ? "90%" : undefined,
			margin: mobile ? "auto" : undefined,
		}
	},
	numbers: {
		background: {
			marginTop: mobile ? "10vh" : "20vh",
			backgroundColor: "var(--flash)",
			width: "100vw",
			height: mobile ? "23vh" : "20vh",
			paddingTop: mobile ? '3vh' : '8vh',
			marginBottom: mobile ? undefined : '35vh',
		},
		card: mobile ? {
			display: "flex",
			justifyContent: "space-around",
		}
		:
				{
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
			backgroundColor: 'white',
		},
		divNumber: {
			width: mobile ? "35%" : undefined,
		},
		number: {
			color: "var(--main)",
			marginBottom: "0",
			lineHeight: "1",
			fontSize: mobile ? "2.4rem" : undefined,
		},
		p: {
			color: "var(--grey)",
			fontSize: mobile ? "1.35rem" : "1.8rem",
		},
	},
	videos: {
		motif:  {
			display: mobile ? "none" : undefined,
		},
		global: {
			display: "flex",
			flexDirection: mobile ? "column" : undefined,
			alignItems: "center",
			marginTop: mobile ? "15vh" : "20vh",
			marginBottom: "20vh",
		},
		text: {
			marginLeft: mobile ? undefined : "6vw",
			marginRight: mobile ? undefined : "5vw",
			width: mobile ? "80%" : "30%",
			textAlign: mobile ? "center" : undefined,
		},
		p: {
			color: "var(--grey)",
			fontSize: mobile ? "1.6rem" : "1.8rem",
			marginBottom: "5vh",
		},
		iframe: {
			width: mobile ? "70vw" : "25vw",
			height: mobile ? "27vh" : "34vh",
			marginBottom: mobile ? "6vh" : undefined,
			marginTop: mobile ? "2vh" : undefined,
		},
	},
	callToAction: {
		global: {
			textAlign: "center",
			paddingBottom: "30vh",
			paddingTop: "20vh",
		}
	},
})
