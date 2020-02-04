import React from 'react';

import {Row, Col, Accordion, Button, Card} from 'react-bootstrap'

import Color from '../Styles/colorSchemes.js'

import image from '../Images/formation.png'

import TextSpliter from '../Components/TextSpliter.js'

// import { Parallax, Background } from 'react-parallax'

import coures from  "../Images/Bonhomme_coures.png"

import Catalogue from "../Folders/le_catalogue_de_formation_safe_technologies_v2.2.pdf";

import {
	isBrowser,
} from "react-device-detect";

const transform = {
	open:'0',
};

const documentation =
`Nous proposons des formations sur site de 2 à 3 jours.\n Ces formations s’appuient sur des travaux dirigés intégrant l’utilisation des outils Dosimex\n dans le cadre plus large de l’analyse des risques radiologiques appliqués à des cas concrets rencontrés dans le monde industriel et médical.\n
<p style='margin-top:2vh' >Exemples de thématiques abordées, modulables selon les besoins :</p>\n
• Calcul de protection autour de générateurs X médicaux et industriels\n
• Application NF C 15-160\n
• Gestion d’une source de Radium de forte activité\n
• Seringue au Technétium 99m et protection opérateur\n
• Contamination au Fluor 18\n
• Gammagraphie Co60, Ir192, Sr95, Cs137\n
• Les radionucléides préférés d'EDF\n
• Approche ALARA sur tuyauterie primaire\n
• Diffusion dans une chicane de blockhaus\n
• Radioprotection autours d'une piscine de stockage combustibles\n
• Protection biologique d'une source de Californium 252 (neutrons +gamma)\n
• Ionisations alimentaires\n
• Source Strontium-Yttrium 90 de forte activité\n
• Analyse radioprotection d'un colis de déchets produit de fission ( CSDV)\n
<p style='margin-top:4vh' >Pour un devis, nous contacter à :</p> \n
<a href='/contact' style=marginTop:2vh > Par mail </a>\n
Téléphone : 06 89 70 90 35\n
<p style='margin-top:4vh' >Nous proposons en partenariat avec Safetechnologie d'autres formations sur les thématiques :</p>\n
• Physique nucléaire et radiactivité \n
• Interaction rayonnements matière\n
• Seuil de décision (ISO 11929)\n
• Spéctrométrie gamma\n
`

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
			<Row style={{ height:'96vh', alignItems:'flex-end'}} >
				{this.isOpen() ?
					null
					:
					<p style={{textAlign:'center', width:'100vw'}} ><img src={image} style={{height:isBrowser ? '60vh' : '60vw'}} alt='formation' /> </p>
				}
				<Accordion defaultActiveKey={transform[this.props.pack]} >
					<Card style={{width:'101vw'}} >
						<Card.Header style={{backgroundColor:Color.lightishgrey, height:'8vh'}} >
							<Accordion.Toggle style={{width:'100%'}} as={Button} variant="link" eventKey="0" onClick={() => this._keepTrack('0')} >
								<p style={{fontSize:'3vh', color:'#0000ff'}} >Formations</p>
							</Accordion.Toggle>
						</Card.Header>
						<Accordion.Collapse eventKey="0" style={{backgroundColor:Color.lightergrey}} >
							<Col xs={{span:10, offset:1}} style={{backgroundColor:Color.white, backgroundImage: `url(${coures})`, backgroundPosition:'center', backgroundRepeat:'no-repeat', backgroundSize: "cover", marginTop:'1vh'}} >
								<div style={{ display:'flex', flexDirection:'Column', justifyContent:'flex-start', marginBottom:'4vh'}} >
									<TextSpliter textStyle={{textAlign:'justify', fontSize:'2vh', margin:5, marginLeft:15, marginRight:15, marginTop:0}} text={documentation} />
									<a href={Catalogue} target="_blank" style={{fontSize:'2vh', marginTop:'1vh', marginLeft:20, marginBottom:'4vh'}} rel='noopener noreferrer' >Téléchargez le catalogue de formation</a>
								</div>
							</Col>
						</Accordion.Collapse>
					</Card>
				</Accordion>
			</Row>
		);
	}

}