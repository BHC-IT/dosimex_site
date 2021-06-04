import * as React from 'react';
import * as CSS from 'csstype';
import Image from 'next/image';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'

interface IProps {
}

interface IState {

}

export interface IStyles {

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
			<div style={{display: "flex", flexWrap: "wrap", justifyContent: "center", alignItems: "center", padding: "30px", backgroundColor: "black", color: "white"}}>
				<div style={{width: "20%"}}>
					<Image
						src="/Images/trefle.png"
						alt="icône trèfle radioactivité"
						width={`${154 * ratio}px`}
						height={`${154* ratio}px`}
					/>
					<p>{text.col1.p1}</p>
					<p>{text.col1.p2}</p>
					<div style={{display: "flex", alignItems: "center"}}>
						<i className="flaticon-telephone" style={{fontSize: "1.5rem"}}/>
						<p>{text.col1.p3}</p>
					</div>
					<div style={{display: "flex", alignItems: "center"}}>
						<div style={{display: "flex", alignItems: "center"}}>
							<Link href="https://www.youtube.com/channel/UCmijJyGaFfJte4xsTk90MVA/featured" replace>
								<FontAwesomeIcon icon={faYoutube} style={{fontSize: "1.5rem"}}/>
							</Link>
							<Link href="https://fr.linkedin.com/company/dosimex" replace>
								<FontAwesomeIcon icon={faLinkedin} style={{fontSize: "1.28rem"}}/>
							</Link>
						</div>
						<div>
							<p style={{margin: "0", color: "red"}}>{text.col1.p4}</p>
						</div>
					</div>
				</div>
				<div style={{width: "40%", display: "flex", flexWrap: "wrap", justifyContent: "center"}}>
					<div style={{width: "30%"}}>
						<h4>{text.col2.title}</h4>
						<Link href="/Videos" replace><p>{text.col2.p1}</p></Link>
						<Link href="/Manuals" replace><p>{text.col2.p2}</p></Link>
						<Link href="/Books" replace><p>{text.col2.p3}</p></Link>
					</div>
					<div style={{width: "30%"}}>
						<h4>{text.col3.title}</h4>
						<Link href="/About" replace><p>{text.col3.p1}</p></Link>
						<Link href="/" replace><p>{text.col3.p2}</p></Link>
						<Link href="/Contact" replace><p>{text.col3.p3}</p></Link>
					</div>
				</div>
			</div>
		);
	}
}

export default ContactForm;

export const styles: IStyles =  {

}