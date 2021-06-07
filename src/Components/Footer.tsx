import * as React from 'react';
import * as CSS from 'csstype';
import Image from 'next/image';
import Link from 'next/link';
import Icon from '@mdi/react';
import { mdiYoutube } from '@mdi/js';
import { mdiLinkedin } from '@mdi/js';
import { mdiPhone } from '@mdi/js';


interface IProps {
}

interface IState {

}

export interface IStyles {
	footer: CSS.Properties,
	col1: CSS.Properties,
	col2: CSS.Properties,
	col: CSS.Properties,
	divPhone: CSS.Properties,
	divSocialMedia: CSS.Properties,
	divIconSocial: CSS.Properties,
	iconSocial: CSS.Properties,
	pSocialMedia: CSS.Properties,
	linkRessource: CSS.Properties,
}

const text = {
	col1: {
		p1: "Copyright © 2021 Designed by BHC-IT",
		p2: "Tous droits réservés ",
		p3: "06 89 70 90 35",
		p4: "Retrouvez-nous sur nos réseaux",
	},
	col2: {
		title: "Ressources",
		p1: "Archives vidéos",
		p2: "Manuels et validations",
		p3: "Lectures",
	},
	col3: {
		title: "Entreprise",
		p1: "Qui sommes-nous ?",
		p2: "Mentions légales",
		p3: "Contact",
	}
}

class ContactForm extends React.Component<IProps, IState> {

	constructor(props : IProps) {
		super(props);

		this.state = {
		}
	}

	render() {
		const ratio = 0.27;
		return (
			<footer style={styles.footer}>
				<div style={styles.col1}>
					<Image
						src="/Images/trefle.png"
						alt="icône trèfle radioactivité"
						width={`${154 * ratio}rem`}
						height={`${154* ratio}rem`}
					/>
					<p>{text.col1.p1}</p>
					<p>{text.col1.p2}</p>
					<div style={styles.divPhone}>
						<Icon path={mdiPhone} size={1.8} />
						<p style={{marginLeft: "0.5vw"}}>{text.col1.p3}</p>
					</div>
					<div style={styles.divSocialMedia}>
						<div style={styles.divIconSocial}>
							<div style={styles.iconSocial}>
								<Link href="https://www.youtube.com/channel/UCmijJyGaFfJte4xsTk90MVA/featured" replace>
									<Icon path={mdiYoutube} size={2} />
								</Link>
							</div>
							<div style={styles.iconSocial}>
								<Link href="https://fr.linkedin.com/company/dosimex" replace>
									<Icon path={mdiLinkedin} size={1.6} />
								</Link>
							</div>
						</div>
						<div style={{width: "30%"}}>
							<p style={styles.pSocialMedia}>{text.col1.p4}</p>
						</div>
					</div>
				</div>
				<div style={styles.col2}>
					<div style={styles.col}>
						<h4>{text.col2.title}</h4>
						<Link href="/Videos" replace><p style={styles.linkRessource}>{text.col2.p1}</p></Link>
						<Link href="/Manuals" replace><p style={styles.linkRessource}>{text.col2.p2}</p></Link>
						<Link href="/Books" replace><p style={styles.linkRessource}>{text.col2.p3}</p></Link>
					</div>
					<div style={styles.col}>
						<h4>{text.col3.title}</h4>
						<Link href="/About" replace><p style={styles.linkRessource}>{text.col3.p1}</p></Link>
						<Link href="/" replace><p style={styles.linkRessource}>{text.col3.p2}</p></Link>
						<Link href="/Contact" replace><p style={styles.linkRessource}>{text.col3.p3}</p></Link>
					</div>
				</div>
			</footer>
		);
	}
}

export default ContactForm;

export const styles: IStyles =  {
	footer: {
		display: "flex",
		flexWrap: "wrap",
		justifyContent: "center",
		alignItems: "center",
		padding: "7vh 5vw",
		backgroundColor: "var(--dark)",
		color: "var(--light)",
	},
	col1: {
		width: "30%",
	},
	col2: {
		width: "50%",
		display: "flex",
		flexWrap: "wrap",
		justifyContent: "center",
	},
	col: {
		width: "40%",
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
}