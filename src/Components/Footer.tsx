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
					<p>Copyright © 2021 Designed by BHC-IT</p>
					<p>Tous droits réservés </p>
					<div style={{display: "flex", alignItems: "center"}}>
						<i className="flaticon-telephone" style={{fontSize: "1.5rem"}}/>
						<p>06 89 70 90 35</p>
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
							<p style={{margin: "0", color: "red"}}>Retrouvez-nous</p>
							<p style={{margin: "0", color: "red"}}>sur nos réseaux</p>
						</div>
					</div>
				</div>
				<div style={{width: "40%", display: "flex", flexWrap: "wrap", justifyContent: "center"}}>
					<div style={{width: "30%"}}>
						<h4>Ressources</h4>
						<Link href="/Videos" replace><p>Archives vidéos</p></Link>
						<Link href="/Manuals" replace><p>Manuels et validations</p></Link>
						<Link href="/Books" replace><p>Lectures</p></Link>
					</div>
					<div style={{width: "30%"}}>
						<h4>Entreprise</h4>
						<Link href="/About" replace><p>Qui sommes-nous ?</p></Link>
						<Link href="/" replace><p>Mentions légales</p></Link>
						<Link href="/Contact" replace><p>Contact</p></Link>
					</div>
				</div>
			</div>
		);
	}
}

export default ContactForm;

export const styles: IStyles =  {

}