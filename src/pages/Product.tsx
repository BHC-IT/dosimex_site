import * as React from 'react';
import ContactForm from '../Components/ContactForm';
import Image from 'next/image';
import Link from 'next/link';
import * as CSS from 'csstype';
import { useIsMobile } from '../Hooks/useIsMobile';
import { useText } from '../Hooks/useText';
import { withOrientationChange } from 'react-device-detect'

interface IStyles {
	[key: string] : CSS.Properties | undefined,
}

interface IProps {
	isLandscape: boolean,
}

const ratio = 0.7;
const ratio2 = 0.6;

const hashes = "#buy";

function Product(props: IProps) {

	const text = useText('Product');
	const style = useIsMobile(styles);
	const [dummy, setDummy] = React.useState<number>(0);
	const buy = React.useRef<HTMLDivElement>(null);

	React.useEffect(() => {
		if (window.location.hash === '#buy') {
			buy.current?.scrollIntoView({ behavior: 'smooth', block: 'center', inline:'center' });
			buy.current?.focus();
		}
	}, [dummy]);

	if (style === null)
		return null

	return <div style={style.global}>
		<header style={style.header}>
			<div style={style.headerImage}>
				<Image
					src="/Images/motif_rect.svg"
					alt="motif abstrait filigrane"
					width={343*1.7}
					height={334*1.7}
				/>
			</div>
			<div style={style.headerText}>
				<h2>{text.header.title}</h2>
				<p style={style.headerP}>{text.header.p}</p>
				<a onClick={() => setTimeout(() => setDummy(dummy+1), 100)} href={hashes} style={style.button}>
					{text.header.button}
				</a>
			</div>
		</header>
		<section>
			<h3 style={style.title}>{text.title}</h3>
			<div style={style.banner}>
				<div style={style.banner1}>
					<p>{text.descrip}</p>
				</div>
				<div style={style.banner2}>
					<div style={style.bannerImage}></div>
				</div>
			</div>
		</section>
		<section className="container">
			<h4>Partition E</h4>
			<div style={style.borderLeft}>
				<div style={style.flexP}>
					<p>{text.partE.p[0]}</p>
					<div style={style.buttonKnowMore}><Link href="/Software" replace>{text.buttonKnowMore}</Link></div>

				</div>
				<div style={style.flexP}>
					<p>{text.partE.p[1]}</p>
					<div style={style.buttonKnowMore}><Link href="/Manuals" replace>{text.buttonKnowMore}</Link></div>

				</div>
				<p>{text.partE.p[2]}</p>
				<p>{text.partE.p[3]}</p>
			</div>
			<p>{text.partE.p[4]}</p>
			<h4>Partition D</h4>
			<div style={style.borderLeft}>
				<p>{text.partD.p}</p>
			</div>
			<h4 style={style.prerequisites}>{text.prerequisites.title}</h4>
			<p>{text.prerequisites.p}</p>

		</section>
		<section ref={buy}>
			<h3 style={{...style.title, marginTop: "15vh"}}>{text.titlePrice}</h3>
			<div style={style.divPrice}>
				<div style={style.imagePrice}></div>
				<div style={style.pPriceDiv}>
					<p style={style.pPrice}>{text.price}</p>
					<p>{text.priceShipment}</p>
				</div>
				<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top" style={style.formPrice}>
					<input type="hidden" name="cmd" value="_s-xclick"/>
					<input type="hidden" name="hosted_button_id" value="5ZR8G5EHFRUH4"/>
					<input style={style.paypal} type="image" src="/Images/PayPal-Logo.png" name="submit" alt="PayPal, le réflexe sécurité pour payer en ligne"/>
					<img alt="" src="https://www.paypalobjects.com/fr_FR/i/scr/pixel.gif" width="1" height="1"/>
				</form>
			</div>
		</section>
		<section style={style.questions}>
			<p style={style.questionsTitle}>{text.questions.title}</p>
			<p style={style.questionsP}>{text.questions.p}<span style={{color: "var(--main)"}}>06 89 70 90 35</span></p>
			<div style={style.contact}>
				<ContactForm />
			</div>
		</section>
		{props.isLandscape ?
			<div style={style.spaceTopFooter}></div>
		:
			null
		}
	</div>
}

export default withOrientationChange(Product);

export const styles = (mobile: boolean): IStyles => ({
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
		display: mobile ? "none" : undefined,
		marginLeft: "15px",
	},
	headerText: {
		paddingLeft: mobile ? undefined : "8vw",
		textAlign: mobile ? "center" : undefined,
	},
	headerP: {
		marginTop: "5vh",
		marginBottom: "3vh",
		color: "var(--grey)",
		fontSize: mobile ? "1.6rem" : "1.8rem",
		width: mobile ? undefined : "85%",
		padding: mobile ? "2vh 8vw 3vh 8vw" : undefined,
		textAlign: mobile ? "justify" : undefined,
	},
	button: {
		padding: "12px 25px",
		backgroundColor: "var(--main)",
		borderRadius: "50px",
		color: "white",
		cursor: "pointer",
		textTransform: "uppercase" as "uppercase",
	},
	title: {
		color: "var(--flash)",
		fontSize: mobile ? "3rem" : "4rem",
		fontFamily: "var(--lato)",
		fontWeight: 900,
		marginLeft: mobile ? undefined : "10vw",
		marginBottom: "4vh",
		width: mobile ? "80%" : undefined,
		padding: mobile ? "0 8vw" : undefined,
	},
	banner: {
		display: "flex",
		flexDirection: mobile ? "column-reverse" : undefined,
		alignItems: "center",
		height: mobile ? undefined : "30vh",
		justifyContent: "space-between",
	},
	banner1: {
		backgroundColor: "var(--main)",
		height: "100%",
		width: mobile ? "100%" : "66%",
		color: "var(--light)",
		display: "flex",
		alignItems: "center",
		paddingLeft: "10vw",
		paddingRight: "10vw",
	},
	banner2: {
		backgroundColor: "var(--main)",
		height: mobile ? undefined : "100%",
		display: "flex",
		alignItems: "center",
	},
	bannerImage: {
		width: mobile ? '100vw': `${722 * ratio}px`,
		height: mobile ? `${324 * ratio}px` : `${405 * ratio}px`,
		backgroundImage: "url('/Images/usbkey.png')",
		backgroundPosition: 'center',
		backgroundRepeat: 'no-repeat',
		backgroundSize: 'contain',
		position: "relative",
		right: mobile ? "5%" : "45%",
		marginTop: mobile ? "6vh" : undefined,
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
		flexDirection: mobile ? "column" : undefined,
		alignItems: mobile ? undefined : "center",
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
	divPrice: {
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		justifyContent: "center",
		paddingTop: mobile ? undefined : "5vh",
		fontFamily: "var(--lato)"
	},
	pPriceDiv: {
		color: "var(--dark)",
		marginBottom: "5vh",
		borderBottom: "1px solid rgb(0, 121, 193)",
		width: mobile ? "75vw" : "15vw",
		textAlign: "center"
	},
	pPrice: {
		fontWeight: "bold",
		fontSize: mobile ? "2rem": "2.2rem",
	},
	imagePrice: {
		width: mobile ? '100vw': `${722 * ratio2}px`,
		height: mobile ? `${324 * ratio}px` : `${405 * ratio2}px`,
		backgroundImage: "url('/Images/usbkey.png')",
		backgroundPosition: 'center',
		backgroundRepeat: 'no-repeat',
		backgroundSize: 'contain',
		marginTop: mobile ? undefined : "5vh",
		marginRight: mobile ? "10vw" : "2vw",
	},
	formPrice: {
		marginBottom: mobile ? "17vh" : "12vh",
		backgroundColor: "var(--flash)",
		color: "rgb(0 69 124)",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		width: mobile ? "50vw" : "10vw ",
		borderRadius: "500px",
	},
	paypal: {
		width: mobile ? "23vw" : "5.5vw",
	},
	questions: {
		textAlign: "center" as "center",
		backgroundColor: "var(--flash)",
		paddingTop: mobile ? "5vh" : "10vh",
		paddingBottom: "20vh",
		marginBottom: mobile ? '90vh' : '80vh',
		height: mobile ? '65vh' : '50vh',
		marginTop: mobile ? undefined : "7vh",
	},
	questionsTitle: {
		fontSize: mobile ? "2rem" : "3.4rem",
		fontWeight: 900,
		fontFamily: "var(--lato)",
		paddingRight: mobile ? "8vw" : undefined,
		paddingLeft: mobile ? "8vw" : undefined,
	},
	questionsP: {
		paddingRight: mobile ? "8vw" : undefined,
		paddingLeft: mobile ? "8vw" : undefined,
		fontWeight: 600,
	},
	contact: {
		marginTop: mobile ? '-10vh' : '-5vh',
		width: 'auto',
		zIndex: 2,
	},
	spaceTopFooter: mobile ? {
		content: "",
		height: "40vh",
		marginTop: "10vh",
		marginBottom: "50vh",
	}
	:
	undefined,
})