import * as CSS from 'csstype';
import Radium from 'radium';
import { useIsMobile } from '../Hooks/useIsMobile';
import { useText } from '../Hooks/useText';

import {
	BrowserView,
	MobileView,
	isMobile,
} from "react-device-detect";

export interface IStyles {
	global: CSS.Properties,
	header: CSS.Properties,
	title: CSS.Properties,
	div: CSS.Properties,
	circleImage: CSS.Properties,
	name: CSS.Properties,
	section: CSS.Properties,
	sectionFlex: CSS.Properties,
	pFlex: CSS.Properties,
	pBorder: CSS.Properties,
}

const About = () => {
	const style = useIsMobile(styles);
	const text = useText('About');

	if (style === null)
		return null

	return (
		<div className="container" style={style.global}>
			<div style={style.header}>
				<h2 style={style.title}>{text.header.title}</h2>
			</div>
			<div style={style.section}>
				<div style={style.sectionFlex}>
					<div style={style.div}>
						<div style={{...style.circleImage, backgroundImage: "url('/Images/Gerald.png')"}}></div>
						<h3 style={style.name}>Gérald Lopez</h3>
					</div>
					<div style={style.pFlex}>
						<p>{text.gerald.p[0]}</p>
						<p>{text.gerald.p[1]}</p>
						<p>{text.gerald.p[2]}</p>
					</div>
				</div>
				<p>{text.gerald.p[3]}</p>
				<div style={style.pBorder}>
					<p>{text.gerald.pBorder[0]}</p>
					<p>{text.gerald.pBorder[1]}</p>
					<p>{text.gerald.pBorder[2]}</p>
					<p>{text.gerald.pBorder[3]}</p>
					<p>{text.gerald.pBorder[4]}</p>
				</div>
				<p>{text.gerald.p[4]}</p>
			</div>
			<div style={style.section}>
				<div style={style.sectionFlex}>
					<MobileView>
						<div style={style.div}>
							<div style={{...style.circleImage, backgroundImage: "url('/Images/Alain.png')"}}></div>
							<h3 style={style.name}>Alain Vivier</h3>
						</div>
					</MobileView>
					<div style={isMobile ? undefined : {marginRight: "5%"}}>
						<p>{text.alain.p[0]}</p>
						<p>{text.alain.p[1]}</p>
						<p>{text.alain.p[2]}</p>
					</div>
					<BrowserView>
						<div style={style.div}>
							<div style={{...style.circleImage, backgroundImage: "url('/Images/Alain.png')"}}></div>
							<h3 style={style.name}>Alain Vivier</h3>
						</div>
					</BrowserView>
				</div>
				<p style={{marginTop: "5vh"}}>{text.alain.p[3]}</p>
				<p>{text.alain.p[4]}</p>
				<p>{text.alain.p[5]}</p>
				<p>{text.alain.p[6]}</p>
				<p style={{fontStyle: "italic", textAlign: "center", marginTop: "8vh"}}>{text.epilogue}</p>
			</div>
		</div>
	);
}

export default Radium(About);

export const styles = (mobile: boolean): IStyles => ({
	global: {
		color: "var(--dark)",
		textAlign: "justify",
		lineHeight: "3.2rem",
	},
	header: {
		textAlign: "center",
		padding: "20vh auto",
		marginTop: "15vh",
		marginBottom: mobile ? "10vh" : "15vh",
	},
	title: {
		fontSize: "6rem",
	},
	div: {
		height: mobile ? undefined : "45vh",
		width: mobile ? "100%" : "30vw",
		display: mobile ? "flex" : undefined,
		flexDirection: mobile ? "column" : undefined,
		alignItems: mobile ? "center" : undefined,
	},
	circleImage: {
		width: mobile ? "180px" : "370px",
		height: mobile ? "180px" : "370px",
		backgroundPosition: 'center',
		backgroundRepeat: 'no-repeat',
		backgroundSize: 'cover',
		borderRadius: "50%",
	},
	name: {
		textAlign: "center",
		fontFamily: "var(--lato)",
		fontSize: "2.8rem",
		fontWeight: 900,
	},
	section: {
		marginTop: "8vh",
		marginBottom: "15vh",
	},
	sectionFlex: {
		display: "flex",
		flexDirection: mobile ? "column" : undefined,
		alignItems: "center",
		justifyContent: "space-between",
		marginBottom: "2vh",
	},
	pFlex: {
		padding: mobile ? undefined : "5% 0 5% 5%",
	},
	pBorder: {
		paddingLeft: "3vw",
		marginLeft: "3vw",
		marginTop: "5vh",
		marginBottom: "5vh",
		borderLeft: "3px solid var(--flash)",
	}
})