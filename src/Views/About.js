import React from 'react';

import { BrowserRouter as Link } from "react-router-dom";

import Slide from 'react-reveal/Slide';

import {Row, Col, Accordion, Button, Card} from 'react-bootstrap'

import Color from '../Styles/colorSchemes.js'

import image from '../Folders/DevisAryaV2.pdf'

import TextSpliter from '../Components/TextSpliter.js'

const documentation = "Pour mieux vous permettre de juger des possibilités offertes\
			notamment avec Dosimex-GX, vous pouvez télécharger\
			l’ensemble de la documentation associée à ce code, soit un\
			ensemble de 13 documents avec notamment :\n\
			o les manuels d’utilisations présentant de façon détaillée\
			les possibilités offertes par ce code et ses limites.\n\
			o les dossiers de validations permettant d’apprécier la\
			fiabilité des résultats\n";

const peda = "Toujours dans un souci pédagogique, un ensemble complet de\
		documents de cours on été rajouté au pack Dosimex 3.0 :\n 10\
		documents allant de la physique nucléaire, passant par les\
		principes d’interaction rayonnement-matières et de détection,\
		jusqu’ aux aspects statistiques et incertitudes.\nCes documents\
		représentent un total de 1000 pages";

export default class About extends React.Component {

	constructor(props){
		super(props);
	}

	render(){
		return (
			<div style={{height:'100%'}}>
				<div style={{height:'100%', backgroundColor:Color.lightergrey}} >
					<Row style={{paddingTop:20}} >
						<Col xs={{span:10, offset:1}} style={{backgroundColor:Color.lightishgrey}} >
							<Row>
								<TextSpliter style={{textAlign:'justify', fontSize:22, margin:10, marginLeft:15, marginRight:15}} text={documentation} />
							</Row>
							<Row>
								<a href={image} style={{fontSize:22, color:Color.blue, margin:10, marginLeft:15, marginRight:15}}>pdf</a>
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