import * as CSS from 'csstype';
import Radium from 'radium';
import { useText } from '../Hooks/useText';

export interface IStyles {
	global: CSS.Properties,
	header: CSS.Properties,
	headerSubtitle: CSS.Properties,
	div: CSS.Properties,
	circleImage: CSS.Properties,
	name: CSS.Properties,
	section: CSS.Properties,
	sectionFlex: CSS.Properties,
	pFlex: CSS.Properties,
	pBorder: CSS.Properties,
}

const About = () => {
	const text = useText('About');

	return (
		<div className="container" style={styles.global}>
			<div style={styles.header}>
				<h2>{text.header.title}</h2>
				<p style={styles.headerSubtitle}>{text.header.p}</p>
			</div>
			<div style={styles.section}>
				<div style={styles.sectionFlex}>
					<div style={styles.div}>
						<div style={{...styles.circleImage, backgroundImage: "url('/Images/Gerald.png')"}}></div>
						<h3 style={styles.name}>Gérald Lopez</h3>
					</div>
					<div style={styles.pFlex}>
						<p>{text.gerald.p[0]}</p>
						<p>{text.gerald.p[1]}</p>
						<p>{text.gerald.p[2]}</p>
					</div>
				</div>
				<p>{text.gerald.p[3]}</p>
				<div style={styles.pBorder}>
					<p>{text.gerald.pBorder[0]}</p>
					<p>{text.gerald.pBorder[1]}</p>
					<p>{text.gerald.pBorder[2]}</p>
					<p>{text.gerald.pBorder[3]}</p>
					<p>{text.gerald.pBorder[4]}</p>
				</div>
				<p>{text.gerald.p[4]}</p>
			</div>
			<div style={styles.section}>
				<div style={styles.sectionFlex}>
					<div style={{marginRight: "5%"}}>
						<p>{text.alain.p[0]}</p>
						<p>{text.alain.p[1]}</p>
						<p>{text.alain.p[2]}</p>
					</div>
					<div style={styles.div}>
						<div style={{...styles.circleImage, backgroundImage: "url('/Images/Alain.png')"}}></div>
						<h3 style={styles.name}>Alain Vivier</h3>
					</div>
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

export const styles: IStyles =  {
	global: {
		color: "var(--dark)",
		textAlign: "justify",
		lineHeight: "3.2rem",
	},
	header: {
		textAlign: "center",
		padding: "20vh auto",
		marginTop: "15vh",
		marginBottom: "15vh",
	},
	headerSubtitle: {
		padding: "4vh 15vw",
		color: "var(--grey)",
		fontSize: "1.8rem",
	},
	div: {
		height: "45vh",
		width: "30vw",
	},
	circleImage: {
		width: "370px",
		height: "370px",
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
		alignItems: "center",
		justifyContent: "space-between",
		marginBottom: "2vh",
	},
	pFlex: {
		padding: "5% 0 5% 5%",
	},
	pBorder: {
		paddingLeft: "3vw",
		marginLeft: "3vw",
		marginTop: "5vh",
		marginBottom: "5vh",
		borderLeft: "3px solid var(--flash)",
	}
}