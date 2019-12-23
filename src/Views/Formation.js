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

import Catalogue from "../Folders/Formations_Dosimex 2020.pdf";

const documentation =
	"Nous proposons des formations courtes sur site (intra) de 2 à 3 jours, permettant la prise en main de ces outils en l’appliquant à des cas concrets rencontrés dans le monde industriel et médical. Cette prise en main se fait naturellement en intégrant l’utilisation des codes dans le cadre plus général de l’analyse et l’estimation des risques radiologiques appliquées à des cas concrets.\n\
	Quelques exemples de thématiques abordées :\n\
	• Calcul de protection autour de générateurs X médicaux et industriels\n\
	• Application NF C 15-160\n\
	• Gestion d’une source de Radium de forte activité\n\
	• Seringue au Technétium 99m et protection opérateur\n\
	• Contamination au Fluor 18\n\
	• Radioprotection dans un laboratoire de synthèse du FDG (Fluor 18)\n\
	• Gammagraphie\n\
	• Protection biologique d'une source de Californium 252 (neutrons +gamma)\n\
	• Ionisations alimentaires\n\
	• Source Strontium-Yttrium 90 de forte activité\n\
	• Analyse radioprotection d'un colis de déchets produit de fission ( CSDV)\n\
	<p style=marginTop:1vh >Prix forfaitaire pour des formations sur sites : 1500€ HT par jours pour des formations de 4 à 8 personnes. + 150€ HT clés stagiaire</p>\n\
	<p style=marginTop:1vh >Nous avons  aussi conçus, en partenariat avec Safetechnologies  d’autres formations centrées sur :</p>\n\
	• la physique nucléaire et la radioactivité\n\
	• L’interaction rayonnement-matière\n\
	• Les principes de la mesure nucléaire\n\
	• la spectrométrie gamma\n\
	• la dosimétrie\n\
	<p style=marginBottom:1vh >• les statistiques de mesures : incertitude, seuil de décision et limite de détection, l’ISO 11929.</p> \n\
	<a href='mailto:contact@dosimex.fr?subject=formation&body=Expliquez votre besoin en formation ici' style=marginTop:2vh > contact@dosimex.fr</a>\n\
	Tél : 06 89 70 90 35"

// const documentation = "Nous proposons des formations courtes permettant la prise en main de ces outils en\
// 			l’appliquant à des cas concrets rencontrés dans le monde industriel et médical. L’objectif\
// 			global est de travailler sur l’analyse des risques radiologiques.\
// 			Quelques exemples de thématiques abordées :\n\
// 			o Gammagraphie\n\
// 			o Ionisations alimentaires\n\
// 			o Gestion d’une source de Radium de forte activité\n\
// 			o Seringue au Technétium 99m et protection opérateur\n\
// 			o Contamination au Fluor 18\n\
// 			o Radioprotection dans un laboratoire de synthèse du FDG (Fluor 18)\n\
// 			o Protection biologique d'une source de Californium 252 (neutrons +gamma)\n\
// 			o Source Strontium-Yttrium 90 de forte activité\n\
// 			o Analyse radioprotection d'un colis de déchets produit de fission ( CSDV)\n\
// 			o Calcul de protection autour de générateurs X médicaux et industriels\n";

export default class About extends React.Component {

	constructor(props){
		super(props);
	}

	render(){
		return (
			<div style={{}}>
				<div style={{height:'100%', backgroundColor:Color.lightergrey}} >
					<Row style={{paddingTop:20}} >
						<Col xs={{span:10, offset:1}} style={{backgroundColor:Color.lightishgrey, height:'92vh'}} >
							<Row style={{justifyContent:'center', marginTop:'1vh'}} >
								<img src={image} style={{height:'27vh'}}/>
							</Row>
							<Row style={{justifyContent:'center', height:'56vh'}} >
								<TextSpliter textStyle={{textAlign:'justify', fontSize:14, margin:5, marginLeft:15, marginRight:15}} text={documentation} />
								{/*<a href={Catalogue} target="_blank" ><p style={{fontSize:22}} >voir catalogue complet des formations </p></a>*/}
							</Row>
							<img src={radium} style={{height:'17vh', position:'absolute', top:'37%', right:'25px'}} />
							<img src={gam} style={{height:'17vh', position:'absolute', top:'77%', right:'205px'}} />
							<img src={tec} style={{height:'25vh', position:'absolute', top:'38%', right:'405px'}} />
						</Col>
					</Row>
				</div>
			</div>
		);
	}

}