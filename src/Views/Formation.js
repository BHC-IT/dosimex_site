import React from 'react';

import { BrowserRouter as Link } from "react-router-dom";

import Slide from 'react-reveal/Slide';

import {Row, Col, Accordion, Button, Card} from 'react-bootstrap'

import Color from '../Styles/colorSchemes.js'

import image from '../Images/formation.png'

import TextSpliter from '../Components/TextSpliter.js'

// import { Parallax, Background } from 'react-parallax'

import { Parallax } from 'react-scroll-parallax';

import radium from '../Images/radium.png'
import gam from '../Images/gam.png'
import tec from '../Images/tec.png'
import seringue from '../Images/Bonhomme_seringue.jpg'
import coures from  "../Images/Bonhomme_coures.png"

import Catalogue from "../Folders/Formations_Dosimex 2020.pdf";

const transform = {
	open:'0',
};

const documentation =
"Nous proposons des formations courtes sur site de 2 à 3 jours, permettant la prise en main des outils et intégrant l’utilisation des codes dans le cadre de l’analyse et l’estimation des risques radiologiques appliqués à des cas concrets rencontrés dans le monde industriel et médical.\n\
Exemples de thématiques abordées :\n\
• Calcul de protection autour de générateurs X médicaux et industriels\n\
• Application NF C 15-160\n\
• Gestion d’une source de Radium de forte activité\n\
• Seringue au Technétium 99m et protection opérateur\n\
• Contamination au Fluor 18\n\
• Gammagraphie Co60, Ir192, Sr95, Cs137\n\
• Les radionucléide préférés d'EDF\n\
• Approche ALARA sur tuyauterie primaire\n\
• Protection biologique d'une source de Californium 252 (neutrons +gamma)\n\
• Ionisations alimentaires\n\
• Source Strontium-Yttrium 90 de forte activité\n\
• Analyse radioprotection d'un colis de déchets produit de fission ( CSDV)\n\
Prix forfaitaire pour des formations sur site : 1 500 € HT/jour pour 4 à 8 stagiaires (+ 150 € HT/clé/stagiaire) \n\
<a href='mailto:contact@dosimex.fr?subject=formation&body=Expliquez votre besoin en formation ici' style=marginTop:2vh > contact@dosimex.fr</a>\n\
Téléphone : 06 89 70 90 35"

export default class About extends React.Component {

	constructor(props){
		super(props);

		this.state = {
			currOpen:transform[this.props.pack]?transform[this.props.pack]:null
		}
	}

	isOpen(){
		if (this.state.currOpen === null)
			return (false);
		return (true);
	}

	_keepTrack(i){
		if (this.state.currOpen === i)
			this.setState({currOpen:null});
		else
			this.setState({currOpen:i});
	}

	render(){
		return (
			<Row style={{ height:'95vh', alignItems:'flex-end'}} >
				{this.isOpen() ?
					null
					:
					<p style={{textAlign:'center', width:'100vw'}} ><img src={image} style={{height:'60vh'}} /> </p>
				}
				<Accordion defaultActiveKey={transform[this.props.pack]} >
					<Card style={{width:'101vw'}} >
						<Card.Header style={{backgroundColor:Color.lightishgrey, height:'8vh'}} >
							<Accordion.Toggle style={{width:'100%'}} as={Button} variant="link" eventKey="0" onClick={() => this._keepTrack('0')} >
								<p style={{fontSize:30}} >formation</p>
							</Accordion.Toggle>
						</Card.Header>
						<Accordion.Collapse eventKey="0" style={{backgroundColor:Color.lightergrey}} >
							<Col xs={{span:10, offset:1}} style={{backgroundColor:Color.white, backgroundImage: `url(${coures})`, backgroundPosition:'center', height:'87vh', backgroundRepeat:'no-repeat', backgroundSize: "cover", marginTop:'1vh'}} >
								<Row style={{justifyContent:'center', height:'56vh'}} >
									<TextSpliter textStyle={{textAlign:'justify', fontSize:18, margin:5, marginLeft:15, marginRight:15, marginTop:0}} text={documentation} />
								</Row>
							</Col>
						</Accordion.Collapse>
					</Card>
				</Accordion>
			</Row>
		);
	}

}