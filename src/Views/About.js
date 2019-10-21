import React from 'react';

import { Row, Col, Accordion, Button, Card} from 'react-bootstrap'

import Color from '../Styles/colorSchemes.js'

import TextSpliter from '../Components/TextSpliter.js'

import IManuel1 from '../Images/manuel1.png'
import IManuel2 from '../Images/manuel2.png'
import IManuel3 from '../Images/manuel3.png'
import IManuel4 from '../Images/manuel4.png'

import PManuel1 from '../Folders/Manuel_1_Radionucléide_3.0.pdf'
import PManuel2 from '../Folders/Manuel_2_Géné_X_3.0.pdf'
import PManuel3 from '../Folders/Manuel_3_Application_15_160.pdf'
import PManuel4 from '../Folders/Annexe_S_ radiologie.pdf'

import IValidation1 from '../Images/Validation1.png'
import IValidation2 from '../Images/Validation2.png'
import IValidation3 from '../Images/Validation3.png'
import IValidation4 from '../Images/Validation4.png'
import IValidation5 from '../Images/Validation5.png'

import PValidation1 from '../Folders/Validation_1_Radionucléide_3.0.pdf'
import PValidation2 from '../Folders/Validation_2_Géné X_3.0.pdf'
import PValidation3 from '../Folders/CEA-R-6452.pdf'
import PValidation4 from '../Folders/NT_101682_42_0001_A-DOSIMEX.pdf'
import PValidation5 from '../Folders/Article_facteur_transmission_L_Bourgois.pdf'

import IRapport1 from '../Images/Rapport1.png'
import IRapport2 from '../Images/Rapport2.png'
import IRapport3 from '../Images/Rapport3.png'
import IRapport4 from '../Images/Rapport4.png'

import PRapport1 from '../Folders/Rapport_ULYSSE_reactor_dismantling.pdf'
import PRapport2 from '../Folders/Rapport_mémoire_AREVA.pdf'
import PRapport3 from '../Folders/Rapport_mémoire_SPR_Cadarache.pdf'
import PRapport4 from '../Folders/Rapport_CJ_AREVA_2016.pdf'

const transform = {
	Manuels:'0',
	Validation:'1',
	Rapports:'2'
};

export default class Home extends React.Component {

	constructor(props){
		super(props);

		this.state = {
			currOpen:transform[this.props.pack]?transform[this.props.pack]:null
		};

		this._keepTrack = this._keepTrack.bind(this);
		this.isOpen = this.isOpen.bind(this);
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
		console.log(this.props.pack)
		return (
			<Row style={{ height:'95vh', alignItems:'flex-end'}} >
				{this.isOpen() ?
					null
					:
					<TextSpliter text={documentation} textStyle={{textAlign: 'justify', fontSize:25, margin:50}}/>
				}
				<Accordion defaultActiveKey={transform[this.props.pack]} >
					<Card style={{width:'101vw'}} >
						<Card.Header style={{backgroundColor:Color.lightishgrey, height:'8vh'}} >
							<Accordion.Toggle style={{width:'100%'}} as={Button} variant="link" eventKey="0" onClick={() => this._keepTrack('0')} >
								<p style={{fontSize:30}} >{pack1.title}</p>
							</Accordion.Toggle>
						</Card.Header>
						<Accordion.Collapse eventKey="0">
							<Card.Body style={{backgroundColor:Color.lightergrey, height:'71vh', justifyContent:'center', alignItems:'center'}} >
								<div style={{}} >
									<div style={{marginLeft:'2.5vw', marginRight:'2vw', width:'20vw', height:'40vh', display:'inline-block'}} >
										<a href={PManuel1} target="_blank" style={{}} ><img src={IManuel1} style={{height:'35vh'}} /><p style={{display:'inline', position:'relative', top:'19vh', left:'-15vh'}} >testtest</p></a>
									</div>
									<div style={{marginLeft:'2.5vw', marginRight:'2vw', width:'20vw', height:'40vh', display:'inline-block'}} >
										<a href={PManuel2} target="_blank" style={{}} ><img src={IManuel2} style={{height:'35vh'}} /><p style={{display:'inline', position:'relative', top:'19vh', left:'-15vh'}} >testtest</p></a>
									</div>
									<div style={{marginLeft:'2.5vw', marginRight:'2vw', width:'20vw', height:'40vh', display:'inline-block'}} >
										<a href={PManuel3} target="_blank" style={{}} ><img src={IManuel3} style={{height:'35vh'}} /><p style={{display:'inline', position:'relative', top:'19vh', left:'-15vh'}} >testtest</p></a>
									</div>
									<div style={{marginLeft:'2.5vw', marginRight:'2vw', width:'20vw', height:'40vh', display:'inline-block'}} >
										<a href={PManuel4} target="_blank" style={{}} ><img src={IManuel4} style={{height:'35vh'}} /><p style={{display:'inline', position:'relative', top:'19vh', left:'-15vh'}} >testtest</p></a>
									</div>
								</div>
							</Card.Body>
						</Accordion.Collapse>
					</Card>
					<Card color={Color.red} >
						<Card.Header style={{backgroundColor:Color.lightishgrey, height:'8vh'}} >
							<Accordion.Toggle style={{width:'100%'}} as={Button} variant="link" eventKey="1" onClick={() => this._keepTrack('1')}>
								<p style={{fontSize:30}} >{pack2.title}</p>
							</Accordion.Toggle>
						</Card.Header>
						<Accordion.Collapse eventKey="1">
							<Card.Body style={{backgroundColor:Color.lightergrey, height:'71vh', justifyContent:'center', alignItems:'center'}} >
								<div style={{}} >
									<div style={{marginLeft:'2.5vw', marginRight:'2vw', width:'15vw', height:'30vh', display:'inline-block'}} >
										<a href={PValidation1} target="_blank" style={{}} ><img src={IValidation1} style={{height:'30vh'}} /><p style={{display:'inline', position:'relative', top:'1vh', left:'7vh'}} >foobar</p></a>
									</div>
									<div style={{marginLeft:'2.5vw', marginRight:'2vw', width:'15vw', height:'30vh', display:'inline-block'}} >
										<a href={PValidation2} target="_blank" style={{}} ><img src={IValidation2} style={{height:'30vh'}} /><p style={{display:'inline', position:'relative', top:'1vh', left:'7vh'}} >testtest</p></a>
									</div>
									<div style={{marginLeft:'2.5vw', marginRight:'2vw', width:'15vw', height:'30vh', display:'inline-block'}} >
										<a href={PValidation3} target="_blank" style={{}} ><img src={IValidation3} style={{height:'30vh'}} /><p style={{display:'inline', position:'relative', top:'1vh', left:'7vh'}} >testtest</p></a>
									</div>
									<div style={{marginLeft:'2.5vw', marginRight:'2vw', width:'15vw', height:'30vh', display:'inline-block'}} >
										<a href={PValidation4} target="_blank" style={{}} ><img src={IValidation4} style={{height:'30vh'}} /><p style={{display:'inline', position:'relative', top:'1vh', left:'7vh'}} >testtest</p></a>
									</div>
									<div style={{marginLeft:'2.5vw', marginRight:'2vw', width:'15vw', height:'30vh', display:'inline-block'}} >
										<a href={PValidation5} target="_blank" style={{}} ><img src={IValidation5} style={{height:'30vh'}} /><p style={{display:'inline', position:'relative', top:'1vh', left:'7vh'}} >loilol</p></a>
									</div>
								</div>
							</Card.Body>
						</Accordion.Collapse>
					</Card>
					<Card>
						<Card.Header style={{backgroundColor:Color.lightishgrey, height:'8vh'}} >
							<Accordion.Toggle style={{width:'100%'}} as={Button} variant="link" eventKey="2" onClick={() => this._keepTrack('2')}>
								<p style={{fontSize:30}} >{pack3.title}</p>
							</Accordion.Toggle>
						</Card.Header>
						<Accordion.Collapse eventKey="2">
							<Card.Body style={{backgroundColor:Color.lightergrey, height:'71vh'}} >
								<div style={{}} >
									<div style={{marginLeft:'2.5vw', marginRight:'2vw', width:'20vw', height:'40vh', display:'inline-block'}} >
										<a href={PRapport1} target="_blank" style={{}} ><img src={IRapport1} style={{height:'35vh'}} /><p style={{display:'inline', position:'relative', top:'19vh', left:'-15vh'}} >testtest</p></a>
									</div>
									<div style={{marginLeft:'2.5vw', marginRight:'2vw', width:'20vw', height:'40vh', display:'inline-block'}} >
										<a href={PRapport2} target="_blank" style={{}} ><img src={IRapport2} style={{height:'35vh'}} /><p style={{display:'inline', position:'relative', top:'19vh', left:'-15vh'}} >testtest</p></a>
									</div>
									<div style={{marginLeft:'2.5vw', marginRight:'2vw', width:'20vw', height:'40vh', display:'inline-block'}} >
										<a href={PRapport3} target="_blank" style={{}} ><img src={IRapport3} style={{height:'35vh'}} /><p style={{display:'inline', position:'relative', top:'19vh', left:'-15vh'}} >testtest</p></a>
									</div>
									<div style={{marginLeft:'2.5vw', marginRight:'2vw', width:'20vw', height:'40vh', display:'inline-block'}} >
										<a href={PRapport4} target="_blank" style={{}} ><img src={IRapport4} style={{height:'35vh'}} /><p style={{display:'inline', position:'relative', top:'19vh', left:'-15vh'}} >testtest</p></a>
									</div>
								</div>
							</Card.Body>
						</Accordion.Collapse>
					</Card>
				</Accordion>
			</Row>
		);
	}

}

const pack1 = {
	text:"	SOMMAIRE DOSIMEX OPERATIONNEL\n\
		✓ DOSIMEX-GX 3.0 : code de calcul déterministe de débit de dose émetteurs gamma\
		(sources volumiques, surfaciques...) et générateur X, avec option feuille de calcul\
		norme NF C15-160 /2018. Effet de ciel, rayonnement de freinage....\n\
		✓ DOSIMEX-B 3 : code de calcul déterministe de débit de dose émetteur bêta et\
		électrons monoénergétiques . Prise en compte sources volumiques (bécher,\
		seringue) ou surfaciques (contamination peau)\n\
		✓ DOSIMEX-N 3 : code de calcul de débit de dose Monte-Carlo émetteur neutron\
		(type Am/Be) avec protection biologique (eau, polyéthylène, Bore, Cadmium etc..).\
		Module pédagogique avec visualisation trajectoire neutron\n\
		✓ DOSIMEX-I 3.0 : code de calcul de cinétique d’expositions dans un local suite à une\
		contamination volumique (fuite continue, bouffée..). Calculs de transfert\
		atmosphérique. Calcul mélanges RAI/RAV/RCA\n\
		✓ DOSIMEX-MN 1.0 utilitaire de gestion de données permettant de connaitre les doses\
		absorbées par unité d’activité administrée pour les radiopharmaceutiques recensés dans les\
		CIPR 53, 80, 106 et 128",
	title:"Manuels d’utilisations",
}

const pack2 = {
	text:"SOMMAIRE DOSIMEX PEDAGOGIQUE\n\
		✓ IRM photon 3.0: utilitaire mettant en œuvre les principes d’interactions\
		photon –matières dans les matériaux avec diverses applications : calcul de\
		kerma, de dose, de libre parcours moyen, effet Compton, visualisation de\
		trajectoires (Monte-Carlo).\n\
		✓ IRM particules chargées 3..0 : utilitaire mettant en œuvre les principes\
		d’interactions particules chargées–matières dans les matériaux avec diverses\
		applications : calcul de parcours, de coefficient fluence-kerma, application aux\
		spectres bêta.\n\
		✓ Serious Game 3.0 : utilitaire à vocation pédagogique permettant de mettre en\
		évidence les paramètres essentiels de la radioprotection : distance, temps,\
		écran, activité, nature radionucléide\n\
		✓ Coefficients ICRU 57 3.0 : utilitaire permettant de connaitre les coefficients\
		fluence-équivalents de dose et kerma air normalisés pour les électrons, les\
		photons et les neutrons.",
	title:"Dossiers de validations et références de validations MCNP",
}

const pack3 = {
	text:"SOMMAIRE DOSIMEX MESURE\n\
		✓ Code TAGE (Total Absorption Gamma Efficiency) : code déterministe calculant le\
		rendement d’absorption totale en spectrométrie gamma, avec correction de couches\
		mortes (caractérisation), correction de coïncidence et rendement de pics sommes.\n\
		✓ Code Co 3 : code de calcul de Coefficient de Conversion Contaminamètres permettant\
		de calculer les rendements(Bq/cm2/ cps) de divers ictomètres et d’obtenir les\
		activités surfaciques versus la nature de la sonde et le spectre isotopique mesuré.\n\
		✓ Composition de variables aléatoires : utilitaire permettant de combiner par méthode\
		Monte-Carlo jusqu’à 5 variables de types différents . Cet utilitaire est accompagné des\
		documents de cours complets sur le sujet des calculs d’incertitudes\n\
		✓ Calcul de seuil de décision. Utilitaire permettant de déterminer le seuil de décision et\
		la limite de détection en mesure nucléaire. Cet utilitaire est accompagné des\
		documents de cours complets sur ce sujet et d’articles divers.",
	title:"Rapports de stages de fin d’études vs Dosimex",
}

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