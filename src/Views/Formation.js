import React from 'react';

import { BrowserRouter as Link } from "react-router-dom";

import Slide from 'react-reveal/Slide';

import {Row, Col, Accordion, Button, Card} from 'react-bootstrap'

import Color from '../Styles/colorSchemes.js'

import image from '../Images/formation.png'

import TextSpliter from '../Components/TextSpliter.js'

// import { Parallax, Background } from 'react-parallax'

import { Parallax } from 'react-scroll-parallax';

const documentation = "Nous proposons des formations courtes permettant la prise en main de ces outils en\
			l’appliquant à des cas concrets rencontrés dans le monde industriel et médical. L’objectif\
			global est de travailler sur l’analyse des risques radiologiques.\
			Quelques exemples de thématiques abordées :\n\
			o Gammagraphie\n\
			o Ionisations alimentaires\n\
			o Gestion d’une source de Radium de forte activité\n\
			o Seringue au Technétium 99m et protection opérateur\n\
			o Contamination au Fluor 18\n\
			o Radioprotection dans un laboratoire de synthèse du FDG (Fluor 18)\n\
			o Protection biologique d'une source de Californium 252 (neutrons +gamma)\n\
			o Source Strontium-Yttrium 90 de forte activité\n\
			o Analyse radioprotection d'un colis de déchets produit de fission ( CSDV)\n\
			o Calcul de protection autour de générateurs X médicaux et industriels\n";

const peda = "Fort de plus de 25 ans d’enseignement à l’Ecole des Applications Militaires de l’Energie\
		Atomique (EAMEA, Cherbourg) et à l’Institut Nationale des Sciences et Techniques\
		Nucléaires (INSTN, CEA) nous proposons d’autres formations centrées sur la physique\
		nucléaire, la spectrométrie gamma, la dosimétrie et les statistiques de mesures.";

export default class About extends React.Component {

	constructor(props){
		super(props);
	}

	render(){
		return (
			<div style={{}}>
				<div style={{height:'100%', backgroundColor:Color.lightergrey}} >
					<Row style={{paddingTop:20}} >
						<Col xs={{span:10, offset:1}} style={{backgroundColor:Color.lightishgrey}} >
							<Row>
								<TextSpliter textStyle={{textAlign:'justify', fontSize:22, margin:10, marginLeft:15, marginRight:15}} text={documentation} />
							</Row>
							<Row style={{justifyContent:'center'}} >
								<Parallax className="custom-class" y={[-20, 10]} tagOuter="figure"
								>
									<img src={image}/>
								</Parallax>
							</Row>
							<Row style={{marginTop:15}} >
								<TextSpliter style={{textAlign:'justify', fontSize:22, margin:10, marginLeft:15, marginRight:15}} text={peda} />
							</Row>
						</Col>
					</Row>
				</div>
			</div>
		);
	}

}