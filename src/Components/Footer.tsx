import * as React from 'react';
import * as CSS from 'csstype';
import Image from 'next/image';
import Link from 'next/link';
import Icon from '@mdi/react';
import { mdiYoutube } from '@mdi/js';
import { mdiLinkedin } from '@mdi/js';
import { mdiPhone } from '@mdi/js';
import { useText } from '../Hooks/useText';

import {
	isMobile
} from "react-device-detect";

export interface IStyles {
	footer: CSS.Properties,
	col1: CSS.Properties,
	col2: CSS.Properties,
	col: CSS.Properties,
	colTitle: CSS.Properties,
	divPhone: CSS.Properties,
	divSocialMedia: CSS.Properties,
	divIconSocial: CSS.Properties,
	iconSocial: CSS.Properties,
	pSocialMedia: CSS.Properties,
	textSocialMedia: CSS.Properties,
	linkRessource: CSS.Properties,
}

const useIsMobile = () => {

	React.useEffect(() => {}, [])

	return isMobile
}

const Footer = () => {

	const text = useText('Footer');

	const mobile = useIsMobile();

	const ratio = 0.27;
	return (
		<footer style={styles(mobile).footer}>
			<div style={styles(mobile).col1}>
				<Image
					src="/Images/trefle.png"
					alt="icône trèfle radioactivité"
					width={`${154 * ratio}rem`}
					height={`${154* ratio}rem`}
				/>
				<p>{text.col1.p[0]}</p>
				<p>{text.col1.p[1]}</p>
				<div style={styles(mobile).divPhone}>
					<Icon path={mdiPhone} size={1.8} />
					<p style={{marginLeft: "0.5vw"}}>{text.col1.p[2]}</p>
				</div>
				<div style={styles(mobile).divSocialMedia}>
					<div style={styles(mobile).divIconSocial}>
						<div style={styles(mobile).iconSocial}>
							<a href="https://www.youtube.com/channel/UCmijJyGaFfJte4xsTk90MVA/featured" target="_blank" rel="noreferrer noopener">
								<Icon path={mdiYoutube} size={2} />
							</a>
						</div>
						<div style={styles(mobile).iconSocial}>
							<a href="https://fr.linkedin.com/company/dosimex" target="_blank" rel="noreferrer noopener">
								<Icon path={mdiLinkedin} size={1.6} />
							</a>
						</div>
					</div>
					<div style={styles(mobile).textSocialMedia}>
						<p style={styles(mobile).pSocialMedia}>{text.col1.p[3]}</p>
					</div>
				</div>
			</div>
			<div style={styles(mobile).col2}>
				<div style={styles(mobile).col}>
					<p style={styles(mobile).colTitle}>{text.col2.title}</p>
					<Link href="/Videos" replace><p style={styles(mobile).linkRessource}>{text.col2.p[0]}</p></Link>
					<Link href="/Manuals" replace><p style={styles(mobile).linkRessource}>{text.col2.p[1]}</p></Link>
					<Link href="/Books" replace><p style={styles(mobile).linkRessource}>{text.col2.p[2]}</p></Link>
				</div>
				<div style={styles(mobile).col}>
					<p style={styles(mobile).colTitle}>{text.col3.title}</p>
					<Link href="/About" replace><p style={styles(mobile).linkRessource}>{text.col3.p[0]}</p></Link>
					<a href="/Folders/Informations_légales.pdf" target="_blank" rel="noreferrer noopener"><p style={styles(mobile).linkRessource}>{text.col3.p[1]}</p></a>
					<Link href="/Contact" replace><p style={styles(mobile).linkRessource}>{text.col3.p[2]}</p></Link>
				</div>
			</div>
		</footer>
	);
}

export default Footer;

console.log(isMobile);

export const styles = (mobile: boolean): IStyles => ({
	footer: {
		display: "flex",
		flexDirection: mobile ? "column" : "row",
		flexWrap: "wrap",
		justifyContent: "center",
		alignItems: "center",
		padding: "7vh 5vw",
		backgroundColor: "var(--dark)",
		color: "var(--light)",
	},
	col1: {
		width: mobile ? "80%" : "30%",
	},
	col2: {
		width: mobile ? "80%" : "50%",
		display: "flex",
		flexWrap: "wrap",
		flexDirection: mobile ? "column" : undefined,
		justifyContent: "center",
	},
	col: {
		width: mobile ? "80%" : "40%",
	},
	colTitle: {
		fontFamily: "var(--lato)",
		fontWeight: 700,
		fontSize: "2.4rem",
	},
	divPhone: {
		display: "flex",
		alignItems: "center",
	},
	divSocialMedia: {
		display: "flex",
		alignItems: "center",
	},
	divIconSocial: {
		display: "flex",
		alignItems: "center",
	},
	iconSocial: {
		marginRight: "0.5vw",
		cursor: "pointer",
	},
	textSocialMedia: {
		width: mobile ? "60%" : "30%",
	},
	pSocialMedia: {
		margin: "0",
		color: "var(--main)",
		fontFamily: "Leckerli One, cursive",
		fontSize: "1.8rem",
		marginLeft: "1vw",
	},
	linkRessource: {
		cursor: "pointer",
	}
})